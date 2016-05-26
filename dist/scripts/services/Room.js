
(function() {
  function Room($firebaseArray) {
    var roomsRef = new Firebase("https://bloc-chat-df4ed.firebaseio.com/rooms");
    var rooms = $firebaseArray(roomsRef);

    return {
      all: rooms,

      add: function(room) {
        room.createdAt = Firebase.ServerValue.TIMESTAMP;
        rooms.$add(room);
      }


    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
