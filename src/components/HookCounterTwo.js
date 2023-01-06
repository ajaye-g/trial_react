import React,{useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count,setcount]=useState(initialCount)
    console.log("working")
  return (
    <div>
      count:{count}  
      <button onClick={()=>setcount(initialCount)}>reset</button>
      <button onClick={()=>setcount(count+1)}>increment</button>
      <button onClick={()=>setcount(count-1)}>decrement</button>
    </div>
  )
}

export default HookCounterTwo
