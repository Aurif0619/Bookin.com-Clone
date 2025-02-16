import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = localStorage.getItem("accessToken");

    if (!user || !accessToken) {
        return <Navigate to="/register" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectRoute;