import { Link } from "react-router-dom";
import NAV from "./nav";
import { Text } from "./provider";
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Prtofilo(){
    const {log,deletlog}=useContext(Text)
    let data=log.map((e)=>{
        return(
            <div className="Prtofilo">
            <span className="material-symbols-outlined " style={{fontSize:"20vh"}}>
            person
            </span>
            <p>name: {e.Name}</p>
            <p>email : {e.Email}</p>
            <Link to="/" className='btn btn-danger' onClick={()=> deletlog()}>log out</Link>
    </div>
        );
    })
    return(
    <>
    <NAV />
{data}
    </>
    );
};
export default Prtofilo;