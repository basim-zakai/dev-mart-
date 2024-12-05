import React, { useContext } from 'react'
import styles from './sidebar.module.scss'
import { sidebarContext } from '../../context/sidebar.context';
import { RxCross1 } from 'react-icons/rx';
import { GlobalSearch } from '../globalsearch/global-search';
import { Cart } from '../Cart/cart';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    const { is_sidebar, sidebarOpen,sidebarClose } = useContext(sidebarContext);
    const isSidebar_active = is_sidebar? `${styles.sidebar_container} ${styles.active}`:`${styles.sidebar_container}`

  return (
    <>
    <aside className={isSidebar_active}>
        <span className={`${styles.icon}`} onClick={()=>sidebarClose()}><RxCross1></RxCross1></span>
        <div className={styles.sidebar_content_container}>

<div className='me-3'>
    <div className={styles.global_search_wrapper}><GlobalSearch></GlobalSearch></div>
    <div className={styles.shopping_cart_container}><h5>My Shopping</h5>
        <Cart></Cart>
    </div>
</div>

<div className={styles.nav_link_container}>
    <ul>
        <li><NavLink to='/' className={`${styles.nav_link_item} nav-link active`} >Home</NavLink></li>
        <li><NavLink to='/contact' className={`${styles.nav_link_item} nav-link active`} >Contact</NavLink></li>
        <li><NavLink to='/about' className={`${styles.nav_link_item} nav-link active`} >About</NavLink></li>
        <li><NavLink to='/signup' className={`${styles.nav_link_item} nav-link active`} >SignUp</NavLink></li>
      
    </ul>
</div>
</div>

    </aside>
    </>
  )
}
