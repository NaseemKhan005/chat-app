import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();

  return (
    <div className="w-full h-screen flex-center">
      <div className="max-w-md w-full px-3">
        <h1 className="text-center mb-8 text-2xl md:text-3xl font-medium">
          {path === "sign-in" ? "Welcome Back!" : "Join Us Today!"}
        </h1>

        <form className="flex flex-col gap-5">
          {path === "sign-up" && (
            <label className="input h-14 input-bordered flex-center gap-2">
              <AiOutlineUser className="size-5 mb-[.1rem]" />
              <input
                type="text"
                className="grow"
                placeholder="Enter your full name"
              />
            </label>
          )}

          <label className="input h-14 input-bordered flex-center gap-2">
            <BsEnvelope className="size-5 mb-[.1rem]" />
            <input
              type="text"
              className="grow"
              placeholder="Enter your email"
            />
          </label>

          <label className="input h-14 input-bordered flex-center gap-2 relative">
            <MdPassword className="size-5 mb-[.1rem]" />
            <input
              type={showPassword ? "text" : "password"}
              className="grow"
              placeholder="Enter your password"
            />

            <button
              className="absolute right-2 text-2xl hover:bg-black/5 rounded-full p-2 top-2/4 transform -translate-y-2/4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </button>
          </label>

          <button className="bg-primary text-white py-4 rounded-lg">
            {path === "sign-in" ? "Sign In" : "Sign Up"}
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
