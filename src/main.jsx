import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NAV from "./nav";
export default function MAIN() {
  return (
    <div className="main">
      <NAV />
      <div className="photos">
        <p>welcom . . .</p>
      </div>
      <div >
      <div className="photo">
        <div className="vegetable">
          <img src={`${process.env.PUBLIC_URL}/new/خضروات/خضروات.jpg`} />
          <Link to="/vegetable" className="Link">
            vegetable
          </Link>
        </div>
        <div className="fruit">
          <img  src={`${process.env.PUBLIC_URL}/new/فاكهة/فاكهة.jpg`}/>

          <Link to="/fruit" className="Link">
            fruit
          </Link>
        </div>
        <div className="linut">
          <img src={`${process.env.PUBLIC_URL}/new/بقوليات/البقوليات.jpg`} />

          <Link to="/linut" className="Link">
            linut
          </Link>
        </div>
        <div className="milk">
          <img src={`${process.env.PUBLIC_URL}/new/الالبان/الالبان.jpeg`}/>
          <Link to="/milk" className="Link">
            milk
          </Link>
        </div>
        <div className="sweet">
          <img src={`${process.env.PUBLIC_URL}/new/حلويات/حلويات.jpg`} />
          <Link to="/sweet" className="Link">
            sweet
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
