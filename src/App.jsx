import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div>
        <h1 className='text-3xl text-indigo-300'>Hello Gsap</h1>
        App</div>
  )
}

export default App