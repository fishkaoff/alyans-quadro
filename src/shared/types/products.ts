export interface Product {
  id: string;
  sku: string;
  images: string[];
  categoryId: string;
  available: number;

  model: string;
  brand: string;
  engineVolume: number;
  enginePower: number;
  fuelType: string;
  fuelSystem: string;
  coolingType: string;
  ignitionType: string;
  fuelTankVolume: number;
  starterType: string;
  transmissionType: string;
  dryWeight: number | undefined;
  price: number;

  rearTrunk: string;
  frontTrunk: string;
  handProtection: string;
  reversGear: string;
  mirrors: string;
  horn: string;
  heatedGrips: string;
  frontSuspensionType: string;
  rearSuspensionType: string;
  // армированные шланги
  groundClearance: string;

  starterKick?: boolean;
}
