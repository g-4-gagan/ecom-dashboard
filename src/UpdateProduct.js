import Header  from './Header';
import {withRouter} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';


function UpdateProduct(props){

	const[name,setName]=useState("");
	const[file,setFile]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");
	const [data,setData] = useState([]);
	const history=useHistory();

	useEffect(async ()=>{
		let result = await fetch(`${process.env.REACT_APP_API_URL}/getProduct/`+props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setDescription(result.description);
        setPrice(result.price);
        setFile(result.file_path);
	},[]);

	async function edit(id)
	{
		const formData = new FormData;
		formData.append('name',name);
		formData.append('file',file);
		formData.append('price',price);
		formData.append('description',description);
		let result = await fetch(`${process.env.REACT_APP_API_URL}/updateProduct/`+id+"?_method=PUT",{
            method:'POST',
            headers:{
                "Accept":"application/json"
            },
            body: formData
			});
        result = await result.json();
        console.log(result);
        // history.push('/');
	}

	return(

	<>
    <Header/>
	<div className="col-sm-6 offset-sm-3">
		<h1>Update Product Page</h1>
		<input type="text" placeholder="Product Name" defaultValue={data.name} onChange= {(e)=>setName(e.target.value)} className="form-control" /><br/>
		<input type="file" placeholder="Product Image" onChange= {(e)=>setFile(e.target.files[0])} className="form-control" /><br/>
		<img style={{width: 60}} src={"https://radiant-woodland-09393.herokuapp.com/"+data.file_path}/><br/><br/>
		<input type="text" placeholder="Product Description" defaultValue={data.description} onChange= {(e)=>setDescription(e.target.value)} className="form-control" /><br/>
		<input type="text" placeholder="Product Price" defaultValue={data.price} onChange= {(e)=>setPrice(e.target.value)} className="form-control" /><br/>
		<button onClick ={()=>edit(data.id)} className="btn btn-primary"> Update Product </button>
	</div>
	</>

	);
}

export default withRouter(UpdateProduct);