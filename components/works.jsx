import React from "react";
import Image from "next/image";
import styles from "../styles/works.module.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img6.jpg";
import img6 from "../img/img5.jpg"
function Works() {
  return (
    <>
      <div className={`container-fluid mt-5 mb-5 ${styles.work}`} id="works">
        <div className={`container text-center`}>
          <div className={` mt-5 mb-5`}>
            <p className={styles.subhead}>RECENT WORKS</p>
            <p className={styles.head}>
              We love what we do, check out some of our latest works
            </p>
            <hr className={`  ${styles.underline}`}></hr>
          </div>
        </div>
      </div>
      <div className={`row ${styles.images}`}>
        <div className={`col-lg-6 col-md-6 col-sm-12`}>
        <div className={styles.img1}>
          <Image src={img1} height={950}></Image>
         </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className={styles.img2}>
        <Image src={img2} height={2400}></Image>
         </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className={styles.img3}>
        <Image src={img3} height={2050}></Image>
         </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className={styles.img4}>
        <Image src={img4} height={2050}></Image>
         </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className={styles.img5}>
        <Image src={img5} height={2450}></Image>
         </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className={styles.img6}>
        <Image src={img6} height={1650}></Image>
         </div>
        </div>
      </div>
    </>
  );
}

export default Works;
