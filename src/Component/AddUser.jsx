import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState()
  const [availability, setAvailability] = useState();

  const postEmployee = async () =>{
    let data = {
      name: name,
      designation: designation
    }
    await axios.post("api/employees/addEmployee", data);
  }
  const postEmployeeDetails = async () =>{
    let data = {
      salary: salary,
      availability: availability
    }
    await axios.post("api/employees/addEmployeeDetails", data);
  }


  const handleSubmit =()=>{
    try{
      postEmployee()
      postEmployeeDetails()
    }
    catch{(console.error())}
  }

    return (
      <div>
        <h1 className="text-3xl font-bold text-center py-5 text-white shadow-md">
          Add Employee
        </h1>
        <div>
          <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
            <label className="input-group input-group-vertical shadow-lg">
              <span className="py-2 text-white">Name</span>
              <input
                type="text"
                placeholder="Enter name"
                className="input w-full"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input-group input-group-vertical shadow-lg">
              <span className="py-2 text-white">Designation</span>
              <input
                type="text"
                placeholder="Enter Designation"
                className="input w-full"
                required
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </label>
            <label className="input-group input-group-vertical shadow-lg">
              <span className="py-2 text-white">Salary</span>
              <input
                type="number"
                placeholder="$ Enter ammount"
                className="input w-full"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </label>
            <label className="input-group input-group-vertical shadow-lg ">
              <span className="py-2 text-white">
                Availability<span className="text-[11px] p-0 pl-1">🟢🔴</span>
              </span>
              <select
                className="input w-full"
                required
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              >
                <option value={null}>Select a option</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </label>
            <button
              className="btn my-2 text-gray-900 font-bold bg-yellow-500 col-span-2 hover:text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default AddUser;