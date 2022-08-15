import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ACTION } from "../App";


const AddEmp = (props) => {
  const [editId, setEditId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [designation, setDesignation] = useState();

  useEffect(() => {
    console.log('===AddEmp.js useffect called===');
    setEditId(props?.editEmp?.id);
    setName(props?.editEmp?.name);
    setAge(props?.editEmp?.age);
    setDesignation(props?.editEmp?.designation);
  }, [props?.editEmp?.id, props?.editEmp?.name, props?.editEmp?.age, props?.editEmp?.designation])


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleDesignation = (e) => {
    setDesignation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.getItem('isEdit') ? (
      props.onDispatch({
        type: ACTION.EDITEMP,
        payLoad: {
          id: editId,
          name,
          age,
          designation
        }
      })
    ) : (
      props.onDispatch({
        type: ACTION.ADDEMP,
        payLoad: {
          id: uuidv4(),
          name,
          age,
          designation
        },
      })
    );
    setName('');
    setAge('');
    setDesignation('');
    localStorage.removeItem('isEdit');
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
            value={name || ''}
          />
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
            value={age || ''}
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
            value={designation || ''}
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
