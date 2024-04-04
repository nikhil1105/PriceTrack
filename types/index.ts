export type PriceHistoryItem = {
    price: number;
  };
  
  export type User = {
    email: string;
  };
  
  export type Product = {
    _id?: string;
    link: string;
    currency: string;
    image: string;
    title: string;
    price: number;
    preprice: number;
    pricehistory: PriceHistoryItem[] | [];
    high: number;
    low: number;
    avg: number;
    deal: number;
    description: string;
    category: string;
    review: number;
    star: number;
    isoutofstock: Boolean;
    users?: User[];
  };
  
  export type NotificationType =
    | "WELCOME"
    | "CHANGE_OF_STOCK"
    | "LOWEST_PRICE"
    | "THRESHOLD_MET";
  
  export type EmailContent = {
    subject: string;
    body: string;
  };
  
  export type EmailProductInfo = {
    title: string;
    url: string;
  };