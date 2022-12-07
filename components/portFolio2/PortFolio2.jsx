import React from "react";
import Link from "next/Link";
import Deck from "./Deck"
import PortFolio1ImgsSlider from "../portFolio1/PortFolio1ImgsSlider"
import styles from "../../styles/PortFolio2.module.css"

function PortFolio2() {
  return (
    <div className="containerr">
    <div className={styles.marginTop}>
      <div className="row justify-content-between">
        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
          <h1 className={`${styles.rev_block} ${styles.portFolio2Degit}`}>
            02
          </h1>
          <p className={`${styles.rev_blockMainHeading} ${styles.portFolioMainHeading}`}>Recrutability</p>
          <h1
            className={`${styles.rev_blockSubHeading} ${styles.portFolioSubHeading} `}
            // style={{ color: "#082009", marginTop: "2rem" }}
          >
           Portfolio-as-a-Service 
          </h1>

          <p className={` ${styles.rev_blockPera} ${styles.portFolio2Pera}`}>
           Recrutability is a portfolio-as-a-service platform that 
           allows freelancers & independent professionals to build a 
           portfolio site with us and for the recruiter to discover — 
           filter, and recruit the best portfolio to their team.
          </p>
          <div className={` ${"d-flex"} ${styles.rev_blockLink} ${styles.portFolio2Link}`}>
                <div className={styles.linkCricle}></div>
                <div>
                <h4 className={styles.portFolio2Link}><Link className={styles.portFolio2Link} href="https://recrutability.com">Visit Website</Link></h4>
                </div>
                </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-0 mt-sm-3 mt-5 ">
          {/* <div className="">
            <Deck />
          </div> */}
          <PortFolio1ImgsSlider />
        </div>
      </div>
    </div>
    </div>
  );
}

export default PortFolio2;
