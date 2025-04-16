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
          <img src="/new/خضروات/خضروات.jpg" />
          <Link to="/vegetable" className="Link">
            vegetable
          </Link>
        </div>
        <div className="fruit">
          <img src="/new/فاكهة/فاكهة.jpg" />

          <Link to="/fruit" className="Link">
            fruit
          </Link>
        </div>
        <div className="linut">
          <img src="/new/بقوليات/البقوليات.jpg" />

          <Link to="/linut" className="Link">
            linut
          </Link>
        </div>
        <div className="milk">
          <img src="/new/الالبان/الالبان.jpeg" />
          <Link to="/milk" className="Link">
            milk
          </Link>
        </div>
        <div className="sweet">
          <img src="/new/حلويات/حلويات.jpg" />
          <Link to="/sweet" className="Link">
            sweet
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
