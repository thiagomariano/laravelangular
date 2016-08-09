angular.module('app.services')
    .service('Produto', ['$resource', 'appConfig', function ($resource, appConfig) {
        return $resource(appConfig.baseUrl + '/produtos/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    }]);