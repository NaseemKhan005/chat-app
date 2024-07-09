import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMoonLine } from "react-icons/ri";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <label className="swap swap-rotate transition-all duration-500">
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        onClick={toggleTheme}
      />

      {theme === "light" ? (
        <RiMoonLine className="swap-on size-7 fill-current" />
      ) : (
        <MdOutlineWbSunny className="swap-off size-7 fill-current" />
      )}
    </label>
  );
};

export default ToggleTheme;
