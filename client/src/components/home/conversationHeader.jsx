const ConversationHeader = () => {
  return (
    <div className="w-full bg-white border-b border-l select-none">
      <div className="flex items-center mx-2 gap-3 py-2.5 cursor-pointer">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          className="w-12 rounded-full"
        />

        <div className="w-full">
          <p className="font-semibold text-sm">Naseem Khan</p>
          <p className="text-xs mt-1 text-zinc-500">Last seen 11:02 AM</p>
        </div>
      </div>
    </div>
  );
};
export default ConversationHeader;
