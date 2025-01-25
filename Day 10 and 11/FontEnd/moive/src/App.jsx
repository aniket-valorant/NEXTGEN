import React from 'react'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import GetMovie from './Components/GetMovie'
import PostMovie from './Components/PostMovie'

const App = () => {
  return (
    <div className='bg-orange-400'>

      {/* <PostMovie />
      <GetMovie /> */}
      <Component1 />
      <Component2 />
      
    </div>
  )
}

export default App