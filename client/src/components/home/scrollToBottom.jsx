import { useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ScrollToBottom = () => {
  const arrow = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      if (!isAtBottom) {
        arrow.current.classList.add("right-10");
      } else {
        arrow.current.classList.remove("right-10");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <button
        aria-label="Scroll to bottom"
        className={`fixed bottom-32 sm:bottom-32 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-white hover:bg-[#cdcdcd] active:p-[.45rem] p-2 rounded`}
        onClick={scrollToBottom}
        ref={arrow}
      >
        <MdKeyboardArrowDown className="text-xl active:text-lg text-black" />
      </button>
    </div>
  );
};

export default ScrollToBottom;