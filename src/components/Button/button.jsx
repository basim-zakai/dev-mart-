import styles from "./button.module.scss";

import React from 'react'

const Login_Button = (props) => {
  return (
    <button 
     className={styles.button_container}
      onClick={props.onClick}
      disabled={props.disabled}
    >
        {props.loading? "loading...": props.children}

    
    </button>
    
  )
}

export default Login_Button