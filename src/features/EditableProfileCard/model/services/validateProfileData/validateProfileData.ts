import { Profile } from "@/entities/Profile";
import { ValidateProfileError } from "../../types/profile";

export const validateProfileData = (
  profile: Profile,
): ValidateProfileError[] => {
  const validateErrors: ValidateProfileError[] = [];

  if (!profile.username) {
    validateErrors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  if (!profile.firstName) {
    validateErrors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
  }

  if (!profile.lastName) {
    validateErrors.push(ValidateProfileError.INCORRECT_LASTNAME);
  }

  if (!profile.age) {
    validateErrors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!profile.country) {
    validateErrors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!profile.city) {
    validateErrors.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (!profile.avatar) {
    validateErrors.push(ValidateProfileError.INCORRECT_AVATAR);
  }

  if (!profile.currency) {
    validateErrors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  return validateErrors;
};
