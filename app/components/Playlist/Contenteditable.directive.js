class ContenteditableDirective {
  constructor($ngRedux) {
    this.restrict = 'A';
    this.require = 'ngModel';
  }

  link(scope, element, attrs, ngModel) {
    const isImage = element[0].tagName.toLowerCase() === 'img';

    function read() {
      ngModel.$setViewValue(element.text());
    }

    ngModel.$render = () => {
      element.html(ngModel.$viewValue || '');
    };

    element.bind('blur keyup change', event => {
      scope.$apply(read);
    });

    element.bind('click', event => {
      attrs.$set('contenteditable', true);
    });

    element.bind('keydown keypress', event => {
      const ESC = event.which === 27;
      const ENTER = event.which === 13;

      if (ESC || ENTER) {
        event.preventDefault();
        element[0].blur();
        attrs.$set('contenteditable', false);
      }
    });
  }
}


ContenteditableDirective.$inject = ['$ngRedux'];

export default ContenteditableDirective;
