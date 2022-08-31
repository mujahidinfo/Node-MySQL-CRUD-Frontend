import React, { useEffect, useState } from 'react';
import axios from "axios"

const DisplayUsers = () => {
    const [users, setUsers]=useState([])

    // fetching data
    useEffect(()=>{
        const fetchData= async ()=>{
            const data = await axios.get("api/employees/getEmployeesDetails");
            setUsers(data.data);
        }
        fetchData()
    },[])

    return (
      <div className="grid grid-cols-2 gap-2 py-6 rounded-md">
        {users?.map(({ id, salary, availability, employee }) => (
          <div
            key={id}
            className="bg-[#2A303C] p-4 rounded-md shadow-lg flex flex-col border-b-4 border-yellow-500"
          >
            <h1 className="md:text-2xl text-xl font-bold flex items-center text-white">
              {employee?.name}
              <span className="text-[12px] p-[2px] pl-2">
                {availability ? "🟢" : "🔴"}
              </span>
            </h1>
            <span>{employee?.designation}</span>
            <span>${salary}</span>
          </div>
        ))}
      </div>
    );
};

export default DisplayUsers;