import { BsEmojiSmile } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { PiPaperPlaneRightLight } from "react-icons/pi";

const ConversationFooter = () => {
  return (
    <div className="w-full bg-white flex items-center gap-3 border-b border-l px-5 py-3">
      <button>
        <BsEmojiSmile className="size-6" />
      </button>
      <button>
        <LuPlus className="size-6" />
      </button>

      <div className="w-full">
        <input
          type="text"
          placeholder="Type here"
          className="border p-3.5 rounded-lg w-full focous:outline-none focous-within:outline-none  outline-none"
        />
      </div>

      <button className="p-3.5 px-4 rounded-lg bg-primary text-white hover:bg-indigo-500">
         <PiPaperPlaneRightLight className="size-6" />
      </button>
    </div>
  );
};

export default ConversationFooter;
