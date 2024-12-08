import React from 'react'
import { Pagelayout } from './page-layout'
import authBanner from '../../assets/img/auth-bannaer.png';
import styles from './layout.module.scss'; 

export const Authlayout = ({children}) => {
  return (
    <Pagelayout>
        <div className="container-fluid px-0">
                <div className="row m-0 p-0">
                    <div className="col-6 m-0 p-0 d-lg-block d-none">
                        <figure className={styles.auth_banner_img}>
                            <img src={authBanner} alt="" />
                        </figure>
                    </div>
                    <div className="col-lg-6 col-sm-10 col-11 mx-auto">
                        <div className={styles.form_wrapper}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
    </Pagelayout>
  )
}
