import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Profile = () => {
  const [data, setData] = useState();
  const { token } = useAuth();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/profile",
        { message: "Hello" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (!data) return <div>Loading...</div>;
  return (
    <div className="mt-16">
      <h1 className="font-bold text-center text-3xl text-gray-900">
        User Profile
      </h1>
      <p className="text-center text-sm text-gray-400 font-medium">
        Displays user Profile information
      </p>
      <p>
        <span></span>
      </p>
      <div className="my-5 px-6">
        <Link
          to="/logout"
          className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
        >
          Logout
        </Link>
      </div>

      <div className="w-full">
        <h3 className="font-medium text-gray-900 text-left px-6">
          Click on the user Information to edit it
        </h3>
        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
          <a
            href="#"
            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
          >
            <span className="text-gray-500 text-xs">ID: </span>
            {data._id}
          </a>

          <a
            href="#"
            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
          >
            <span className="text-gray-500 text-xs">Name: </span>
            {data.name}
          </a>

          <a
            href="#"
            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
          >
            <span className="text-gray-500 text-xs">Email: </span>
            {data.email}
          </a>

          <a
            href="#"
            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
          >
            <span className="text-gray-500 text-xs">Age: </span>
            {data.age}
          </a>

          <a
            href="#"
            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
          >
            <span className="text-gray-500 text-xs">Bio: </span>
            {data.bio}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
