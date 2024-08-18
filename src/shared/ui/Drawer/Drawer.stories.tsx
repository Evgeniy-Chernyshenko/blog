import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import { Drawer } from "./Drawer";
import { TextBlock } from "../TextBlock/TextBlock";
import { Button } from "../Button/Button";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "shared/Drawer",
  component: Drawer,
  args: {
    children: (
      <TextBlock
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ab saepe
        distinctio assumenda sequi quidem id exercitationem nesciunt dolorum
        deleniti inventore consequatur excepturi voluptate est nemo minima
        repellendus cumque iure. Illo accusantium beatae quam, recusandae vel
        obcaecati dicta, iure delectus veniam molestias omnis repellat sed sunt,
        ratione exercitationem facilis perferendis expedita libero soluta ea
        repudiandae voluptas nostrum. Maiores, error hic."
      />
    ),
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Light = Template.bind({});
Light.args = { theme: Theme.LIGHT };

export const Dark = Template.bind({});
Dark.args = { theme: Theme.DARK };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
