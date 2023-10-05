import { useState } from "react"

const Title = ()=>{
    return(
        <a href="/">
            <img src="https://shorturl.at/hAQ56" alt="website logo" className="logo" />
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
                <li>About</li>
                <li>Contact</li>
                <li>Offers</li>
                <li>Cart</li>
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