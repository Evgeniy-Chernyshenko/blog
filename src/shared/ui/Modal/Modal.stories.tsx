import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/app/config/storybook/decorators/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  args: {
    children: "Modal text",
    opened: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});

export const ModalDark = Template.bind({});
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
