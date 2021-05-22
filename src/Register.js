import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header  from './Header';


function Register(){
    
    useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
    	history.push('./')
    }
    },[])
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history=useHistory();

    async function signUp(){
      let item ={name,email,password};
      
      let result = await fetch("http://ecom-backend.example.com/api/register",{
      method:'POST',
      headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
       },
       body: JSON.stringify(item)
    });

    result = await result.json();
    
    localStorage.setItem("user-info",JSON.stringify(result));
    history.push('/');

    }

	return(
    <>
    <Header/>
	<div className="col-sm-6 offset-sm-3">
		<h1>Regitration Page</h1>
		<input type="text" placeholder="Name" value={name} onChange= {(e)=>setName(e.target.value)} className="form-control" />
		<br/>
		<input type="text" placeholder="Email" value={email} onChange= {(e)=>setEmail(e.target.value)}  className="form-control" />
		<br/>
		<input type="text" placeholder="password" value={password} onChange= {(e)=>setPassword(e.target.value)}  className="form-control" />
		<br/>
		<button onClick ={signUp} className="btn btn-primary"> Sign up </button>

	</div>
    </>
	);
}

export default Register