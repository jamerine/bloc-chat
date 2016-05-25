(function() {
  function ModalCtrl(Room, $uibModalInstance, $scope) {
    var ctrl = this;

    ctrl.addRoom = function () {

      Room.add($scope.room);

      $uibModalInstance.close(event);
    }

    ctrl.cancel = function () {
      $uibModalInstance.dismiss();
    };

  }
     angular
         .module('blocChat')
         .controller('ModalCtrl',['Room','$uibModalInstance', '$scope', ModalCtrl]);

 })();
