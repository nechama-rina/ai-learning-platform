
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { name, phone, isAdmin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log({ name, phone, isAdmin });

  const items = [
    { key: 'home', label: 'Home', icon: 'pi pi-home', command: () => navigate('/') },
    ...(name
      ? [{ key: 'history', label: 'History', icon: 'pi pi-book', command: () => navigate('/history') }]
      : []),
    { key: 'lesson', label: 'AI Prompt', icon: 'pi pi-send', command: () => navigate('/LessonViewer') },
    { key: 'logout', label: 'Logout', icon: 'pi pi-sign-out', command: () => navigate('/logout') },
    ...(isAdmin ? [{ key: 'admin', label: 'Admin', icon: 'pi pi-cog', command: () => navigate('/admin') }] : []),
  ];

  const start = (
    <div
      className="navbar-logo"
      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
    >
      <svg width="40" height="40" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="28" fill="#00bcd4" stroke="#fff" strokeWidth="3" />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          fill="#fff"
          fontSize="20"
          fontFamily="Segoe UI"
          dy=".3em"
        >
          AI
        </text>
      </svg>
      <span
        className="navbar-logo-title"
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#00bcd4',
          letterSpacing: '2px',
          textShadow: '0 2px 8px #00bcd488',
        }}
      >
        AI Learning
      </span>
    </div>
  );

  const end = name ? (
    <span style={{ color: 'white', fontWeight: 500 }}>
      Hello, {name}
    </span>
  ) : null;

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};

export default Navbar;
