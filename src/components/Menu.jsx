import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-light p-3 container-fluid" style={{ width: '250px', height: '100vh' }}>
        <h4 className="text-start ms-2">Smart Parking</h4>
        <ul className="navbar-nav nav-underline flex-column ms-4">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio de sesion</Link>
          </li>
        </ul>
      </div>
  );
};

export default Menu;

