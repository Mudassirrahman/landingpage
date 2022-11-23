import React from "react";
import Head from "next/head";
import styles from "../../styles/PortFolio1.module.css";
import PortFolio1ImgsSlider from "./PortFolio1ImgsSlider";

function PortFolio1() {
  return (
    <>
      <Head>
        {/* <script src="sc.js"></script> */}
      </Head>
      <div className="containerr">
        <div className={styles.marginTop}>
          <div className="row justify-content-between">
            <div className="col-lg-7 col-md-6 col-sm-12 col-12">
              <h1 className={`${styles.rev_block} ${styles.portFolio1Degit}`}>01</h1>
              <h1
                className={`${styles.rev_blockMainHeading} ${styles.portFolioMainHeading}`}
              >
                Recrutability
              </h1>
              <h1
                className={`${styles.rev_blockSubHeading} ${styles.portFolioSubHeading} `}
              >
                Portfolio Platform
              </h1>

              <p className={` ${styles.rev_blockPera} ${styles.portFolio1Pera}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut feugiat nulla. Pellentesque a efficitur quam.
                Proin eu lobortis augue.
              </p>
              <div className={` ${"d-flex"} ${styles.rev_blockLink} ${styles.portFolio1Link}`}>
                <div className={styles.linkCricle}></div>
                <div>
                <h4 className={styles.portFolio1Link}>Visit Website</h4>
                </div>
                
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 ">
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
