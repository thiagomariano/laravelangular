angular.module('app.controllers')
    .controller('ItensPesquisaListaController', ['$scope', 'ItensPesquisa', function ($scope, ItensPesquisa) {
        $scope.itensPesquisa = ItensPesquisa.query();
    }]);