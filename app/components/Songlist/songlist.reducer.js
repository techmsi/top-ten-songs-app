// Reducer: Songlist

import { update, createReducer } from '../../util/helpers';
import * as types from '../../actions/types';

export const search = createReducer({}, {
  [types.INIT_SEARCH] (state, action) {
    console.debug('Reducer - INIT_SEARCH --%c search %s', 'color:green', JSON.stringify(action, null, 2));
    return action.search;
  }
});

export const searchResults = createReducer({}, {
  [types.SET_SONGLIST] (state, action) {
    console.debug(`Reducer - SET_SONGLIST -- songlist`, action);
    return update(state, { results: action.searchResults });
  },
  [types.SET_SONGTRACKS_FOR_SONG_IN_SONGLIST] (state, action) {
    console.debug(`Reducer - SET_SONGTRACKS_FOR_SONG_IN_SONGLIST -- track`, action);

    const tracks = state.results.map(obj => {
      if (obj.id === action.artistId) {
        obj.tracks = action.tracks;
      }
      return obj;
    });

    return update(state, {});
  }
});
