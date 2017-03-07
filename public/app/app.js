var app = angular.module("moviemaza", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    'use strict';
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('/', {
        url: '',
        views: {
            '': { templateUrl: 'app/home/home.tpl.html' },
            'header': { 
                templateUrl: 'app/common/header.tpl.html',
                controller: 'mainCtrl'
            },
            'featuredColumn@/': { 
                templateUrl: 'app/featured/featured.tpl.html',
                controller: 'featuredCtrl'
            },
            'recentColumn@/': { 
                templateUrl: 'app/recent/recent.tpl.html',
                controller: 'recentCtrl'
            },
            'trailerColumn@/': { 
                templateUrl: 'app/trailer/trailer.tpl.html',
                controller: 'trailerCtrl'
            },
            'galleryColumn@/': { 
                templateUrl: 'app/gallery/gallery.tpl.html',
                controller: 'galleryCtrl'
            },
            'dialogueColumn@/': { 
                templateUrl: 'app/dialogue/dialogue.tpl.html',
                controller: 'dialogueCtrl'
            },
            'boxofficeColumn@/': { 
                templateUrl: 'app/boxoffice/boxoffice.tpl.html',
                controller: 'boxofficeCtrl'
            },
            'upcomingColumn@/': { 
                templateUrl: 'app/upcoming/upcoming.tpl.html',
                controller: 'upcomingCtrl'
            }
        }
    })
    .state('login', {
        views: {
            '': { templateUrl: 'app/login/login.tpl.html' },
            'header': { 
                templateUrl: 'app/common/header.tpl.html',
                controller: 'mainCtrl'
            }            
        }         
    })
    .state('signup', {        
        views: {
            '': { templateUrl: 'app/register/register.tpl.html' },
            'header': { 
                templateUrl: 'app/common/header.tpl.html',
                controller: 'mainCtrl'
            }            
        }         
    });
});


app.controller("mainCtrl", function ($scope) {
    $scope.headerTemplate = "app/common/header.tpl.ejs";
    $scope.appName = "moviemaza";
    $scope.title = "MovieMaza - jee bhar ke dekho!";
});

app.factory("featuredSvc", ["$http", "$q", function($http, $q){
    var factory = {};
    factory.getFeaturedMovies = function(){
        var dfd = $q.defer();
        $http.get("/api/featured")
                .then(function(response){
                    dfd.resolve(response);
                }).catch(function(response){
                    dfd.reject(response);
                });
        return dfd.promise;
    }; 
    return factory;
}]);

app.factory("registerSvc", ["$http", "$q", function($http, $q){
        var factory = {};
        factory.register = function(data){
            var dfd = $q.defer();
            $http.post("/api/signup", data)
                    .then(function(response){
                        dfd.resolve(response);
            }).catch(function(response){
                dfd.reject(response);
            });
            return dfd.promise;
            
        };
        return factory;
}]);

app.controller("featuredCtrl", ['$scope', 'featuredSvc', function($scope, featuredSvc){
    featuredSvc.getFeaturedMovies()
        .then(function(response){
            $scope.featuredMovies = response.data;
    }).catch(function(response){
        $scope.error = response.data;
    });    
}]);

app.controller("registerCtrl", ['$scope', 'registerSvc', function($scope, registerSvc){ 
    $scope.registerUser = function(user){
        registerSvc.register(user)
            .then(function(response){
                $location.url("/profile");
        }).catch(function(error){
            $scope.message = "Error Occurred";
        });
    };
}]);
app.controller("recentCtrl", function($scope){
    $scope.recentTemplate = "app/recent/recent.tpl.html";
});

app.controller("trailerCtrl" , function($scope){
    $scope.trailerTemplate = "app/trailer/trailer.tpl.html";
});

app.controller("galleryCtrl" , function($scope){
    $scope.galleryTemplate = "app/gallery/gallery.tpl.html";
});

app.controller("dialogueCtrl", function($scope){
    $scope.dialogueTemplate = "app/dialogue/dialogue.tpl.html";
});

app.controller("boxofficeCtrl", function($scope){
    $scope.boxofficeTemplate = "app/boxoffice/boxoffice.tpl.html";
});

app.controller("upcomingCtrl", function($scope){
    $scope.upcomingTemplate = "app/upcoming/upcoming.tpl.html";
});
