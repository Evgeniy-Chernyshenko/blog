import { Story } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { authByUsernameReducer } from "@/features/AuthByUsername";
import { articleReducer } from "@/entities/Article/model/slice/articleSlice";
import { addCommentFormReducer } from "@/features/AddCommentForm/model/slice/addCommentFormSlice";
import { articlePageReducer } from "@/pages/ArticlePage";
import { profileReducer } from "@/features/EditableProfileCard/model/slice/profileSlice";

const defaultAsyncReducers: Partial<ReducersMapObject<Required<StateSchema>>> =
  {
    authByUsername: authByUsernameReducer,
    profile: profileReducer,
    article: articleReducer,
    addCommentForm: addCommentFormReducer,
    articlePage: articlePageReducer,
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
