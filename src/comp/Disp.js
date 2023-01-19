import React from 'react'
import './Disp.css';
function Disp({da,rate}) {
  return (
    <div className='trry'>
        <div className='im'>
        <img src='sri.png'></img>
        <h1 className='uy'>SRI HARI JEWELLERS</h1></div>
        <div className='try'>
        <table className='tryu'>
        <tr className='ui'><th>DATE</th>
        <th>{new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}</th></tr>
        <tr className='ui'><th>ITEM NAME</th>
        <th>{da.item}</th></tr>
        <tr className='ui'><th>GRAM</th>
        <th>{da.gram}</th></tr>
        <tr className='ui'><th>PERCENTAGE</th>
        <th>{da.per}</th></tr>
        <tr className='ui'><th>MC</th>
        <th>{da.mc}</th></tr>
        <tr className='ui'><th>PRICE</th>
        <th>{(da.type==="GOLD") ? (Math.floor(parseFloat(parseFloat(parseFloat(((parseFloat(da.per)/100)*parseFloat(da.gram)).toFixed(3))+parseFloat(da.gram))*rate.gold)+parseFloat(da.mc))):
            (parseInt(parseFloat(da.gram)*rate.silver))+(parseInt(da.mc))}</th></tr></table></div>
    </div>
  )
}

export default Disp