import { User } from "@/entities/User";

export type ArticleTag = "all" | "it" | "economics" | "science";

interface ArticleBlockBase {
  id: string;
}

export interface ArticleCodeBlockType extends ArticleBlockBase {
  code: string;
  type: "code";
}

export interface ArticleImageBlockType extends ArticleBlockBase {
  src: string;
  title?: string;
  type: "image";
}

export interface ArticleTextBlockType extends ArticleBlockBase {
  paragraphs: string[];
  title?: string;
  type: "text";
}

export type ArticleBlock =
  | ArticleCodeBlockType
  | ArticleImageBlockType
  | ArticleTextBlockType;

export interface ArticleType {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTag[];
  blocks: ArticleBlock[];
  userId: string;
  user: User;
}

export type ArticleView = "grid" | "list";

export enum ArticleSortField {
  TITLE = "title",
  VIEWS = "views",
  CREATED_AT = "createdAt",
}
