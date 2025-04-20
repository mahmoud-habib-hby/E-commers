import NAV from "./nav";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { Text } from "./provider";

export default function Veg(){
const {add,arr}=useContext(Text)
    let Veg=[
        {name:"بتنجان",photo:"/new/خضروات/بتنجان.png",price:"200" },
        {name:"جزر",photo:"/new/خضروات/جزر.png",price:"100"},
        {name:"خيار",photo:"/new/خضروات/خيار.png",price:"240"},
        {name:"طماطم",photo:"/new/خضروات/طما.png",price:"140"},
        {name:"فلفل",photo:"/new/خضروات/فلفل .png",price:"120"}
    ]
    useEffect(()=>{

        console.log(arr)
    },[arr])
    let show=Veg.map((e)=>{
        return(
            <div className="vegPhoto">
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