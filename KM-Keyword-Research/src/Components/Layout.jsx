import React from "react";
import Sidepanel from "./SidePanel/sidePanel";
import Navbar from "./Navbar/navbar";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Layout = ({ children , LinkofImg="https://lottie.host/8695e13a-7d68-4db9-a3d2-a534947507d1/AcbU5EoJwW.lottie" }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full">
        <Sidepanel className="hidden md:block" />
        <div className="flex flex-col justify-between w-full md:w-auto">
          {children}
        </div>
        <div className="hidden md:flex md:w-1/4 justify-start flex-col  p-4">
        <DotLottieReact
      src={LinkofImg}
      loop
      autoplay
    />
</div>
      </div>
    </div>
  );
};

export default Layout;
