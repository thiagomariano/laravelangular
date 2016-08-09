var app = angular.module('app', [
    'ngRoute', 'angular-oauth2', 'app.controllers', 'app.services', 'app.filters',
    'ui.bootstrap.typeahead',
    'ui.bootstrap.tpls', 'ngFileUpload',
    'angularUtils.directives.dirPagination', 'pusher-angular'
]);

angular.module('app.controllers', ['ngMessages']);
angular.module('app.filters', []);
angular.module('app.services', ['ngResource']);

app.provider('appConfig', function () {
    var config = {
        baseUrl: 'http://localhost:8000/',
        pusherKey: 'd6a60d7745d647a04a39',
        utils: {
            transformResponse: function (data, headers) {
                var headersGetter = headers();
                if (headersGetter['content-type'] == 'application/json' || headersGetter['content-type'] == 'text/json') {
                    var dataJson = JSON.parse(data);
                    if (dataJson.hasOwnProperty('data')) {
                        dataJson = dataJson.data;
                    }
                    return dataJson;
                }
                return data;
            }
        }
    };
    return {
        config: config,
        $get: function () {
            return config;
        }
    }
});

app.config([
    '$routeProvider', '$httpProvider', 'OAuthProvider', 'OAuthTokenProvider', 'appConfigProvider',
    function ($routeProvider, $httpProvider, OAuthProvider, OAuthTokenProvider, appConfigProvider) {
        /*
         $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
         $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
         */
        $httpProvider.defaults.transformResponse = appConfigProvider.config.utils.transformResponse;
        $routeProvider
        /*inicio das rotas do sistema*/
            .when('/login', {
                templateUrl: 'build/views/login.html',
                controller: 'LoginController'
            })
            .when('/home', {
                templateUrl: 'build/views/home.html',
                controller: 'HomeController'
            })
            /*fim das rotas do sistema*/

            /*inicio das rotas de teste*/
            .when('/clientes', {
                templateUrl: 'build/views/cliente/lista.html',
                controller: 'ClientListaController'
            })
            .when('/clientes/cadastrar', {
                templateUrl: 'build/views/cliente/cadastrar.html',
                controller: 'ClientCadastrarController'
            })
            .when('/clientes/:id/editar', {
                templateUrl: 'build/views/cliente/editar.html',
                controller: 'ClientEditarController'
            })
            .when('/clientes/:id/remover', {
                templateUrl: 'build/views/cliente/remover.html',
                controller: 'ClientRemoverController'
            })
            /*fim das rotas de teste*/

            /*inicio das rotas da empresa*/
            .when('/empresas', {
                templateUrl: 'build/views/empresa/lista.html',
                controller: 'EmpresaListaController'
            })
            .when('/empresas/cadastrar', {
                templateUrl: 'build/views/empresa/cadastrar.html',
                controller: 'EmpresaCadastrarController'
            })
            .when('/empresas/:id/editar', {
                templateUrl: 'build/views/empresa/editar.html',
                controller: 'EmpresaEditarController'
            })
            .when('/empresas/:id/remover', {
                templateUrl: 'build/views/empresa/remover.html',
                controller: 'EmpresaRemoverController'
            })
            /*fim das rotas da empresa*/

            /*inicio das rotas da produto*/
            .when('/produtos', {
                templateUrl: 'build/views/produto/lista.html',
                controller: 'ProdutoListaController'
            })
            .when('/produtos/cadastrar', {
                templateUrl: 'build/views/produto/cadastrar.html',
                controller: 'ProdutoCadastrarController'
            })
            .when('/produtos/:id/editar', {
                templateUrl: 'build/views/produto/editar.html',
                controller: 'ProdutoEditarController'
            })
            .when('/produtos/:id/remover', {
                templateUrl: 'build/views/produto/remover.html',
                controller: 'ProdutoRemoverController'
            })
            /*fim das rotas da produto*/

            /*inicio das rotas da coletor*/
            .when('/coletores', {
                templateUrl: 'build/views/coletor/lista.html',
                controller: 'ColetorListaController'
            })
            .when('/coletores/cadastrar', {
                templateUrl: 'build/views/coletor/cadastrar.html',
                controller: 'ColetorCadastrarController'
            })
            .when('/coletores/:id/editar', {
                templateUrl: 'build/views/coletor/editar.html',
                controller: 'ColetorEditarController'
            })
            .when('/coletores/:id/remover', {
                templateUrl: 'build/views/coletor/remover.html',
                controller: 'ColetorRemoverController'
            })
            /*fim das rotas da coletor*/

            /*inicio das rotas da coletor*/
            .when('/pesquisas', {
                templateUrl: 'build/views/pesquisa/lista.html',
                controller: 'PesquisaListaController'
            })
            .when('/pesquisas/cadastrar', {
                templateUrl: 'build/views/pesquisa/cadastrar.html',
                controller: 'PesquisaCadastrarController'
            })
            .when('/pesquisas/:id/editar', {
                templateUrl: 'build/views/pesquisa/editar.html',
                controller: 'PesquisaEditarController'
            })
            .when('/pesquisas/:id/remover', {
                templateUrl: 'build/views/pesquisa/remover.html',
                controller: 'PesquisaRemoverController'
            })
            /*fim das rotas da coletor*/

            /*inicio das rotas da categoria*/
            .when('/categorias', {
                templateUrl: 'build/views/categoria/lista.html',
                controller: 'CategoriaListaController'
            })
            .when('/categorias/cadastrar', {
                templateUrl: 'build/views/categoria/cadastrar.html',
                controller: 'CategoriaCadastrarController'
            })
            .when('/categorias/:id/editar', {
                templateUrl: 'build/views/categoria/editar.html',
                controller: 'CategoriaEditarController'
            })
            .when('/categorias/:id/remover', {
                templateUrl: 'build/views/categoria/remover.html',
                controller: 'CategoriaRemoverController'
            })
            /*fim das rotas da categoria*/

            /*inicio das rotas da itens pesquisa*/
            .when('/itens-pesquisa', {
                templateUrl: 'build/views/itens-pesquisa/lista.html',
                controller: 'ItensPesquisaListaController'
            })
            .when('/itens-pesquisa/cadastrar', {
                templateUrl: 'build/views/itens-pesquisa/cadastrar.html',
                controller: 'ItensPesquisaCadastrarController'
            })
            .when('/itens-pesquisa/:id/editar', {
                templateUrl: 'build/views/itens-pesquisa/editar.html',
                controller: 'ItensPesquisaEditarController'
            })
            .when('/itens-pesquisa/:id/remover', {
                templateUrl: 'build/views/itens-pesquisa/remover.html',
                controller: 'ItensPesquisaRemoverController'
            });
        /*fim das rotas da itens pesquisa*/


        OAuthProvider.configure({
            baseUrl: appConfigProvider.config.baseUrl,
            clientId: 'appid1',
            clientSecret: 'secret', // optional
            grantPath: 'oauth/access_token'
        });

        OAuthTokenProvider.configure({
            name: 'token',
            options: {
                secure: false
            }
        })

    }]);

