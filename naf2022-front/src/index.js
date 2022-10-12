import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ConfirmProvider } from 'material-ui-confirm';
import App from './App';
import * as serviceWorker from './serviceWorker';
import setUpStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = setUpStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fffef2',
    },
    secondary: {
      main: '#FCDB96', 
    },
    info: {
      main: '#033F63',
    },
    background: {
      //default: '#fffef2',
      default: '#FDFBE2',
    },
  },
  typography: {
    fontFamily: ['Livvic', 'cursive'].join(','),
    h2: {
      fontWeight: 'bold',
      fontSize: '3.3rem',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '2.8rem',
      marginBottom: 15,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginBottom: 3,
      marginTop: 3,
    },
    h5: {
      fontWeight: 'semibold',
      fontSize: '1.2rem',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ConfirmProvider>
            <App />
          </ConfirmProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
