angular.module('app.controllers')
    .controller('EmpresaListaController', ['$scope', 'Empresa', function ($scope, Empresa) {
        $scope.empresas = Empresa.query();
    }]);