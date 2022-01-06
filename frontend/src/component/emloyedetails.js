import {useState} from 'react';
import data from "../EmployeData/employDetails.json"
import DetailCard  from './detailcard';
import {useParams} from "react-router-dom"

function EmloyeDetails(props) {
const [employeDetails,setEmployeDetails] = useState(data)
const {id} = useParams();

const detail = employeDetails.filter(data=> data.emp_id === id)



    return (
        <div>
            {detail.map(data=>{
                return <DetailCard 
                employeName = {data.emp_name}
                employeDepartment = {data.emp_department}
                employeDesignation = {data.emp_designation}
                employeImage = {data.emp_photo_path}
                employeExperience  = {data.emp_experience}
                employeAddress = {data.emp_address}
                employeSalary   = {data.emp_salary}
                key={data.emp_id}
             />
            })}
        </div>
    );
}

export default EmloyeDetails;