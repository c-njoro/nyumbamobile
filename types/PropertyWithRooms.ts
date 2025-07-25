import { Room } from "./Room";

export interface CompleteProperty {
  name: string;
  address: string;
  description: string;
  pictures?: string[];
  landlordId: string;
  rooms?: Room[];
}
