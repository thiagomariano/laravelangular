angular.module('app.services')
    .service('ItensPesquisa', ['$resource', 'appConfig', function ($resource, appConfig) {
        return $resource(appConfig.baseUrl + '/itens-pesquisa/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    }]);