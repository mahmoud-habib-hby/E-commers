
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {  useNavigate } from 'react-router-dom';
import { Text } from "./provider";
import { useContext, useState } from 'react';
export default function LOG() {
    const {addlog}=useContext(Text)
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [pasword,setpasword]=useState("")
    let home=useNavigate();
    function click(e){
    
        e.preventDefault();
        if(name!=="" && email!=="" && pasword!==""){
            addlog(name ,email,pasword)
            home("/home");
        }
        else{
             alert("name and email requir")
             home("/")
        }
    }
    return (
        <div className='contaner'  >
        <div className="mide">
            <form style={{display:"flex", flexDirection:"column", gap:"40px"}} className='form' onSubmit={click}>
                <input type="text" placeholder="name" className='form-control' value={name} onChange={(e)=>setname(e.target.value)} />
                <input type="password" placeholder="password"className='form-control'  value={pasword} onChange={(e)=>setpasword(e.target.value)}/>
                <input type="email" name="email" placeholder='email' className='form-control'  value={email} onChange={(e)=>setemail(e.target.value)}/>
              <button type='submit' className='btn btn-outline-success'>
              log in
              </button> 
            </form>
            <img width={"55%"} src='/cart.jpg' alt="عربة التسوق"/>
        </div>
        </div>
    );
}
