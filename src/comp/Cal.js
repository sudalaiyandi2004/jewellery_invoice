import React from 'react'
import Sets from './Sets'

function Cal({data,sg,setSg,ug,setUg,ss,setSs,us,setUs}) {
  var s=0
  var t=0
 for(var i=0;i<data.length;i++){
  if(data[i].type=="GOLD"){
    s=s+parseFloat(data[i].gram)
    console.log(s)
  }
 }
 
for(var j=0;j<data.length;j++){
  if(data[j].type=="SILVER"){
    t=t+parseFloat(data[j].gram)
    console.log(t)
  }
 }
 setSg(s.toFixed(3))
 setSs(t.toFixed(3))
}

export default Cal