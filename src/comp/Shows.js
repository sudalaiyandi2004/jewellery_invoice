import React from 'react'
import './Shows.css';
function Shows({da,rate,Delete,updat,st,setSt}) {
  const Yu=(id,item,per,gram,type)=>{
    var total=(da.type==="GOLD") ? (Math.floor(parseFloat(parseFloat(parseFloat(((parseFloat(da.per)/100)*parseFloat(da.gram)).toFixed(3))+parseFloat(da.gram))*5070)+parseFloat(da.mc))):
    (parseInt(parseFloat(da.gram)*75.40))+(parseInt(da.mc))
    const s=new Date()
    var date=s.getDate()+"-"+(s.getMonth()+1)+"-"+s.getFullYear()
    var dates=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()
    updat({id,per,item,gram,total,date,dates})
    Delete(id)
    //setSt(8)

  }
  return (
    
    <div className='dis'>
        <div className='disp'>
        <div className='dispp'>
            <h1>TAG NO : </h1>
            <h1>{da.id}</h1></div>
            <div className='dispp'>
            <h1>ITEM NAME : </h1>
            <h1>{da.item}</h1></div>
            <div className='dispp'>
            <h1>PERCENTAGE : </h1>
            <h1>{da.per}%</h1></div>
            <div className='dispp'>
            <h1>GRAM : </h1>
            <h1>{da.gram}g</h1></div>
            <div className='dispp'>
            <h1>TOTAL : </h1>
            
            <h1>{(da.type==="GOLD") ? (Math.floor(parseFloat(parseFloat(parseFloat(((parseFloat(da.per)/100)*parseFloat(da.gram)).toFixed(3))+parseFloat(da.gram))*rate.gold)+parseFloat(da.mc))):
            (parseInt(parseFloat(da.gram)*rate.silver))+(parseInt(da.mc))}</h1>

            </div>
        </div>
        <div className='p'>
        <button className='l' onClick={()=>Yu(da.id,da.item,da.per,da.gram,da.per,da.type)}>GENERATE BILL</button>
        <button className='l' onClick={()=>setSt(0)}>BACK</button></div>
    </div>
  )
}

export default Shows