import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { ListBox, ListBoxOption } from "./ListBox";
import { Theme } from "@/shared/constants/theme";

const options: ListBoxOption<number>[] = [
  { text: "Один", value: 1 },
  { text: "Два", value: 2, disabled: true },
  { text: "Три", value: 3 },
];

export default {
  title: "shared/ListBox",
  component: ListBox,
  args: {
    options,
    defaultText: "Выберите",
    label: "Метка",
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => {
  const [value, setValue] = useState<typeof args.value>(undefined);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et temporibus
        debitis, sint numquam dolorem, deleniti illo velit exercitationem
        adipisci provident itaque quia aliquid non voluptate aut ratione, beatae
        illum aperiam? Architecto vel accusamus incidunt?
      </p>

      <ListBox {...args} value={value} onChange={setValue} />
    </>
  );
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DropdownDirectionTop = Template.bind({});
DropdownDirectionTop.args = { direction: "leftTop" };
