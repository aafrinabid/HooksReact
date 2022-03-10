import React,{useState} from 'react'

function HooksState() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>you have clicked me{count} times
</button>
        </div>
  )
}

export default HooksState