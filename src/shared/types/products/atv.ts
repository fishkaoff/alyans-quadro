import type { Product } from "./products";

export interface Atv extends Product {
  rearTrunk: string;
  frontTrunk: string;
  handProtection: string;
  reversGear: string;
  wheelType: string;
  mirrors: string;
  horn: string;
  heatedGrips: string;
  frontSuspensionType: string;
  rearSuspensionType: string;
  // армированные шланги
  frontBrakeHose: string;
  groundClearance: string;
}
