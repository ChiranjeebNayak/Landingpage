import { faDribbble, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/contact.module.css";
function Contact() {
    return (
        <>
            <div className={`container-fluid ${styles.bgblack} `}>
                <div className="container mt-5">
                    <h5 className={styles.subhead}>CONTACT US</h5>
                    <h1 className={styles.head}>
                        Reach out for a new project or just say hello
                    </h1>
                    <div className={`row  mx-5 mt-5  ${styles.contact}`}>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <h5 className={styles.title}>SEND US A MESSAGE</h5>
                            <div className="mt-5 mb-5">
                                <form>
                                    <div className=" mb-4">
                                        <input
                                            type="text"
                                            id="form4Example1"
                                            className={`${styles.input}`}
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className=" mb-4">
                                        <input
                                            type="email"
                                            id="form4Example2"
                                            className={`${styles.input}`}
                                            placeholder="Your Email"
                                        />
                                    </div>

                                    <div className=" mb-4">
                                        <input
                                            type="text"
                                            id="form4Example1"
                                            className={`${styles.input}`}
                                            placeholder="Subject"
                                        />
                                    </div>

                                    <div className=" mb-4">
                                        <textarea
                                            className={`${styles.textarea}`}
                                            id="form4Example3"
                                            rows="4"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className={`${styles.btn}`}>
                                        SUBMIT
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h5 className={styles.title}>CONTACT INFO</h5>
                            <div className="mt-5 mb-5">
                                <h4 className={styles.contacttile}>Where to Find Us</h4>
                                <p className={styles.contactdesc}>1600 Amphitheatre Parkway Mountain View, CA<br/> 94043 US</p>
                            </div>
                            <div className="mt-5 mb-5">
                                <h4 className={styles.contacttile}>Email Us At</h4>
                                <p className={styles.contactdesc}>contact@glintsite.com
                                    info@glintsite.com</p>
                            </div>
                            <div className="mt-5 mb-5">
                                <h4 className={styles.contacttile}>Call Us At</h4>
                                <p className={styles.contactdesc}>Phone: (+63) 555 1212<br/>
                                    Mobile: (+63) 555 0100<br/>
                                    Fax: (+63) 555 0101</p>
                            </div>
                            <div className="mt-5 mb-5">
                            <FontAwesomeIcon className={styles.icon} icon={faFacebook}/>
                            <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
                            <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
                            <FontAwesomeIcon className={styles.icon} icon={faDribbble}/>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    );
}

export default Contact;
