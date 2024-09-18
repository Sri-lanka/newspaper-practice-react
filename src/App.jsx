import tableUser from '../components/tableUser';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./App.css";


function App() {
 
  
  return (
    <>
     <BrowserRouter>
      <div>
        <h1>App</h1>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
         
          </ul>
        </nav>
        <Route path="/home" element={<tableUser />} />
      
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
