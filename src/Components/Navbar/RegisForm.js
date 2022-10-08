import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../reduxStore";
import { login, register, showLogin,showRegister, thunkRegister } from "../../reduxStore/AuthSlice";
import {loading} from '../../reduxStore/LoadingSlice';
import toastify from '../../Toast/toastify';
import TextInputBar from "../item/TextInputBar";

function RegisForm(props) {
  const initialState = {
    username:'',
    password:'',
    cpassword:'',
    email:'',
    phonenumber:'',
    fname:'',
    lname:'',
  }
  const [registerForm, setRegister] = useState(initialState)

  const dispatch = useDispatch()
  
  const onSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(thunkRegister(registerForm));
    } catch (error) {
      toastify();
    }
    finally{
      setRegister(initialState);
      dispatch(showLogin(true));
      dispatch(showRegister(false));
    }
  }

  return (
    <form  className="flex flex-col  items-start" onSubmit={onSubmit}>

      <TextInputBar label="Username" id="username" value={registerForm?.username} onChange={e => setRegister({ ...registerForm, username: e.target.value })}/>
      <TextInputBar label="Password" id="password" type="password" value={registerForm?.password} onChange={e => setRegister({ ...registerForm, password: e.target.value })}/>
      <TextInputBar label="Confirm Password" id="cpassword" type="password" value={registerForm?.cpassword} onChange={e => setRegister({ ...registerForm, cpassword: e.target.value })}/>
      <TextInputBar label="Your Email" id="email" type="email" value={registerForm?.email} onChange={e => setRegister({ ...registerForm, email: e.target.value })}/>
      <TextInputBar label="Phone Number" id="phonenumber"  value={registerForm?.phonenumber} onChange={e => setRegister({ ...registerForm, phonenumber: e.target.value })}/>

      <Button type="submit" outline={true} gradientDuoTone="tealToLime"><div >SUBMIT</div></Button>
    </form>

  )


}

export default RegisForm