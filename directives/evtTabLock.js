angular.module('angular-events').directive('evtTabLock', function () {
  return {
    link: function (scope, element, attrs) {
      var shiftEnabled = false;

      element.on('keydown', function (event) {
        if (scope.$eval(attrs.evtTabLockDisabled)) {
          return;
        }

        if (event.which === 9 && !shiftEnabled) {
          event.preventDefault();
        } else if (event.which === 16) {
          shiftEnabled = true;
        }
      });

      element.on('focus', function (event) {
        shiftEnabled = false;
      });
    }
  }
});
