import './App.css';
import Login from './Login'
import Home from './Home'
import Jewel from './Jewel';
import Inter from './Inter';
import axios from 'axios'
import React from 'react';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './comp/Navbar';
import Shows from './comp/Shows';
function App() {
  const [data,setData]=useState([ ])
  const [st,setSt]=useState(0)
  const [rate,setRate]=useState([])
  const [sg,setSg]=useState("0")
  const [ug,setUg]=useState([])
  const [ss,setSs]=useState("0")
  const [us,setUs]=useState("0")
  const [wei,setWei]=useState("0")
  const [lab,setLab]=useState("")
  
  const [purc,setPurc]=useState([])
  

  useEffect(()=>{
    const fetchtask=async()=>{
        const res=await fetch("http://localhost:3001/rate")
        const rat= await res.json()
        console.log(rat)
        setRate(rat)
    }
    fetchtask()
},[])
  useEffect(()=>{
    const fetchtask=async()=>{
        const res=await fetch("http://localhost:3001/data")
        const dats= await res.json()
        console.log(dats)
        setData(dats)
    }
    fetchtask()
},[])


useEffect(()=>{
  const fetchtask=async()=>{
      const res=await fetch("http://localhost:3001/purc")
      const pur= await res.json()
      console.log(pur)
      setPurc(pur)
  }
  fetchtask()
},[])
useEffect(()=>{
  const fetchtask=async()=>{
      const res=await fetch("http://localhost:3001/ug")
      const ugs= await res.json()
      console.log(ugs)
      setUg(ugs)
  }
  fetchtask()
},[])
useEffect(()=>{
  const fetchtask=async()=>{
      const res=await fetch("http://localhost:3001/us")
      const uss= await res.json()
      console.log(uss)
      setUs(uss)
  }
  fetchtask()
},[])
const Changess=async(rat)=>{
  const ress=await fetch("http://localhost:3001/us",{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(rat)
  })
  const ra=await ress.json()
  console.log(ra)
  setUs(ra)
  setSt(0)
}
const Changes=async(rat)=>{
  const ress=await fetch("http://localhost:3001/ug",{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(rat)
  })
  const ra=await ress.json()
  console.log(ra)
  setUg(ra)
  setSt(0)
}
const Change=async(rat)=>{
  const ress=await fetch("http://localhost:3001/rate",{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(rat)
  })
  const ra=await ress.json()
  console.log(ra)
  setRate(ra)
  setSt(0)
}
const Delet=async (id)=>{
  await fetch(`http://localhost:3001/purc/${id}`,{
    method:'DELETE',
  })
  setPurc(purc.filter((pur)=>pur.id!==id))
  setSt(0)
}
const Delete=async (id)=>{
  await fetch(`http://localhost:3001/data/${id}`,{
    method:'DELETE',
  })
  setData(data.filter((dat)=>dat.id!==id))
  setSt(0)
}
const updat=async(pur)=>{
  const res=await fetch("http://localhost:3001/purc",{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(pur)
  })
  const pu=await res.json()
setData([...purc,pu])
setSt(0)
}
const Update=async(dat)=>{
        const res=await fetch("http://localhost:3001/data",{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(dat)
        })
        const dats=await res.json()
  setData([...data,dats])
  setSt(0)
}
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Jewel' element={<Jewel rate={rate} setRate={setRate} Delet={Delet} Delete={Delete} Change={Change} data={data} setData={setData} st={st} setSt={setSt} Update={Update} sg={sg} setSg={setSg} ug={ug} setUg={setUg} ss={ss} setSs={setSs} us={us} setUs={setUs} wei={wei} setWei={setWei} lab={lab} setLab={setLab} updat={updat} purc={purc} setPurc={setPurc} Changes={Changes} Changess={Changess}/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
