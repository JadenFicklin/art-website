import Spline from "@splinetool/react-spline";
import React from "react";

function Home() {
  return (
    <>
      <Spline
        scene="https://prod.spline.design/1ZSN0NOpjyVsaPIf/scene.splinecode"
        className="sculpture"
      />
      <div className="home-outer">
        <div className="left-banner"></div>
        <div className="right-banner">
          <div className="green-accent"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
