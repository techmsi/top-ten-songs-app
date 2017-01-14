import { mapDispatchToPropsHelper } from '../../util/helpers';

class SongController {
  constructor($ngRedux, Spotify) {
    this.store = $ngRedux;
    this.Spotify = Spotify;
  }

  mapStateToThis(state) {
    return {
      searchResults: state.searchResults,
    }
  }

  $onInit() {
    this.unsubscribe = this.store.connect(this.mapStateToThis, mapDispatchToPropsHelper)(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  getTracks(id) {
    this.addSongTracksToSonglist(id);
  }

  login() {
    this.Spotify.login()
    .then(token => {
      console.info(`Logged In: ${token}`);

      this.Spotify.setAuthToken(token);
      localStorage.setItem('spotify-token', token);
      this.auth = {};
      this.auth = true;
    })
      .catch(e => console.error(e))
      .finally(() => {
        console.info('Logged in successfully');
      });
  }
}

SongController.$inject = ['$ngRedux', 'Spotify'];

export default SongController;
