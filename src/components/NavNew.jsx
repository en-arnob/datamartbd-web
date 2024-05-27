import {useState} from "react";
import {NavLink} from "react-router-dom";
import "../styles/nav.css";
import {CgMenuRightAlt} from "react-icons/cg";
import {CgMenuMotion} from "react-icons/cg";
import {Link} from "react-scroll";


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (<>
        <nav className="navbar bg-blue-950">
            <div className="nav-container">
                <Link to="home" smooth={true} className="nav-logo">
                    <span className='text-white font-semibold'>DataMart</span>
                    <span className='text-orange-500 font-semibold'>BD Limited</span>
                    {/* <i className="fas fa-code"></i> */}
                </Link>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            smooth={true}
                            to="home"
                            activeClassName="active"
                            className="nav-links cursor-pointer"
                            onClick={handleClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            smooth={true}
                            to="services"
                            activeClassName="active"
                            className="nav-links cursor-pointer"
                            onClick={handleClick}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon mt-1 text-orange-500" onClick={handleClick}>
                    {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                    {click ? (<span className="icon text-2xl">
                {" "}
                        <CgMenuMotion/>
              </span>) : (<span className="icon text-2xl">
                <CgMenuRightAlt/>
              </span>)}
                </div>
            </div>
        </nav>
    </>);
}

export default NavBar;