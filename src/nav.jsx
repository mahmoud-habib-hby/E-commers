
import { Link } from 'react-router-dom';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NAV(){
    return(
        <div className="contan">
                <Link  to="/person">
                <span className="material-symbols-outlined" style={{color:"white",fontSize:"30px"}}>
                    person
                    </span>
                </Link>
                 <p>E-commers</p>
                <input type="text" placeholder="seacrh" className='form-control' />
                <Link to="/cart" className="Link">cart</Link>
                <Link to="/home" className="Link">home</Link>
                <Link to="/about" className="Link">about as</Link>
            </div>
    );
}