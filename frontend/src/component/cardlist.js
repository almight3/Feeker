import React from 'react';
import {Link} from 'react-router-dom'
function Cardlist(props) {
const divStyle = {
    maxWidth:"500px",
    border:"1px solid black",
    display:"inline-block",
    margin:"3rem",
    padding:"1rem 2rem"
}    
const imgStyle = {
    width:"150px",
    height:"200px"
}

return (

        <div style={divStyle}>
          <img style={imgStyle} src={props.employeImage} alt="employee" />
          <h5>Name - {props.employeName}</h5>
          <h6>Department - {props.employeDepartment}</h6>
          <h6>Desingnation - {props.employeDesignation}</h6>
          <button><Link to = {`/employee/${props.employeId}`}>Details</Link></button>
       </div>
    );
}

export default Cardlist;