(function() {
	function Message($firebaseArray) {
		var firebaseRef = new Firebase("https://bloc-chat-df4ed.firebaseio.com/");
		var messageRef = $firebaseArray(firebaseRef.child('messages'));

		return {
			send: function(newMessage, roomID) {
				var message = {
					username: $cookies.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: Firebase.ServerValue.TIMESTAMP,
					roomID: roomID
				}
				messageRef.$add(message);
			}
		};

	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();
