import React, { lazy } from "react";
import { Route, Routes} from "react-router-dom";

const NewMatch = lazy(() => import("../../components/match/NewMatch"));

function MatchRoutes() {
    return (
        <Routes>
            <Route path="new" element={<NewMatch />} />
        </Routes>
    );
}

export default MatchRoutes;
