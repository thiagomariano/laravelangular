angular.module('app.controllers')
    .controller('ClientListaController', ['$scope', 'Client', function ($scope, Client) {
        $scope.clients = Client.query();
    }]);