import React, { useState } from 'react'


const Class = () => {
    const [Count,setCount]= useState(0)
    // console.log("hahha")
  return (
    <div style={{display:"flex",textAlign:"center",justifyContent:"space-between",background:"darkblue",flexDirection:"column",alignItems:"center"}}>
      <h1 style={{fontSize:"1.4rem",color:"white"}} > {Count}</h1>
      <button onClick={function(){setCount(Count+1)}} >increase</button>
      
      <button onClick={function(){setCount(Count-1)}} >decrease</button>
      <p id='para' ></p>
      <input onChange={(event)=>(document.getElementById("para").innerHTML=event.target.value)} placeholder='enter anything'></input>
    </div>
  )
}

export default Class