import NAV from "./nav";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { Text } from "./provider";
export default function Fruit(){
const {add,arr}=useContext(Text)

    let Veg=[
        {name:"برتقال",photo:"new/فاكهة/برتقال.jpg",price:"20" },
        {name:"تفاح",photo:"new/فاكهة/تفاح.jpg",price:"30" },
        {name:"فراولة",photo:"new/فاكهة/فراولة.jpg",price:"120" },
        {name:"مانجة",photo:"new/فاكهة/مانجو.jpg",price:"13" },
        {name:"موز",photo:"new/فاكهة/موز.jpg",price:"25" },
    ]
    let show=Veg.map((e)=>{
        return(
            <div className="vegPhoto" style={{boxShadow:"0px 0px 29px  #fb2b2b"}}>
                <img  src={e.photo} />
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