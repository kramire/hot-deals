export interface Rating {
  rate: number;
  count: number;
}

export interface Item {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

// key is the itemId
export type CartType = {
  [key in string]: {
    quantity: number;
    unitPrice: number;
  };
};
