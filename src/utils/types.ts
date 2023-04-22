export interface AccountResponse {
  user: {
    id: string;
    email: string;
    username: string;
    is_active: boolean;
    created: Date;
    updated: Date;
  };
  access: string;
  refresh: string;
}

export interface UserResponse {
  email: string;
  username: string;
  is_active: string;
  created: Date;
  updated: Date;
  id: string;
}

export interface CartItems {
  id: number,
  name: string,
  cartQty: number,
  price: number,
};

export interface Items {
  id: number,
  price: number,
  name: string,
  description: string,
  category: string,
  quantity: number,
  image: string,
  created: Date,
  updated: Date,
}

export interface Order {
  ordered_items: OrderedItems[],
  id: number,
  price: number,
  created: string,
}

export interface OrderedItems {
  item: string,
  order: string,
  cartQty: number,
  price: number,
  id: number,
}