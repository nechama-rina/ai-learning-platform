import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/Users')
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="admin-panel-container">
      <h2>ניהול משתמשים</h2>
      {loading ? (
        <p>טוען נתונים...</p>
      ) : users.length === 0 ? (
        <p>לא נמצאו משתמשים</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>מזהה</th>
              <th>שם משתמש</th>
              <th>אימייל</th>
              <th>טלפון</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email || '-'}</td>
                <td>{user.phone || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;