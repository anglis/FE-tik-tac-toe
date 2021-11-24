import { Move, MoveType, NormalizedMoves } from "../_shared/Grid/interface";
import { formatMoveKey } from "../_shared/Grid/utils";

interface GameStatus {
  isFinished: boolean;
  wonBy?: MoveType;
}

const winningConditions = [
  // Filled rows
  ["1-1", "1-2", "1-3"],
  ["2-1", "2-2", "2-3"],
  ["3-1", "3-2", "3-3"],

  // Filled columns
  ["1-1", "2-1", "3-1"],
  ["1-2", "2-2", "3-2"],
  ["1-3", "2-3", "3-3"],

  // Filled diagnol
  ["1-1", "2-2", "3-3"],
  ["1-3", "2-2", "3-1"],
];

const checkIfMoveIsInWininigCondition = (playerMoves: string[]) => {
  return (
    winningConditions.filter((condition) => {
      return (
        condition.filter((move) => {
          if (playerMoves.length >= 3) {
            return playerMoves.indexOf(move) >= 0;
          }

          return false;
        }).length === 3
      );
    }).length > 0
  );
};

export const checkForWinner = (moves?: Move[]): GameStatus => {
  if (!Array.isArray(moves)) {
    return { isFinished: false, wonBy: undefined };
  }

  if (moves?.length >= 9) {
    return { isFinished: true, wonBy: undefined };
  }

  const nougtMoves = moves
    .filter((move) => move.type === "noughts")
    .map(formatMoveKey);
  const crosseMoves = moves
    .filter((move) => move.type === "crosses")
    .map(formatMoveKey);

  if (checkIfMoveIsInWininigCondition(nougtMoves)) {
    return { isFinished: true, wonBy: "noughts" };
  }

  if (checkIfMoveIsInWininigCondition(crosseMoves)) {
    return { isFinished: true, wonBy: "crosses" };
  }

  return { isFinished: false, wonBy: undefined };
};
