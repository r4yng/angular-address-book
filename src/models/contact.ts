export interface Contact {
  name: string;
  address: Address;
  phone: string;
  email: string;
}

interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
}