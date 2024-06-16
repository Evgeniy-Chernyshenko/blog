import { StateSchema } from "@/app/providers/storeProvidertemp";

export const getAuthIsLoading = (state: StateSchema) =>
  state.authByUsername?.isLoading ?? false;
