import { Navigate } from "react-router-dom";
import { useAuth } from "../store/store";
import * as React from "react";

interface Props {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
    const isAuthenticated = useAuth((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;

    }

    return <>{children}</>;
};