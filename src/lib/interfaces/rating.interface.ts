import type { Base } from "./base.interface";
import type { Post } from "./post.interface";
import type { Venue } from "./venue.interface";

export interface Rating extends Base {
  score: number;
  description: string;
  post: Post;
  venue: Venue;
}
