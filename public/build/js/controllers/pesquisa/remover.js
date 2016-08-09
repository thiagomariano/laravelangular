angular.module('app.controllers')
    .controller('PesquisaRemoverController',
        ['$scope', '$location', '$routeParams', 'Pesquisa',
            function ($scope, $location, $routeParams, Pesquisa) {
                $scope.pesquisa = new Pesquisa.get({id: $routeParams.id});

                $scope.remove = function () {
                    $scope.pesquisa.$delete().then(function () {
                        $location.path('/pesquisas');
                    });
                }
            }
        ]);