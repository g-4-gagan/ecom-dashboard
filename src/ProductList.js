import Header  from './Header';
import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductList(){

	const [data,setData] = useState([]);
  const history=useHistory();
	useEffect(()=>{
		getData();
        console.log(process.env.REACT_APP_API_URL)
	},[]);

  

  async function deleteOperation(id)
  {
    let result = await fetch("https://radiant-woodland-09393.herokuapp.com/api/deleteProduct/"+id,{
            method:'DELETE'
        });
    result = await result.json();
    alert(result.status);
    getData();
    // history.push('/');
  }
  async function getData()
  {
    let result = await fetch("https://radiant-woodland-09393.herokuapp.com/api/productList");
    result = await result.json();
    setData(result);
  }

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
           <th>Operations</th>
       </tr>
       </thead>
       <tbody>
        {
       	data.map((item)=>
       
           <tr key={item.id}>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td><img style={{width: 140}} src={"https://radiant-woodland-09393.herokuapp.com/"+item.file_path}/></td>
               <td>{item.description}</td>
               <td>{item.price}</td>
               <td><Link to={"/update/"+item.id}><span className='update'>Update</span></Link>
               <span className='delete' onClick={()=>{deleteOperation(item.id)}}>Delete</span></td>
           </tr>)
        }
       </tbody>
      </Table>
	</div>
	</>

	);
}

export default ProductList;