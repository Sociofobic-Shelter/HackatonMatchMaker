import {
    createBrowserRouter, Navigate,
    RouterProvider as RouterProviderRRD,
} from "react-router-dom";
import { AppRoutes } from "../shared/configs/routes";
import {ProtectedRoute} from "./ProtectRoute.tsx";
import MainLayout from "../MainLayout/MainLayout";
import LoginPage from "../LoginPage/LoginPage.tsx";
import HomePage from "../HomePage/HomePage.tsx";


const router = createBrowserRouter([

    {
        path: AppRoutes.ONBOARDING,
        element: <Navigate to="/login" replace />,
    },
    // Публичный роут
    {
        path: AppRoutes.LOGIN,
        element: <LoginPage />,
    },

    // Приватные роуты
    {
        element: (
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: AppRoutes.HOME,
                element: <HomePage />,
            },
        ],
    },
]);

export const AppRouter = () => {
    return <RouterProviderRRD router={router} />;
};