import { Profile } from "@/entities/Profile";

export enum ValidateProfileError {
  INCORRECT_FIRSTNAME = "INCORRECT_FIRSTNAME",
  INCORRECT_LASTNAME = "INCORRECT_LASTNAME",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_CURRENCY = "INCORRECT_CURRENCY",
  INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
  INCORRECT_CITY = "INCORRECT_CITY",
  INCORRECT_USERNAME = "INCORRECT_USERNAME",
  INCORRECT_AVATAR = "INCORRECT_AVATAR",
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validationErrors: ValidateProfileError[];
}
