import { Story } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { authByUsernameReducer } from "@/features/AuthByUsername";
import { articleReducer } from "@/entities/Article/model/slice/articleSlice";
import { addCommentFormReducer } from "@/features/AddCommentForm/model/slice/addCommentFormSlice";
import { articlePageReducer } from "@/pages/ArticlePage";
import { profileReducer } from "@/features/EditableProfileCard/model/slice/profileSlice";
import { pageWrapperReducer } from "@/widgets/PageWrapper";

const defaultAsyncReducers: Partial<ReducersMapObject<Required<StateSchema>>> =
  {
    authByUsername: authByUsernameReducer,
    profile: profileReducer,
    article: articleReducer,
    addCommentForm: addCommentFormReducer,
    articlePage: articlePageReducer,
    pageWrapper: pageWrapperReducer,
  };

export const StoreDecorator =
  (
    state?: DeepPartial<DeepRequired<StateSchema>>,
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
