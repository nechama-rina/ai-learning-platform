import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Card className="home-card">
        <h1 className="main-title">Welcome to AI Learning Platform</h1>
        <p className="subtitle">Empower your mind with intelligent learning</p>
        <div className="button-group">
          <Button
            label="Login"
            icon="pi pi-sign-in"
            className="p-button-secondary"
            onClick={() => navigate('/login')}
          />
          <Button
            label="Register"
            icon="pi pi-user-plus"
            className="p-button-info"
            onClick={() => navigate('/register')}
          />
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
