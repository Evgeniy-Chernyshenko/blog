import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Code } from "./Code";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "shared/Code",
  component: Code,
  args: {
    text: `import { memo, ReactNode } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Code.module.scss";

const cx = classNamesBind(s);

interface CodeProps {
  children: ReactNode;
}

export const Code = memo(function Code({ children }: CodeProps) {
  return <pre className={cx("Code")}>{children}</pre>;
});
`,
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const PrimaryLight = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
