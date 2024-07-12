import { FC, lazy, Suspense } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import { AddCommentFormProps } from "./AddCommentForm";

const Component = lazy<FC<AddCommentFormProps>>(
  () => import("./AddCommentForm"),
);

export const AddCommentFormLazy: FC<AddCommentFormProps> = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
