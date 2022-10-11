import { TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Logo from '../Asset/Logo'
import Button from './item/Button'
function Footer() {
    return (<div>
        <div className='w-auto h-auto bg-slate-200 m-10 overflow-hidden'>

            <div className=" bottom-0 grid grid-cols-3 h-auto  w-11/12 " id="contact">
                <div className=" flex flex-col justify-center mx-5  col-span-1">
                    <h1>
                        <hr className=" " /> CONTACT
                    </h1>
                    <p>500 Terry Francois Street
                        San Francisco, CA 94158
                    </p>
                    <p>Tel: 123-456-7890
                        Fax: 123-456-7890
                    </p>
                    <p>info@mysite.com</p>
                    <div className="flex w-full justify-start gap-5">
                        <i className="fa-brands fa-facebook-f" />
                        <i className="fa-brands fa-instagram" />
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-brands fa-youtube" />
                    </div>
                    <p>© 2023 by Personal Life Coach.</p>

                </div>
                <div className='col-span-1'></div>
                <div className="  h-full col-span-1 ">
                    <form>
                        <h1 className='text-lg font-medium'> BECOME OUR PARTNER</h1>
                        <label htmlFor="fname">Enter Your Name :</label> <br />
                        <TextInput className="text_box" type="text" id="fname" name="fname"  placeholder="first name" /> <br />
                        <label htmlFor="email">Enter Your Email:</label> <br />
                        <TextInput className="text_box" type="text" id="email" name="email"  placeholder="e-mail" /> <br />
                        <label htmlFor="subject">Enter Your Subject</label> <br />
                        <Button className="button" type="submit" value="Submit" >SUBMIT</Button>
                    </form>


                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer