(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat-df4ed.firebaseio.com");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {    
      all: rooms
    };
  }
    
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();