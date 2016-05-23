(function() {

angular.module('bamApp', ['ui.router'])
        .config(routeConfig);
        
function routeConfig($stateProvider) {
    $stateProvider
          .state('home', {
          url: '/',
          templateUrl: '../src/index.html',
          title: 'Home'
        })
        .state('dashboard', {
          url: '/dashboard',
          template: '<bam-dashboard></bam-dashboard>',
          title: 'Dashboard'
        });
}

})();