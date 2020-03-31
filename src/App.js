import React, { Fragment } from 'react';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import './App.css';

const App = () => {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Switch>
              <Route exact path="/blog" component={Home} />
            </Switch>
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
