angular.module('app.controllers')
    .controller('EmpresaCadastrarController', ['$scope', '$location', 'Empresa', function ($scope, $location, Empresa) {
        $scope.empresa = new Empresa();

        $scope.save = function () {
            if ($scope.form.$valid) {
                $scope.empresa.$save().then(function () {
                    $location.path('/empresas');
                })
            }
        }
    }]);