import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductView() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()

  return (
    <div>ProductView</div>
  )
}
