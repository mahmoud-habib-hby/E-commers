
import NAV from "./nav";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { Text } from "./provider";
export default function Sweet(){
const {add,arr}=useContext(Text)

    let Veg=[
        {name:"بسبوسة",photo:"/new/حلويات/بسبوسة.jpeg",price:"20" },
        {name:"جيلي",photo:"/new/حلويات/جيلي.jpeg",price:"30" },
        {name:"قطايف",photo:"/new/حلويات/قطايف.jpeg",price:"23" },
        {name:"كنافة",photo:"/new/حلويات/كنافة.jpeg",price:"45" }
    ]
    let show=Veg.map((e)=>{
        return(
            <div className="vegPhoto" style={{boxShadow:"0px 0px 29px rgb(250, 187, 0)"}}>
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