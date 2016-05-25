(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        var ctrl = this;
        ctrl.heroTitle = "Welcome to Bloc Chat!!";
        ctrl.rooms = Room.all

        ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
            ctrl.messages = Room.getMessages(ctrl.currentRoom.$id);
        }

        ctrl.sendMessage = function() {
          Message.send(ctrl.newMessage, ctr.currentRoom.$id);
          ctrl.newMessage = '';
        }

        ctrl.open = function (){
          var modalInstance = $uibModal.open({
               controller: 'ModalCtrl as modal',
               templateUrl: '/templates/modal.html'
          });
        };

    }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
 })();
