import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import LessonViewer from './components/LessonViewer/LessonViewer';
import PromptHistoryPage from './components/PromptHistoryPage/PromptHistoryPage';
import Logout from './components/Logout/Logout';
import AdminPanel from './components/AdminPanel/Adminpanel';  

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/LessonViewer" element={<LessonViewer />} />
          <Route path="/history" element={<PromptHistoryPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
