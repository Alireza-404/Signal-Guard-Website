export interface PricingType {
  id: number;
  title: string;
  description: string;
  price: string;
  discount?: string;
  descriptionOfLimitation?: string;
  limitations: string[];
}
