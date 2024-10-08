declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare const __IS_DEV__: boolean;
declare const __API_BASE_URL__: string;
declare const __PROJECT__: "storybook" | "frontend" | "jest";

declare type DeepRequired<T> = T extends object
  ? {
      [P in keyof T]?: DeepRequired<T[P]>;
    }
  : T;
