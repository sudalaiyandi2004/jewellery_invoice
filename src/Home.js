import React from 'react'
import './Home.css';
import Navbar from './comp/Navbar'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  return (
    <div className='home'>
      <Navbar/>
      <div className='opts'>
      <button className='opt' onClick={()=>navigate('/Jewel')}><img src='jew.jpg'/></button>
      <button className='opt' onClick={()=>navigate('/Inter')}><img src='loan.jpg'/></button>
      </div>
    </div>
    
    
    
  )
}

export default Home