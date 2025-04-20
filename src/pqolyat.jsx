

import NAV from "./nav";
import "./App.css"
import { useContext, useEffect } from "react";
import { Text } from "./provider";
export default function Poq(){
const {add,arr}=useContext(Text)

    let Veg=[
        {name:"البازلاء",photo:"/new/بقوليات/البازلاء.jpeg" ,price:"200" },
        {name:"الفول",photo:"/new/بقوليات/الفول.png",price:"340" },
        {name:"حمص",photo:"/new/بقوليات/حمص.png" ,price:"150"},
        {name:"عدس",photo:"/new/بقوليات/عدس.png",price:"40" }

    ]
    let show=Veg.map((e)=>{
        return(
  
  <div className="vegPhoto" style={{boxShadow:"0px 0px 29px #4c3902"}}>
                <img src={`${process.env.PUBLIC_URL}${e.photo}`} alt="product" />
                <span>{e.name}</span>
                <span>price={e.price}$</span>
                
                <div className="buy">
                <button className="btn btn-warning" onClick={()=> {add(e.name,e.price)}}>buy</button>

                </div>
            </div>
        )
    })
    return(
        <>
        <NAV/>
        <div className="veg">

        {show}
        </div>
        </>
    )
}