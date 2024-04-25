import React from "react";
import Images from "../components/image";
import Intro from "../components/Intro";

const Home = () => {


  return (
    <div className="flex flex-col md:flex-row justify-around bg-gradient-to-tr from-sky-300 to-sky-100 h-screen">
     
        <>
          <Intro />
          <Images />
        </>
    
    </div>
  );
};

export default Home;
