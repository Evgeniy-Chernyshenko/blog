import { User } from "@/entities/User";

type ArticleTag = "it" | "economics" | "science";

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

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTag[];
  blocks: ArticleBlock[];
  user: User;
}

export type ArticleView = "grid" | "list";
