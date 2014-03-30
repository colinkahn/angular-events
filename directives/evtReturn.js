angular.module('angular-events').directive('evtReturn', function () {
  return {
    link: function (scope, element, attrs) {
      element.on('keydown', function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.evtReturn);
          });
        }
      });
    }
  }
});
