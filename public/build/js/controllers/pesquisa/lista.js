angular.module('app.controllers')
    .controller('PesquisaListaController', ['$scope', 'Pesquisa', function ($scope, Pesquisa) {
        $scope.pesquisa = Pesquisa.query();
    }]);