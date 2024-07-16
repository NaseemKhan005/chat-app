import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { clearUser } from "../../store/slices/chat/userSlice";

const ConversationHeader = ({ user }) => {
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="w-full bg-white border-b border-l select-none flex-between">
      <div className="flex items-center mx-2 gap-3 py-2.5 cursor-pointer">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={user?.profilePic || "/images/no-avatar.jpg"} />
          </div>
        </div>

        <div className="w-full">
          <p className="font-semibold text-sm capitalize">{user?.name}</p>
          <p className="text-xs mt-1 text-zinc-500">Last seen 11:02 AM</p>
        </div>
      </div>

      <IoClose
        onClick={() => dispatch(clearUser())}
        className="size-6 text-zinc-500 cursor-pointer mr-5"
      />
    </div>
  );
};
export default ConversationHeader;
