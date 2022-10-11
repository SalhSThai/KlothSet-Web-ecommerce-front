import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Start from '../../Asset/Start'

export default function ReviewStar(props) {
    const {starPoint=0,id,className} = props;
    const [reviewStart, setReviewStar] = useState([])
    const state = useSelector(state => state)
    const arr = new Array(5).fill(false)
    useEffect(() => {
        const newArr  = arr.map((i,dex)=> dex <=( starPoint-1) ? true:false)
        setReviewStar([...newArr])
    }, [starPoint])

    return (
        <div className={`"mt-2.5 mb-5 flex items-center" ${className}`}>
            <Start star={reviewStart[0]}/>
            <Start star={reviewStart[1]}/>
            <Start star={reviewStart[2]}/>
            <Start star={reviewStart[3]}/>
            <Start star={reviewStart[4]}/>
            <span className={`mr-2 ml-3 rounded  px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800 ${starPoint>=4?" bg-yellow-200 ":" bg-blue-100 "}`}>{starPoint}</span>
        </div>
    )
}
