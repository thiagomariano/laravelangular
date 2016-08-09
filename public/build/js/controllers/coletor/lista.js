angular.module('app.controllers')
    .controller('ColetorListaController', ['$scope', 'Coletor', function ($scope, Coletor) {
        $scope.coletores = Coletor.query();
    }]);