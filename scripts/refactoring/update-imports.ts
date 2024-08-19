import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.{ts,tsx}");

const files = project.getSourceFiles();

const isAbsolute = (path: string) => {
  const layers = ["shared", "entities", "features", "widgets", "pages", "app"];

  return layers.some((layer) => path.startsWith(layer));
};

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
