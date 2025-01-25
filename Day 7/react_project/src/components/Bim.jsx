import React, { useState } from 'react'

const Bim = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')

    const handleClick = (e) => {
        let h = (height*0.01)

        setBmi((weight / (h * h)).toFixed(2)) 
    }
  return (
    <div >
        <h1 className='text-3xl text-center py-4 px-4 font-bold bg-emerald-700 text-gray-100'>Body mass index</h1>
        <div className="flex flex-col items-center justify-start px-3 py-3 bg-white w-60 m-4 ml-64">
            <input 
                type="text" className='border border-slate-800 py-3 px-4 rounded m-3' placeholder='Weight in Kg' 
                name="name"
                value=  {weight}
                onChange={(e) =>
                    setWeight(e.target.value)
                } />
            <input type="text" className='border border-slate-800 py-3 px-4 rounded m-3' placeholder='Height in cm' name="name" 
                value={height}
                onChange={(e) =>
                    setHeight(e.target.value)}
            />
            <button className='bg-sky-700 px-4 py-3 rounded text-white hover:bg-sky-800' onClick={handleClick} >Calculate</button>
            <label className='mt-4 font-bold'>Result: {bmi} kg/m^m </label>
        </div>
    </div>
  )
}

export default Bim