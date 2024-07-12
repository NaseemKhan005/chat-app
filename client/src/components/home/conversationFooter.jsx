import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import Picker from "emoji-picker-react";

const ConversationFooter = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setShowPicker(false);
  };

  return (
    <div className="w-full bg-white flex items-center gap-4 border-b border-l px-5 py-3 relative">
      <button onClick={() => setShowPicker((val) => !val)}>
        <BsEmojiSmile className="size-6" />
      </button>
      {showPicker && (
        <div className="absolute bottom-full mb-2">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <button>
        <GrAttachment className="size-5" />
      </button>

      <div className="w-full">
        <input
          type="text"
          placeholder="Type here"
          value={chosenEmoji ? chosenEmoji.emoji : ""}
          className="border p-3.5 rounded-lg w-full focus:outline-none focus-within:outline-none outline-none"
        />
      </div>

      <button className="p-3.5 px-4 rounded-lg bg-primary text-white hover:bg-indigo-500">
        <PiPaperPlaneRightLight className="size-6" />
      </button>
    </div>
  );
};

export default ConversationFooter;
