import * as types from '../../actions/types';

export function createPlaylist (playlist) {
  return {
    type: types.INIT_PLAYLIST,
    playlist
  };
}
export function setDownloadPlaylist () {
  return {
    type: types.DOWNLOAD_PLAYLIST
  };
}

export function setPlaylistTitle (title) {
  return {
    type: types.EDIT_TITLE_FOR_PLAYLIST,
    title
  };
}

export function setPlaylistNote (id) {
  return {
    type: types.EDIT_NOTE_FOR_SONG_IN_PLAYLIST,
    id
  };
}

export function initializePlaylist (title = 'Top ten(10) List') {
  return (dispatchToUpdateState, getState) =>
      dispatchToUpdateState(
        createPlaylist({
          title,
          songs: []
        })
    );
}

export function updatePlaylistTitle () {
  return (dispatchToUpdateState, getState) => {
    dispatchToUpdateState(setPlaylistTitle(getState().playlist.title));
  };
}

export function updatePlaylistNote (id) {
  return (dispatchToUpdateState, getState) => {
    dispatchToUpdateState(setPlaylistNote(id));
  };
}

export function downloadPlaylist () {
  return (dispatchToUpdateState, getState) =>
      dispatchToUpdateState(
        setDownloadPlaylist()
    );
}

export function setSongTrackOnPlaylist (item) {
  return {
    type: types.ADD_SONGTRACK_TO_PLAYLIST,
    payload: item
  };
}

export function deleteSongTrackOnPlaylist (item) {
  return {
    type: types.REMOVE_SONGTRACK_FROM_PLAYLIST,
    payload: item
  };
}

export function addSongToPlaylist (item) {
  return (dispatchToUpdateState, getState) => {
    dispatchToUpdateState(setSongTrackOnPlaylist(item));
  };
}

export function removeSongFromPlaylist (id) {
  return (dispatchToUpdateState, getState) => {
    dispatchToUpdateState(deleteSongTrackOnPlaylist(id));
  };
}
