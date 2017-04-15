import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import NewsArchive from './components/NewsArchive';
import Bookmarks from './components/Bookmarks';
import Profile from './components/Profile';
import Search from './components/Search';
import { reshapeNewsData } from './util/dataTransformations';

import news from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      searchTerm: '',
    };

    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
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
            <Search
              value={this.state.searchTerm}
              onSearch={this.onUpdateSearch}
            />
          </div>
          <div className="App-main">
            <Route
              exact
              path="/"
              render={(props) => (
                <NewsArchive
                  {...props}
                  news={reshapeNewsData(news.results)}
                />
              )}/>
            <Route path="/bookmarks" component={Bookmarks}/>
            <Route path="/profile" component={Profile}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
