import {React,useState} from 'react';
import data from '../EmployeData/employDetails.json'
import CardList from './cardlist'
function ListEmploye(props) {
const [employeList,setEmployeList] = useState(data)    
const [department,setDepartment] = useState('')  
const [filterEmploye,setFilterEmploye] = useState(data)
 
const onClickHandler = ()=>{
const newList = employeList.filter(data=> data.emp_department === (department === "" ? data.emp_department : department))
setFilterEmploye(newList)
}

return (
    
    
    <div>
        <select onChange={(e)=>{setDepartment(e.target.value)}} style={{margin:"2rem 1rem 2rem 3rem",padding:"0.3rem"}}>
        <option value="" >select</option>
        <option value="Engineering">Engineering</option>
        <option value="Manager">Manager</option>
        <option value="Finance">Finance</option>
        </select>
        <button onClick={()=>{onClickHandler()}} >Search</button>
    <div>
    {filterEmploye.map((data)=>{
    return <CardList 
    employeName = {data.emp_name}
    employeDepartment = {data.emp_department}
    employeDesignation = {data.emp_designation}
    employeImage = {data.emp_photo_path}
    employeId = {data.emp_id}
    key={data.emp_id}
    />
    })}
    </div>
  </div>
    );
}


export default ListEmploye;
