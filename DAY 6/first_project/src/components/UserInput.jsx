import React from 'react'
import { useState } from 'react'

const UserInput = () => {
  const [label, setLabel] = useState('')
  const [i, setI] = useState(0)
  const [name, setName] = useState('')

  const submitHandeler = (e) => {
    e.preventDefault()
    setI(i + 1)
    console.log("Name: ", name)
    setLabel(name)
    setName('')
  }

  return (
    <>
      <div className="form-div">

        <form onSubmit={(e) => {
          submitHandeler(e)
        }}>
          <input className="color-black"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
            className=""
            placeholder='Enter your name' id="" />
          <button className='btn'>Submit {i}</button>
          <label htmlFor="">
            Enterd name is: {label}
          </label>
        </form>
      </div>
    </>
  )
}

export default UserInput