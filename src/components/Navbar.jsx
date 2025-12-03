import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll";


export default function Navbar(){

    const { user, logout } = useContext(UserContext);

    const [scrolled, scrollY] = useScroll();

    return (
        <nav ref={scrolled} className={scrollY > 0 ? 'new-custom-nav nav' : 'custom-nav nav'} >
            <ul>
                <li>
                   <Link to={'/'}>Home</Link>
                </li>
                {user && (
                  <li>
                    <Link to={'/posts'}>Posts</Link>
                </li>  
                )}
            </ul> 
            <ul>
                <li>
                   <Link to={'/login'}>Login</Link>
                </li>
                {(!user && (
                    <li>
                        <Link to={'/register'}>Register</Link>
                    </li>
                )) || (
                    <>
                        <li>
                            <p>{user.name}</p>
                        </li>
                        <li>
                            <button id="logout_btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                ) }
            </ul> 
        </nav>
    )
}