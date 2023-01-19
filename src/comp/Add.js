import React from 'react'
import Nav from './Nav'
import { useState } from 'react'
import Navbar from './Navbar'
import './Add.css';
function Add({Update,st,setSt,sg,setSg,ug,setUg,ss,setSs,us,setUs,Changes,Changess}) {
    const [id,setId]=useState("")
    const [item,setItem]=useState("")
    const [per,setPer]=useState("")
    const [gram,setGram]=useState("")
    const [mc,setMc]=useState("")
    const[type,setType]=useState()
    const [amo,setAmo]=useState("")
    const[stat,setStat]=useState(0)
    const upd=(e)=>{
        e.preventDefault()
        
        Update({id,per,item,gram,type,mc})
        setId("")
        setItem("")
        setPer("")
        setGram("")
        setType()
        setMc("")
    }
    const Inc=(e)=>{
      e.preventDefault()
      var gwei=(parseFloat(ug.gwei)+parseFloat(amo)).toFixed(3)
      console.log(gwei)
    
      console.log(ug.gwei,amo,parseFloat(ug.gwei)+parseFloat(amo))
      console.log(gwei)

      Changes({gwei})
      
    }
    const Dec=(e)=>{
      e.preventDefault()
      var gwei=(parseFloat(ug.gwei)-parseFloat(amo)).toFixed(3)

      Changes({gwei})
      
    }
    const Incs=(e)=>{
      e.preventDefault()
      var swei=(parseFloat(us.swei)+parseFloat(amo)).toFixed(3)
      console.log(swei)
      Changess({swei})
    }
    const Decs=(e)=>{
      e.preventDefault()
      var swei=(parseFloat(us.swei)-parseFloat(amo)).toFixed(3)
      console.log(swei)
      Changess({swei})
    }
    if(stat===0){
  return (
    <div>
     <Nav stat={stat} setStat={setStat}/>
      
        <div className='lp'>
        <h1>ADD STOCK GOLD</h1>
        <form className='lpp' onSubmit={upd}>
        <div className='ty'>
        <label>TAG NO</label><br/>
        <input className='er' type="text" value={id} placeholder="Enter the Tag No" onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>ITEM NAME</label><br/>
        <input className='er' type="text" value={item} placeholder="Enter the Item Name" onChange={(e)=>setItem(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>GRAM</label><br/>
        <input className='er' type="text" value={gram} placeholder="Enter the Gram" onChange={(e)=>setGram(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>PERCENTAGE</label><br/>
        <input className='er' type="number" value={per} placeholder="Enter the Percentage" onChange={(e)=>setPer(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>MC</label><br/>
        <input className='er' type="number" value={mc} placeholder="Enter the MC" onChange={(e)=>setMc(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>TYPE</label><br/>
        <input className='er' type="text" value={type} placeholder="Enter the Type" onChange={(e)=>setType(e.target.value)}/>
        </div>
        <div className='rt'>
        <button className='ert' onClick={()=>setSt(0)}>BACK</button>
        <input className='ert' type="submit" value="ADD"/></div>
  </form>
  
  </div>
  </div>
  )
}
if(stat===1){
  return (
    <div>
     <Nav stat={stat} setStat={setStat}/>
      
        <div className='lp'>
        <h1>ADD STOCK SILVER</h1>
        <form className='lpp' onSubmit={upd}>
        <div className='ty'>
        
        <label>TAG NO</label><br/>
        <input className='er' type="text" value={id} placeholder="Enter the Tag No" onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>ITEM NAME</label><br/>
        <input className='er' type="text" value={item} placeholder="Enter the Item Name" onChange={(e)=>setItem(e.target.value)}/>
        </div>
        
        
        <div className='ty'>
        <label>GRAM</label><br/>
        <input className='er' type="text" value={gram} placeholder="Enter the Gram" onChange={(e)=>setGram(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>MC</label><br/>
        <input className='er' type="number" value={mc} placeholder="Enter the MC" onChange={(e)=>setMc(e.target.value)}/>
        </div>
        <div className='ty'>
        <label>TYPE</label><br/>
        <input className='er' type="text" value={type} placeholder="Enter the Type" onChange={(e)=>setType(e.target.value)}/>
        </div>
        <div className='rt'>
        <button className='ert' onClick={()=>setSt(0)}>BACK</button>
        <input className='ert' type="submit" value="ADD"/></div>
  </form>
  
  </div>
  </div>
  )
}
else if(stat===2){
  return(
    
    <div>
      <Nav stat={stat} setStat={setStat}/>
    <div className='lp'>
    <h1>INCREASE UNSTOCK GOLD</h1>
    <form className='lppp' onSubmit={Inc}>
      <label>WEIGHT</label>
      <input className='err' type="text"value={amo} placeholder="Enter the Weight to increase" onChange={(e)=>setAmo(e.target.value)}/>
      <div className='rt'><button className='ert' onClick={()=>setSt(0)}>BACK</button>
      <input className='ert' type="submit" value="ADD"/></div>
    </form>
    </div>
  </div>
  )
}
else if(stat===3){
  return(
    <div>
      <Nav stat={stat} setStat={setStat}/>
    <div className='lp'>
    <h1>DECREASE UNSTOCK GOLD</h1>
    <form className='lppp' onSubmit={Dec}>
      <label>WEIGHT</label>
      <input className='err' type="text"value={amo} placeholder="Enter the Weight to decrease" onChange={(e)=>setAmo(e.target.value)}/>
      <div className='rt'><button className='ert' onClick={()=>setSt(0)}>BACK</button>
      <input className='ert' type="submit" value="DELETE"/></div>
    </form>
    </div>
  </div>
   
  )
}
else if(stat===4){
  return(
    <div>
    <Nav stat={stat} setStat={setStat}/>
  <div className='lp'>
  <h1>INCREASE UNSTOCK SILVER</h1>
  <form className='lppp' onSubmit={Incs}>
    <label>WEIGHT</label>
    <input className='err' type="text"value={amo} placeholder="Enter the Weight to increase" onChange={(e)=>setAmo(e.target.value)}/>
    <div className='rt'><button className='ert' onClick={()=>setSt(0)}>BACK</button>
    <input className='ert' type="submit" value="ADD"/></div>
  </form>
  </div>
</div>
    
  )
}
else if(stat===5){
  return(
    <div>
    <Nav stat={stat} setStat={setStat}/>
  <div className='lp'>
  <h1>DECREASE UNSTOCK SILVER</h1>
  <form className='lppp' onSubmit={Decs}>
    <label>WEIGHT</label>
    <input className='err' type="text"value={amo} placeholder="Enter the Weight to decrease" onChange={(e)=>setAmo(e.target.value)}/>
    <div className='rt'><button className='ert' onClick={()=>setSt(0)}>BACK</button>
    <input className='ert' type="submit" value="DELETE"/></div>
  </form>
  </div>
</div>

  )
}
}

export default Add