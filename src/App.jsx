import TableUser from "./pages/tableUser";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./App.css";

const routes = createBrowserRouter([
  { path: '/', element: <app /> },
  { path: '/users', element: <TableUser /> },
])

function App() {
  return (
    <>
      
        <div>
          <h1>App</h1>
          <nav>
            <ul>
              <li>
                < a href="/users">users</a>
              </li>
            </ul>
          </nav>
          <RouterProvider router={routes} />
        </div>
   
    </>
  );
}

export default App;
