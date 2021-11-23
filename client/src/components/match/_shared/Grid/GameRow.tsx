import { FC, useMemo } from "react";

import { MovePosition, NormalizedMoves } from "./interface";
import { formatMoveKey } from "./utils";
import Cell from "./Cell";

interface GameRowProps {
    row: number;
    normalizedMoves: NormalizedMoves;
    onClick?(move: MovePosition): void;
}

const GameRow: FC<GameRowProps> = ({ row, normalizedMoves, onClick }) => {
    const columns = useMemo(
        () => Array.from(Array(3).keys()).map((column) => column + 1),
        []
    );

    return (
        <div className="game-grid-row">
            {columns.map((column) => (
                <Cell
                    key={column}
                    row={row}
                    column={column}
                    move={normalizedMoves[formatMoveKey({ row, column })]}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default GameRow;
