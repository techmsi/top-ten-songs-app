import controller from './Playlist.controller';
import template from './playlist.html';

class PlaylistDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'ply';
    this.bindToController = true;
  }
}

PlaylistDirective.$inject = ['$scope'];

export default PlaylistDirective;
