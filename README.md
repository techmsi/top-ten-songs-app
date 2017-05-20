#top-ten-songs-app

* Angular app to find the top 10 songs from spotify & add them to a custom playlist.

## Usage
```bash
npm start
```
### Playlist
```javascript
"playlist": {
  "title": 'chosen title',
  "songs": [{
    "id": "3lec3CzDPAxsZokPph5w87",
    "track": "track title",
    "artist": "atrist name",
    "album": "album title",
    "customImage": "image url",
    "preview_url": "mp3 preview url",
    "note": "some text"
  }],
  last_downloaded: 'timestamp'
}
```

### Search
```javascript
"search": {
    "Spotify": {
      "clientId": "client id from spotify-token",
      "redirectUri": "url",
      "apiBase": "api url",
      "scope": "user-read-private",
      "authToken": null
    },
    "term": "Carrie",
    "by": "artist"
  }
```

### Songlist - Search Results
```javascript
"searchResults": {
  "results" : []
}
```
