export interface Property {
  _id: string;
  name: string;
  address: string;
  description: string;
  pictures?: string[];
  landlordId: string;
  rooms?: string[];
}
