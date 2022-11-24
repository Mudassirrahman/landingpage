import React from "react";
import Deck from "./Deck"
import styles from "../../styles/Home.module.css"

function PortFolio2() {
  return (
    <div className={styles.marginTop}>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <h1 className={`" text-success  " `}>
            {/* <h1 className={`" text-success  " ${styles.rev_block} `}> */}
            02
          </h1>
          <p className={styles.rev_block}>Recrutability</p>
          <h1
            className={`${styles.rev_block} `}
            style={{ color: "#082009", marginTop: "2rem" }}
          >
            Portfolio Platform
          </h1>

          <p
            className={`${styles.rev_block} ${styles.margin}`}
            style={{ width: "50%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut feugiat nulla. Pellentesque a efficitur quam. Proin eu lobortis
            augue.
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
          <div className="">
            <Deck />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio2;
