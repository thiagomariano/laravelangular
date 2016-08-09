angular.module('app.controllers')
    .controller('ItensPesquisaEditarController',
        ['$scope', '$location', '$routeParams', 'ItensPesquisa',
            function ($scope, $location, $routeParams, ItensPesquisa) {
                $scope.itensPesquisa = ItensPesquisa.query();

                $scope.itensPesquisa = new Pesquisa.get({id: $routeParams.id});
                $scope.save = function () {
                    if ($scope.form.$valid) {
                        Pesquisa.update({id: $scope.itensPesquisa.id}, $scope.itensPesquisa, function () {
                            $location.path('/itens-pesquisa');
                        });
                    }
                }
            }

        ]);