import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCart } from '../reducer/CartReducer';
import authService from '../services/auth';

export default function Logout(props) {
  const history = useNavigate();
  const dispatch = useDispatch();

  const userLogout = async () => {
    await authService.userLogout();
    dispatch(resetCart());
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <div textAlign="center">
        <button onClick={userLogout} variant="contained">
          Logout
        </button>
      </div>
    </>
  );
}
