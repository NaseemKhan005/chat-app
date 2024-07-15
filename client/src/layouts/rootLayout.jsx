import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import SidebarLinks from "../components/home/sidebarLinks";

const RootLayout = () => {
  const user = useSelector((state) => state.auth.user);

  return user ? (
    <div className="flex items-start w-full h-dvh bg-neutral-100">
      <SidebarLinks />

      <div className="ml-16 lg:ml-20 w-full bg-[url('/images/bg.avif')] bg-contain bg-center">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/auth/sign-in" />
  );
};
export default RootLayout;
