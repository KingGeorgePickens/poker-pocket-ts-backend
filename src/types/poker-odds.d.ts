declare module 'poker-odds' {

  export interface HandChance {
    name: string;
    count: number;
  }

  export interface HandResult {
    hand: [string, string];
    count: number;
    wins: number;
    ties: number;
    handChances: HandChance[];
    favourite: boolean;
  }

  export function calculateEquity(
    hands: string[][],
    board: string[],
    iterations?: number,
    exhaustive?: boolean
  ): HandResult[];
}
