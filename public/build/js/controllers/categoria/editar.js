angular.module('app.controllers')
    .controller('CategoriaEditarController',
        ['$scope', '$location', '$routeParams', 'Categoria',
            function ($scope, $location, $routeParams, Categoria) {
                $scope.categoria = new Categoria.get({id: $routeParams.id});
                $scope.save = function () {
                    if ($scope.form.$valid) {
                        Categoria.update({id: $scope.categoria.id}, $scope.categoria, function () {
                            $location.path('/categorias');
                        });
                    }
                }
            }
        ]);