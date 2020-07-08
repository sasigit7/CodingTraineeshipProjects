import React from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../utils/Spotify';

class App extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
   };
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
  }

// Add Tracks to a Playlist
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    });
  }

// Remove Tracks from a Playlist
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
   
    this.setState({
      playlistTracks: tracks
    });
  }

// Change the Name of a Playlist
  updatePlaylistName(name){
    this.setState({playlistName: name}); 
  }

// Create a Method that Saves the Playlist to a User's Account
  savePlaylist() {
    //alert('This method is correctly linked to the button');
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlayList(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

// Hook up Search Bar to Spotify Search
  search(searchTerm){
   // console.log(searchTerm);
   Spotify.search(searchTerm).then(searchResults => {
     this.setState({searchResults: searchResults});
   })
  }

  render() {
    return ( 
      <div> 
        <h1>Ja<span className = 'highlight'>mmm</span>ing</h1> 
        <div className = 'App'> 
        {/* Add a SearchBar component */} 
        <SearchBar onSearch={this.search}/>
        <div className = 'App-playlist'> 
        {/* Add a SearchResults component */}
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/> 
        {/* Add a Playlist component */} 
          <Playlist playlistName={this.state.playlistName} 
                  playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
                  onSave={this.savePlaylist}  
                  />
        </div>  
        </div> 
      </div>
    );
  }
}

export default App;