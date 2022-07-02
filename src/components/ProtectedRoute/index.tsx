import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
    isAllowed: boolean
}

export const ProtectedRoute: React.FC<PropsWithChildren<ProtectedRouteProps>> = (props) => {
    const { isAllowed, children } = props;
    if (!isAllowed) {
        return <Navigate to="/web/login" replace />;
    }

    return children ? <>{children}</> : <Outlet />;
};