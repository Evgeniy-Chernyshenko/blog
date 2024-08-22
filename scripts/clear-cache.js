const fs = require("fs").promises;
const path = require("path");

async function clearCache() {
  const folderPath = path.join(__dirname, "../node_modules/.cache");

  try {
    await fs.rm(folderPath, { recursive: true, force: true });
    console.info("Папка с кешем успешно удалена!");
  } catch (err) {
    console.error(`Ошибка при удалении папки с кешем: ${err.message}`);
  }
}

clearCache();
