import "./styles.css";
// import logo from "../../assets/company-logo.png";
import logoFull from "../../assets/company-full-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-wrapper">
        <img src={logoFull} alt="Company Name" className="logo" />
      </div>

      <ul className="nav-list">
        <li className="item">
          <button className="button button-dropdown">
            <span className="text">Menu</span>
            <span className="material-symbols-rounded icon">
              keyboard_arrow_down
            </span>
          </button>
        </li>
        <li className="item">Contact us</li>
        <li className="item">
          <button className="button button-green">
            <span className="material-symbols-rounded icon">open_in_new</span>
            <span className="text">Share Link</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
