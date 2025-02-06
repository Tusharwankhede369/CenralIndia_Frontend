import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginPage from "../Login&Registation/loginForm";

const Navbar = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const showLogin = () => {
    setIsLoginVisible(true);
  };

  const hideLogin = () => {
    setIsLoginVisible(false);
  };

  useEffect(() => {
    console.log("isLoginVisible:", isLoginVisible);
  }, [isLoginVisible]);

  return (
    <>
      <nav className="bg-white w-full px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="flex items-center flex-shrink-0 text-gray-700 order-1 md:order-none md:mr-6 mx-auto md:mx-0">
            <svg
              width="40"
              height="40"
              viewBox="0 0 360 398"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.9577 182.394L2.36267 391.782C1.56966 394.939 3.95687 398 7.21202 398H352.001C355.867 398 359.001 394.866 359.001 391V0L234.236 195.991L183.814 100.814L109.115 240.666L54.9577 182.394Z"
                fill="#12153D"
              />
              <path
                d="M1 199V398H347.2C353.827 398 359.2 392.627 359.2 386V199L259.7 290.54L180.1 199L100.5 290.54L1 199Z"
                fill="#E5590F"
              />
            </svg>
            <div>
              <span className="text-xl md:text-2xl font-bold">
                Keyword <span className="text-orange-500">Raja</span>
              </span>
            </div>
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between items-center">
              <li className="md:px-4 md:py-2">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-400"}>Homepage</NavLink>
              </li>
              <li className="md:px-4 md:py-2">
                <NavLink to="/empty" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-400"}>Blog</NavLink>
              </li>
              <li className="md:px-4 md:py-2">
                <NavLink to="/empty" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-400"}>Forum</NavLink>
              </li>
              <li className="md:px-4 md:py-2">
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-400"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <button
              onClick={showLogin}
              className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-gray-50 rounded-xl flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Login</span>
            </button>
          </div>
        </div>
      </nav>
      {isLoginVisible && <LoginPage isVisible={isLoginVisible} onClose={hideLogin} />}
    </>
  );
};

export default Navbar;
