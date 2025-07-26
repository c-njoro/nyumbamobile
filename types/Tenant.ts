export interface Tenant {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  propertyRented?: string;
  roomRented?: string;
}
