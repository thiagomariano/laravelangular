angular.module('app.controllers')
    .controller('ClientEditarController',
        ['$scope', '$location', '$routeParams', 'Client',
            function ($scope, $location, $routeParams, Client) {
                $scope.client = new Client.get({id: $routeParams.id});
                $scope.save = function () {
                    if ($scope.form.$valid) {
                        Client.update({id: $scope.client.id}, $scope.client, function () {
                            $location.path('/clientes');
                        });
                    }
                }
            }
        ]);