/*import { useEffect, useState } from "react";
//import "/App.css";
import {CategoryService } from "../service/categoryService";


const categoryService = new CategoryService();

export default function TableCategory() {

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({  
    nameCategory: "",
   });
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    categoryService.getAll().then((response) => setCategories(response.data));
  }, []);



  const handleCreateCategory = () => {
    categoryService.createCategory(category).then((response) => {
      setCategories([...categories, response.data]);
      setCategory({  
        nameCategory: "", });
    });
  };

  const handleUpdateCategory = () => {
    if (categoryId) {
      categoryService.updateCategory(categoryId, category).then((response) => {
        setCategories(categories.map((u) => (u.id === categoryId ? response.data : u)));
        setCategory({  
            nameCategory: "",});
        setCategoryId(null);
      });
    }
  };

  const handleDeleteCategory = (id) => {
    categoryService.deleteCategory(id).then(() => {
      setCategories(categories.filter((u) => u.id !== id));
    });
  };

  const handleEditCategory = (category) => {
    setCategory(category);
    setCategoryId(category.id);
  };
  return (
    <>
      <div>
        <h1>User Management</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={category.nameCategory}
            onChange={(e) => setCategory({ ...category, nameCategory: e.target.value })}
          />
         
          <button onClick={categoryId ? handleUpdateCategory : handleCreateCategory}>
            {categoryId ? "Update category" : "Create category"}
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nameCategory}</td>
                <td>
                  <button onClick={() => handleEditCategory(u)}>Edit</button>
                  <button onClick={() => handleDeleteCategory(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}*/


