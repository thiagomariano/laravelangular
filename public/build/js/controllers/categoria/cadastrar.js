angular.module('app.controllers')
    .controller('CategoriaCadastrarController', ['$scope', '$location', 'Categoria', function ($scope, $location, Categoria) {
        $scope.categoria = new Categoria();

        $scope.save = function () {
            if ($scope.form.$valid) {
                $scope.categoria.$save().then(function () {
                    $location.path('/categorias');
                })
            }
        }
    }]);