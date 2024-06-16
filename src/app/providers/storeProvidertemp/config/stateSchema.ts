import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterSchema } from "@/entities/countertemp";
import { UserSchema } from "@/entities/usertemp";
import { AuthByUsernameSchema } from "@/features/authByUsernametemp";
import { ProfileSchema } from "@/entities/profiletemp";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  authByUsername?: AuthByUsernameSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
