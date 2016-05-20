(function () {

  angular.module('bamApp')
      .controller('bamDashboardCtrl', bamDashboardCtrl);

  function bamDashboardCtrl() {
	  
	  var vm = this;
	  
	  vm.test_test = "Hello test text";  
	  
  }
  
  
})();