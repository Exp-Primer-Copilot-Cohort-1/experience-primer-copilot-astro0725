function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/skillsMember.html',
        controller: 'SkillsMemberController',
        controllerAs:'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}