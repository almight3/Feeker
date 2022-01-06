import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [loginData,setLoginData] = useState({
      email:"",
      password:""
  })
  const [message,setMessage] = useState("")
    const divStyle = {
        maxWidth:"400px",
        margin:"6rem auto",
        border:"1px solid black",
        padding:"1rem",
        boxShadow: "2px 2px #888888"

    }
    const formStyle ={
        padding:"1rem",
        margin:"2rem 4.5rem",

    }
    let navigate = useNavigate();

   const onClickHandler = (e)=>{
       if((loginData.email === "test") && (loginData.password === "test")){
        setMessage("user loggedin");
        navigate("/employee")
       }
       else{
        setMessage("enter valid mail")
       }
   }

    return (
        <div style={divStyle}>
            <form style={formStyle}>
            <label htmlFor="email">Email</label>
            <br/>
            <input onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}}   type="text" id ="email"/>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}  type="password"  id ="password" />
            <br/>
            <p>{message}</p>
            <br/>
            <button onClick={(e)=>onClickHandler()}>LogIn </button>
            </form>  
            
          
        </div>
    );
}

export default Login;