import { RiSearch2Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="bg-white h-full min-w-96 shadow-md shadow-black/5">
      <label className="input input-bordered h-[3.4rem] flex items-center gap-2 relative m-5 !outline-none">
        <RiSearch2Line className="size-6" />
        <input type="text" className="grow outline-none" placeholder="Search" />
      </label>

      <div className="flex flex-col pb-5 select-none">
        <div className="w-full h-0.5 bg-black/5 my-1" />
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <div className="flex items-center mx-2 gap-3 py-2.5 px-3.5 cursor-pointer hover:bg-neutral-50 rounded-lg">
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <p>Naseem Khan</p>
            </div>
            <div className="w-full h-0.5 bg-black/5 my-1" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
