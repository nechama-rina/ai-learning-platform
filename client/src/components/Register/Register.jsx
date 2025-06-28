
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { registerUser } from '../../API/UserAPI';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, phone });
      alert('🎉 Registered successfully!');
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Registration error:', error);
      alert('😢 Registration failed: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className="register-container">
      <Card
        title="Smart Learning Registration"
        subTitle="Join now the AI-powered learning experience"
        className="register-card"
      >
        <form onSubmit={handleSubmit} className="p-fluid register-form">
          <div className="field">
            <label htmlFor="name" className="input-label">Name</label>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="input-text"
            />
          </div>
          <div className="field">
            <label htmlFor="phone" className="input-label">Phone</label>
            <InputText
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
              className="input-text"
            />
          </div>
          <Button
            type="submit"
            label="Register"
            icon="pi pi-user-plus"
            className="p-button-info submit-button"
          />
        </form>
      </Card>
    </div>
  );
};

export default Register;
