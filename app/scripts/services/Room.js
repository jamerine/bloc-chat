
(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat-df4ed.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,

      add: function(room) {
        room.createdAt = Firebase.ServerValue.TIMESTAMP;
        rooms.$add(room);
      },

      getMessages: function(roomId) {
        return $firebaseArray(firebaseRef.child('messages').orderByChild("roomId").equalTo(roomId));
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
