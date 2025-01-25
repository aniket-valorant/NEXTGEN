import React from 'react'


const Calculator = () => {
  return (
    <div >
        <h1 className='bg-emerald-600 text-center text-white text-3xl p-3 font-bold'>Claculator</h1>
        
        <div className='border flex items-center justify-center h-48 flex-col'>
            <input className='px-4 py-3 my-4' placeholder='Enter First Value' type="" />
            <input className='px-4 py-3 my-4' placeholder='Enter Second Value' type="" />
            <h1 id='ab'>Prem</h1>

        </div>
    </div>
  )
}

export default Calculator