import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import NewsArchiveContainer from './containers/NewsArchiveContainer';
import Bookmarks from './components/Bookmarks';
import Profile from './components/Profile';
import SearchContainer from './containers/SearchContainer';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Redux News</h2>
            <nav>
              <ul className="nav">
                <li><Link to="/">News</Link></li>
                <li><Link to="/bookmarks">Bookmarks</Link></li>
                <li><Link to="/profile">User Profile</Link></li>
              </ul>
            </nav>
            <SearchContainer />
          </div>
          <div className="App-main">
            <Route exact path="/" component={NewsArchiveContainer}/>
            <Route path="/bookmarks" component={Bookmarks}/>
            <Route path="/profile" component={Profile}/>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
