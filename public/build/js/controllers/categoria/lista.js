angular.module('app.controllers')
    .controller('CategoriaListaController', ['$scope', 'Categoria', function ($scope, Categoria) {
        $scope.categorias = Categoria.query();
    }]);