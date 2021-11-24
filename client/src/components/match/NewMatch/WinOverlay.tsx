import { FC } from "react";
import { MoveType } from "../_shared/Grid/interface";


interface WinOverlayProps {
    isFinished?: boolean;
    wonBy?: MoveType;
}

const WinOverlay: FC<WinOverlayProps> = ({ isFinished, children, wonBy }) => {
    if (!isFinished) {
        return <>
            {children}
        </>
    }

    return <div className="overlay">
        <div className="overlay-bg">
            <div className="overlay-text">{wonBy || "DRAW"}</div>
        </div>
        {children}
    </div>
}

export default WinOverlay