import ConversationHeader from "./conversationHeader";
import ConversationFooter from "./conversationFooter";

const Conversation = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <ConversationHeader />

      <div className="overflow-auto py-5 px-2 lg:p-5 flex-grow">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="text-sm lg:text-base">
            <div className="chat chat-start">
              <div className="chat-bubble bg-white text-black">
                It&apos;s over Anakin,
                <br />I have the high ground.
              </div>
            </div>
            
            <div className="chat chat-end">
              <div className="chat-bubble bg-primary">You underestimate my power!</div>
            </div>
          </div>
        ))}
      </div>

      <ConversationFooter />
    </div>
  );
};
export default Conversation;
