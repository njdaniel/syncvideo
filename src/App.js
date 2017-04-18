import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC1OhMfjQ0-i5dWT829dcF_gd4ZKoStlZI';



class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'stellaris'}, (videos) => {
            this.setState({ videos});
        });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to VideoSync</h2>
        </div>
        <p className="App-intro">
          Search Videos
        </p>
          <SearchBar/>
      </div>
    );
  }
}

export default App;
