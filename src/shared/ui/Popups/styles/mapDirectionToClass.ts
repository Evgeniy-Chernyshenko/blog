import { DropDownDirection } from "../types";
import popupStyles from "./index.module.scss";

export const mapDirectionToClass: Record<DropDownDirection, string> = {
  leftBottom: popupStyles.leftBottom,
  leftTop: popupStyles.leftTop,
  rightBottom: popupStyles.rightBottom,
  rightTop: popupStyles.rightTop,
};
