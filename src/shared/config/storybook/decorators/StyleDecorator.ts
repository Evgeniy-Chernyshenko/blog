// eslint-disable-next-line blog-project/layers-import
import "@/app/styles/index.scss";
import { Story } from "@storybook/react";

export const StyleDecorator = (story: () => Story) => story();
