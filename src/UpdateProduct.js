import Header  from './Header';
import {withRouter} from 'react-router-dom';
import {useState,useEffect} from 'react';


function UpdateProduct(props){

	const [data,setData] = useState([]);
	useEffect(async ()=>{
		let result = await fetch("http://ecom-backend.example.com/api/getProduct/"+props.match.params.id);
        result = await result.json();
        setData(result);
	},[]);

	function update()
	{

	}

	return(

	<>
    <Header/>
	<div className="col-sm-6 offset-sm-3">
		<h1>Update Product Page</h1>
		<input type="text" placeholder="Product Name" defaultValue={data.name} className="form-control" /><br/>
		<input type="file" placeholder="Product Image" defaultValue={data.file_path} className="form-control" /><br/>
		<img style={{width: 60}} src={"http://ecom-backend.example.com/"+data.file_path}/><br/><br/>
		<input type="text" placeholder="Product Description" defaultValue={data.description} className="form-control" /><br/>
		<input type="text" placeholder="Product Price" defaultValue={data.price} className="form-control" /><br/>
		<button onClick ={update} className="btn btn-primary"> Update Product </button>
	</div>
	</>

	);
}

export default withRouter(UpdateProduct);