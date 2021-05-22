import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header  from './Header';
import Login  from './Login';
import Register  from './Register';
import AddProduct  from './AddProduct';
import UpdateProduct  from './UpdateProduct';
import Protected  from './Protected';
import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/add">
        <Protected Cmp={AddProduct}/>
      </Route>
      <Route path="/update">
        <Protected Cmp={UpdateProduct}/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
