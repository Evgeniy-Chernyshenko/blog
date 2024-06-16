import { StateSchema } from "@/app/providers/StoreProvider";

export const getAuthError = (state: StateSchema) =>
  state.authByUsername?.error ?? "";
