(function() {
    function HomeCtrl(Room) {
        var ctrl = this;
        ctrl.heroTitle = "Welcome to Bloc Chat!!";
        ctrl.rooms = Room.all
        
        ctrl.setRoom = function(room) {
            ctrl.currentRoom = room;
        }
    }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();