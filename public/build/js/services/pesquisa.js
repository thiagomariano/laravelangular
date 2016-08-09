angular.module('app.services')
    .service('Pesquisa', ['$resource', '$filter', '$httpParamSerializer', 'appConfig', function ($resource, $filter, $httpParamSerializer, appConfig) {
        return $resource(appConfig.baseUrl + '/pesquisas/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET',
                transformResponse: function (data, headers) {
                    var o = appConfig.utils.transformResponse(data, headers);
                    if (angular.isObject(o) && o.hasOwnProperty('data')) {
                        var arrayDate = o.data.split('-');
                        month = parseInt(arrayDate[1]) -1;
                        o.data = new Date(arrayDate[0],month,arrayDate[2]);
                        console.log(o.data);
                    }
                    return o;
                }
            }

        });
    }]);

/*

 save: {
 method: 'POST',
 transformRequest: function (data) {
 if (angular.isObject(data) && data.hasOwnProperty('data')) {
 data.data = $filter('date')(data.data, 'yyyy-MM-dd');
 return $httpParamSerializer(data);
 }
 return data;
 }
 },

 */
