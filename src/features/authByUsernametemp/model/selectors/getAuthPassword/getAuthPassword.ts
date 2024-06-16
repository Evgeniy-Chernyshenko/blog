import { StateSchema } from "@/app/providers/storeProvidertemp";

export const getAuthPassword = (state: StateSchema) =>
  state.authByUsername?.password ?? "";
