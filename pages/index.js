import React, { useEffect, useState } from "react";
import Head from "next/head";
import HeroSec from "../components/heroSection/HeroSec";
import "bootstrap/dist/css/bootstrap.min.css";
import PortFolio1 from "../components/portFolio1/PortFolio1"
import PortFolio2 from "../components/portFolio2/PortFolio2"
import Footer1 from "../components/footer/Footer1";
import Footer2 from "../components/footer/Footer2";
import PortFolio3 from "../components/portFolio3/PortFolio3";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="google-site-verification" content="fnFYNa8YNCweLB2KhX1kLq98nazuE0jWsHNz03tc4U0" />
          <title>Asim Naveed - An Internet Entrepreneur & Investor</title>
          {/* <link rel="icon" href="/logo_black.svg" /> */}
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossorigin="anonymous"
          />
          {/* <script src="sc.js"></script> */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </Head>
        <div className="">
          <div id="progressBarContainer">
            <div
              id="progressBar"
              style={{ transform: `scale(${scroll}, 1)`, opacity: 1 }}
            />
          </div>
        
        <HeroSec />
        <PortFolio1 />
        <PortFolio2 /> 
        <PortFolio3 /> 
        <Footer1 />
        <Footer2 />
        </div>
      </div>
    </>
  );
}
