import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/decorators/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "@/shared/config/storybook/decorators/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { RouterDecorator } from "@/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "@/shared/constants/theme";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  decorators: [
    RouterDecorator({ id: "1" }),
    StoreDecorator({
      profile: {
        form: {
          firstName: "Туалетный Джо",
          lastName: "Smiths",
          age: 42,
          city: "Moscow",
          username: "john",
          avatar:
            "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718496000&semt=ais_user",
          country: Country.Belarus,
          currency: Currency.EUR,
        },
        isLoading: false,
        readonly: true,
        validationErrors: [],
      },
    }),
  ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const ProfilePageLight = Template.bind({});

export const ProfilePageDark = Template.bind({});
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK)];
