import { useEffect, useState } from "react";
//import "/App.css";
import { UserService } from "../service/userService";
const userService = new UserService();

export default function TableUser() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ userName: "", password: "", email: "" });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    userService.getAll().then((response) => setUsers(response.data));
  }, []);

  const handleCreateUser = () => {
    userService.createUser(user).then((response) => {
      setUsers([...users, response.data]);
      setUser({ userName: "", password: "", email: "" });
    });
  };

  const handleUpdateUser = () => {
    if (userId) {
      userService.updateUser(userId, user).then((response) => {
        setUsers(users.map((u) => (u.id === userId ? response.data : u)));
        setUser({ userName: "", password: "", email: "" });
        setUserId(null);
      });
    }
  };

  const handleDeleteUser = (id) => {
    userService.deleteUser(id).then(() => {
      setUsers(users.filter((u) => u.id !== id));
    });
  };

  const handleEditUser = (user) => {
    setUser(user);
    setUserId(user.id);
  };
  return (
    <>
      <div>
        <h1>User Management</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button onClick={userId ? handleUpdateUser : handleCreateUser}>
            {userId ? "Update User" : "Create User"}
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.userName}</td>
                <td>{u.email}</td>
                <td>
                  <button onClick={() => handleEditUser(u)}>Edit</button>
                  <button onClick={() => handleDeleteUser(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


