import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import Picker from "emoji-picker-react";

import { useSendMessageMutation } from "../../store/api/chat/messageApiSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ConversationFooter = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const selectedUserToChat = useSelector(
    (state) => state.user.selectedUserToChat
  );

  const [sendMessage, { isLoading: isSendingMessage }] =
    useSendMessageMutation();

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setShowPicker(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      if (inputValue.trim() || chosenEmoji) {
        await sendMessage({
          id: selectedUserToChat?._id,
          message: inputValue,
        });
        setInputValue("");
        setChosenEmoji(null);
      }
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="w-full bg-white flex items-center gap-2 lg:gap-4 border-b border-l px-5 py-2 lg:py-3 relative">
      <button onClick={() => setShowPicker((val) => !val)}>
        <BsEmojiSmile className="size-5 lg:size-6" />
      </button>
      {showPicker && (
        <div className="absolute bottom-full mb-2">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <button>
        <GrAttachment className="size-4 lg:size-5" />
      </button>

      <div className="w-full">
        <input
          type="text"
          placeholder="Type here"
          value={inputValue}
          onChange={handleInputChange}
          className="border p-3.5 rounded-lg w-full focus:outline-none focus-within:outline-none outline-none text-sm lg:text-base"
        />
      </div>

      <button
        onClick={handleSendMessage}
        disabled={isSendingMessage || !inputValue.trim()}
        className="p-3.5 px-4 rounded-lg bg-primary text-white disabled:cursor-not-allowed disabled:opacity-70 h-[3.3rem]"
      >
        {isSendingMessage ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <PiPaperPlaneRightLight className="size-5 lg:size-6" />
        )}
      </button>
    </div>
  );
};

export default ConversationFooter;
