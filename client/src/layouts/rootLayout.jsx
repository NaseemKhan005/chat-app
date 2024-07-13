import { Outlet } from "react-router-dom";

import SidebarLinks from "../components/home/sidebarLinks";

const RootLayout = () => {
  return (
    <div className="flex items-start w-full h-dvh bg-neutral-100">
      <SidebarLinks />

      <div className="ml-16 lg:ml-20 w-full bg-[url('/images/bg.avif')] bg-contain bg-center">
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
