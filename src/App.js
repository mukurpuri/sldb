
// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HomeScreen, BuilderScreen } from './screens';
import './App.css'

// Imports: Redux Persist Persister
import { store, persistor } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={null}
        persistor={persistor}
      >
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/builder" component={BuilderScreen} />
        </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
