(function() {
  function Room($firebaseArray) {
    var Room = {};
      
    var roomRef = new Firebase("https://bloc-chat-df4ed.firebaseio.com/rooms");
    var rooms = $firebaseArray(roomRef);

    Room.all = rooms;
      
    return Room;
  }
    
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();