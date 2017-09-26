myApp.controller('GraceController', function(SlapService) {
    console.log('in Grace controller');
    var vm = this;
    
         SlapService.numGen();
       vm.skill = SlapService.skill;
    
       vm.slapThem = function(){
        console.log('slapThem');
        SlapService.slapCount();
       }

 });