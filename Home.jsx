import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://65b39610770d43aba47a0e06.mockapi.io/user')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      axios.delete(`https://65b39610770d43aba47a0e06.mockapi.io/user/${id}`)
        .then(res => {
          // Filter out the deleted user from the data array
          setData(data.filter(user => user.id !== id));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>

      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'></div>
        <Link to="/create" className='btn btn-success'> Add +</Link>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/read/${user.id}`} className='btn btn-sm btn-info me-2'> Read</Link>
                  <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary me-2'> Edit</Link>
                  <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;