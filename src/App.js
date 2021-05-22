import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header  from './Header';
import Login  from './Login';
import Register  from './Register';
import AddProduct  from './AddProduct';
import UpdateProduct  from './UpdateProduct';
import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Route path="/">
      <h1>Hello World!</h1>
      </Route>
      <Route path="/add">
        <AddProduct/>
      </Route>
      <Route path="/update">
        <UpdateProduct/>
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
