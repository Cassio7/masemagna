import type { Base } from "@/lib/interfaces/base.interface";
import type { Author } from "./author.interface";
import type { Category } from "./category.interface";
import type { Rating } from "./rating.interface";

export interface Post extends Base {
  name: string;
  description: string;
  author: Author;
  category: Category;
  rating: Rating[];
}
