import { useState } from "react"
import Grid from "../_shared/Grid"
import { Move } from "../_shared/Grid/interface"

const NewMatch = () => {
    const [moves, setMoves] = useState<Move[]>([
        { row: 1, column: 1, type: "noughts" },
        { row: 1, column: 2, type: "crosses" }
    ])

    return <Grid moves={moves} onClick={(move) => {
        setMoves(moves => {
            const lastIndex = moves.length === 0 ? 0 : moves.length - 1
            const nextType = moves[lastIndex].type === "noughts" ? "crosses" : "noughts";

            return [
                ...moves,
                { ...move, type: nextType }
            ]
        })
    }} />
}

export default NewMatch