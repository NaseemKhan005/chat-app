import { BiCheckDouble } from "react-icons/bi";
import { IoLockClosed } from "react-icons/io5";
import { useSelector } from "react-redux";

import { useGetSeletedUserMessagesQuery } from "../../store/api/chat/messageApiSlice";
import convertDate from "../../utils/convertDate";
import ConversationFooter from "./conversationFooter";
import ConversationHeader from "./conversationHeader";
import { useEffect, useRef } from "react";

const Conversation = () => {
  const selectedUserToChat = useSelector(
    (state) => state.user.selectedUserToChat
  );

  const { data } = useGetSeletedUserMessagesQuery(selectedUserToChat?._id);
  const currentUser = selectedUserToChat?._id === data?.messages[0]?.senderId;

  const endOfMessagesRef = useRef(null);
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data?.messages]);

  return selectedUserToChat ? (
    <div className="w-full h-full flex flex-col">
      <ConversationHeader user={selectedUserToChat} />

      <div className="overflow-auto py-5 px-2 lg:p-5 flex-grow">
        {data?.messages?.map((message, i) => (
          <div key={i} className="text-sm 2xl:text-base">
            <div className={`chat ${currentUser ? "chat-start" : "chat-end"}`}>
              <div
                className={`chat-bubble px-2 pt-2 rounded-xl text-black ${
                  currentUser ? "bg-white" : "bg-secondary"
                }`}
              >
                <div className="pr-[4.5rem]">
                  <p>{message?.message}</p>
                </div>

                <div className="flex items-center justify-end gap-1 leading-[0] -mb-5 -mt-3">
                  <p className="text-[.6rem] 2xl:text-xs text-end leading-[0]">
                    {convertDate(message?.createdAt)}
                  </p>

                  <BiCheckDouble className="size-5 text-[#53BDEA] leading-[0] mb-0.5" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {data?.messages?.length === 0 && (
          <div
            role="alert"
            className="alert text-xs max-w-sm rounded-lg mx-auto text-center bg-yellow-100 shadow-none border-none mt-5 select-none pointer-events-none"
          >
            <p className="flex items-start">
              <IoLockClosed className="text-2xl leading-[0] -mt-1" />
              Messages are end-to-end encrypted. No one outside of this chat,
              not even WhatsApp, can read or listen to them.
            </p>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      <ConversationFooter />
    </div>
  ) : (
    <div className="flex items-center flex-col h-full w-full bg-neutral-200">
      <div className="flex flex-col gap-5 items-center justify-center select-none flex-grow">
        <img
          src="/images/logo.png"
          alt="logo"
          className="object-contain w-20 aspect-square pointer-events-none"
        />
        <p className="text-xl lg:text-2xl font-medium text-primary">
          Select a chat to start messaging
        </p>
      </div>

      <div className="mb-16 flex-center gap-1 select-none text-neutral-500 text-xs font-medium">
        <IoLockClosed className="text-sm" />

        <p>
          Your personal messages are{" "}
          <span className="text-primary">end-to-end encrypted</span>
        </p>
      </div>
    </div>
  );
};
export default Conversation;
