// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr',
    'fullPage.js'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('faq', {
            url: "/faq",
            templateUrl: tempateURL,
            controller: 'FaqCtrl'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: tempateURL,
            controller: 'AboutusCtrl'
        })
        .state('tokenstructure', {
            url: "/tokenstructure",
            templateUrl: tempateURL,
            controller: 'TokenstructureCtrl'
        })
        // .state('whitepaper', {
        //     url: "/whitepaper",
        //     templateUrl: tempateURL,
        //     controller: 'WhitepaperCtrl'
        // })
        .state('whitepaper', {
            url: "/whitepaper",
            templateUrl: tempateURL,
            controller: 'WhitepaperCtrl'
        })
        .state('partner', {
            url: "/partner",
            templateUrl: tempateURL,
            controller: 'PartnerCtrl'
        })
        .state('contactus', {
            url: "/contactus",
            templateUrl: tempateURL,
            controller: 'ContactusCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});