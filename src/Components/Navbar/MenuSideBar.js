import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showMenu } from '../../reduxStore/MenuSlice';
import Drawer, { SideBarItem } from '../reuseComponent/Drawer';

export default function MenuSideBar(props) {
  const state = useSelector(state => state.menu);
  const dispatch = useDispatch()
  return (
    <div>
      <Drawer title={<i className="fa-solid fa-bars ml-10 fa-2xl"></i>} 
      arrow={false} 
      size={"140px"} 
      status={state.showMenu} 
      close={e => dispatch(showMenu(false))}
      show={e => dispatch(showMenu(true))}>
        <SideBarItem><Link>MARKET</Link></SideBarItem>
        <SideBarItem><Link>COMMU</Link></SideBarItem>
        <SideBarItem><Link>STYLE</Link></SideBarItem>
        <SideBarItem><Link>THEME</Link></SideBarItem>
        <SideBarItem><Link>GUILD</Link></SideBarItem>
      </Drawer>
    </div>
  )
}
