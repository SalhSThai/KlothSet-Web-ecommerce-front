import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchShow } from '../../reduxStore/SearchSlice';
import ModalSearch from '../reuseComponent/ModalSearch';
import SearchBar from './SearchBar'

export default function SearchModal() {

  const state = useSelector(state => state.search);
  const dispatch = useDispatch()
  return (
    <div >
      <ModalSearch custom
        title={<SearchBar></SearchBar>}
        status={state.showSearch}
        close={e => { dispatch(searchShow(false)) }}
        show={e => { dispatch(searchShow(true)); }}></ModalSearch>
    </div>
  )
}
