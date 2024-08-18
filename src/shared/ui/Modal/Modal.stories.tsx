import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Modal } from "./Modal";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "shared/Modal",
  component: Modal,
  args: {
    children: "Modal text",
    isOpen: true,
    withoutPortal: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});

export const ModalDark = Template.bind({});
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
