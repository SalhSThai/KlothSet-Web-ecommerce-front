import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../reduxStore";
import { login, register, showLogin,showRegister, thunkRegister } from "../../reduxStore/AuthSlice";

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
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(thunkRegister(registerForm));
    setRegister(initialState);
    dispatch(showLogin(true));
    dispatch(showRegister(false))
  }

  return (
    <form className="flex flex-col  items-start" onSubmit={onSubmit}>

      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={registerForm?.username} onChange={e => setRegister({ ...registerForm, username: e.target.value })}></input>

      <label htmlFor="password" >Password</label>
      <input id="password" type="password" value={registerForm?.password} onChange={e => setRegister({ ...registerForm, password: e.target.value })}></input>

      <label htmlFor="cpassword" >Confirm Password</label>
      <input id="cpassword" type="password" value={registerForm?.cpassword} onChange={e => setRegister({ ...registerForm, cpassword: e.target.value })}></input>

      <label htmlFor="email">Your Email</label>
      <input id="email" type="email" value={registerForm?.email} onChange={e => setRegister({ ...registerForm, email: e.target.value })}></input>

      <label htmlFor="phone" >Phone Number</label>
      <input id="phone" type="text" value={registerForm?.phonenumber} onChange={e => setRegister({ ...registerForm, phonenumber: e.target.value })}></input>

      <label htmlFor="fname">First Name</label>
      <input id="fname" type="text" value={registerForm?.firstName} onChange={e => setRegister({ ...registerForm, firstName: e.target.value })}></input>

      <label htmlFor="lname" >Last Name</label>
      <input id="lname" type="text" value={registerForm?.lastName} onChange={e => setRegister({ ...registerForm, lastName: e.target.value })}></input>
      
      <Button type="submit" outline={true} gradientDuoTone="tealToLime"><div >SUBMIT</div></Button>
    </form>

  )


}

export default RegisForm