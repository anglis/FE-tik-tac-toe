import React, { FC } from "react";
import { Outlet, RouteProps } from "react-router";

interface MainLayoutProps extends RouteProps { }

const MainLayout: FC<MainLayoutProps> = () => {
    return <div className="main-layout">
        <Outlet />
    </div>;
};

export default MainLayout;
