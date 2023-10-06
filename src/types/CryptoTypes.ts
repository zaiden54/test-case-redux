export interface CryptoInfo {
  name: string;
  volume: number;
  unit: string;
}

export interface CryptoSliceType {
  [key: string]: CurrencyType[];
}

export interface CurrencyType {
  volume: number;
  unit: string;
}

export type CryptoResponse = CryptoInfo[];
