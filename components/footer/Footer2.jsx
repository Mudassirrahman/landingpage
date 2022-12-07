import React from "react";
import Link from "next/link";
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
              <Link
                className={`${"text-decoration-none pb-2  d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"} ${styles.linkTextColor} ${styles.linkTextColorLinkedin} ${styles.custmBorder1}`}
                href="https://www.linkedin.com/in/asemnaveed/"  target="_blank"
              >
                Linkedin
              </Link>
              <Link href="https://www.linkedin.com/in/asemnaveed/"  target="_blank">
              <FaLinkedinIn className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`} />
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                className={`${"text-decoration-none pb-2  d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"}  ${styles.linkTextColor} ${styles.linkTextColorTwiter} ${styles.custmBorder2} `}
                href="https://twitter.com/asemnaveed"  target="_blank"
              >
                Twitter
              </Link>
              <Link href="https://twitter.com/asemnaveed"  target="_blank">
              <AiOutlineTwitter className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`}/>
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                className={`${"text-decoration-none pb-2  d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"} ${styles.linkTextColor} ${styles.linkTextColorFacebook} ${styles.custmBorder3} `}
                href="https://web.facebook.com/asemnaveed"  target="_blank"
              >
                Facebook
              </Link>
              <Link href="https://web.facebook.com/asemnaveed"  target="_blank">
              <FaFacebookF className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`}/>
              </Link>
            </li>
            <li className="list-unstyled">
              <Link
                className={`${"text-decoration-none pb-2 d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none"} ${styles.linkTextColor} ${styles.linkTextColorYoutube} ${styles.custmBorder4} `}
                href="https://www.youtube.com/@asemnaveed"  target="_blank"
              >
                Youtube
              </Link>
              <Link href="https://www.youtube.com/@asemnaveed"  target="_blank">
              <BsYoutube className={`${"d-xl-none d-lg-none d-md-none d-sm-none d-block"} ${styles.iconsSizeAndColor}`}/>
              </Link>
            </li>
          </ul>
          <div>
            <ul>
              <li className="list-unstyled">
                <Link className={` ${"text-decoration-none"} ${styles.linkTextColor}`} href="">
                  AsimNaveed.com{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
