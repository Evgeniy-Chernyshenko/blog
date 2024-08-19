import path from "node:path";
import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.{ts,tsx}");

const files = project.getSourceFiles();

const sharedUIDirectory = project.getDirectory(
  path.resolve(__dirname, "../../src/shared/ui"),
);
const componentsDirectories = sharedUIDirectory?.getDirectories();

componentsDirectories?.forEach((componentsDirectory) => {
  const indexFilePath = `${componentsDirectory.getPath()}/index.ts`;
  const hasIndexFile = Boolean(
    componentsDirectory.getSourceFile(indexFilePath),
  );

  if (!hasIndexFile) {
    const sourceCode = `export * from "./${componentsDirectory.getBaseName()}";
`;

    const file = componentsDirectory.createSourceFile(
      indexFilePath,
      sourceCode,
      {
        overwrite: true,
      },
    );

    file.save();
  }
});

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    const valueWithoutAlias = value.replace(/^@/, "");
    const isAbsolutePath = valueWithoutAlias.startsWith("/");
    const segments = valueWithoutAlias.split("/");
    const isSharedLayer = segments[1] === "shared";
    const isUISlice = segments[2] === "ui";

    if (isAbsolutePath && isSharedLayer && isUISlice) {
      importDeclaration.setModuleSpecifier(
        `@${segments.slice(0, 4).join("/")}`,
      );
    }
  });
});

project.save();
