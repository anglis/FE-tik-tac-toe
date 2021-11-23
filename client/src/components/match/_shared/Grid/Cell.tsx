import { FC } from "react";
import { Move, MovePosition } from "./interface";

interface CellProps {
    row: number;
    column: number;
    move?: Move;
    onClick?(move: MovePosition): void;
}

const Cell: FC<CellProps> = ({ row, column, move, onClick }) => {
    const canBeClicked = onClick && !move;

    return (
        <div
            className={`cell ${canBeClicked && "cell-active"}`}
            onClick={() => canBeClicked && onClick({ row, column })}
        >
            {move?.type}
        </div>
    );
};

export default Cell;
