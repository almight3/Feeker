import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";


import LogIn from  './component/login'
import EmployeList from './component/listEmploy'
import EmployeDetails from "./component/emloyedetails"
function App(props) {
  return (
       <BrowserRouter>
      <Routes>
          <Route index path="/"  element={<Navigate to = "/login" />} />
          <Route index path="/login"  element={<LogIn />} />
          <Route index path="/employee" element={<EmployeList />} />
          <Route index path="/employee/:id" element={<EmployeDetails />} />
           
      </Routes>
      </BrowserRouter>
  )
}

export default App;