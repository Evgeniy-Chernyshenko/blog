import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";

export default (attributesToRemove: string[]) => {
  return {
    visitor: {
      JSXAttribute(path: NodePath<t.JSXAttribute>) {
        const { name } = path.node;

        if (t.isJSXIdentifier(name) && attributesToRemove.includes(name.name)) {
          path.remove();
        }
      },
    },
  };
};
