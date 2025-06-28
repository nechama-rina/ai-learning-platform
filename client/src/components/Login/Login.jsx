import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/Users/login',
        { name, phone },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const isAdmin = name.trim().toLowerCase() === 'admin' && phone.trim() === '1234567890';

      const userData = {
        id: response.data.id,
        name: response.data.name,
        phone,
        isAdmin,
      };

      dispatch(setUser(userData));
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed: ' + (error.response?.data || error.message));
    }
  };

  useEffect(() => {
    if (user?.id) {
      if (user.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/LessonViewer');
      }
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <Card title="Login">
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="field">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <InputText
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              required
            />
          </div>
          <Button
            type="submit"
            label="Login"
            className="p-button-primary mt-3"
          />
        </form>
      </Card>
    </div>
  );
};

export default Login;
