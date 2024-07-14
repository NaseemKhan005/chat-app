import { BiCheckDouble } from "react-icons/bi";
import ConversationFooter from "./conversationFooter";
import ConversationHeader from "./conversationHeader";

const Conversation = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <ConversationHeader />

      <div className="overflow-auto py-5 px-2 lg:p-5 flex-grow">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="text-sm 2xl:text-base">
            <div className="chat chat-start">
              <div className="chat-bubble px-2 pt-2 rounded-xl bg-white text-black">
                <div className="pr-[4.5rem]">
                  <p>
                    It&apos;s over Anakin,
                    <br />I have the high ground.
                  </p>
                </div>

                <div className="flex items-center justify-end gap-1 leading-[0] -mb-2 -mt-2.5">
                  <p className="text-[.6rem] 2xl:text-xs text-end leading-[0]">
                    1:00 PM
                  </p>

                  <BiCheckDouble className="size-5 text-[#53BDEA] leading-[0] mb-0.5" />
                </div>
              </div>
            </div>

            <div className="chat chat-end">
              <div className="chat-bubble px-2 pt-2 rounded-xl bg-secondary text-black">
                <div className="pr-[4.5rem]">
                  <p>
                    It&apos;s over Anakin,
                    <br />I have the high ground.
                  </p>
                </div>

                <div className="flex items-center justify-end gap-1 leading-[0] -mb-2 -mt-2.5">
                  <p className="text-[.6rem] 2xl:text-xs text-end leading-[0]">
                    1:00 PM
                  </p>

                  <BiCheckDouble className="size-5 text-[#53BDEA] leading-[0] mb-0.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ConversationFooter />
    </div>
  );
};
export default Conversation;
