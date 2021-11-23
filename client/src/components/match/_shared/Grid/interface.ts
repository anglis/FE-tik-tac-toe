export interface MovePosition {
  row: number;
  column: number;
}

export type MoveType = "noughts" | "crosses";

export interface Move extends MovePosition {
  row: number;
  column: number;
  type: MoveType;
  order?: number
}

export interface NormalizedMoves {
  [key: string]: Move;
}
