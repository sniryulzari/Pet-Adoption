import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PetsList from '../components/Admin-PetList';
import UsersList from '../components/Admin-UserList';
import { UsersContext } from '../Context/Context-Users';
import { PetContext } from '../Context/Context-Pets';
import axios from 'axios';

const AdminDashboard = () => {
  const { users, setusers, getServerUrl } = useContext(UsersContext);
  const { pets, setPets } = useContext(PetContext);

  const navigate = useNavigate();

  const getAllUsers = async () => {
    const url = `${getServerUrl()}/admin/allusers`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setusers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllPets = async () => {
    const url = `${getServerUrl()}/admin/all`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setPets(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsers();
    getAllPets();
  }, []);

  return (
    <div className="admin-dashboard-pets-container">
      <h1 className="admin-dashboard-header">Admin Dashboard</h1>
      <h3 className="admin-dashboard-table-header">List of Users</h3>
      <UsersList />

      <div className="admin-pets-table-header-container">
        <h3 className="admin-dashboard-table-header">List of Pets</h3>
        <button
          className="add-pet-button-link"
          onClick={() => navigate('/admin-AddPet')}
        >
          Add Pet
        </button>
      </div>
      <PetsList />
    </div>
  );
};

export default AdminDashboard;
