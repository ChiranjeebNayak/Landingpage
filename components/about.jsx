import React from 'react'
import styles from '../styles/Helllo.module.css'
function About() {
    return (
        <>
            <div className={`container-fluid ${styles.bggreen}`} id="about">
                <div className="container" >
                    <div className="row text-center pt-4">
                        <span className={styles.subhead}>HELLO THERE</span>
                        <h1 className={` ${styles.head}`}><span className={` py-5 ${styles.underline}`}>We Are Glint</span></h1>
                        <p className={`${styles.description}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>

                    </div>
                    <div className="row py-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <div className={styles.sideline}>
                        <span className={styles.count}>127</span>
                        <h2 className={styles.counthead}>Awards Received</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <div className={styles.sideline}>
                        <span className={styles.count}>1505</span>
                        <h2 className={styles.counthead}>Cups of Coffee</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <div className={styles.sideline}>
                        <span className={styles.count}>109</span>
                        <h2 className={styles.counthead}>Projects Completed</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <div className={styles.sideline}>
                        <span className={styles.count}>102</span>
                        <h2 className={styles.counthead}>Happy Clients</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
