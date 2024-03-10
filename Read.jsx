import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://65b39610770d43aba47a0e06.mockapi.io/user/${id}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        {Object.keys(data).length > 0 ? (
          <>
            <div className='mb-2'>
              <strong>Name: {data.name}</strong>
            </div>
            <div className='mb-2'>
              <strong>Email: {data.email}</strong>
            </div>
            <div className='mb-3'>
              <strong>Phone: {data.phone}</strong>
            </div>
            <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
          </>
        ) : (
          <p>No data found for this user.</p>
        )}
      </div>
    </div>
  );
}

export default Read;