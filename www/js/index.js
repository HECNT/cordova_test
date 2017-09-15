var app = angular.module('app', [])
var url = 'http://localhost:3000'
app.controller('ctrl', function($scope, $http){
    $scope.test = 'hola'

    $http.get(url + '/test')
    .success(function(res){
        console.log(res)
    })
})