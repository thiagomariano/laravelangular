angular.module('app.services')
    .service('Categoria', ['$resource', 'appConfig', function ($resource, appConfig) {
        return $resource(appConfig.baseUrl + '/categorias/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    }]);