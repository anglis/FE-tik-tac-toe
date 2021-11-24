import { FC } from "react";
import { Move, MovePosition, MoveType } from "./interface";

interface CellProps {
    row: number;
    column: number;
    move?: Move;
    onClick?(move: MovePosition): void;
}

const FormatIcon: FC<{ type?: MoveType }> = ({ type }) => {
    if (!type) {
        return null as any
    }

    return type === "noughts" ? "O" : "X"
}

const Cell: FC<CellProps> = ({ row, column, move, onClick }) => {
    const canBeClicked = onClick && !move;

    return (
        <div
            className={`cell ${canBeClicked && "cell-active"}`}
            onClick={() => canBeClicked && onClick({ row, column })}
        >
            <FormatIcon type={move?.type} />
        </div>
    );
};

export default Cell;
