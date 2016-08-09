angular.module('app.controllers')
    .controller('ColetorEditarController',
        ['$scope', '$location', '$routeParams', 'Coletor',
            function ($scope, $location, $routeParams, Coletor) {
                $scope.coletores = new Coletor.get({id: $routeParams.id});
                $scope.save = function () {
                    if ($scope.form.$valid) {
                        Coletor.update({id: $scope.coletores.id}, $scope.coletores, function () {
                            $location.path('/coletores');
                        });
                    }
                }
            }
        ]);