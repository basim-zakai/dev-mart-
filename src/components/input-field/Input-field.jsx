import React from "react";
import styles from "./input-field.module.scss";

const Inputfield = (props) => {
  return (
    <div>
      <div className={styles.input_container} style={props.styles}>
        {props.isIcon && <span>{props.icon}</span>}

        <div className={styles.input_field}>
          <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            onClick={props.onClick}
            
          />
        </div>
      </div>
      {props.required && (
        <div>
          <small className={styles.input_err}>
            {props.err_msg ?? "required"}
          </small>
        </div>
      )}
    </div>
  );
};

export default Inputfield;
