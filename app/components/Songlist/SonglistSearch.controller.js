import { mapDispatchToPropsHelper } from '../../util/helpers';

class SonglistSearchController {
  constructor ($ngRedux, Spotify) {
    this.store = $ngRedux;
    this.Spotify = Spotify;

    this.searchByOptions = [
      { label: 'artist', value: 'artist' },
      { label: 'title', value: 'track' },
      { label: 'album', value: 'album' }
    ];
  }

  mapStateToThis (state) {
    return {
      searchartist: state.search.term,
      searchByOption: state.search.by
    };
  }

  $onInit () {
    this.unsubscribe = this.store.connect(this.mapStateToThis, mapDispatchToPropsHelper)(this);
    this.initializeSearch(this.Spotify);
  }

  $onDestroy () {
    this.unsubscribe();
  }

  search () {
    this.searchForSongs();
  }
}

SonglistSearchController.$inject = ['$ngRedux', 'Spotify'];

export default SonglistSearchController;
