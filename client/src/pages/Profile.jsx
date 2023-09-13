import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Profile = () => {
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);

  const { token } = useAuth();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}api/users/profile`;
    try {
      const response = await axios.post(
        url,
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
  const updateData = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}api/users/profile`;
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
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
        <button
          onClick={() => setShowModal(true)}
          className="mx-10 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
        >
          Edit information
        </button>
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    className="mt-3 peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
                    value={data.name}
                    onChange={(e) =>
                      setData(() => ({ ...data, name: e.target.value }))
                    }
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="mt-3 peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
                    value={data.email}
                    onChange={(e) =>
                      setData(() => ({ ...data, email: e.target.value }))
                    }
                    placeholder="Email address"
                  />
                  <input
                    type="Age"
                    className="mt-3 peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
                    value={data.age}
                    onChange={(e) =>
                      setData(() => ({ ...data, age: e.target.value }))
                    }
                    placeholder="Age"
                  />
                  <textarea
                    className="mt-3 peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                    rows="3"
                    value={data.bio}
                    onChange={(e) =>
                      setData(() => ({ ...data, bio: e.target.value }))
                    }
                    placeholder="Bio"
                  ></textarea>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      updateData();
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Profile;
