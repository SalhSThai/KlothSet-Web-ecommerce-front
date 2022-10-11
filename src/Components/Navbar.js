import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../Asset/Logo'
import FunctionFetch from '../function/FunctionFetch'
import { thunkAllProduct } from '../reduxStore/DataSlice'
import { thunkAuthShopData } from '../reduxStore/ShopSlice'
import CartDropdown from './Navbar/CartDropdown'
import LoginDropdown from './Navbar/LoginDropdown'
import MenuSideBar from './Navbar/MenuSideBar'
import NotificationDropdown from './Navbar/NotificationDropdown'
import SearchBar from './Navbar/SearchBar'
import SearchModal from './Navbar/SearchModal'
import Spinner from './reuseComponent/Spinner'
function Navbar() {
    const state = useSelector(state => state.loading);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(thunkAllProduct());
      }, [])
    return (
        <>
        {state.loadingShow?<Spinner/>:null}
            <div className='flex flex-col justify-center items-center w-screen '>
                <nav className="flex justify-center items-center shadow w-full h-[120px] " >
                    <div className='flex justify-between items-center h-full w-5/6'>
                        <MenuSideBar/>
                        <Link to="/">
                            <div className='absolute top-0 left-1/2 -translate-x-2/4  w-[100px] h-[100px]'>
                                <Logo/>
                                <h3 className="text-center">Kloth-set</h3>
                            </div>
                        </Link>
                        <div className='flex mr-5'>
                            <CartDropdown />
                            <NotificationDropdown />
                            <LoginDropdown />
                        </div>
                    </div>
                </nav>
                <SearchModal />

            </div>
            <FunctionFetch/>
        </>
    )
}
export default Navbar