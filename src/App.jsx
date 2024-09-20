
import TableNew from './pages/tableNew';
import TableUser from './pages/tableUser';
import TableCategory from './pages/tableCategory';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./App.css";

const routes = createBrowserRouter([
  { path: '/', element: <app /> },
  { path: '/users', element: <TableUser /> },
  { path: '/news', element: <TableNew /> },
  {path: '/categories', element: <TableCategory />},
])

function App() {
  return (
    <>
      
        <div>
          <h1>App</h1>
          <nav>
            <ul>
              <li><a href="/users">users</a></li>
              <li><a href="/news">news</a></li>
              <li><a href="/categories">categories</a></li>
            </ul>
          </nav>
          <RouterProvider router={routes} />
        </div>
   
    </>
  );
}

export default App;
