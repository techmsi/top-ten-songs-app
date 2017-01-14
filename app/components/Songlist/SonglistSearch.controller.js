import { mapDispatchToPropsHelper } from '../../util/helpers';

class SonglistSearchController {
  constructor($ngRedux, Spotify) {
    this.store = $ngRedux;
    this.Spotify = Spotify;

    // this.searchartist = 'Carrie';
    // this.searchByOption = 'artist';
    //
    this.searchByOptions = [
      { label: 'artist', value: 'artist' },
      { label: 'title', value: 'track' },
      { label: 'album', value: 'album' },
    ];
  }

  mapStateToThis(state) {
    return {
      searchResults: state.searchResults,
      searchartist: state.search.term,
      searchByOption: state.search.by,
    };
  }

  $onInit() {
    this.unsubscribe = this.store.connect(this.mapStateToThis, mapDispatchToPropsHelper)(this);
    this.initializeSearch(this.Spotify);
    console.log(this.searchResults);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  searchArtist() {
    console.log('SEARCH', this.searchartist);
    this.searchForSongs(this.Spotify, this.searchartist, this.searchByOption);
  }
}

SonglistSearchController.$inject = ['$ngRedux', 'Spotify'];

export default SonglistSearchController;
