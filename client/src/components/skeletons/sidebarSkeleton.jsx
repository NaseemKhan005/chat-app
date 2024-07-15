const SidebarSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-5">
      <div className="flex items-center gap-3 w-full">
        <div className="skeleton h-12 w-12 avatar shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex-between">
            <div className="skeleton h-3 w-20"></div>
            <div className="skeleton h-3 w-14"></div>
          </div>

          <div className="flex-between">
            <div className="skeleton h-2 w-28"></div>
            <div className="skeleton h-3 w-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
