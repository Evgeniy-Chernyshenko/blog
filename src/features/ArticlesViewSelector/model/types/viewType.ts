import React from "react";
import { ArticleView } from "@/entities/Article";

export interface ViewType {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  type: ArticleView;
}
