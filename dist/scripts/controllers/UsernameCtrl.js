(function() {
  function UsernameCtrl($uibModalInstance, $scope) {
    $scope.newUsername = "Guest " + Math.floor(Math.random() * (100));
  					$scope.create = function() {

  						$uibModalInstance.close($scope.newUsername);

  					};

  }

     angular
         .module('blocChat')
         .controller('UsernameCtrl',['$uibModalInstance', '$scope', UsernameCtrl]);

 })();
