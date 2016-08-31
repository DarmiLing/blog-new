/**
 * Created by hxsd on 2016/8/5.
 */
var myapp=angular.module("myapp",["ionic"]);


myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("home",{
        url:"/home",
        templateUrl:"views/home/home.html"
    });
    $stateProvider.state("nav",{
        url:"/nav",
        templateUrl:"views/nav/nav.html"
    });
    $stateProvider.state("about",{
        url:"/about",
        templateUrl:"views/about/about.html",
        controller:"aboutCtrl"
    });

    $stateProvider.state("contact",{
            url:"/contact",
            templateUrl:"views/contact/contact.html",
            controller:"contactController"
    });
    $stateProvider.state("folio",{
            url:"/folio",
            templateUrl:"views/folio/folio.html"

    });









    $urlRouterProvider.otherwise("/nav")
});