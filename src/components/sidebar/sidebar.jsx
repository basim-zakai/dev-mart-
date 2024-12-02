import React, { useContext } from 'react'
import styles from './sidebar.module.scss'
import { sidebarContext } from '../../context/sidebar.context';

export const Sidebar = () => {
    const { is_sidebar, sidebarOpen,sidebarClose } = useContext(sidebarContext);
    const isSidebar_active = is_sidebar? `${styles.sidebar_container} ${styles.active}`:`${styles.sidebar_container}`

  return (
    <>
    <aside className={isSidebar_active}>
        <span onClick={()=>sidebarClose()}>X</span>

    </aside>
    </>
  )
}
