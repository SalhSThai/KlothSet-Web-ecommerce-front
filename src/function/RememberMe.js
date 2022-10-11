import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thunkRemember } from '../reduxStore/AuthSlice';

export default function RememberMe() {
    // const id = useSelector(state => state?.userInfo?.id);
    const dispatch = useDispatch() 
    useEffect(()=>{
        dispatch(thunkRemember()) ;
    },[])
  return (
    <div></div>
  )
}
