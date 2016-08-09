angular.module('app.filters').filter('dateBr', ['$filter', function ($filter) {
    return function (input) {
        return $filter('data')(input, 'dd/MM/yyyy');
    }
}]);