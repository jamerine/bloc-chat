(function() {
     function config($stateProvider, $locationProvider) {
          $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
             });

         $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })

            .state('modal', {
                url: '/',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            })

            .state('username', {
                url: '/',
                controller: 'UsernameCtrl as username',
                templateUrl: '/templates/username.html'
            });

      }

    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
          var modalInstance = $uibModal.open({
            controller: 'UsernameCtrl as username',
            templateUrl: '/templates/username.html',
            backdrop: 'static'
          });

          modalInstance.result.then(function(data) {
				        $cookies.put('blocChatCurrentUser', data);
                
          });

        }
    }

     angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);
 })();
