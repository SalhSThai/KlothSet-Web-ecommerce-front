import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown, { DropdownItem } from '../reuseComponent/Dropdown';

export default function NotificationDropdown(props) {
    const {noti = ['noti1','noti2']} = props;
  return (
    <div>
         <Dropdown title={<i className="fa-regular fa-bell fa-2xl  m-5"></i>} arrow={false} size ={"140px"}>

                <DropdownItem><Link>LOGIN</Link></DropdownItem>
                <DropdownItem><Link>REGISTER</Link></DropdownItem>
                {noti.map(i=><DropdownItem key={i}>{i}</DropdownItem>)}
            </Dropdown>
    </div>
  )
}
