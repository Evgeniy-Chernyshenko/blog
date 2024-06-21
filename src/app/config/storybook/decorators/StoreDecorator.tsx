import { Story } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { authByUsernameReducer } from "@/features/AuthByUsername";
import { profileReducer } from "@/entities/Profile";
import { articleReducer } from "@/entities/Article/model/slice/articleSlice";

const defaultAsyncReducers: Partial<ReducersMapObject<Required<StateSchema>>> =
  {
    authByUsername: authByUsernameReducer,
    profile: profileReducer,
    article: articleReducer,
  };

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
