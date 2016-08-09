angular.module('app.controllers')
    .controller('ProdutoEditarController',
        ['$scope', '$location', '$routeParams', 'Produto',
            function ($scope, $location, $routeParams, Produto) {
                $scope.produto = new Produto.get({id: $routeParams.id});
                $scope.save = function () {
                    if ($scope.form.$valid) {
                        Produto.update({id: $scope.produto.id}, $scope.produto, function () {
                            $location.path('/produtos');
                        });
                    }
                }
            }
        ]);