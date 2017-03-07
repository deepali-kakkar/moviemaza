var app = angular.module("moviemaza", [] );
app.controller("mainCtrl", function ($scope) {
    $scope.headerTemplate = "app/common/header.tpl.ejs";
    $scope.appName = "moviemaza";
    $scope.title = "MovieMaza - jee bhar ke dekho!";
});

app.controller("featuredCtrl", function($scope){
    $scope.featuredTemplate = "app/featured/featured.tpl.html";
});

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
