import { StateSchema } from "@/app/providers/storeProvidertemp";

export const getAuthError = (state: StateSchema) =>
  state.authByUsername?.error ?? "";