app.run(['$rootScope', '$location', '$http', '$cookies', '$pusher', 'OAuth', 'appConfig',
    function ($rootScope, $location, $http, $cookies, $pusher, OAuth, appConfig) {

        $rootScope.$on('pusher-build', function (event, data) {
            if (data.next.$$route.originalPath != '/login') {
                if (OAuth.isAuthenticated()) {
                    if (!window.client) {
                        window.client = new Pusher(appConfig.pusherKey);
                        var pusher = $pusher(window.client);
                        var channel = pusher.subscribe('user.' + $cookies.getObject('user').id);

                        channel.bind("SistemaIntegradoIgrejas\\Events\\TaskWasIncluded",
                            function (data) {
                                console.log(data);
                            }
                        );
                    }
                }
            }
        });

        $rootScope.$on('pusher-destroy', function (event, data) {
            if (data.next.$$route.originalPath != '/login') {
                if (!window.client) {
                    window.client.disconnect();
                    window.client = null;
                }
            }
        });

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (next.$$route.originalPath != '/login') {
                if (!OAuth.isAuthenticated()) {
                    $location.path('login');
                }
            }
            $rootScope.$emit('pusher-build', {next: next})
            $rootScope.$emit('pusher-destroy', {next: next})
        });

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.pageTitle = current.$$route.title;
        });

        $rootScope.$on('oauth:error', function (event, rejection) {
            // Ignore `invalid_grant` error - should be catched on `LoginController`.
            if ('invalid_grant' === rejection.data.error) {
                return;
            }

            // Refresh token when a `invalid_token` error occurs.
            if ('invalid_token' === rejection.data.error) {
                return OAuth.getRefreshToken();
            }

            // Redirect to `/login` with the `error_reason`.
            return $window.location.href = '/login?error_reason=' + rejection.data.error;
        });
    }])
;