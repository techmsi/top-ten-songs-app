// Reducer: Playlist

import { timestamp, update, createReducer, addToArray, removeFromArray } from '../../util/helpers';
import * as types from '../../actions/types';

export const playlist = createReducer({}, {
  [types.INIT_PLAYLIST] (state, action) {
    console.debug(`Reducer - INIT_PLAYLIST -- playlist`, action);

    return action.playlist;
  },
  // Listen for transformation of Song then modify state
  [types.DOWNLOAD_PLAYLIST] (state, action) {
    console.debug(`Reducer - DOWNLOAD_PLAYLIST -- playlist`, action);
    const theJSON = JSON.stringify(state);
    const uri = `data:application/json;charset=UTF-8,${encodeURIComponent(theJSON)}`;

    const a = document.createElement('a');
    a.href = uri;
    const time = timestamp({ year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).split(/[ ,]/).join('-');
    a.download = `myPlaylist-${time}.json`;
    a.click();

    return update(state, { last_downloaded: time });
  },
  [types.EDIT_TITLE_FOR_PLAYLIST] (state, action) {
    console.debug('Reducer - EDIT_TITLE_FOR_PLAYLIST --%c title %s', 'color:green', JSON.stringify(action, null, 2));
    return update(state, { title: action.title });
  },
  [types.EDIT_NOTE_FOR_SONG_IN_PLAYLIST] (state, action) {
    console.debug('Reducer - EDIT_NOTE_FOR_SONG_IN_PLAYLIST --%c note %s', 'color:green', JSON.stringify(action, null, 2));
    const index = state.songs.findIndex(obj => obj.id === action.id);
    const songs = state.songs.map(obj => {
      if (obj.id === action.id) {
        obj.note = state.songs[index].note;
      }
      return obj;
    });

    return update(state, { songs });
  },
  [types.ADD_SONGTRACK_TO_PLAYLIST] (state, action) {
    console.debug('Reducer - ADD_SONGTRACK_TO_PLAYLIST --%c song %s', 'color:green', JSON.stringify(action.payload, null, 2));
    return update(state, { songs: addToArray(state.songs, action) });
  },
  // Listen for transformation of Song then modify state
  [types.REMOVE_SONGTRACK_FROM_PLAYLIST] (state, action) {
    console.debug('Reducer - REMOVE_SONGTRACK_FROM_PLAYLIST --%c song %s', 'color:green', JSON.stringify(action.payload, null, 2));
    return update(state, { songs: removeFromArray(state.songs, action) });
  }
});
