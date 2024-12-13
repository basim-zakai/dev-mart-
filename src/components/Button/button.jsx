import styles from "./button.module.scss";

import React from 'react'

const Login_Button = (props) => {
  return (
    <button 
     className={styles.button_container}
      onClick={props.onClick}
      disabled={props.disabled}
    >
        {props.loading? <>  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">  Loading...</span> </> : props.children}

    
    </button>
    
  )
}

export default Login_Button