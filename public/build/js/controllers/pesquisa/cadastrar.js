angular.module('app.controllers')
    .controller('PesquisaCadastrarController',
        ['$scope', '$location', '$cookies', 'Pesquisa', 'Empresa', 'Produto', 'Coletor',
            function ($scope, $location, $cookies, Pesquisa, Empresa, Produto, Coletor) {
                $scope.pesquisa = new Pesquisa();
                $scope.empresas = Empresa.query();
                $scope.produtos = Produto.query();
                $scope.coletores = Coletor.query();

                $scope.empresa = [];
                $scope.produto = [];

                $scope.save = function () {
                    if ($scope.form.$valid) {
                        $scope.pesquisa.empresas = $scope.empresa;
                        $scope.pesquisa.produtos = $scope.produto;
                        $scope.pesquisa.$save().then(function () {
                            $location.path('/pesquisas');
                        })
                    }
                };

                $scope.formataColetor = function (id) {
                    if (id) {
                        for (var i in $scope.coletores) {
                            if ($scope.coletores[i].id == id) {
                                return $scope.coletores[i].nome;
                            }
                        }
                    }
                    return '';
                };

                $scope.getColetores = function (nome) {
                    return Coletor.query({
                        search: nome,
                        searchFields: 'nome:like'
                    }).$promise;
                };

                $scope.formataConcorrente = function (id) {
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
                $scope.getConcorrente = function (nome) {
                    return Empresa.query({
                        search: nome,
                        searchFields: 'nome:like'
                    }).$promise;
                };

                $scope.formataProduto = function (id) {
                    if (id) {
                        for (var i in $scope.produtos) {
                            if ($scope.produtos[i].id == id) {
                                $scope.produto.push({
                                    nome: $scope.produtos[i].nome,
                                    codigo: $scope.produtos[i].id
                                });

                            }
                        }
                    }
                };
                $scope.getProdutos = function (nome) {
                    return Produto.query({
                        search: nome,
                        searchFields: 'nome:like;codigo:like'
                    }).$promise;
                };

                $scope.removerEmpresa = function (index) {
                    $scope.empresa.splice(index, 1);
                };

                $scope.removerProduto = function (index) {
                    $scope.produto.splice(index, 1);
                };


            }
        ]);