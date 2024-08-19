import { FormEvent, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./AddCommentForm.module.scss";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { addCommentForm: addCommentFormReducer };

export interface AddCommentFormProps {
  onSubmit: (text: string) => void;
  className?: string;
}

const AddCommentForm = memo(function AddCommentForm({
  onSubmit,
  className,
}: AddCommentFormProps) {
  const { t } = useTranslation("article");
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const handleChangeCommentText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(text);
    handleChangeCommentText("");
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <form
        className={cx("AddCommentForm", [className])}
        onSubmit={handleSubmit}
      >
        <Input
          placeholder={t("Введите комментарий")}
          value={text}
          onChange={handleChangeCommentText}
          className={cx("input")}
        />

        <Button>{t("Добавить")}</Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
