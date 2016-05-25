(function() {
    function HomeCtrl(Room, $uibModal) {
        var ctrl = this;
        ctrl.heroTitle = "Welcome to Bloc Chat!!";
        ctrl.rooms = Room.all

        ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
        }

        ctrl.open = function (){

          var modalInstance = $uibModal.open({
               controller: 'ModalCtrl as modal',
               templateUrl: '/templates/modal.html'
              // template: '<form style="height: 100px;">Hey</form>'
          });
        };

    }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
 })();
