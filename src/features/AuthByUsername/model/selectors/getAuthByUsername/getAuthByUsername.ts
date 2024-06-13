import { StateSchema } from "@/app/providers/StoreProvider";

export const getAuthByUsername = (state: StateSchema) => state.authByUsername;
