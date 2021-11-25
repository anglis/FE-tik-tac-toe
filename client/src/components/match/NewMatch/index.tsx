import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { creactOrLoadNewGame, createNewGame, wipeMatch } from "../../../state/reducers/currentGame/CreateNewGame"
import { useAppSelector } from "../../../state/reducers/helpers"
import GameGrid from "./GameGrid"
import MatchHistory from "./MatchHistory"
import "./index.css";
import Button from "../../shared/Button"

const NewMatch = () => {
    const dispatch = useDispatch();
    const gameId = useAppSelector(state => state.currentGame.match?.data?.id)
    const moves = useAppSelector(state => state.currentGame.moves?.data) || [];

    useEffect(() => {
        dispatch(creactOrLoadNewGame(new Date().valueOf()))
    }, []);

    return <div>
        <div className="pb-2">
            <GameGrid moves={moves} gameId={gameId} />
        </div>
        <div className="pb-2">
            <Button onClick={() => {
                dispatch(wipeMatch)
                dispatch(createNewGame(new Date().valueOf()))
            }}>New Match</Button>
        </div>
        <div>
            <MatchHistory moves={moves} />
        </div>
    </div>
}

export default NewMatch