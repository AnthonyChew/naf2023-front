import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCart } from '../reducers/CartReducer';
import authService from '../services/auth';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function Logout(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogout = async () => {
    await authService.userLogout();
    dispatch(resetCart());
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <Box textAlign="center">
        <Button onClick={userLogout} variant="contained">
          Logout
        </Button>
      </Box>
    </>
  );
}
