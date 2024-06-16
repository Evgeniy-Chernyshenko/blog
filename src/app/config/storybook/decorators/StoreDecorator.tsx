import { Story } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "@/app/providers/storeProvidertemp";
import { authByUsernameReducer } from "@/features/authByUsernametemp";
import { profileReducer } from "@/entities/profiletemp";

const defaultAsyncReducers: Partial<ReducersMapObject<Required<StateSchema>>> =
  { authByUsername: authByUsernameReducer, profile: profileReducer };

export const StoreDecorator =
  (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<Required<StateSchema>>>,
  ) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{
          ...defaultAsyncReducers,
          ...asyncReducers,
        }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
