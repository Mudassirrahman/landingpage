import React from "react";
import Image from "next/image";
import styles from "../../styles/HeroSec.module.css";
import FormPopUP from "../formPopup/FormPopUP";

function HeroSec() {
  return (
    <div className="containerr">
      <div className={`${styles.row} ${styles.marginTop} `}>
        <div className="">
          <div className=" d-lg-block d-md-block d-sm-block d-flex">
            <div className="">
              <h1 className={styles.heading}>It’s Asim Naveed,</h1>
              <h1 className={styles.heading1}>An Internet Entrepreneur & Investor</h1>
            </div>
            <div className={` ${"d-lg-none d-md-none d-sm-none d-block"} ${styles.heroSectionBtnDivSize} `}>
              <a
                href=""
                className={` ${"btn btn-default btn-rounded mb-4 p-0"} ${styles.heroSectionImg} `}
                data-bs-toggle="modal"
                data-bs-target="#modalContactForm"
              >
                <Image
                  src="/pitchYourIdeaBTN.png"
                  width="101"
                  height="101"
                  className={styles.imgHover}
                ></Image>
              </a>
            </div>
          </div>
          <p className={styles.heroPera}>
            A simple human being but with a curious mind, I love experimenting
            with tech ideas, spending time on them is my favourite hobby,
            Sometimes I write, sometimes I sing, along with playing with
            inventions.
          </p>
        </div>
        <div className={` ${" d-lg-flex d-md-flex d-sm-flex d-none flex-column-reverse"} ${styles.heroSectionBtnDivSizeWebView} `}>
          <a
            href=""
            className="btn px-0 btn-default btn-rounded"
            data-bs-toggle="modal"
            data-bs-target="#modalContactForm"
          >
            <Image
              src="/pitchYourIdeaBTN.png"
              width="132"
              height="132"
              className={styles.imgHover}
            ></Image>
          </a>
        </div>
      </div>
      <FormPopUP />
    </div>
  );
}

export default HeroSec;
