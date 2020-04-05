// The format that nebular expects
export interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

export interface ContagionAreaEntry {
  location: string;
  sickCount: number;
  percentageGrowth: string;
  percentagePopulation: string;
  isolatedCount: number;
}
