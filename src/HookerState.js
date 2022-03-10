import React,{useState} from 'react'

function HookerState() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)
  return (
    <div>
        count:{count}
        <button onClick={()=>setCount(initialCount)}>reset</button>
    <button onClick={()=>setCount(prevState=>prevState +1)}>INCRESE ME BY ONE</button>
    <button onClick={()=>setCount(prevState=>prevState -1)}>DECREASE ME BY ONE</button>
    <button onClick={()=>setCount(prevState=>prevState +5)}>INCRESE ME BY 5</button>


    </div>
  )
}

export default HookerState