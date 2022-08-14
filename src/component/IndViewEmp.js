import React from 'react'
import { ACTION } from '../App'

const IndViewEmp = ({ emp, index,onDispatch,onEditRecord }) => {
  const dispatch = (data) => {
    return onDispatch(data);
  }

  const editRecord=(data)=> {
    return onEditRecord(data);
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{emp.name}</td>
      <td>{emp.gender}</td>
      <td>{emp.age}</td>
      <td>{emp.designation}</td>
      <td>
        <button className='btn btn-success' onClick={()=> editRecord(emp)}>Edit</button>
      </td>
      <td>
        <button className='btn btn-danger' onClick={() => dispatch({ type: ACTION.REMOVEEMP, payLoad: emp.id })}>Delete</button>
      </td>
    </tr>
  )
}

export default IndViewEmp