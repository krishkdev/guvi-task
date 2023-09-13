import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <h1>Guvi task</h1>
      <div className="">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider mr-1"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider ml-1"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
