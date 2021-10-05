import Header  from './Header';
import {useHistory} from 'react-router-dom';
import React,{useState,useEffect} from 'react';

function AddProduct(){

	const[name,setName]=useState("");
	const[file,setFile]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");
    const history=useHistory();

	async function addProduct()
	{
		let product ={name,file,price,description};
		const formData = new FormData;
		formData.append('file',file);
		formData.append('price',price);
		formData.append('description',description);

		let result = await fetch(`https://radiant-woodland-09393.herokuapp.com/api/addProduct`,{
            method:'POST',
            headers:{
                "Accept":"application/json"
            },
            body: formData
        });
        result = await result.json();
        alert(result.status);
        history.push('/');


	}

	return(

	<>
    <Header/>
	<div className="col-sm-6 offset-sm-3">
		<h1>Add Product Page</h1>
		<input type="text" placeholder="Product Name" value={name} onChange= {(e)=>setName(e.target.value)} className="form-control" /><br/>
		<input type="file" placeholder="Product Image" onChange= {(e)=>setFile(e.target.files[0])} className="form-control" /><br/>
		<input type="text" placeholder="Product Description" value={description} onChange= {(e)=>setDescription(e.target.value)} className="form-control" /><br/>
		<input type="text" placeholder="Product Price" value={price} onChange= {(e)=>setPrice(e.target.value)} className="form-control" /><br/>
		<button onClick ={addProduct} className="btn btn-primary"> Add Product </button>
	</div>
	</>

	);
}

export default AddProduct;