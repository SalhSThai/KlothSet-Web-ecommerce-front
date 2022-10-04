import { Link } from 'react-router-dom'
import CartDropdown from './Navbar/CartDropdown'
import LoginDropdown from './Navbar/LoginDropdown'
import MenuSideBar from './Navbar/MenuSideBar'
import NotificationDropdown from './Navbar/NotificationDropdown'
import SearchBar from './Navbar/SearchBar'
import SearchModal from './Navbar/SearchModal'
function Navbar() {


    return (
        <>
            <div className='flex flex-col justify-center items-center w-screen '>
                <nav className="flex justify-center items-center shadow w-full h-[120px] " >
                    <div className='flex justify-between items-center h-full w-5/6'>
                        <MenuSideBar/>
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
                    </div>
                </nav>
                <SearchModal />

            </div>
        </>
    )
}
export default Navbar