import NAV from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useContext, useEffect } from "react";
import { Text } from "./provider";

export default function Cart(){
  const {arr,delet}=useContext(Text)
  
  let data=arr.map((e)=>{
    return(
      <div className="cartElement">
            <span>{e.name}</span>
            <p>{e.number}</p>
            <button className="btn btn-danger" onClick={()=>delet(e.id)}>delet</button>
            <button className="btn btn-warning">buy</button>
        </div>
    );
  })
    return(
    <>
      <NAV />
      <div className="cart">
        {data}
      </div>
    </>
      
    );
}