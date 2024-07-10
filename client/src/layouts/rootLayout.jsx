import { Outlet } from "react-router-dom";

import SidebarLinks from "../components/home/sidebarLinks";

const RootLayout = () => {
  return (
    <div className="flex items-start h-dvh bg-neutral-50/30">
      <SidebarLinks />

      <div className="ml-20">
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
