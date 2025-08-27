import type { Base } from "./base.interface";
import type { Post } from "./post.interface";

export interface Author extends Base {
  name: string;
  surname: string;
  description: string;
  email: string;
  occupation: string;
  city: string;
  post: Post[];
}
