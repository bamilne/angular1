(function() {
    
    angular.module("bamApp")
    .service("bamDashboardService", bamDashboardService);
    
    bamDashboardService.$inject = ['$http'];
    
    function bamDashboardService($http) {
        return {
            getMessages: getMessages
        };
        
        function getMessages() {
            return $http.get('app/dashboard/test.json')
            .then(getMessagesComplete)
            .catch(getMessagesFailed);
        
        function getMessagesComplete(response) {
            return response.data;
        }
        
        function getMessagesFailed(error) {
            console.log('XHR failed for getMessages.' + error.data);
        }
    }
 }

})();