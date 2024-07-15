import { RiSearch2Line } from "react-icons/ri";

import { useGetAllUsersQuery } from "../../store/api/user/userApiSlice";
import SidebarSkeleton from "../skeletons/sidebarSkeleton";

const Sidebar = () => {
  const { data, isLoading: usersLoading } = useGetAllUsersQuery();

  return (
    <div className="bg-white flex h-full min-w-[calc(100vw-4rem)] md:min-w-80 lg:min-w-96 shadow-md shadow-black/5 md:relative fixed top-0 left-16 md:left-0 z-10">
      <div className="w-full flex flex-col overflow-auto pb-1">
        <h1 className="px-5 pt-3 text-lg font-semibold">Chats</h1>

        <label className="input input-bordered h-[3.4rem] flex items-center gap-2 relative mx-5 my-3 !outline-none">
          <RiSearch2Line className="size-6" />
          <input
            type="text"
            className="grow outline-none"
            placeholder="Search"
          />
        </label>

        {usersLoading ? (
          <div className="px-5 flex items-center gap-3 mb-1">
            <div className="skeleton h-7 w-14"></div>
            <div className="skeleton h-7 w-14"></div>
          </div>
        ) : (
          <div className="px-5 flex items-center gap-3 mb-1">
            <button className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm 2xl:text-base">
              All
            </button>
            <button className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm 2xl:text-base">
              Unread
            </button>
          </div>
        )}

        <div className="flex flex-col flex-grow gap-1 select-none overflow-auto h-full">
          <div className="w-full h-0.5 bg-black/5 mb-3" />

          {usersLoading && (
            <div className="flex flex-col gap-4">
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
              <SidebarSkeleton />
            </div>
          )}

          {data?.users?.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <p className="text-lg text-neutral-500">No chats found</p>
            </div>
          )}

          {data?.users?.map((user, i) => (
            <div key={i}>
              <div className="flex items-center mx-2 gap-3 py-2.5 px-3.5 cursor-pointer hover:bg-neutral-100 rounded-lg">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={user?.profilePic || "/images/no-avatar.jpg"} />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex-between w-full">
                    <p className="font-semibold text-sm capitalize">
                      {user?.name}
                    </p>
                    <p className="text-xs mt-0.5 text-zinc-500">11:02 AM</p>
                  </div>
                  <p className="text-xs font-medium mt-0.5">Ok</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
