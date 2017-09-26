myApp.service('SlapService', function () {
    console.log('in the slap service')

    var self = this;

    self.skill = {level:  0};

    self.numGen = function () {
        var random = Math.round(Math.random() * 10);
        self.skill.level = random
    }

    self.slapCount = function(){
       console.log('slaping');
       var clickGen = Math.round(Math.random()*10);
       console.log('clickGen number', clickGen);
       if (clickGen<self.skill.level) {
           console.log('Lost');
           self.lost = {result: 'Lost'};
           
            //console.log(lost);
       } else{
           console.log('Win');
           var win = {reult:'win'}
       }
   }
});