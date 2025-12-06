import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
/* import useScroll from "../hooks/useScroll"; */

export default function Navbar() {
  const { user, logout } = useContext(UserContext);

  /* const [scrolled, scrollY] = useScroll(); */

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl" to={"/"}>
            Homepage
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user && (
              <li>
                <Link to={"/posts"}>Posts</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end flex gap-x-2">
          <Link className="btn" to={"/login"}>
            Login
          </Link>
          {(!user && (
            <Link className="btn" to={"/register"}>
              Register
            </Link>
          )) || (
            <>
              <ul>
                <li>
                  <p>{user.name}</p>
                </li>
                <li>
                  <button id="logout_btn" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
