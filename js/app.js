angular.module('wsir', [
    ])
    

.controller('MainCtrl', function($scope){
    $scope.playerClasses = [
        {id: 0, name: 'Fighter', frontline: 2, fortitude: 1, reflex: 0, will: 0,
        skills: 0, face: 0, arcane: 0, divine: 0},
        
        {id: 1, name: 'Cleric',  frontline: 0, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 0, divine: 2},
        
        {id: 2, name: 'Rogue', frontline: 0, fortitude: 0, reflex: 1, will: 0,
        skills: 2, face: 1, arcane: 0, divine: 0},
        
        {id: 3, name: 'Wizard', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 2, divine: 0}
        
    ];
    
    $scope.party = [];
    
    
    //#################
    //#Party Creation#
    //#################
    
    function createPartyMember(partyMember) {
        if (partyMember.id != ""){
            partyMember = $scope.playerClasses[partyMember.id];
            console.log(partyMember.id);
            partyMember.id = $scope.party.length;
            console.log(partyMember.id);
            console.log($scope.party.length);
            $scope.party.push(partyMember);
        }
    }
    
    function giveSuggestion(){
        //team stats
        var frontline = 0;
        var fortitude = 0;
        var reflex = 0;
        var will = 0;
        var skills = 0;
        var face = 0;
        var arcane = 0;
        var divine = 0;
        // needStates
        var needFront = 0;
        var needFort = 0;
        var needRef = 0;
        var needWill = 0;
        var needSkills = 0;
        var needFace = 0;
        var needArc = 0;
        var needDiv = 0;
        
        //DETERMINING STATS FOR SUGGESTION!
        //DETERMINING STATS FOR SUGGESTION!
        //DETERMINING STATS FOR SUGGESTION!
        for (var i = 0; i < $scope.party.length; i++){
            frontline += $scope.party[i].frontline;
            fortitude += $scope.party[i].fortitude;
            reflex += $scope.party[i].reflex;
            will += $scope.party[i].will;
            skills += $scope.party[i].skills;
            face += $scope.party[i].face;
            arcane += $scope.party[i].arcane;
            divine += $scope.party[i].divine;
        }
        
        if ($scope.party.length > 5){
            needFront = 3;
            needDiv = 3;
            needArc = 3;
            
            needFort = 3;
            needRef = 3;
            needWill = 3;
            
            needSkills = 2;
            needFace = 2;
        }
        else if ($scope.party.length > 3){
            needFront = 2;
            needDiv = 2;
            needArc = 2;
            
            needFort = 2;
            needRef = 2;
            needWill = 2;
            
            needSkills = 2;
            needFace = 2;
        }
        else if ($scope.party.length > 2){
            needFront = 1;
            needDiv = 1;
            needArc = 1;
            
            needFort = 2;
            needRef = 2;
            needWill = 2;
            
            needSkills = 1;
            needFace = 1;
        }
        else {
            needFront = 1;
            needDiv = 1;
            needArc = 1;
            
            needFort = 1;
            needRef = 1;
            needWill = 1;
            
            needSkills = 1;
            needFace = 1;
        }
        
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        //Check for huge holes in the party first in order of severity.
        if (frontline == 0){
            
        }
        else if (divine == 0){
            
        }
        else if (arcane == 0){
            
        }
        else if (skills == 0){
            
        }
        else if (fortitude == 0){
            
        }
        else if (reflex == 0){
            
        }
        else if (will == 0){
            
        }
        else if (face == 0){
            
        }
        
        //Check for weak spots in the party that can use reinforcement.
    }
    
    $scope.createPartyMember = createPartyMember;
});