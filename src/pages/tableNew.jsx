import { useEffect, useState } from "react";
//import "/App.css";
import { NewService } from "../service/newService";
import {UserService } from "../service/userService";
import { CategoryService } from "../service/categoryService";

const newService = new NewService();
const userService = new UserService();
const categoryService = new CategoryService();

export default function TableNew() {

  const [users, setUsers] = useState([])
  const [categories, setCategories] = useState([])

  const [news, setNews] = useState([]);
  const [newu, setNew] = useState({  
    title: "",
    content: "",
    publicationDate: "",
    user: { id: null },
    category: { id: null }});
  const [newId, setNewId] = useState(null);

  useEffect(() => {
    newService.getAll().then((response) => setNews(response.data));
  }, []);

  useEffect(() =>{
  userService.getAll().then((response) => setUsers(response.data));
  }, [] )

  useEffect(() =>{
  categoryService.getAll().then((response) => setCategories(response.data));
  }, [] )

  const handleCreateNew = () => {
    newService.createNew(newu).then((response) => {
      setNews([...news, response.data]);
      setNew({  
        title: "",
        content: "",
        publicationDate: "",
        user: { id: null },
        category: { id: null }});
    });
  };

  const handleUpdateNew = () => {
    if (newId) {
      newService.updateNew(newId, newu).then((response) => {
        setNews(news.map((u) => (u.id === userId ? response.data : u)));
        setNew({  
          title: "",
          content: "",
          publicationDate: "",
          user: { id: null },
          category: { id: null }});
        setNewId(null);
      });
    }
  };

  const handleDeleteNew = (id) => {
    newService.deleteNew(id).then(() => {
      setNews(news.filter((u) => u.id !== id));
    });
  };

  const handleEditNew = (newu) => {
    setNew(newu);
    setNewId(newu.id);
  };
  return (
    <>
      <div>
        <h1>User Management</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={newu.title}
            onChange={(e) => setNew({ ...newu, title: e.target.value })}
          />
          <textarea
            name="content"
            placeholder="content"
            value={newu.content}
            onChange={(e) => setNew({ ...newu, content: e.target.value })}
          />
          <input
            type="date"
            placeholder="publication date"
            value={newu.publicationDate}
            onChange={(e) => setNew({ ...newu, publicationDate: e.target.value })}
          />
          <select name="users" value={newu.user.id || ""} onChange={(e) => setNew({ ...newu, user: { id: e.target.value } })}>
           <option value="">Select user</option>
           { users.map((user) =>(
            <option key={user.id} value={user.id}>{user.userName}</option>
           ))}
          </select>
          <select name="categories" value={newu.category.id || ""} onChange={(e) => setNew({ ...newu, category: { id: e.target.value } })}>
           <option value="">Select category</option>
           { categories.map((category) =>(
            <option key={category.id} value={category.id}>{category.nameCategory}</option>
           ))}
          </select>
          <button onClick={newId ? handleUpdateNew : handleCreateNew}>
            {newId ? "Update new" : "Create new"}
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>content</th>
              <th>publication date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.title}</td>
                <td>{u.content}</td>
                <td>{u.publicationDate}</td>
                <td>
                  <button onClick={() => handleEditNew(u)}>Edit</button>
                  <button onClick={() => handleDeleteNew(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


