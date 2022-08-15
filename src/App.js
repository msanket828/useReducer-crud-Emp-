import React, { useReducer, useState } from 'react';
import './App.css';
import AddEmp from './component/AddEmp';
import Header from './component/Header';
import ViewEmp from './component/ViewEmp';

export const ACTION = {
  ADDEMP: 'Add_Emp',
  REMOVEEMP: 'Remove_Emp',
  EDITEMP: 'Edit_Emp'
}

const initialState = [
  { id: 1, name: 'Sanket S Mane', age: 28, designation: 'UI developer' },
  { id: 2, name: 'Sushil S Jadhav', age: 26, designation: 'React js developer' },
]

const reducerFn = (state, action) => {
  switch (action.type) {
    case ACTION.ADDEMP:
      return [...state, action.payLoad];
    case ACTION.REMOVEEMP:
      return state.filter((emp) => emp.id !== action.payLoad);
    case ACTION.EDITEMP:
      let newState = [...state];
      newState[state.findIndex((emp) => emp.id === action.payLoad.id)] = action.payLoad;
      return newState;
    default:
      return state;
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const [editEmp, setEditEmp] = useState();
  const editRecord = (data) => {
    setEditEmp(data);
    localStorage.setItem('isEdit', true);
  }
  return (
    <main>
      <Header />
      <AddEmp onDispatch={dispatch} editEmp={editEmp} />
      <ViewEmp state={state} onDispatch={dispatch} onEditRecord={editRecord} />
    </main>
  )
}

export default App