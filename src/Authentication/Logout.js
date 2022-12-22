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
    history.push(-1);
  };

  return (
    <>
      <div class="flex items-center justify-center">
        <button type="button" class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={userLogout}>
          <p class="flex-1 text-2xl font-syne text-center"> Logout </p>
        </button>
      </div>
    </>
  );
}
