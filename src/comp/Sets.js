import React, { useState } from 'react'
import './Sets.css';
function Sets({st,Change,setSt}) {
    const [gold,setGold]=useState("")
    const [id,setId]=useState("")
    const [silver,setSilver]=useState("")
    const sets=(e)=>{
        e.preventDefault()
        Change({gold,silver})
        setSilver("")
        setId("")
        setGold("")
    }
  return (
    <div className='di'>
        <form className='for' onSubmit={sets}>

            <label>DATE</label>
            <input className='lo' type="text" placeholder="Enter Today Date" value={id} onChange={(e)=>setId(e.target.value)} />
            <label>GOLD RATE </label>
            <input className='lo' type="text" placeholder="Enter Today Gold Rate" value={gold} onChange={(e)=>setGold(e.target.value)} />
            <label>SILVER RATE </label>
            <input className='lo' type="text" placeholder="Enter Today Silver Rate" value={silver} onChange={(e)=>setSilver(e.target.value)}/>
            <div className='poi'><button className="pmm" onClick={()=>setSt(0)}>BACK</button>
              <input className='pmm' type="submit" value="SET"/>
            </div>
        </form>
        <br/>
        
    </div>
  )
}

export default Sets