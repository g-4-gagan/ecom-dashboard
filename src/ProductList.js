import Header  from './Header';
import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';

function ProductList(){

	const [data,setData] = useState([]);
	useEffect(async()=>{
		let result = await fetch("http://ecom-backend.example.com/api/productList");
		result = await result.json();
		setData(result);
	},[]);
	console.warn("data",data);
	return(
	<>
    <Header/>
	<div className="col-sm-8 offset-sm-2">
	   <h1>Products List</h1>
	   <Table striped bordered hover>
       <thead>
       <tr>
           <th>#</th>
           <th>Name</th>
           <th>Image</th>
           <th>Description</th>
           <th>Price</th>
       </tr>
       </thead>
       <tbody>
        {
       	data.map((item)=>
       
           <tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td><img style={{width: 140}} src={"http://ecom-backend.example.com/"+item.file_path}/></td>
               <td>{item.description}</td>
               <td>{item.price}</td>
           </tr>)
        }
       </tbody>
      </Table>
	</div>
	</>

	);
}

export default ProductList;