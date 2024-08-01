export const createUIComponentTemplate = (
  slice: string,
  sliceLower: string,
) => `import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./${slice}.module.scss";

const cx = classNamesBind(s);

interface ${slice}Props {
  className?: string;
}

export const ${slice} = memo(function ${slice}({
  className,
}: ${slice}Props) {
  const { t } = useTranslation();

  return <div className={cx("${sliceLower}", [className])}></div>;
});`;
