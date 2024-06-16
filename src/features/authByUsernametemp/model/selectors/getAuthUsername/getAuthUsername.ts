import { StateSchema } from "@/app/providers/storeProvidertemp";

export const getAuthUsername = (state: StateSchema) =>
  state.authByUsername?.username ?? "";
