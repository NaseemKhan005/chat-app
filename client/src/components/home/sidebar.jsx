import { RiSearch2Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="bg-white flex overflow-auto min-w-96 shadow-md shadow-black/5">
      <div className="w-full flex-grow">
        <h1 className="px-5 pt-3 text-lg font-semibold">Chats</h1>

        <label className="input input-bordered h-[3.4rem] flex items-center gap-2 relative mx-5 my-3 !outline-none">
          <RiSearch2Line className="size-6" />
          <input
            type="text"
            className="grow outline-none"
            placeholder="Search"
          />
        </label>
        {/* <div className="w-full h-0.5 bg-black/5 my-1" /> */}

        <div className="flex flex-col gap-1 select-none overflow-auto h-[calc(100vh - 195px)] h-full">
          {[...Array(15)].map((_, i) => (
            <div key={i}>
              <div className="flex items-center mx-2 gap-3 py-2.5 px-3.5 cursor-pointer hover:bg-neutral-100 rounded-lg">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex-between w-full">
                    <p className="font-semibold text-sm">Naseem Khan</p>
                    <p className="text-xs mt-0.5 text-zinc-500">11:02 AM</p>
                  </div>
                  <p className="text-xs font-medium mt-0.5">Ok</p>
                </div>
              </div>
              {/* <div className="w-full h-0.5 bg-black/5 my-1" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
