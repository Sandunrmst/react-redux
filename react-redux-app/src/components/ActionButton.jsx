import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/Store'
import { decrement, increment } from '../store/reducers/numberSlice'

const ActionButton = () => {

  const number = useSelector(store => store.numberSlice.number)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{number}</h2>
     <button onClick={()=>dispatch(increment(2))} className='action-button'>Increment</button>
     <button onClick={()=>dispatch(decrement(5))} className='action-button space'>Dicrement</button>
    </div>
  )
}



export default ActionButton