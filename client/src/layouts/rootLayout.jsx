import { Outlet } from "react-router-dom";

import SidebarLinks from "../components/home/sidebarLinks";

const RootLayout = () => {
  return (
    <div className="flex items-start w-full h-dvh bg-neutral-100">
      <SidebarLinks />

      <div className="ml-20 w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
