import React from 'react';
function DetailCard(props) {
const divStyle = {
    maxWidth:"600px",
    border:"1px solid black",
    margin:"auto",
    padding:"2rem 2rem",
    textAlign:"center",
}    
const imgStyle = {
    width:"150px",
    height:"200px",
    margin:"auto",
   display:"block"
}


return (

        <div style={divStyle}>
          <img style={imgStyle} src="image/employe2.jpg" alt="employee" />
          <h5>Name - {props.employeName}</h5>
          <h6>Department - {props.employeDepartment}</h6>
          <h6>Desingnation - {props.employeDesignation}</h6>
          <h6>Department - {props.employeDepartment}</h6>
          <h6>Address - {props.employeAddress}</h6>
          <h6>Salary - {props.employeSalary}</h6>
          <p>Experience - {props.employeExperience}</p>
       </div>
    );
}

export default  DetailCard;