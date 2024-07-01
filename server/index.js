const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs/promises");

const DB_FILE_PATH = path.resolve(__dirname, "db.json");
const RESPONSE_DELAY = 1000;
const SERVER_PORT = 8000;

const server = jsonServer.create();
const router = jsonServer.router(DB_FILE_PATH);

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, RESPONSE_DELAY);
});

server.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const db = JSON.parse(await fs.readFile(DB_FILE_PATH));

    const userFromDb = db.users?.find(
      (user) => user.username === username && user.password === password,
    );

    if (!userFromDb) {
      res.status(403).json({ message: "User not found" });

      return;
    }

    const { password: _password, ...userFromDbWithoutPassword } = userFromDb;

    res.json(userFromDbWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Internal server error" });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403).json({ message: "AUTH ERROR" });

    return;
  }

  next();
});

server.use(router);

server.listen(SERVER_PORT, () => {
  console.info(`Server is running on port ${SERVER_PORT}`);
});
