
import NAV from "./nav";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { Text } from "./provider";
export default function Alban(){
const {add,arr}=useContext(Text)

    let Veg=[
        {name:"جبن",photo:"/new/الالبان/جبن.jpeg",price:"24" },
        {name:"زبادى",photo:"/new/الالبان/زبادى.jpeg",price:"30" },
        {name:"قشطة",photo:"/new/الالبان/قشطة.jpeg",price:"45" },
        {name:"لبن",photo:"/new/الالبان/لبن.jpeg",price:"53" },
    ]
    let show=Veg.map((e)=>{
        return(
            <div className="vegPhoto" style={{boxShadow:"0px 0px 29px rgb(0, 0, 0)"}}>
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