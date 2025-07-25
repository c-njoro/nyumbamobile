export interface Room {
  name: string;
  type: string;
  rentingPrice: number;
  pictures?: string[];
  property: string;
  tenant?: string;
  status: string;
  landlord: string;
}
