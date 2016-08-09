angular.module('app.controllers')
    .controller('ColetorRemoverController',
        ['$scope', '$location', '$routeParams', 'Coletor',
            function ($scope, $location, $routeParams, Coletor) {
                $scope.coletores = new Coletor.get({id: $routeParams.id});

                $scope.remove = function () {
                    $scope.coletores.$delete().then(function () {
                        $location.path('/coletores');
                    });
                }
            }
        ]);