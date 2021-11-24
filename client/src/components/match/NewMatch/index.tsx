import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { creactOrLoadNewGame, createNewGame, wipeMatch } from "../../../state/reducers/currentGame/CreateNewGame"
import { useAppSelector } from "../../../state/reducers/helpers"
import GameGrid from "./GameGrid"
import MatchHistory from "./MatchHistory"
import "./index.css";

const NewMatch = () => {
    const dispatch = useDispatch();
    const gameId = useAppSelector(state => state.currentGame.match?.data?.id)
    const moves = useAppSelector(state => state.currentGame.moves?.data) || [];

    useEffect(() => {
        dispatch(creactOrLoadNewGame(new Date().valueOf()))
    }, []);

    return <div>
        <div>
            <GameGrid moves={moves} gameId={gameId} />
        </div>
        <div>
            <button onClick={() => {
                dispatch(wipeMatch)
                dispatch(createNewGame(new Date().valueOf()))
            }}>New Match</button>
        </div>
        <div>
            <MatchHistory moves={moves} />
        </div>
    </div>
}

export default NewMatch