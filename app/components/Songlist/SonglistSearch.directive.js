import controller from './SonglistSearch.controller';
import template from './songlist-search.html';

class SonglistSearchDirective {
  constructor () {
    this.restrict = 'E';
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'search';
    this.bindToController = true;
  }
}

SonglistSearchDirective.$inject = ['$scope'];

export default SonglistSearchDirective;
