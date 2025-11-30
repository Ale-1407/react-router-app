import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

export default function Register() {

    const {register} = useContext(UserContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    }



    return (
        <>
            <div className="container mt-4 w-50">
                <h1 className="space text-center mb-4">Register</h1>

                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex flex-column gap-3 w-50 mb-4">
                            <input className="form-control" type="text" placeholder="Name" id="name" onChange={handleChange} />
                            <input className="form-control" type="text" placeholder="Surname" id="surname" onChange={handleChange} />
                            <input className="form-control" type="email" placeholder="Email" id="email" onChange={handleChange} />
                            <input className="form-control" type="password" placeholder="Password" id="password" onChange={handleChange} />
                        </div>
                        
                        <button className="btn btn-outline-dark w-25">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}