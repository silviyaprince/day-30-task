import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      zipcode: ''
    }
  });

  useEffect(() => {
    axios.get(`https://65b39610770d43aba47a0e06.mockapi.io/user/${id}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleUpdate = event => {
    event.preventDefault();
    axios.put(`https://65b39610770d43aba47a0e06.mockapi.io/user/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name='name'
              className='form-control'
              placeholder='Enter Name'
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name='username'
              className='form-control'
              placeholder='Enter Username'
              value={values.username}
              onChange={e => setValues({ ...values, username: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name='email'
              className='form-control'
              placeholder='Enter Email'
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name='phone'
              className='form-control'
              placeholder='Enter Phone'
              value={values.phone}
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name='street'
              className='form-control'
              placeholder='Enter Street'
              value={values.address.street}
              onChange={e => setValues({ ...values, address: { ...values.address, street: e.target.value } })}
            />
            <input
              type="text"
              name='city'
              className='form-control'
              placeholder='Enter City'
              value={values.address.city}
              onChange={e => setValues({ ...values, address: { ...values.address, city: e.target.value } })}
            />
            <input
              type="text"
              name='zipcode'
              className='form-control'
              placeholder='Enter Zipcode'
              value={values.address.zipcode}
              onChange={e => setValues({ ...values, address: { ...values.address, zipcode: e.target.value } })}
            />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Update;