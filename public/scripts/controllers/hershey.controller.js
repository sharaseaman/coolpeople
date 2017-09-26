myApp.controller('HersheyController', function(SlapService) {
console.log('in Hershey controller');
     var vm = this;

     SlapService.numGen();
   vm.skill = SlapService.skill;


 });