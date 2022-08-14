import React from 'react'
import IndViewEmp from './IndViewEmp';

const ViewEmp = (props) => {
  const {state}=props;

  const dispatch=(data)=> {
    return props.onDispatch(data);
  }

  const editRecord=(data)=> {
    return props.onEditRecord(data);
  }
  
  return (
    <div className='lg:w-[70%] w-[100%] mx-auto border border-gray-100 p-4 my-4'>
      <table className='table viewemp-table'>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            state && state.map((emp,index) => {
              return (
                <IndViewEmp key={emp.id} index={index} emp={emp} onDispatch={dispatch} onEditRecord={editRecord}/>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ViewEmp