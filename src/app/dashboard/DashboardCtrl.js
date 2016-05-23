(function () {

  angular.module('bamApp')
      .controller('bamDashboardCtrl', bamDashboardCtrl);
      
      bamDashboardCtrl.$inject = ['bamDashboardService'];

  function bamDashboardCtrl(bamDashboardService) {
	  
	  var vm = this;
     vm.messageitems 
    
    activate();
    
    function activate() {
      return getMessages().then(function() {
        console.log('Activated messages');
      });
    }
    
    function getMessages() {
      return bamDashboardService.getMessages()
        .then(function(data) {
          vm.messageitems  = data;
              console.log(vm.messageitems);
          return vm.messageitems;
        });
    }
	  
	  vm.dashboardTitle = "This is the Dashboard Title";  
	  
    vm.bamArray = [
      {
       number: "1",
       name: "one",
       translation: "uno"
      },
      {
       number: "2",
       name: "two",
       translation: "dos"
      },
       {
       number: "3",
       name: "three",
       translation: "thres"
      },
      {
       number: "4",
       name: "four",
       translation: "quatro"
      },
      {
       number: "5",
       name: "five",
       translation: "cinco"
      }
       ];
  }
  
  
})();