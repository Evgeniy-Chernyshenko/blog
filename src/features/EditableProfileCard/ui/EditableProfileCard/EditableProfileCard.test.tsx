import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { EditableProfileCard } from "./EditableProfileCard";
import {
  componentRender,
  ComponentRenderOptions,
} from "@/app/config/tests/componentRender";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import { apiInstance } from "@/shared/api/apiInstance";

const profileData = {
  id: "1",
  firstName: "Туалетный Джон",
  lastName: "Smiths",
  age: 42,
  city: "Moscow",
  username: "john",
  avatar:
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718496000&semt=ais_user",
  currency: Currency.EUR,
  country: Country.Belarus,
};

const componentRenderOptions: ComponentRenderOptions = {
  initialState: {
    profile: {
      data: profileData,
      form: profileData,
      isLoading: false,
      readonly: true,
      validationErrors: [],
    },
    user: { authData: { id: profileData.id, username: "john", roles: [] } },
  },
  asyncReducers: { profile: profileReducer },
};

describe("EditableProfileCard", () => {
  test("Переключается режим рид онли", async () => {
    componentRender(<EditableProfileCard userId="1" />, componentRenderOptions);

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton"),
    );

    expect(
      screen.getByTestId("EditableProfileHeader.CancelButton"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("EditableProfileHeader.SaveButton"),
    ).toBeInTheDocument();
  });

  test("После отмены редактирования значения возвращаются", async () => {
    componentRender(<EditableProfileCard userId="1" />, componentRenderOptions);

    const firstNameInput = screen.getByTestId("ProfileCard.firstName");
    const lastNameInput = screen.getByTestId("ProfileCard.lastName");
    const changedFirstName = "Писуарная Лариса";
    const changedLastName = "Петрович";

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton"),
    );

    await userEvent.clear(firstNameInput);
    await userEvent.type(firstNameInput, changedFirstName);
    await userEvent.clear(lastNameInput);
    await userEvent.type(lastNameInput, changedLastName);

    expect(firstNameInput).toHaveValue(changedFirstName);
    expect(lastNameInput).toHaveValue(changedLastName);

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.CancelButton"),
    );

    expect(firstNameInput).toHaveValue(profileData.firstName);
    expect(lastNameInput).toHaveValue(profileData.lastName);
  });

  test("Повляется ошибка при некорректном вводе", async () => {
    componentRender(<EditableProfileCard userId="1" />, componentRenderOptions);

    const firstNameInput = screen.getByTestId("ProfileCard.firstName");

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton"),
    );

    await userEvent.clear(firstNameInput);
    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.SaveButton"),
    );

    expect(
      screen.getByTestId("EditableProfileHeader.Error.Text"),
    ).toBeInTheDocument();
  });

  test("При успешном вводе отправляется запрос на сервер", async () => {
    const mockedPutRequest = jest.spyOn(apiInstance, "put");

    componentRender(<EditableProfileCard userId="1" />, componentRenderOptions);

    const firstNameInput = screen.getByTestId("ProfileCard.firstName");
    const changedFirstName = "Писуарная Лариса";

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton"),
    );

    await userEvent.clear(firstNameInput);
    await userEvent.type(firstNameInput, changedFirstName);

    expect(firstNameInput).toHaveValue(changedFirstName);

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.SaveButton"),
    );

    expect(mockedPutRequest).toBeCalled();
  });
});
