import React, { useContext } from 'react'
import  styles  from "./navbar.module.scss";
import SearchIcon from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/cart.svg"; 
import { NavLink } from 'react-router-dom';
import { Sidebar } from '../sidebar/sidebar';
import { sidebarContext } from '../../context/sidebar.context';

export const Navbar = () => {
    // const  [Is_Sidebar,sidebarOpen,sidebarClose] = useContext(sidebarContext)
    const { is_sidebar, sidebarOpen } = useContext(sidebarContext);

    
        return (<>
        <Sidebar></Sidebar>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary${styles.app_navbar_container}`}>
    <div className="container">
      <a className="navbar-brand" href="#">Dev Mart</a>
      <button className="navbar-toggler" type="button" onClick={()=> sidebarOpen()} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-none   " id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item mx-3">
            <NavLink to = '/' className={`${styles.nav_link_item} nav-link active fw-semibold`}> Home</NavLink>
          </li>
          <li className="nav-item mx-3">
          <NavLink to = '/' className={`${styles.nav_link_item} nav-link active fw-semibold`}> Contact</NavLink>
          </li>
          <li className="nav-item mx-3">
          <NavLink to = '/' className={`${styles.nav_link_item} nav-link active fw-semibold`}> About</NavLink>
          </li>
          <li className="nav-item mx-3">
          <NavLink to = '/' className={`${styles.nav_link_item} nav-link active fw-semibold`}> Signup</NavLink>
          </li>
         
         
          
        </ul>
        <form className="d-flex" role="search">
            <div className={`${styles.global_search_container} d-flex`}>
          <input className="form-control me-2" type="search" placeholder="What are you lookinng for?" aria-label="Search"/>
          <img src={SearchIcon} className='me-2' alt="" />

            </div>
            <div className={`${styles.shopping_cart_icon} ms-2`}>
                <img src={CartIcon} alt="cart icon" />
            </div>
        </form>
      </div>
    </div>
  </nav>
        </>
  )
}