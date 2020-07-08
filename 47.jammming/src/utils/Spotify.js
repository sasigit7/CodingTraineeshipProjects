const clientID = 'YOUR_SPOTIFY_API_KEY';
const redirectURI = 'http://localhost:3000/';

let accessToken;
const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        // Check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // Use the following code to help you wipe the access token and URL parameters
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
    },
    search(searchTerm) {
      const accessToken = Spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
          headers: { 
              Authorization: `Bearer ${accessToken}`}
      }).then(response => {
           return response.json();
      }).then(jsonResponse => {
          if(!jsonResponse.tracks) {
              return [];
          } 
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artists: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }));
        });
    },
    savePlayList(name, trackUris) {
        if(!name || !trackUris.length) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
          {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({name: name})
          }).then(response => response.json()
          ).then(jsonResponse => {
              const playlistId = jsonResponse.id;
              return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                  headers: headers,
                  method: 'POST',
                  body: JSON.stringify({uris: trackUris})
              });
          })
        })
    }
};

export default Spotify;

