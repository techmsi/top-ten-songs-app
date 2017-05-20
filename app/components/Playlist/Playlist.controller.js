import { mapDispatchToPropsHelper } from '../../util/helpers';

class PlaylistController {
  constructor ($ngRedux) {
    this.store = $ngRedux;

    this.modelOptions = {
      updateOn: 'blur',
      debounce: {
        default: 1000,
        blur: 0
      }
    };
  }

  mapStateToThis (state) {
    return {
      list: state.playlist,
      last_downloaded: state.playlist.last_downloaded
    };
  }

  $onInit () {
    this.unsubscribe = this.store.connect(this.mapStateToThis, mapDispatchToPropsHelper)(this);
    this.initializePlaylist();
  }

  $onDestroy () {
    this.unsubscribe();
  }

  rename () {
    this.updatePlaylistTitle();
  }

  note (id) {
    this.updatePlaylistNote(id);
  }

  add (item) {
    this.addSongToPlaylist(item);
  }

  remove (id) {
    this.removeSongFromPlaylist(id);
  }

  download () {
    this.downloadPlaylist();
  }
}

PlaylistController.$inject = ['$ngRedux'];

export default PlaylistController;
