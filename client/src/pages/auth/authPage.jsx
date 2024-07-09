import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineUser } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { BiLoader } from "react-icons/bi";

const AuthPage = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/${path}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) return toast.error(data.error);
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex-center">
      <div className="max-w-md w-full px-3">
        <h1 className="text-center mb-8 text-2xl md:text-3xl font-medium">
          {path === "sign-in" ? "Welcome Back!" : "Join Us Today!"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {path === "sign-up" && (
            <label className="input h-14 input-bordered flex-center gap-2">
              <AiOutlineUser className="size-5 mb-[.1rem]" />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                disabled={isLoading}
                className="grow disabled:text-black/60"
              />
            </label>
          )}

          <label className="input h-14 input-bordered flex-center gap-2">
            <BsEnvelope className="size-5 mb-[.1rem]" />
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              disabled={isLoading}
              className="grow disabled:text-black/60"
            />
          </label>

          <label className="input h-14 input-bordered flex-center gap-2 relative">
            <MdPassword className="size-5 mb-[.1rem]" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              disabled={isLoading}
              className="grow disabled:text-black/60"
            />

            <button
              className="absolute right-2 text-2xl hover:bg-black/5 rounded-full p-2 top-2/4 transform -translate-y-2/4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </button>
          </label>

          <button
            disabled={isLoading}
            className="bg-primary flex-center text-white py-4 rounded-lg disabled:cursor-not-allowed disabled:!opacity-80"
          >
            {isLoading ? (
              <span>
                <BiLoader className="animate-spin inline-block mr-1 mb-1 size-5" />
                Loading...
              </span>
            ) : path === "sign-in" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="text-center">
            {path === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              to={path === "sign-in" ? "/auth/sign-up" : "/auth/sign-in"}
              className="text-primary underline ml-1"
            >
              {path === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default AuthPage;
