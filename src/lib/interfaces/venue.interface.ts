import type { Base } from "./base.interface";
import type { Rating } from "./rating.interface";

export interface Venue extends Base {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  rating: Rating[];
}
