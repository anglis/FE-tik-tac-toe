import React, { lazy } from "react";
import { Route, Routes} from "react-router-dom";

const MatchContainer = lazy(() => import("../../components/match"));

function MatchRoutes() {
    return (
        <Routes>
            <Route path="new" element={<MatchContainer />} />
        </Routes>
    );
}

export default MatchRoutes;
