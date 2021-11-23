import { FC, useMemo } from "react";

import { Move, MovePosition, NormalizedMoves } from "./interface";
import { formatMoveKey } from "./utils";
import GameRow from "./GameRow";
import "./index.css";

interface GridProps {
    moves: Move[];
    onClick?(move: MovePosition): void
}

const Grid: FC<GridProps> = ({ moves, onClick }) => {
    const rows = useMemo(() => Array.from(Array(3).keys()).map(row => row + 1), []);
    const normalizedMoves: NormalizedMoves = useMemo(() => moves.reduce((acc, move) => {
        return {
            ...acc,
            [formatMoveKey(move)]: move
        }
    }, {}), [moves])


    return (
        <div className="game-grid">
            {rows.map(row => {
                return <GameRow key={row} row={row} normalizedMoves={normalizedMoves} onClick={onClick} />
            })}
        </div>
    );
};

export default Grid;
