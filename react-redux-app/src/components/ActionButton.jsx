import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const ActionButton = () => {

  const number = useSelector(store => store.number)
  const dispatch = useDispatch()
  return (
    <div>
     
     <p>My Number {number}</p>
     <button onClick={()=>{
      dispatch({
        type:'increment',
        data: 5
      })
     }} className='action-button'>Increment</button>

     <button onClick={()=> dispatch({
      type:'decrement',
      data: 5
     })} className='action-button'>Decrement</button>

    </div>
  )
}



export default ActionButton