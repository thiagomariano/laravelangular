angular.module('app.services')
    .service('Coletor', ['$resource', 'appConfig', function ($resource, appConfig) {
        return $resource(appConfig.baseUrl + '/coletores/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    }]);