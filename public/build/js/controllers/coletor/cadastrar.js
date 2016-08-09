angular.module('app.controllers')
    .controller('ColetorCadastrarController', ['$scope', '$location', 'Coletor', function ($scope, $location, Coletor) {
        $scope.coletores = new Coletor();

        $scope.save = function () {
            if ($scope.form.$valid) {
                $scope.coletores.$save().then(function () {
                    $location.path('/coletores');
                })
            }
        }
    }]);