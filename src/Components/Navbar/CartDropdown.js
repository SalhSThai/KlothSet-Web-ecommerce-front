import { Link } from 'react-router-dom';
import Dropdown, { DropdownItem } from '../reuseComponent/Dropdown';

export default function CartDropdown(props) {
const {product = ['product1','product2']} = props;
    return (
        <div>
             <Dropdown title={<i className="fa-solid fa-cart-shopping fa-2xl m-5"></i>} arrow={false} size ={"140px"}>
    
                    <DropdownItem><Link>LOGIN</Link></DropdownItem>
                    <DropdownItem><Link>REGISTER</Link></DropdownItem>
                    {product.map(i=><DropdownItem key={i}>{i}</DropdownItem>)}
                </Dropdown>
        </div>
      )
}
