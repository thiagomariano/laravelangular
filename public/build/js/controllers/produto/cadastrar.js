angular.module('app.controllers')
    .controller('ProdutoCadastrarController', ['$scope', '$location', 'Produto', 'Categoria', function ($scope, $location, Produto, Categoria) {
        $scope.produto = new Produto();
        $scope.categorias = Categoria.query();

        $scope.save = function () {
            if ($scope.form.$valid) {
                $scope.produto.$save().then(function () {
                    $location.path('/produtos');
                })
            }
        };
        $scope.formatNameCategoria = function (id) {
            if (id) {
                for (var i in $scope.categorias) {
                    if ($scope.categorias[i].id == id) {
                        return $scope.categorias[i].nome;
                    }
                }
            }
        };
        $scope.removerCategoria = function (index) {
            $scope.categoria.splice(index, 1);
        };
    }]);