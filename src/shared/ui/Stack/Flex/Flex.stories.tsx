import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex } from "./Flex";

export default {
  title: "shared/Flex",
  component: Flex,
  args: { gap: 32 },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const RowStartCenter = Template.bind({});
RowStartCenter.args = {
  children: [
    "Test1",
    <div>
      <div>Test2</div>
      <div>Test3</div>
    </div>,
  ],
};

export const ColumnStartCenter = Template.bind({});
ColumnStartCenter.args = {
  direction: "column",
  children: [
    "Test1",
    <div>
      <div>Test2</div>
      <div>Test3</div>
    </div>,
  ],
};
