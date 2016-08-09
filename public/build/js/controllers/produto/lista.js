angular.module('app.controllers')
    .controller('ProdutoListaController', ['$scope', 'Produto', function ($scope, Produto) {
        $scope.produtos = Produto.query();
        var arr = [];
        $scope.getIndex = function (id, isTrue) {
            console.log(id);
            if (isTrue)
                arr.push(id);

            else {
                var index = arr.indexOf(id);
                arr.splice(index, 1);
            }
        };
        $scope.delete = function (isMaster) {
            if (isMaster) {
                $scope.names = [];
            }
            else {

                for (var i = 0; i < arr.length; i++) {
                    var rec = $scope.names.filter(function (p) {
                        return p.id == arr[i]
                    });
                    var idx = $scope.names.indexOf(rec[0]);
                    $scope.names.splice(idx, 1);
                }
            }
        };
    }]);