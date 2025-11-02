import React, { useState } from 'react'
import "./Join.css"
<<<<<<< HEAD
import {Link} from "react-router-dom"
let user;


const sendUser=()=>{
  user=document.getElementById("joinInput").value;
  document.getElementById("joinInput").value="";
=======
import { Link } from "react-router-dom"
let user;


const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
>>>>>>> master
}
const Join = () => {
  const [name, setName] = useState("");
  return (
    <div className="joinPage">
      <div className="joinContainer">
<<<<<<< HEAD
<<<<<<< HEAD
       <h1>CHAT APP</h1>
=======
       <h1>CHAT ROOM</h1>
>>>>>>> master
       <input name='name' placeholder="Enter your Name" id="joinInput" type="name" onChange={(e)=>setName(e.target.value)} />
      <Link  onClick={(e)=>name===""? e.preventDefault():null} to="/chat">
        <button onClick={sendUser}className="LoginBtn">Log In</button>
        </Link> 
=======
        <h1>CHAT ROOM</h1>
        <input name='name' placeholder="Enter your Name" id="joinInput" type="name" onChange={(e) => setName(e.target.value)} />
        <Link onClick={(e) => name === "" ? e.preventDefault() : null} to="/chat">
          <button onClick={sendUser} className="LoginBtn">Log In</button>
        </Link>
>>>>>>> master
      </div>
    </div>
  )
}

export default Join
<<<<<<< HEAD
export{user}
=======
export { user }
>>>>>>> master
