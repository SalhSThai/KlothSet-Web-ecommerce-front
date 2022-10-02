import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { show } from '../reduxStore/AuthSlice'
import CartDropdown from './Navbar/CartDropdown'
import LoginDropdown from './Navbar/LoginDropdown'
import NotificationDropdown from './Navbar/NotificationDropdown'
import SearchModal from './Navbar/SearchModal'
function Navbar() {


    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <nav className="navbar shadow w-full h-[120px] flex justify-between items-center" >
                    <i className="fa-solid fa-bars ml-10 fa-2xl"></i>
                    <Link to="/">
                        <div className='absolute top-0 left-1/2 -translate-x-2/4  flex-row justify-between items-center text-center '>
                            <img src="images/logo.svg" alt='Logo' />
                            <h3>Kloth-set</h3>
                        </div>
                    </Link>
                    <div className='flex mr-5'>
                        <CartDropdown />
                        <NotificationDropdown />
                        <LoginDropdown />
                    </div>
                </nav>
                <SearchModal />

            </div>
        </>
    )
}
export default Navbar