(function() {
     function HomeCtrl() {
     this.heroTitle = "Welcome to Bloc Chat!!";
 }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', HomeCtrl);
 })();