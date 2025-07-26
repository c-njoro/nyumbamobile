import { Landlord } from "./Landlord";
import { Property } from "./Property";
import { Tenant } from "./Tenant";

export interface CompleteRoom {
  _id: string;
  name: string;
  type: string;
  rentingPrice: number;
  pictures?: string[];
  property: Property;
  landlord: Landlord;
  tenant?: Tenant;
  status: string;
}
