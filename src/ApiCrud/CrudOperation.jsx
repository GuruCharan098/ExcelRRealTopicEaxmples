import { useState, useEffect } from 'react';
import {
  getUsersfetchApi,
  AddUsersfetchApi,
  updateUsersfetchApi,
  deleteUserfetchApi
} from './Service/fetchApi.js';

import UserForm from '../ApiCrud/CrudComponents/UserForm.jsx';
import UserTable from '../ApiCrud/CrudComponents/UserTable.jsx';

const CrudOperation = () => {

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  // Load Users
  const loadUsers = async () => {
    try {
      const data = await getUsersfetchApi();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Handle Input Change (FIXED)
  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  Handle Submit (Add + Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await updateUsersfetchApi(editId, form);
        setEditId(null);
      } else {
        await AddUsersfetchApi(form);
      }

      setForm({ name: "", email: "" });
      loadUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Handle Edit
  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email
    });
    setEditId(user.id);
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await deleteUserfetchApi(id);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD APP</h1>

      <UserForm
        form={form}
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        editId={editId}
      />

      <UserTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CrudOperation;