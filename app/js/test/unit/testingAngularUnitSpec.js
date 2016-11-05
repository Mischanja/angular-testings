describe('Testing AngularJS Test Suite', function() {
    describe('Testing AngularJS Controller', function () {

        it('should initialize the title in the scope', function () {
            module('testingAngularApp');

            var scope = {};
            var ctrl;

            // link $scope from controller to this scope in our test
            inject(function ($controller) {
                ctrl = $controller('testingAngularCtrl', {$scope:scope});
            })

            // if all expectations return TRUE, otherwise it is FALSE
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing AngularJS Application");
      })
    })
});