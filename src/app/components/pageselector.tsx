"use client";
import { loadComponents } from "next/dist/server/load-components";
import React, { useEffect, useState } from "react";
import HomePage from "../home/page";
import Preloader from "./preloader";

const PageSelector = () => {
  const [loader, setLoader] = useState(true); // Initialize loader state as true

  useEffect(() => {
    // Use useEffect to set the loader to false after a timeout
    const timeoutId = setTimeout(() => {
      setLoader(false);
    }, 3400);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to ensure the effect runs only once

  return loader ? <Preloader/> : <HomePage />; // Render Preloader or HomePage based on loader state
};



export default PageSelector;
