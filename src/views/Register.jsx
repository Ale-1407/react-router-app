import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router";

export default function Register() {

    const {register} = useContext(UserContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.id === "name") {
            setName(e.target.value);
        } else if (e.target.id === "surname") {
            setSurname(e.target.value);
        } else if (e.target.id === "email") {
            setEmail(e.target.value);
        } else if (e.target.id === "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name && surname && email && password){
            register({ name, surname, email, password });
        }
        navigate('/');
    }



    return (
        <>
            <div className="">
                <h1 className="space">Register</h1>

                <form onSubmit={handleSubmit}>
                    <div className="">
                        <div className="">
                            <input className="" type="text" placeholder="Surname" id="surname" onChange={handleChange} />
                            <input className="" type="email" placeholder="Email" id="email" onChange={handleChange} />
                            <input className="" type="password" placeholder="Password" id="password" onChange={handleChange} />
                            <input className="" type="text" placeholder="Name" id="name" onChange={handleChange} />
                        </div>
                        
                        <button className="">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}