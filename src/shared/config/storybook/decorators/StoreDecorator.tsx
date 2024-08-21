import { Story } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { profileReducer } from "@/features/EditableProfileCard/testing";
import { articleReducer } from "@/entities/Article/testing";
import { addCommentFormReducer } from "@/features/AddCommentForm/testing";
import { authByUsernameReducer } from "@/features/AuthByUsername/testing";
import { articlePageReducer } from "@/pages/ArticlePage/testing";
import { pageWrapperReducer } from "@/widgets/PageWrapper/testing";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
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
