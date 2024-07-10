import Conversation from "../../components/home/conversation";
import Sidebar from "../../components/home/sidebar";

const HomePage = () => {
  return (
    <div className="flex items-start gap-5 h-dvh bg-neutral-50/30">
      <Sidebar />
      <Conversation />
    </div>
  );
};
export default HomePage;
