import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { AuthByUsernameSchema } from "@/features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  authByUsername: AuthByUsernameSchema;
}
