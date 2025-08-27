import type { Base } from "./base.interface";
import type { Post } from "./post.interface";

export interface Category extends Base {
  name: string;
  description: string;
  post: Post[];
}
