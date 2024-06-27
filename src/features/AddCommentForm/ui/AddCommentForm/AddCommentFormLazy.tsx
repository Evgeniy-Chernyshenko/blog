import { FC, lazy, Suspense } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import { AddCommentFormProps } from "./AddCommentForm";

const Component = lazy<FC<AddCommentFormProps>>(
  // @ts-ignore
  () =>
    new Promise((r) => setTimeout(() => r(import("./AddCommentForm")), 500)),
);

export const AddCommentFormLazy: FC<AddCommentFormProps> = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
