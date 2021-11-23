import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMove } from "../../../state/reducers/currentGame/AddMove"
import { createNewGame } from "../../../state/reducers/currentGame/CreateNewGame"
import { useAppSelector } from "../../../state/reducers/helpers"
import Grid from "../_shared/Grid"

const NewMatch = () => {
    const dispatch = useDispatch();
    const gameId = useAppSelector(state => state.currentGame.gameId?.data)
    const moves = useAppSelector(state => state.currentGame.moves?.data) || [];

    useEffect(() => {
        dispatch(createNewGame(new Date().valueOf()))
    }, []);

    return <Grid moves={moves} onClick={(move) => {
        const lastIndex = moves.length === 0 ? 0 : moves.length - 1
        const nextType = lastIndex === 0 ? "noughts" : moves[lastIndex].type === "noughts" ? "crosses" : "noughts";

        dispatch(addMove(gameId, { ...move, type: nextType, order: moves.length }))
    }} />
}

export default NewMatch