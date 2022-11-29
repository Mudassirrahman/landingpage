import React from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../styles/PortFolio1.module.css";
import PortFolio1ImgsSlider from "./PortFolio1ImgsSlider";

function PortFolio1() {
  return (
    <>
      <Head>{/* <script src="sc.js"></script> */}</Head>
      <div className="containerr">
        <div className={styles.marginTop}>
          <div className="row justify-content-between">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className="col-lg-7 col-md-12 col-sm-12 col-12"
            >
              <h1 className={`${styles.rev_block} ${styles.portFolio1Degit}`}>
                01
              </h1>
              <h1
                className={`${styles.rev_blockMainHeading} ${styles.portFolioMainHeading}`}
              >
                Mudirr
              </h1>
              <h1
                className={`${styles.rev_blockSubHeading} ${styles.portFolioSubHeading} `}
              >
                Management-as-a-Service
              </h1>

              <p
                className={` ${styles.rev_blockPera} ${styles.portFolio1Pera}`}
              >
                Mudirr gives you access to its pool of techical resources to set
                up, clean up,& easily manage even the most hectic projects,
                communicate plans with your assigned team, and ensure your team
                stays on the same page.
              </p>
              <div
                className={` ${"d-flex"} ${styles.rev_blockLink} ${
                  styles.portFolio1Link
                } ${styles.portFolio1LinkDiv}`}
              >
                <div className={styles.linkCricle}></div>
                <div>
                  <h4 className={styles.portFolio1Link}>Visit Website</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-0 mt-sm-3 mt-4">
              {/* <div className="frame"></div> */}
              <PortFolio1ImgsSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortFolio1;
