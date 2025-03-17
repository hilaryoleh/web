import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
document.body.style.backgroundColor='rgb(225, 234, 235)'


const website1=()=>{

const togglemenu=()=>{
   document.getElementById('menuwidth').style.width='300px'
  
   
      
}
const menu1=()=>{
      document.getElementById('menuwidth').style.width='0px'
}

const menuclose=()=>{
      document.getElementById('menuwidth').style.width='0px'
}


      return(
            
            
            <>
          <div >
<a id='menubar' onClick={togglemenu}>☰</a>
           
   
<div id='menuwidth' onClick={menu1}>


<a id='close' value='Home' onClick={menuclose}>X</a>


    
<Link to={'home'}id='home' > Home </Link>

<Link to={'projects'} id='project'>Projects</Link>


<Link to={'service'} id='service'>Service </Link>

</div>

</div>


        
           
            </>
      )
}
export default website1