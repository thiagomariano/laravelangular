angular.module('app.controllers')
    .controller('EmpresaEditarController',
        ['$scope', '$location', '$routeParams', 'Empresa',
            function ($scope, $location, $routeParams, Empresa) {
                $scope.empresa = new Empresa.get({id: $routeParams.id});
                $scope.save = function () {
                    if ($scope.form.$valid) {
                        Empresa.update({id: $scope.empresa.id}, $scope.empresa, function () {
                            $location.path('/empresas');
                        });
                    }
                }
            }
        ]);