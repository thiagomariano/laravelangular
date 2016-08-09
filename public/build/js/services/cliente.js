angular.module('app.services')
    .service('Client', ['$resource', 'appConfig', function ($resource, appConfig) {
        return $resource(appConfig.baseUrl + '/clients/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    }]);