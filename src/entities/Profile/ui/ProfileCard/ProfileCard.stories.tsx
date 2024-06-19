import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ProfileCard } from "./ProfileCard";
import avatar from "@/shared/assets/tests/avatar.jpg";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    firstName: "Туалетный Джо",
    lastName: "Smiths",
    age: 42,
    city: "Moscow",
    username: "john",
    avatar,
    country: Country.Belarus,
    currency: Currency.EUR,
  },
};

export const Error = Template.bind({});
Error.args = {
  error: "Some error",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
