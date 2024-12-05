import styles from "./cart.module.scss";
import React from 'react'
import CartIcon from "../../assets/icons/cart.svg"; 

export const Cart = () => {
  return (
    <div className={`${styles.shopping_cart_icon} ms-2`}>
    <img src={CartIcon} alt="cart icon" />
</div>
  )
}
