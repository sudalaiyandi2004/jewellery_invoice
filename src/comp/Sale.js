import React from 'react'
import './Show.css';
import { useState } from 'react';
function Sale({purc,Del,setSt,st,from,to,setFrom,setTo,sta,setSta}) {
  
  const Rty=(e)=>{
      e.preventDefault()
      setSta(1)
      
  }
  const Cals=(datee)=>{
    var d1=new Date(from)
    var d2=new Date(datee)
    var d3=new Date(to)
    var dd1=d1.getTime()
    var dd2=d2.getTime()
    var dd3=d3.getTime()
    var i=(Math.floor((dd1-dd2)/(1000*3600*24)))
    var j=(Math.floor((dd2-dd3)/(1000*3600*24)))
    console.log(i,j)
    if(i<=0 && j<0){
      
      return 0
    }
    else{
      return 1
    }
  }
  if(sta===0){
  return (
    <div className='lis'>
      <div className='bt'>
      <form className='ip' onSubmit={Rty}>
        <label className='oi'>FROM</label>
        <input className='bto' type="date" value={from} onChange={(e)=>setFrom(e.target.value)}/>
        <label className='oi'>TO</label>
        <input className='bto' type="date" value={to} onChange={(e)=>setTo(e.target.value)}/>
        <input className='btoi' type="submit" value="FILTER"/>
        
        
      </form>
      <button onClick={()=>setSt(0)}>STOCK</button>
      </div>

        <table className='lists'>
        <tr><th>DATE</th>
            <th>TAG NO</th>
            <th>ITEM NAME</th>
           <th>GRAM</th>
            <th>PRICE</th>
            
        
            </tr>
        
        {purc.map((pur)=><tr><td>{pur.date}</td><td>{pur.id}</td><td>{pur.item}</td>
        <td>{pur.gram}</td>
        <td>{pur.total}</td>
        
        </tr>)} 
        </table>
        </div>
  )
}
else if(sta===1){
  return (
    <div className='lis'>
      <div className='bt'>
      <form className='ip' onSubmit={Rty}>
        <label className='oi'>FROM</label>
        <input className='bto' type="date" value={from} onChange={(e)=>setFrom(e.target.value)}/>
        <label className='oi'>TO</label>
        <input className='bto' type="date" value={to} onChange={(e)=>setTo(e.target.value)}/>
        <input className='btoi' type="submit" value="FILTER"/>
        
        
      </form>
      <button className='btoi' onClick={()=>setSta(0)}>RESET</button>
      <button className='btoi' onClick={()=>setSt(0)}>STOCK</button>
</div>
        <table className='lists'>
        <tr><th>DATE</th>
            <th>TAG NO</th>
            <th>ITEM NAME</th>
           <th>GRAM</th>
            <th>PRICE</th>
            
        
            </tr>
        
        {purc.map((pur)=>Cals(pur.dates)===0 ? <tr><td>{pur.date}</td><td>{pur.id}</td><td>{pur.item}</td>
        <td>{pur.gram}</td>
        <td>{pur.total}</td>
         
        </tr> : " ")} 
        </table>
        </div>
  )
}
}
export default Sale