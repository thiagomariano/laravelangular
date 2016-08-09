angular.module('app.controllers')
    .controller('ItensPesquisaCadastrarController',
        ['$scope', '$location', 'ItemPesquisa',
            function ($scope, $location, ItensPesquisa) {
                $scope.itensPesquisa = new ItensPesquisa();

                $scope.save = function () {
                    if ($scope.form.$valid) {
                        $scope.itensPesquisa.$save().then(function () {
                            $location.path('/itens-pesquisa');
                        })
                    }
                };
            }
        ]);