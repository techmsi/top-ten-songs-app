import angular from 'angular';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers/index';
import SonglistDirective from './components/Songlist/Songlist.directive';
import SonglistSearchDirective from './components/Songlist/SonglistSearch.directive';
import PlaylistDirective from './components/Playlist/Playlist.directive';
import AudioPlayerDirective from './components/Songlist/AudioPlayer.directive';
import ContenteditableDirective from './components/Playlist/Contenteditable.directive';

const loggerMiddleware = createLogger({
  duration: true,
  predicate: (getState, action) => process.env.NODE_ENV !== 'production'
});

const SPOTIFY_CONFIG = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  redirectUri: 'http://localhost:3010/',
  scope: 'user-read-private playlist-read-private playlist-modify-private playlist-modify-public',
  authToken: process.env.SPOTIFY_AUTH_TOKEN
};

angular.module('app', ['ngRedux', 'spotify'])
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
