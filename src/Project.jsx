import React from 'react'
import './App.css'
import image1 from './image/drum.jpg'
import image2 from './image/clock.jpg'
import image3 from './image/calculator.jpg'

const Project=()=>{
return(

<>
<h4 id='projects'>Projects</h4>
<div id='projectrap'>
<img src={image1} width='500px' id='drum'></img>

<a href='https://dazzling-tiramisu-2fda01.netlify.app/' id='drumlink'>Drum Project</a>

<img src={image2} width='500px' id='clock' ></img>
<a href='https://fantastic-travesseiro-34e81e.netlify.app/' id='clocklink'>Clock Project</a>

<img src={image3} width='500px' id='calculator'></img>
<a href='https://frabjous-pika-4ca1eb.netlify.app/' id='calculatorlink'>Calculator Project</a></div>
</>
)
}
export default Project