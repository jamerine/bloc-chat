(function() {
	function Message($firebaseArray, $cookies) {
		var firebaseRef = new Firebase("https://bloc-chat-df4ed.firebaseio.com/");
		var messageRef = $firebaseArray(firebaseRef.child('messages'));

		return {
			send: function(newMessage, roomId) {
				var message = {
					username: $cookies.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: Firebase.ServerValue.TIMESTAMP,
					roomId: roomId
				}
				messageRef.$add(message);
			}
		};

	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
