export interface ChangeAmountStatisticConfig {
  title: string;
  changeAmount: number;
  changePercantage: number;
}

export interface ChartStatisticData<TValue> {
  value: TValue;
  name: string;
  color: string;
}
