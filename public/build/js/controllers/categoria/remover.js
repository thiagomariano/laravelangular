angular.module('app.controllers')
    .controller('CategoriaRemoverController',
        ['$scope', '$location', '$routeParams', 'Categoria',
            function ($scope, $location, $routeParams, Categoria) {
                $scope.categoria = new Categoria.get({id: $routeParams.id});

                $scope.remove = function () {
                    $scope.categoria.$delete().then(function () {
                        $location.path('/categorias');
                    });
                }
            }
        ]);