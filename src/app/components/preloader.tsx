"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import styled from "styled-components";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 1;
  animation: fade-in 0.4s ease-in forwards, fade-out 4s ease-out 1s forwards;
  background: #D6DBDC;

  @keyframes fade-in {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #1b5299;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }
  .one {
    animation-delay: 0.25s;
  }
  .two {
    animation-delay: 0.5s;
  }
  .three {
    animation-delay: 1s;
  }
  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Preloader = () => {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    fetch('/animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
   
    <Lottie animationData={animationData} loop={true} />
  </div>
    // <Screen>
    //   <Balls>
    //     <div className="ball one"></div>
    //     <div className="ball two"></div>
    //     <div className="ball three"></div>
    //   </Balls>
    // </Screen>
  );
};

export default Preloader;
