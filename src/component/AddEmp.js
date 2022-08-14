import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ACTION } from "../App";


const AddEmp = (props) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleDesignation = (e) => {
    setDesignation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onDispatch({
      type: ACTION.ADDEMP,
      payLoad: {
        id: uuidv4(),
        name,
        gender,
        age,
        designation
      },
    });
    setName('');
    setGender('');
    setAge('');
    setDesignation('');
  };

  return (
    <div className="lg:w-[50%] w-[100%] mx-auto border border-gray-100 p-4 my-4">
      <h3 className="text-3xl font-bold border-b-2 border-gray-100 mb-4 text-center">
        Employee Form
      </h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name=""
            id="fullName"
            placeholder="Full Name"
            className="form-control"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <div className="flex items-center pl-3">
            <div className="flex items-center mr-6">
              <input
                onChange={handleGender}
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={gender === "Male"}
              />
              <label className="radio-label-v1" htmlFor="male">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                onChange={handleGender}
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={gender === "Female"}
              />
              <label className="radio-label-v1" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            name=""
            id="age"
            placeholder="Enter Age"
            onChange={handleAge}
            className="form-control"
            value={age}
            min="0"
            max="99"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            name=""
            id="designation"
            placeholder="Enter Designation"
            onChange={handleDesignation}
            value={designation}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmp;
