import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isLoggedIn = (localStorage.getItem("isLoggedIn") === "true")
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoutes;