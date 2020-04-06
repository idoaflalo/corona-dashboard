export interface ChangeAmountStatisticConfig {
  title: string;
  changeAmount: number;
  changePercantage: number;
  showTrendGraph?: boolean;
  showDistributionGraph?: boolean;
}

export interface ChartStatisticData<TValue> {
  value: TValue;
  name: string;
  color: string;
}
