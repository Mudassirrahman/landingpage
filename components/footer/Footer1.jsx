import React from 'react'
import styles from "../../styles/Footer1.module.css";

function Footer1() {
  return (
    <div className={styles.marginTopFoo}>
    <div className={`" px-4 py-lg-5 py-md-5 py-sm-5 py-0 text-center" ${styles.footerbg} `}>
      <div className="py-5">
        <div className="col-lg-6 py-lg-3 py-md-3 py-sm-3 py-0 mx-auto">
          <p className={`" px-4 mb-5 tColor" ${styles.footerHeading} ${styles.tColor} `}>
            Got an idea? I am open to meet creative minds and
            collaborations.{" "}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className={`${"btn btn-lg px-4"} ${styles.btnbg1}`}
            >
            <a href="" class="text-decoration-none text-white" data-bs-toggle="modal" data-bs-target="#modalContactForm">
             Pitch your Idea </a>
            </button>
            <button type="button" className={`${"btn btn-lg px-4"} ${styles.btnbg2}`}>
            Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer1