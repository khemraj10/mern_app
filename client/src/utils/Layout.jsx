import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="x-flex-col container">
      <Outlet />
    </div>
  );
};

export default Layout;
