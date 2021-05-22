import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header  from './Header';

function Login(){
	useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
    	history.push('./')
    }
    },[]);
    const history=useHistory();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    async function signIn(){
      let item ={email,password};
      
      let result = await fetch("http://ecom-backend.example.com/api/login",{
      method:'POST',
      headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
       },
       body: JSON.stringify(item)
    });

    result = await result.json();
    if (result.error) 
    {
    	alert (result.error[0]);
    }
    else
    {
    	localStorage.setItem("user-info",JSON.stringify(result));
    	history.push('/');
    }

    }

	return(

	<>
    <Header/>
	<div className="col-sm-6 offset-sm-3">
		<h1>Login Page</h1>
		<input type="text" placeholder="Email" value={email} onChange= {(e)=>setEmail(e.target.value)}  className="form-control" />
		<br/>
		<input type="text" placeholder="password" value={password} onChange= {(e)=>setPassword(e.target.value)}  className="form-control" />
		<br/>
		<button onClick ={signIn} className="btn btn-primary"> Sign In </button>

	</div>
    </>

	);
}

export default Login;