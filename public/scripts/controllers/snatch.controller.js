myApp.controller('SnatchController', function (SlapService) {
    console.log('in snatch controller');
    var vm = this;

    SlapService.numGen();
    vm.skill = SlapService.skill;

    vm.slapThem = function(){
        console.log('slapThem');
        SlapService.slapCount();
       }

});