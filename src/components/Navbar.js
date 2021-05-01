import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import VED_logo from '../images/VED_logo.png';
function Navbar() {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        VED
                        <img src={VED_logo} alt="VED Logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click?'fas fa-times':'fas fa-bars'}/>
                    </div>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className="nav-item" id="about-dropdown-item">
                        <Link to="/about" className="nav-links">
                            關於VED
                            <i className="fas fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                            <li><Link to="/origin" className="dropdown-link">VED 起源</Link></li>
                            <li><Link to="/vision" className="dropdown-link">VED使命與願景</Link></li>
                            <li><Link to="/members" className="dropdown-link">成員介紹</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item" id="nav-dropdown-item">
                        <Link to="/plan" className="nav-links">
                            歷年計畫
                            <i className="fas fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                            <li><Link to="/taiwan_2020" className="dropdown-link">2020夏季&nbsp;台灣</Link></li>
                            <li><Link to="/cambodia_2019" className="dropdown-link">2019冬季&nbsp;柬埔寨</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link to="/principles" className="nav-links">
                            教育指引
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            聯絡我們
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/colab" className="nav-links">
                            合作接洽
                        </Link>
                    </li>   
                </ul>
            </nav> 
        </>
    )
}

export default Navbar;
