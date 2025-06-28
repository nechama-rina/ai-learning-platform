import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/userSlice';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUser());

   
    localStorage.removeItem('user');

  
    navigate('/');
  }, [dispatch, navigate]);

  return null;
};

export default Logout;
