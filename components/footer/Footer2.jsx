import React from "react";
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF , FaLinkedinIn} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import styles from "../../styles/Footer2.module.css";

function Footer2() {
  return (
    <div className={styles.footerbg}>
      <div className={styles.containerFooter2}>
        <div className="d-flex justify-content-between">
          <ul className="d-flex gap-4 p-0">
            <li className="list-unstyled">
              <a
                className={`${"text-decoration-none pb-2  d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"} ${styles.linkTextColor} ${styles.linkTextColorLinkedin} ${styles.custmBorder1}`}
                href=""
              >
                Linkedin
              </a>
              <FaLinkedinIn className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`} />
            </li>
            <li className="list-unstyled">
              <a
                className={`${"text-decoration-none pb-2  d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"}  ${styles.linkTextColor} ${styles.linkTextColorTwiter} ${styles.custmBorder2} `}
                href=""
              >
                Twitter
              </a>
              <AiOutlineTwitter className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`}/>
            </li>
            <li className="list-unstyled">
              <a
                className={`${"text-decoration-none pb-2  d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"} ${styles.linkTextColor} ${styles.linkTextColorFacebook} ${styles.custmBorder3} `}
                href=""
              >
                Facebook
              </a>
              <FaFacebookF className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`}/>
            </li>
            <li className="list-unstyled">
              <a
                className={`${"text-decoration-none pb-2 d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"} ${styles.linkTextColor} ${styles.linkTextColorYoutube} ${styles.custmBorder4} `}
                href=""
              >
                Youtube
              </a>
              <BsYoutube className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`}/>
            </li>
          </ul>
          <div>
            <ul>
              <li className="list-unstyled">
                <a className={` ${"text-decoration-none"} ${styles.linkTextColor}`} href="">
                  AsimNaveed.com{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
