angular.module('angular-events').directive('evtAutoFocus', function () {
  return {
    link: function (scope, element) {
      element[0].focus();
    }
  }
});
