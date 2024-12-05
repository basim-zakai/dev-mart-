import React from 'react'
import  styles  from "./global-search.module.scss";
import SearchIcon from "../../assets/icons/search.svg";



export const GlobalSearch = () => {
  return (

    <div className={`${styles.global_search_container} d-flex`}>
    <input className="form-control me-2" type="search" placeholder="What are you lookinng for?" aria-label="Search"/>
    <img src={SearchIcon} className='me-2' alt="" />

      </div>
  )
}
