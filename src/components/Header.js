import { useState } from "react"
import Logo from "../assets/img/Logo.png"
import { Link } from "react-router-dom";

const Title = ()=>{
    return(
        <a href="/">
            <img src={Logo} alt="website logo" className="logo" />
        </a>
    )
}


const Header = ()=>{

    const [isLoggedin, setIsLoggedin] = useState(false);
    return(
        <div className="nav-bar">
        <Title/>
        <div className="nav-items">
            <ul>
                <li><Link style={{ textDecoration: 'none' }} to={"/"}>Home</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to={"/about"}> About</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to={"/contact"}>Contact</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to={"/offers"}>Offers</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to={"/cart"}>Cart</Link></li>
            </ul>
            </div>
        {
            isLoggedin ? (<button onClick={()=>setIsLoggedin(false)}>Logout</button>)
            :(<button onClick={()=>setIsLoggedin(true)}>Login</button>)
        }
        </div>
    )
}

export default Header;