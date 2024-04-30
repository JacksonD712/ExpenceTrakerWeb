import React from "react";
import Images from "../components/image";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around h-screen">
      <>
        <Intro />
        <Images />
      </>
    </div>
  );
};

export default Home;
