import { Room } from "./Room";

export interface CompleteProperty {
  _id: string;
  name: string;
  address: string;
  description: string;
  pictures?: string[];
  landlordId: string;
  rooms?: Room[];
}
