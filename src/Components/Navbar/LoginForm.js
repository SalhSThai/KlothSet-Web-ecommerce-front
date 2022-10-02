import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLogin, thunkLogin } from "../../reduxStore/AuthSlice";

function LoginForm(props) {
const initialState = {
  username:'',
  password:'',
};
  const [loginForm, setLoginForm] = useState(initialState);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(thunkLogin(loginForm));
    setLoginForm(initialState);
    dispatch(showLogin(false));
  }

  return (
    <form className="flex flex-col  items-start" onSubmit={onSubmit}>

      <label htmlFor="username">Username or Email</label>
      <input id="username" type="text" value={loginForm?.username} onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}></input>

      <label htmlFor="Password" >Password</label>
      <input id="password" type="password" value={loginForm?.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}></input>

      <Button type="submit" outline={true} gradientDuoTone="tealToLime"><div >SUBMIT</div></Button>
    </form>

  )


}

export default LoginForm