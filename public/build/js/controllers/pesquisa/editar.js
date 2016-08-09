angular.module('app.controllers')
    .controller('PesquisaEditarController',
        ['$scope', '$location', '$routeParams', 'Pesquisa', 'Produto', 'ItensPesquisa',
            function ($scope, $location, $routeParams, Pesquisa, Produto, ItensPesquisa) {
                $scope.produtos = Produto.query();
                $scope.itensPesquisa = new ItensPesquisa();

                $scope.pesquisa = new Pesquisa.get({id: $routeParams.id});
                $scope.save = function () {
                    if ($scope.form.$valid) {
                        Pesquisa.update({id: $scope.pesquisa.id}, $scope.pesquisa, function () {
                            $location.path('/pesquisas');
                        });
                    }
                };

                $scope.atualizaItem = function (item, idProduto) {
                    if (item) {
                        $scope.itensPesquisa.item = {
                            lista_id: $scope.pesquisa.id,
                            politica: item['politica'],
                            atacado: item['atacado'],
                            varejo: item['varejo']
                        };

                        ItensPesquisa.update({id: idProduto}, $scope.itensPesquisa, function () {
                            $route.reload()
                        });
                    }
                };

                $scope.finalizaPesquisa = function () {
                    alert('opa vou finalizar a pesquisa' + $scope.pesquisa.id);
                };

                $scope.produto = [];


                $scope.formatNameProduto = function (id) {
                    if (id) {
                        $scope.itensPesquisa.produtos = [{
                            codigo: id
                        }];
                        $scope.itensPesquisa.pesquisa = $scope.pesquisa.id;

                        $scope.itensPesquisa.$save().then(function () {
                            $location.path('/pesquisas/' + $scope.pesquisa.id + '/editar');
                        })
                    }
                };

                /*
                 $scope.formatNameProduto = function (id) {
                 if (id) {
                 alert(id);
                 for (var i in $scope.produtos) {
                 if ($scope.produtos[i].id == id) {
                 $scope.itensPesquisa.produtos = [{
                 codigo: $scope.produtos[i].id,
                 pesquisa: $scope.pesquisa.id
                 }];
                 $scope.itensPesquisa.$save().then(function () {
                 $location.path('/pesquisas/' + $scope.pesquisa.id +
                 '/editar'
                 )
                 ;
                 })
                 }
                 }
                 }
                 };
                 */
                $scope.removerProduto = function (index) {
                    $scope.produto.splice(index, 1);
                };


            }

        ]);
/*
 $scope.empresa = [];
 $scope.produto = [];

 $scope.save = function () {
 if ($scope.form.$valid) {
 $scope.pesquisa.$save().then(function () {
 $location.path('/pesquisas');
 })
 }
 };

 $scope.formatNameEmpresa = function (id) {
 if (id) {
 for (var i in $scope.empresas) {
 if ($scope.empresas[i].id == id) {
 $scope.empresa.push({
 nome: $scope.empresas[i].nome,
 id: $scope.empresas[i].id
 });
 }
 }
 }
 };
 $scope.formatNameProduto = function (id) {
 if (id) {
 for (var i in $scope.produtos) {
 if ($scope.produtos[i].id == id) {
 return $scope.produtos[i].nome;
 }
 }
 }
 };
 $scope.remover = function (index) {
 $scope.empresa.splice(index, 1);
 };
 $scope.adicionarProduto = function () {
 $scope.produto.push({
 nome: $scope.pesquisa.produto
 });

 $scope.pesquisa.produto = "";
 };
 $scope.removerProduto = function (index) {
 $scope.produto.splice(index, 1);
 };

 $scope.adicionar = function () {
 $scope.empresa.push({
 nome: $scope.vNome,
 cidade: $scope.vCidade
 });

 $scope.vNome = "";
 $scope.vCidade = "";
 };

 $scope.remover = function (index) {
 $scope.empresa.splice(index, 1);
 };


 $scope.adicionarProduto = function () {
 $scope.produto.push({
 nome: $scope.vNomeProduto,
 });

 $scope.vNomeProduto = "";
 };

 $scope.removerProduto = function (index) {
 $scope.produto.splice(index, 1);
 };

 angular.module('datepickerBasicUsage',
 ['ngMaterial', 'ngMessages']).controller('PesquisaCadastrarController', function ($scope) {
 $scope.myDate = new Date();
 $scope.minDate = new Date(
 $scope.myDate.getFullYear(),
 $scope.myDate.getMonth() - 2,
 $scope.myDate.getDate());
 $scope.maxDate = new Date(
 $scope.myDate.getFullYear(),
 $scope.myDate.getMonth() + 2,
 $scope.myDate.getDate());
 $scope.onlyWeekendsPredicate = function (date) {
 var day = date.getDay();
 return day === 0 || day === 6;
 }
 }); */