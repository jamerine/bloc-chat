(function() {
  function Room($firebaseArray) {
    var Room = {};

    var roomRef = new Firebase("https://bloc-chat-df4ed.firebaseio.com/rooms");
    var rooms = $firebaseArray(roomRef);

    Room.all = rooms;

    Room.add = function (room) {
      room.createdAt = Firebase.ServerValue.TIMESTAMP;
      rooms.$add(room);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
