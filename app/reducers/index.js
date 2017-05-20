import { combineReducers } from 'redux';

import * as playlistReducer from '../components/Playlist/playlist.reducer';
import * as songlistReducer from '../components/Songlist/songlist.reducer';

export default combineReducers(Object.assign(
  songlistReducer,
  playlistReducer
));
