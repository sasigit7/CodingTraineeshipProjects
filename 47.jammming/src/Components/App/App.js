import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
         name: 'Tiny Dancer',
         artist: 'Elton John',
         album: 'Madman Across The Water',
         id: 1
        },
        {
          name: 'Tiny Dancer',
          artist: 'Elton John',
          album: 'Madman Across The Water',
          id: 2
        },
        {
          name: 'Tiny Dancer',
          artist: 'Tim McGraw',
          album: 'Love Story',
          id: 3
        },
        {
          name: 'Tiny Dancer',
          artist: 'Rockabye Baby!',
          album: 'Lullaby Renditions of Elton John',
          id: 4
        },
        {
          name: 'Tiny Dancer',
          artist: 'The White Raven',
          album: 'Tiny Dancer',
          id: 5
        },
        {
          name: 'Tiny Dancer - Live Album Version',
          artist: 'Ben Folds',
          album: 'Ben Folds Live',
          id: 6
        }
      ]
    }
  }

  render() {
    return ( 
      <div> 
        <h1>Ja<span className = 'highlight'>mmm</span>ing</h1> 
        <div className = 'App'> 
        {/* Add a SearchBar component */} 
        <SearchBar />
        <div className = 'App-playlist'> 
        {/* Add a SearchResults component */}
          <SearchResults searchResults={this.state.searchResults} /> 
        {/* Add a Playlist component */} 
          <Playlist />
        </div>  
        </div> 
      </div>
    );
  }
}

export default App;