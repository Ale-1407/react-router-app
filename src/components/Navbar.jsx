import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";


export default function Navbar(){

    const { user, logout } = useContext(UserContext);

    return (
        <nav className="custom-nav p-4 d-flex justify-content-between">
            <ul>
                <li>
                   <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/posts'}>Posts</Link>
                </li>
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