import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import axios from "axios";

function Register() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    const url = `${import.meta.env.VITE_BASE_URL}api/users`;
    try {
      const res = await axios.post(url, data);
      setToken(res.data.token);
      localStorage.setItem("data", { ...res.data });
      navigate("/", { replace: true });
      console.log(res);
    } catch {
      console.error;
      alert("Error happened");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleRegister(data);

    console.log(data);
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            {...register("name", { required: true })}
            placeholder="Full name"
          />
          {errors.name && (
            <p className="text-red-600 hover:underline hover:underline-offset-4">
              Name is required
            </p>
          )}
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-red-600 hover:underline hover:underline-offset-4">
              Email is required and must be valid
            </p>
          )}
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            {...register("password", { required: true, minLength: 8 })}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm hover:underline hover:underline-offset-4">
              Password is required and must be atleast 8 characters.
            </p>
          )}
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to="/login"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
