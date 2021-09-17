import React from 'react'
import styles from '../styles/service.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faBullhorn, faBus, faCalendar, faCube, faGlobe, faGlobeAsia, faVectorSquare } from '@fortawesome/free-solid-svg-icons'

function Service() {
    return (
        <>
         <div className="container-fluid" id="service">
             <div className="container text-center mt-5 mb-5 ">
                <h5 className={styles.subhead}>WHAT WE DO</h5>
                <h1 className={styles.head}>We’ve got everything you need to launch and grow your business</h1>
                <div className={styles.underline}></div>
                <div ></div>
                </div>
             <div className={`row ${styles.work}`}>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-1"><span className={styles.icons}><FontAwesomeIcon icon={faBrush}/></span></div>
                        <div className="col mt-2 mx-3"><span className={styles.title}>Brand Identity</span></div>
                    </div>
                
                    <p className={styles.description}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-1"><span className={styles.icons}><FontAwesomeIcon icon={faVectorSquare}/></span></div>
                        <div className="col mt-2 mx-3"><span className={styles.title}>Illustration</span></div>
                    </div>
                
                    <p className={styles.description}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-1"><span className={styles.icons}><FontAwesomeIcon icon={faBullhorn}/></span></div>
                        <div className="col mt-2 mx-3"><span className={styles.title}>Marketing</span></div>
                    </div>
                
                    <p className={styles.description}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-1"><span className={styles.icons}><FontAwesomeIcon icon={faGlobeAsia}/></span></div>
                        <div className="col mt-2 mx-3"><span className={styles.title}>Web Design</span></div>
                    </div>
                
                    <p className={styles.description}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-1"><span className={styles.icons}><FontAwesomeIcon icon={faCube}/></span></div>
                        <div className="col mt-2 mx-3"><span className={styles.title}>Packaging Design</span></div>
                    </div>
                
                    <p className={styles.description}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-1"><span className={styles.icons}><FontAwesomeIcon icon={faCalendar}/></span></div>
                        <div className="col mt-2 mx-3"><span className={styles.title}>Web Development</span></div>
                    </div>
                
                    <p className={styles.description}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</p>
                </div>
             </div>
            </div>   
        </>
    )
}

export default Service
