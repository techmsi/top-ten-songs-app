import * as types from '../../actions/types';

export function setSearch(search) {
  return {
    type: types.INIT_SEARCH,
    search,
  };
}
export function updateSonglist(searchResults) {
  return {
    type: types.SET_SONGLIST,
    searchResults,
  };
}

export function setSongTracksOnSonglist({ artistId, tracks }) {
  return {
    type: types.SET_SONGTRACKS_FOR_SONG_IN_SONGLIST,
    artistId,
    tracks,
  };
}

export function initializeSearch(Spotify, term = 'Carrie', by = 'artist') {
  return (dispatchToUpdateState, getState) =>
      dispatchToUpdateState(
        setSearch({
            Spotify,
            term,
            by,
        }),
    );
}

export function searchForSongs() {
  return (dispatchToUpdateState, getState) => {
    const api = getState().search.Spotify;
    return api.search(getState().search.term, getState().search.by)
    .then(data => {
      const searchByOption = getState().search.by;
      return data[`${searchByOption}s`].items;
    })
    .then(searchResults => {
      dispatchToUpdateState(updateSonglist(searchResults));
    })
    .catch(e => console.error(e));
  }
}


const mapTrackData = data => data.tracks.map(({ id, name, preview_url, album, artists }) => ({
  id,
  track: name,
  artist: artists[0].name,
  album: album.name,
  customImage: '',
  preview_url,
  note: 'Add note.',
}));


export function addSongTracksToSonglist(id = '4xFUf1FHVy696Q1JQZMTRj') {
  return (dispatchToUpdateState, getState) => {
    const api = getState().search.Spotify;
    return api.getArtistTopTracks(id, 'US')
    .then(mapTrackData)
    .then(tracks => {
      dispatchToUpdateState(setSongTracksOnSonglist({ artistId: id, tracks }));
    })
    .catch(e => console.error(e));
  };
}

export function getArtistTopTrackss(id = '4xFUf1FHVy696Q1JQZMTRj') {
  return Spotify.getArtistTopTracks(id, 'US')
  .then(data => {
    this.searchResults = this.searchResults.map(o => {
      if (o.id === id) {
        o.tracks = data.tracks.map(({ id, name, preview_url, album, artists }) => ({
          id,
          track: name,
          artist: artists[0].name,
          album: album.name,
          customImage: o.images[0].url,
          preview_url,
          note: 'Add note.',
        }));
      }
      return o;
    });
  });
}
