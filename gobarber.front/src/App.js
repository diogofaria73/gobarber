import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </Provider>
    </PersistGate>
  );
}

export default App;
