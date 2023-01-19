import React from 'react'

function Wit({purc,Delet}) {
  for(var i=0;i<purc.length;i++){
    var s=new Date(purc[i].dates)
    var t=new Date()
    var date1=s.getTime()
    var date2=t.getTime()
    console.log(s)
    var u=Math.floor((date2-date1)/(1000*3600*24))
    if(u>90){
        Delet(purc[i].id)
    }
  }
}

export default Wit