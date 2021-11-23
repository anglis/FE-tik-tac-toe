import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/shared/layouts/main";

const MatchRoutes = lazy(() => import("./Match"));

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/match/*" element={<MatchRoutes />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
