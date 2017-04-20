import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC1OhMfjQ0-i5dWT829dcF_gd4ZKoStlZI';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('stellaris');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
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
              <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
              <div>
                  <VideoDetail video={this.state.selectedVideo}/>
                  <VideoList
                      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                      videos={this.state.videos} />
              </div>
          </div>
    );
  }
}

export default App;
