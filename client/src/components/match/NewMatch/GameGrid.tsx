import { FC } from "react";
import { useDispatch } from "react-redux"

import { addMove } from "../../../state/reducers/currentGame/AddMove"
import Grid from "../_shared/Grid"
import { Move } from "../_shared/Grid/interface";
import { checkForWinner } from "./utils";
import WinOverlay from "./WinOverlay";

interface GameGridProps {
    moves: Move[];
    gameId: number;
}

const GameGrid: FC<GameGridProps> = ({ moves, gameId }) => {
    const dispatch = useDispatch();
    const isWinner = checkForWinner(moves);

    return <WinOverlay isFinished={isWinner.isFinished} wonBy={isWinner.wonBy}>
        <Grid moves={moves} onClick={(move) => {
            const lastIndex = moves.length === 0 ? 0 : moves.length - 1
            const nextType = moves.length === 0 ? "noughts" : moves[lastIndex].type === "noughts" ? "crosses" : "noughts";

            dispatch(addMove(gameId, { ...move, type: nextType, order: moves.length }))
        }} />
    </WinOverlay>
}

export default GameGrid