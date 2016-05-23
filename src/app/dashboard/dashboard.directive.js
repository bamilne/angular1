(function() {
	
	
	angular.module('bamApp').directive('bamDashboard', function() {
		
		return {
			
			controller: 'bamDashboardCtrl',
			controllerAs: 'vm',
			templateUrl: 'app/dashboard/dashboard.html'
			
		};
		
	});
	
	
})();