import React from 'react'
import './App.css'
const Service=()=>{
return(

<>
<h4 id='contact'>Contact</h4>
<form action={"https://formsubmit.co/c440c0578a380a88f061ec0af6c5ae94"} method={"POST"}>
<input type={'text'} placeholder='First Name' id='firstname'  name='name' required/>
<input type={'text'} placeholder='Last Name'  name='name' id='lastname' required/>
<input type={'email'} placeholder='Email address' name='email' id='email' required/>
<br></br>

<br></br>
<textarea placeholder='Type your message here' id="textarea" name='message' ></textarea>
<button type='submit' id='submit'>Submit</button>
</form>
</>
)
}
export default Service