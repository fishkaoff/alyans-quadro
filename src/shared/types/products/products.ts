export interface Product {
  id: string;
  sku: string;
  manufacturer_sku: string;
  images: string[];

  brand: string;
  engineVolume: number;
  enginePower: number;
  fuelType: string;
  fuelSystem: string;
  coolingType: string;
  ignitionType: string;
  fuelTankVolume: number;
  fuelTankMaterial: string;
  starterType: string;
  transmissionType: string;
  dryWeight: number | undefined;
  headlight: string;
  year: number;
  price: number;
}
