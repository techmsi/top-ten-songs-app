import controller from './Songlist.controller';
import template from './songlist.html';

class SonglistDirective {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'song';
    this.bindToController = true;
  }
}

SonglistDirective.$inject = ['$scope'];

export default SonglistDirective;
