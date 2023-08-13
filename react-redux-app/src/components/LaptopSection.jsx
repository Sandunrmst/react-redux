import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLaptop, laptopSliceSelector } from '../store/reducers/laptopSlice'
import { nanoid } from '@reduxjs/toolkit'

const LaptopSection = () => {

    const laptopList = useSelector(laptopSliceSelector)
    const dispatch = useDispatch()

    const price = useRef()
    const cpu = useRef()
    const gen = useRef()
    const ram = useRef()
    const hdd = useRef()

    const addLaptopHandle = () => {
        dispatch(addLaptop({
            
            id: nanoid(),
            price: price.current.value,
            spec: {
                cpu:cpu.current.value,
                gen:gen.current.value,
                ram:ram.current.value,
                hdd:hdd.current.value
            }
        }))
    }

  return (
    <div className='lap'>
        <h1>Laptop Section</h1>

        <h2>Add Laptop Details</h2>
        <div className='add-laptop'>
            <input ref={price} type='text' placeholder='Enter Price'/>
            <input ref={cpu} type='text' placeholder='Enter CPU'/>
            <input ref={gen} type='text' placeholder='Enter Gen'/>
            <input ref={ram} type='text' placeholder='Enter Ram'/>
            <input ref={hdd} type='text' placeholder='Enter HDD'/>

            <button onClick={addLaptopHandle} className='action-button'>Add Item</button>
        </div>

        <h2>Laptop List</h2>
        <div>{laptopList.map((ele, index) => 

            <div key={index}>
                <h3>{ele.price}</h3> 
                <p>{ele.spec.cpu} | {ele.spec.spec} | {ele.spec.hdd} | {ele.spec.ram}</p>
            </div>
            
            )}
            
        </div>
    </div>
  )
}

export default LaptopSection