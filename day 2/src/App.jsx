import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount] = useState(0)

  function decreaseHandler (){
    setCount(count-1);

  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }

  return (
    
     <div className='w-[90vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>
        increment and decrement
      </div>
      <div className='bg-white flex justify-center gap-11 py-2 rounded-sm text-[25px] text-[#344141]'>
        {/* setting props  */}
      <button onClick={decreaseHandler} className=' border-r-2 text-center w-20 bordwe-[#bfbfbf] text-5xl'>
        -
      </button>
      <div className='font-bold gap-12 text-5xl'>
       {count}
      </div>
      <button onClick={increaseHandler} className=' border-l-2 text-center w-20 bordwe-[#bfbfbf] text-5xl'>
        +
      </button>
      </div>
      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
        reset
      </button>
     </div>
  
  )
}

export default App
