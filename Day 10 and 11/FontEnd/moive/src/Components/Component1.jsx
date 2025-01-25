import React, { useState } from 'react'
import axios from 'axios'

const Component1 = () => {
  const [moiveName, setMoiveName] = useState('')
  const [hero, setHeroName] = useState('')
  const [heroine, setHeroinName] = useState('')
  const [year, setYear] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(moiveName + hero + heroine, + year)
    try {
       const responce = await axios.post("http://127.0.0.1:3000/addMoiveData",{moiveName, hero, heroine, year})
       console.log("Came from responce : " + responce)
    } catch (error) {
      console.log("Data Post Fail");
    }
  }
  return (
    <div className='flex justify-center  items-center p-10'>
      <form className='p-5 bg-white rounded-md' onSubmit={handleSubmit}>
        <h1 className='text-center text-orange-400 text-3xl mb-4 font-semibold '>Add Movie Detail</h1>
        <div className='mb-4 '>
          <label className='block' >Moive</label>
          <input placeholder='Moive Name' className='w-80 border bg-white rounded-md py-2 px-3' type="text"
            onChange={(e) => setMoiveName(e.target.value)}
          />
        </div>
        <div className='mb-4' >
          <label className='block' >Hero</label>
          <input placeholder='Hero Name' className='w-80 border bg-white rounded-md py-2 px-3' type="text"
            onChange={(e) => setHeroName(e.target.value)}
          />
        </div  >
        <div className='mb-4'>
          <label className='block' >Heroine</label>
          <input placeholder='Heroine Name ' className='w-80 border bg-white rounded-md py-2 px-3' type="text"
            onChange={(e) => setHeroinName(e.target.value)}
          />
        </div>
        <div className='mb-4' >
          <label className='block' >Year</label>
          <input placeholder='Release Year' className='w-80 border bg-white rounded-md py-2 px-3' type="text"
            onChange={(e) => setYear(parseInt(e.target.value))}
          />
        </div>

        <button className='w-full bg-emerald-700 py-3 text-white font-bold rounded-md text-xl hover:bg-emerald-600 active:scale-90' >Add</button>
      </form>
    </div>
  )
}

export default Component1