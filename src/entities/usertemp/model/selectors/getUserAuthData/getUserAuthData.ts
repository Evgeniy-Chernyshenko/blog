import { StateSchema } from "@/app/providers/storeProvidertemp";

export const getUserAuthData = (state: StateSchema) => state.user.authData;
