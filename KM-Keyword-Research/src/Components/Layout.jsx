import React from "react";
import Sidepanel from "./SidePanel/sidePanel";
import Navbar from "./Navbar/navbar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full">
        <Sidepanel className="hidden md:block" />
        <div className="flex flex-col justify-between w-full md:w-auto">
          {children}
        </div>
        <div className="hidden md:flex md:w-1/4 justify-center items-center  p-4">
        <DotLottieReact
      src="https://lottie.host/e5f354c0-efb6-4c9d-9d11-5a94c8792462/rNn8CDzlBk.lottie"
      loop
      autoplay
    />
</div>
      </div>
    </div>
  );
};

export default Layout;
