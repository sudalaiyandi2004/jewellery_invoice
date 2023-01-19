import React from 'react'
import Navbar from './comp/Navbar'
import { useState ,useEffect} from 'react'
import Menu from './comp/Menu'
import Sets from './comp/Sets'
import Show from './comp/Show'
import Add from './comp/Add'
import Shows from './comp/Shows'
import Search from './comp/Search'
import Filters from './comp/Filters'
import Filter from './comp/Filter'
import Cal from './comp/Cal'
import Sale from './comp/Sale'
import Disp from './comp/Disp'
import Wit from './comp/Wit'

function Jewel({rate,setRate,data,setData,Delet,Delete,st,setSt,Update,Change,sg,setSg,ug,setUg,ss,setSs,us,setUs,wei,setWei,lab,setLab,updat,purc,setPurc,Changes,Changess}) {
  const [from,setFrom]=useState("")
  const [to,setTo]=useState("")
  const [sta,setSta]=useState(0)
  const [gwei,setGwei]=useState("0")

  
  const [da,setDa]=useState({
    id:"0",
    item:"bangels",
    per:"46",
    gram:"65",
    type:"GOLD",
    mc:250
  }
  );
  const [se,setSe]=useState({
    val:""
  }
  );

  const Del=(ids,items,pers,grams,types,mcs)=>{
    setSt(3)
    setDa(previousState => {
      return { ...previousState, id: ids,item:items,per:pers,gram:grams,type:types,mc:mcs }
    });
    <Shows  da={da} rate={rate} Delete={Delete} updat={updat} />
    console.log(da.id)
    
  }
  const Sera=(ids)=>{
    setSt(4)
    setSe(previousState => {
      return { ...previousState, val: ids }
    });
    <Search data={data} Del={Del} se={se}/>

  }
  if(st==0){
  return (
      <div>
       <Cal data={data} sg={sg}setSg={setSg} ug={ug} setUg={setUg} ss={ss} setSs={setSs} us={us} setUs={setUs} />
       <Wit purc={purc} Delet={Delet}/>
      <Navbar/>
        <Menu rate={rate} data={data} st={st} setSt={setSt} Sera={Sera} sg={sg} ss={ss} ug={ug} us={us} wei={wei} setWei={setWei} lab={lab} setLab={setLab}/>
        <Show data={data} Del={Del}/>
        
          </div>
  )
        }
  else if(st===1){
    return(
      <div>
      <Navbar/>
      <Sets st={st} Change={Change} setSt={setSt}  />
      </div>
    )
  }
  else if(st===2){
    return(
      <div>
        <Navbar/>
        <Add Update={Update} st={st} setSt={setSt} sg={sg} setSg={setSg} ug={ug} setUg={setUg} ss={ss} setSs={setSs} us={us} setUs={setUs} Changes={Changes} gwei={gwei} setGwei={setGwei} Changess={Changess}/>
      </div>
    )
  }

else if(st==3){
  return (
    <div>
      <Navbar/>
      <Shows da={da} rate={rate} Delete={Delete} updat={updat} st={st} setSt={setSt}/>
    </div>
  )
}
else if(st===4){
  return(
    <div>
    <Navbar/>
    <Menu rate={rate} data={data} st={st} setSt={setSt} Sera={Sera} sg={sg} ss={ss} ug={ug} us={us} wei={wei} setWei={setWei} lab={lab} setLab={setLab}/>
    <Search data={data} Del={Del} se={se}/>
    </div>
  )
}
else if(st===5){
  return (
      <div>
      <Navbar/>
        <Menu rate={rate} data={data} st={st} setSt={setSt} Sera={Sera} sg={sg} ss={ss} ug={ug} us={us} wei={wei} setWei={setWei} lab={lab} setLab={setLab}/>
        <Filter data={data} Del={Del}/>
          </div>
  )
        }
        else if(st===6){
          return (
              <div>
              <Navbar/>
                <Menu rate={rate} data={data} st={st} setSt={setSt} Sera={Sera} sg={sg} ss={ss} ug={ug} us={us} wei={wei} setWei={setWei} lab={lab} setLab={setLab}/>
                <Filters data={data} Del={Del}/>
                  </div>
          )
                }     
                else if(st===7){
                  return (
                      <div>
                      <Navbar/>
                        <Sale purc={purc} Del={Del} setSt={setSt} st={st} from={from} to={to} setFrom={setFrom} setTo={setTo} sta={sta} setSta={setSta}/>
                          </div>
                  )
                        }     
                        else if(st===8){
                          return (
                              <div>
                              <Disp da={da} rate={rate}/>
                                  </div>
                          )
                                }     
}
export default Jewel