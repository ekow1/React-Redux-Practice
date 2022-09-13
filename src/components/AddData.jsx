import React from 'react'
import { addData } from '../redux/actions'
import { useDispatch } from 'react-redux'


function AddData() {
  const dispatch = useDispatch()

  const add = (e) => {
    e.preventDefault()

  const newData = {
    name: 'Enoch',
    email : 'gmail',
    location : 'oyarifa'
    
    }


    dispatch(addData(newData))

    console.log(newData)
  }

   

    
  return (
    <div>

      



      <button onClick={add}>add</button>


    </div>
  )
}

export default AddData