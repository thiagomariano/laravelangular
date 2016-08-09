angular.module('app.controllers')
    .controller('ItensPesquisaRemoverController',
        ['$scope', '$location', '$routeParams', 'ItensPesquisa',
            function ($scope, $location, $routeParams, ItensPesquisa) {
                $scope.itensPesquisa = new ItensPesquisa.get({id: $routeParams.id});

                $scope.remove = function () {
                    $scope.itensPesquisa.$delete().then(function () {
                        $location.path('/itens-pesquisa');
                    });
                }
            }
        ]);