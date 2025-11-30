import { Link } from "react-router";


export default function Navbar(){
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
                <li>
                    <Link to={'/register'}>Register</Link>
                </li>
            </ul> 
        </nav>
    )
}