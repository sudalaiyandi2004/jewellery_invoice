import React from 'react'
import './Show.css';
import { useState } from 'react';
function Filters({data,Del}) {
  return (
    <div className='lis'>
        <table className='lists'>
        <tr>
            <th>TAG NO</th>
            <th>ITEM NAME</th>
           <th>GRAM</th>
            
            <th>MC</th>
            <th>TYPE</th>
            
            <th>STATUS</th>
            </tr>
        
        {data.map((dat)=>dat.type==="SILVER" ? <tr><td>{dat.id}</td><td>{dat.item}</td>
        <td>{dat.gram}</td>
        <td>{dat.mc}</td>
        <td>{dat.type}</td>
        
        <td><button onClick={()=>Del(dat.id,dat.item,dat.per,dat.gram,dat.type,dat.mc)}>SOLD</button></td></tr>:" ")} 
        </table>
        </div>
  )
}

export default Filters