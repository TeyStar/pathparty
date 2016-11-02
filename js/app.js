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
        skills: 0, face: 1, arcane: 2, divine: 0},
        
        {id: 4, name: 'Barbarian', frontline: 1, fortitude: 1, reflex: 0, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 5, name: 'Bard', frontline: 0, fortitude: 0, reflex: 1, will: 1,
        skills: 1, face: 2, arcane: 1, divine: 0},
        
        {id: 6, name: 'Druid', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 0, divine: 1},
        
        {id: 7, name: 'Monk', frontline: 1, fortitude: 1, reflex: 1, will: 1,
        skills: 0, face: 0, arcane: 0, divine: 0},
        
        {id: 8, name: 'Paladin', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 0, divine: 1},
        
        {id: 9, name: 'Ranger', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 10, name: 'Sorcerer', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 2, divine: 0},
        
        //*****BASECLASSES*****//*****BASECLASSES*****//*****BASECLASSES*****
        {id: 11, name: 'Alchemist', frontline: 0, fortitude: 1, reflex: 1, will: 1,
        skills: 0, face: 0, arcane: 1, divine: 1},
        
        {id: 12, name: 'Cavalier', frontline: 1, fortitude: 1, reflex: 0, will: 0,
        skills: 0, face: 1, arcane: 0, divine: 0},
        
        {id: 13, name: 'Gunslinger', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 14, name: 'Inquisitor', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 1, face: 1, arcane: 0, divine: 1},
        
        {id: 15, name: 'Magus', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 1, divine: 0},
        
        {id: 16, name: 'Oracle', frontline: 1, fortitude: 0, reflex: 0, will: 1,
        skills: 1, face: 1, arcane: 0, divine: 1},
        
        {id: 17, name: 'Summoner', frontline: 1, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 1, divine: 0},
        
        {id: 18, name: 'Vigilante', frontline: 1, fortitude: 0, reflex: 1, will: 1,
        skills: 1, face: 2, arcane: 0, divine: 0},
        
        {id: 19, name: 'Witch', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 2, divine: 0},
        
        //*****HYBRIDCLASSES*****//*****HYBRIDCLASSES*****//*****HYBRIDCLASSES*****
        
    ];
    
    $scope.party = [];
    
    
    
    //#################
    //#Party Creation#
    //#################
    
    function createPartyMember(playerClassId, playerClasses, party) {
        var playerClass = [];
        if (playerClassId != ""){
            playerClass = playerClasses[playerClassId];
            playerClass.id = party.length;
            party.push(playerClass);
        }
        
        giveSuggestion(findPartyStats(party), party);
        
    }
    
    function findPartyStats(party){
        var totalStats = {
            frontline: 0, fortitude: 0, reflex: 0, will: 0, skills: 0, 
            face: 0, arcane: 0, divine: 0
        };
        
        var statKeys = Object.keys(totalStats);
        
        party.forEach(function(party, index){
           statKeys.forEach(function(key){
               totalStats[key] += party[key];
           }) ;
        });
        
        return(totalStats);
    }
    
    function giveSuggestion(totalStats, party){
        var needsMap = [
            {id: 6, frontline: 3, fortitude: 3, reflex: 3, will: 3,
            skills: 2, face: 2, arcane: 3, divine: 3},
            {id: 4, frontline: 2, fortitude: 2, reflex: 2, will: 2,
            skills: 2, face: 2, arcane: 2, divine: 2},
            {id: 3, frontline: 1, fortitude: 2, reflex: 2, will: 2,
            skills: 1, face: 1, arcane: 1, divine: 1},
            {id: 0, frontline: 1, fortitude: 1, reflex: 1, will: 1,
            skills: 1, face: 1, arcane: 1, divine: 1}
        ];
    
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        
        var currentNeeds = needsMap.id[6];
        
        if (party.length <= 5){
            currentNeeds = needsMap.id[4];
        }
        else if (party.length == 3){
            currentNeeds = needsMap.id[3];
        }
        else if (party.length < 3){
            currentNeeds = needsMap.id[0];
        }
        currentNeeds.shift();  //Remove the id from the array.
        
        //Check for huge holes in the party first in order of severity.
        if (totalStats.frontline == 0){
            
        }
        
        //Check for weak spots in the party that can use reinforcement 
    }
    
    $scope.createPartyMember = createPartyMember;
});