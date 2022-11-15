import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.containerr}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={`${styles.row} ${styles.marginTop}`}>
          <div className="col-lg-9">
            <div className=" d-lg-block d-md-block d-sm-block d-flex">
              <div className="">
                <p>It’s Asim Naveed,</p>
                <h1 className={styles.heading}>An Entrepreneur & Investor.</h1>
              </div>
              <div className="d-lg-none d-md-none d-sm-none d-block mt-4 ms-2">
                <Image
                  src="/Pitch Your Idea.PNG.png"
                  width="88"
                  height="88"
                ></Image>
              </div>
            </div>
            <p className="fs-3">
              Since 2011, I support and assist my clients in execution and
              management of projects. Further I advice them in various
              project-relevant agendas. Added I take responsibility for both
              operational and strategic Project Management.
            </p>
          </div>
          <div className=" col-xl-3 col-lg-2 col-md-2 col-sm-2 col-2 d-lg-flex d-md-flex d-sm-flex d-none flex-column-reverse align-items-end order-lg-1 order-md-1 order-sm-1 order-0">
            <Image
              src="/Pitch Your Idea.PNG.png"
              width="132"
              height="132"
            ></Image>
          </div>
        </div>
      </div>

      {/* <div className="my-5">
       <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 justify-content-between">
        <h1 className=" text-success">
        01
        </h1>
         <p className={styles.rev_block}>Recrutability</p>
          <h1 className={`${styles.rev_block} ${styles.margin}`} style={{color:"#082009"}}>Portfolio Platform</h1>
          <br />
          <br />
          <br />
          <div className="w-50 col-3">
          <p className={`${styles.rev_block} ${styles.margin}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut feugiat nulla. Pellentesque a efficitur quam. Proin eu lobortis augue.</p> 
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
       
        </div>
       </div>
      </div> */}
    </div>
  );
}
