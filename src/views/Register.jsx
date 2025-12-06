import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";

export default function Register() {
  const { register } = useContext(UserContext);

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

    if (name && surname && email && password) {
      register({ name, surname, email, password });
    }
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <fieldset
          onSubmit={handleSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-6"
        >
          <legend className="fieldset-legend">Register</legend>

          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Name"
            onChange={handleChange}
          />

          <label className="label">Surname</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Surname"
            onChange={handleChange}
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            onChange={handleChange}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </>
  );
}
