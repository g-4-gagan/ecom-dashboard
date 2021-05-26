import Header  from './Header';
import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function SearchProduct(){
  
  const [data,setData] = useState([]);
  

  async function deleteOperation(id)
  {
    let result = await fetch("http://ecom-backend.example.com/api/deleteProduct/"+id,{
            method:'DELETE'
        });
    result = await result.json();
    alert(result.status);
    getData();
  }
  async function getData(key)
  {
    if(key)
    {
      let result = await fetch("http://ecom-backend.example.com/api/search/"+key);
      result = await result.json();
      setData(result);
    }
    
  }


	return(
	<>
    <Header/>
	<div className="col-sm-8 offset-sm-2">
    <br/>
    <h1>Search Products</h1><br/>
    <input type="text" placeholder="Search" onChange= {(e)=>getData(e.target.value)} className="form-control" /><br/>
    {
      data.length>0?
	   <Table striped bordered hover>
       <thead>
       <tr>
           <th>#</th>
           <th>Name</th>
           <th>Image</th>
           <th>Description</th>
           <th>Price</th>
           <th>Operations</th>
       </tr>
       </thead>
       <tbody>
        {
       	data.map((item)=>
       
           <tr key={item.id}>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td><img style={{width: 140}} src={"http://ecom-backend.example.com/"+item.file_path}/></td>
               <td>{item.description}</td>
               <td>{item.price}</td>
               <td><Link to={"/update/"+item.id}><span className='update'>Update</span></Link>
               <span className='delete' onClick={()=>{deleteOperation(item.id)}}>Delete</span></td>
           </tr>)
        }
       </tbody>
      </Table>
      :<h2>No product exist</h2>
    }
	</div>
	</>

	);
}

export default SearchProduct;