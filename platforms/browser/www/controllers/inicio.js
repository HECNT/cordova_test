var app = angular.module('app', [])
var url = 'http://localhost:3000'
app.controller('ctrl', function($scope, $http){
    $scope.test = 'hola'

    var db = null;
    
    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({name: 'demo.db', location: 'default'});
    });

    /*$http.get(url + '/test')
    .success(function(res){
        console.log(res)
    })*/
})