import angular from 'angular';
import spotify from 'angular-spotify';
import ngRedux from 'ng-redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers/index';


const loggerMiddleware = createLogger({
  duration: true,
  predicate: (getState, action) => process.env.NODE_ENV !== 'production',
});

import setSpotifyTokenOnCallback from './setSpotifyTokenOnCallback';
// import SonglistController from './components/Songlist/Songlist.controller';
// import PlaylistController from './components/Playlist/Playlist.controller';
import SonglistDirective from './components/Songlist/Songlist.directive';
import SonglistSearchDirective from './components/Songlist/SonglistSearch.directive';
import PlaylistDirective from './components/Playlist/Playlist.directive';
import AudioPlayerDirective from './components/Songlist/AudioPlayer.directive';
import ContenteditableDirective from './components/Playlist/Contenteditable.directive';

const SPOTIFY_CONFIG = {
  clientId: '90514e1e1dea4792ac75c45443887bee',
  redirectUri: 'http://localhost:3010/',
  scope: 'user-read-private playlist-read-private playlist-modify-private playlist-modify-public',
  authToken: 'BQBPjO85-mSIFTZVoUJLCw8_rjCk1p-FaxPvLl3A5CmPJigJfagYPGIpLsP9Joaayrn16tW8S_u_nf66SKvBVk756CicU6kPu5VQ78MkAPCxpBojLa1lUkhgp8_Am6dQTlrcFonafd88kt4njU9Rzn5vO-A',
};

const app = angular.module('app', ['ngRedux', 'spotify'])
  .config(['$ngReduxProvider', 'SpotifyProvider', '$compileProvider', ($ngReduxProvider, SpotifyProvider, $compileProvider) => {
    $ngReduxProvider.createStoreWith(reducer, [thunkMiddleware, loggerMiddleware]);

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|dat‌​a):/);

    SpotifyProvider.setClientId(SPOTIFY_CONFIG.clientId);
    SpotifyProvider.setRedirectUri(SPOTIFY_CONFIG.redirectUri);
    SpotifyProvider.setScope(SPOTIFY_CONFIG.scope);
  }])
  // .controller('SonglistController', SonglistController)
  // .controller('PlaylistController', PlaylistController)
  .directive('audioPlayers', () => new AudioPlayerDirective())
  .directive('playlists', () => new PlaylistDirective())
  .directive('songlists', () => new SonglistDirective())
  .directive('searchform', () => new SonglistSearchDirective())
  .directive('contenteditable', () => new ContenteditableDirective());
