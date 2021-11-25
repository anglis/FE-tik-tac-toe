import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/shared/layouts/main";

const MatchRoutes = lazy(() => import("./Match"));

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/match/*" element={<MatchRoutes />} />
                <Route path="/" element={<Navigate replace to="/match/new" />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
