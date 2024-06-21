import { memo, useCallback } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./Code.module.scss";
import { Button } from "../Button/Button";
import CopyIcon from "../../assets/icons/copy-icon.svg";

const cx = classNamesBind(s);

interface CodeProps {
  text: string;
  className?: string;
}

export const Code = memo(function Code({ text, className }: CodeProps) {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cx("Code", [className])}>
      <Button theme="clear" className={cx("copy")} onClick={handleCopy}>
        <CopyIcon />
      </Button>

      {text}
    </pre>
  );
});
