import { MovePosition } from "./interface";

export const formatMoveKey = ({ row, column }: MovePosition) => {
  return `${row}-${column}`;
};
