import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { sign_in } = useContext(UserContext);
  const navigate = useNavigate();

  const showData = (data) => {
    sign_in(data);
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <form onSubmit={handleSubmit(showData)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-6">
            <legend className="fieldset-legend">Register</legend>

            <label className="label">Name</label>
            <input
              id="name"
              type="text"
              className="input w-full"
              placeholder="Name"
              {...register("name", {
                required: "Compila questo campo!",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri!",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <label className="label">Surname</label>
            <input
              id="surname"
              type="text"
              className="input w-full"
              placeholder="Surname"
              {...register("surname", {
                required: "Compila questo campo!",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri!",
                },
              })}
            />
            {errors.surname && (
              <p className="text-red-500">{errors.surname.message}</p>
            )}
            <label className="label">Email</label>
            <input
              id="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              {...register("email", {
                required: "Compila questo campo!",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri!",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label">Password</label>
            <input
              id="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              {...register("password", {
                required: "Compila questo campo!",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri!",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
