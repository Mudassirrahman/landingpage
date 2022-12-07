import React from "react";
import PortFolio1ImgsSlider from "../portFolio1/PortFolio1ImgsSlider";
import styles from "../../styles/PortFolio3.module.css";
import Link from "next/link";

function PortFolio3() {
  return (
    <>
      <div className="containerr">
        <div className={styles.marginTop}>
          <div className="row justify-content-between">
            <div className="col-lg-7 col-md-6 col-sm-12 col-12">
              <h1 className={`${styles.rev_block} ${styles.portFolio3Degit}`}>03</h1>
              <h1
                className={`${styles.rev_blockMainHeading} ${styles.portFolioMainHeading}`}
              >
                YUREK
              </h1>
              <h1
                className={`${styles.rev_blockSubHeading} ${styles.portFolioSubHeading} `}
              >
                Fashion-Wear
              </h1>

              <p className={` ${styles.rev_blockPera} ${styles.portFolio3Pera}`}>
              Straight from the heart, for the love of style - YUREK is a
              brand that hopes to cater to all your styling fix, last-
              minute picks, and basic lifestyle kicks.
              </p>
              <div className={` ${"d-flex"} ${styles.rev_blockLink} ${styles.portFolio3Link}`}>
                <div className={styles.linkCricle}></div>
                <div>
                <h4 className={styles.portFolio3Link}><Link  className={styles.portFolio3Link} href="https://yurek.pk"  target="_blank">Visit Website</Link></h4>
                </div>
                
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-0 mt-sm-3 mt-5">
              {/* <div className="frame"></div> */}
              <PortFolio1ImgsSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortFolio3;
