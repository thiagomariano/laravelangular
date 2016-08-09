angular.module('app.services')
    .service('Empresa', ['$resource', 'appConfig', function ($resource, appConfig) {
        return $resource(appConfig.baseUrl + '/empresas/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    }]);