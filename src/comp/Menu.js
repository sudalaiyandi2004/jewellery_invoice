import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Menu.css';
function Menu({rate,st,setSt,Sera,sg,ss,us,ug,wei,setWei,lab,setLab}) {
    const navigate=useNavigate()
    const [val,setVal]=useState("")
    
    const [hj,setHj]=useState(
      {
        val:3
      }
    )
    const Ser=(e)=>{
      e.preventDefault()
      Sera(val)
    }
    const Tyr=()=>{
      setSt(0)
      setVal(" ")
    }
    const A=()=>{
      setWei(sg)
      setLab("SG")
    }
    const B=()=>{
      setWei(ug.gwei)
      setLab("UG")
    }
    const C=()=>{
      setWei(ss)
      setLab("SS")
    }
    const D=()=>{
      setWei(us.swei)
      setLab("US")
    }
    const U=()=>{
    setHj(previousState => {
      return { ...previousState, val: 1 }
    });
      setSt(0)
      
    }
    const I=()=>
    {
      setHj(previousState => {
        return { ...previousState, val: 2 }
      }); 
      console.log(hj.val)
      setSt(5)
    }
    const P=()=>{
      setHj(previousState => {
        return { ...previousState, val: 3 }
      });
      setSt(6)
    }
  return (
    
    <div className='men'>
        <table className='menu'>
          <tr>
        <th><button onClick={()=>setSt(2)}>ADD</button></th>
       <th>
        <button className='gty' onClick={()=>A()}>SG</button>
        <button className='gty' onClick={()=>B()}>UG</button>
        <button className='gty' onClick={()=>C()}>SS</button>
        <button className='gty' onClick={()=>D()}>US</button>
        <br/>
        <label className='op'>{lab} : {wei} g</label>
        </th>
        
        <th>
          <label className='ops'>TG</label><br/><label  className='op'>
          {(parseFloat(sg)+parseFloat(ug.gwei)).toFixed(3)} g
          </label>
          </th>
        
          <th>
          <label className='ops'>TS</label><br/><label  className='op'>{(parseFloat(ss)+parseFloat(us.swei)).toFixed(3)} g
          </label>
          </th>
        <th><label className='o'>GOLD</label><br/>
        <label className='o'>{rate.gold}</label></th>
        <th><label className='o'>SILVER</label><br/>
        <label className='o'>{rate.silver}</label></th>
        <th>
          <button className='gty' onClick={()=>U()}>ALL</button>
          <button className='gty' onClick={()=>I()}>GOLD</button>
        <button className='gty' onClick={()=>P()}>SILVER</button>
        </th>
    
    <th><form className='fors' onSubmit={Ser}>
    <input className="in" type='text'  value={val} onChange={(e)=>setVal(e.target.value)}/>
    <input type="submit" value="SEARCH"/>
    <button onClick={()=>Tyr()}>CLEAR</button>
    </form>
    
    </th>
    <th><button className='inbt' onClick={()=>setSt(1)}>SET</button></th>
    <th><button className='inbt' onClick={()=>setSt(7)}>SALES</button></th>
    </tr>
    </table>
    </div>
  )
}

export default Menu