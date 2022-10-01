import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayUsers = () => {
  const [users, setUsers] = useState([]);

  const deleteUser = async (id) => {
    console.log(id);
  };

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("api/employees/getEmployeesDetails");
      setUsers(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {users.length < 1 ? (
        <h1 className="text-center mt-5 text-xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-2 gap-2 py-6 rounded-md">
          {users?.map((items) => (
            <div
              key={items?.id}
              className="bg-[#2A303C] p-4 rounded-md shadow-lg flex flex-col border-b-4 border-yellow-500 relative"
            >
              <div
                className="bg-slate-200 rounded-full w-fit p-1 absolute right-3 top-3 active:bg-yellow-500 duration-75"
                onClick={deleteUser(items)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="black"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              <h1 className="md:text-2xl text-xl font-bold flex items-center text-white">
                {items?.employee?.name}
                <span className="text-[12px] p-[2px] pl-2">
                  {items?.availability ? "🟢" : "🔴"}
                </span>
              </h1>
              <span>{items?.employee?.designation}</span>
              <span>${items?.salary}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayUsers;
