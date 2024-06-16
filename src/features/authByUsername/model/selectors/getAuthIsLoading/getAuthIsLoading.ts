import { StateSchema } from "@/app/providers/StoreProvider";

export const getAuthIsLoading = (state: StateSchema) =>
  state.authByUsername?.isLoading ?? false;
