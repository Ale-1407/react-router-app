import { Link } from "react-router";


export default function Navbar(){
    return (
        <nav className="custom-nav space">
            <ul>
                <li>
                   <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/posts'}>Posts</Link>
                </li>
            </ul>  
        </nav>
    )
}