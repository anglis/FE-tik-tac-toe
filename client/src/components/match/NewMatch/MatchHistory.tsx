import { FC } from "react"
import { Move } from "../_shared/Grid/interface"

interface MatchHistoryProps {
    moves: Move[]
}

const MatchHistory: FC<MatchHistoryProps> = ({ moves }) => {
    return (
        <ul>
            {moves.map((move: Move) => (<li key={move.id}>{move.type}</li>))}
        </ul>
    )
}

export default MatchHistory