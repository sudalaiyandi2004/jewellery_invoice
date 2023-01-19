import React from 'react'
import './Nav.css';
function Nav({Stat,setStat}) {
  return (
    <div className='post'>
        <table className='po'>
        <tr>
            <td><button className='pos' onClick={()=>setStat(0)}>ADD SG</button></td>
        <td><button className='pos' onClick={()=>setStat(1)}>ADD SS</button></td>
        <td><button className='pos' onClick={()=>setStat(2)}>ADD UG</button></td>
        <td><button className='pos' onClick={()=>setStat(3)}>DEL UG</button></td>
        <td><button className='pos' onClick={()=>setStat(4)}>ADD US</button></td>
        <td><button className='pos' onClick={()=>setStat(5)}>DEL US</button></td></tr>
      </table>
    </div>
  )
}

export default Nav