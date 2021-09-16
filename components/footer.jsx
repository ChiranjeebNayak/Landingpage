import React from "react";
import styles from "../styles/footer.module.css"
function Footer() {
  return (
    <>
      <footer className={`container-fluid ${styles.footer}`}>
        <div  className="container">
        <div className={`row text-muted`}>
          <div className={`col-lg-6 col-md-12 col-sm-12  ${styles.layout}`}>
            <h1 className={styles.logo}>Glint<span>.</span></h1>
            <p className={styles.desc}>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.</p>
          </div>
          <div className={`col-lg-6 col-md-12 col-sm-12 ${styles.layout} `}>
            <h5 className={styles.title}>Get Notified</h5>
            <p className={styles.desc}>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>
            <form>
            <input type="text" className={styles.input} placeholder="Email Address"/>
            <button className={styles.btn}>Subscribe</button>
          </form>
          </div>
        </div>
        <div className="row  ">
          <h4 className={styles.copyright}>© Copyright Glint 2022 Site | Template by <span className={styles.brand}>Colorlib</span></h4>
         
        </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
