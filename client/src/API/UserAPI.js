
import axios from 'axios';

export const loginUser = async (name, phone) => {
  try {
    const response = await axios.post(
      '/api/Users/login',
      { name, phone },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      '/api/Users/register',
      userData,
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
