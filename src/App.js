import './App.css';
import { Button } from 'react-bootstrap';
import Header  from './Header';
import Login  from './Login';
import Register  from './Register';
import ProductList  from './ProductList';
import AddProduct  from './AddProduct';
import UpdateProduct  from './UpdateProduct';
import SearchProduct from './SearchProduct';
import Protected  from './Protected';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/add">
        <Protected Cmp={AddProduct}/>
      </Route>
      <Route path="/search">
        <Protected Cmp={SearchProduct}/>
      </Route>
      <Route path="/update/:id">
        <Protected Cmp={UpdateProduct}/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/">
        <Protected Cmp={ProductList}/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
