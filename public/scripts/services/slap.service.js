myApp.service('SlapService', function ($http) {
    console.log('in the slap service')

    var self = this;

    self.skill = {level:  0};

    self.numGen = function () {
        var random = Math.round(Math.random() * 10);
        self.skill.level = random
    }
});