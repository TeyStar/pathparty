angular.module('wsir')
.service('ClassService', function() {
	var obj = {};
	var playerClasses = [
        {id: 0, name: 'Fighter', classType: 'Core', frontline: 2, fortitude: 1, reflex: 0, will: 0,
        skills: 0, face: 0, arcane: 0, divine: 0},
        
        {id: 1, name: 'Cleric',  frontline: 0, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 0, divine: 2},
        
        {id: 2, name: 'Rogue', formName: 'Rogue/Ninja', frontline: 0, fortitude: 0, reflex: 1, will: 0,
        skills: 2, face: 2, arcane: 0, divine: 0},
        
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
        
        {id: 8, name: 'Paladin', formName: 'Paladin/Antipaladin',  classType: 'Core', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 0, divine: 1},
        
        {id: 9, name: 'Ranger', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 10, name: 'Sorcerer', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 2, divine: 0},
        
        //*****BASECLASSES*****//*****BASECLASSES*****//*****BASECLASSES*****
        {id: 11, name: 'Alchemist', frontline: 0, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 1, divine: 0.5},
        
        {id: 12, name: 'Cavalier', formName: 'Cavalier/Samurai', frontline: 1, fortitude: 1, reflex: 0, will: 0,
        skills: 0, face: 2, arcane: 0, divine: 0},
        
        {id: 13, name: 'Gunslinger', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 14, name: 'Inquisitor', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 1, face: 2, arcane: 0, divine: 1},
        
        {id: 15, name: 'Magus', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 1, divine: 0},
        
        {id: 16, name: 'Oracle', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0.5, face: 1, arcane: 0, divine: 2},
        
        {id: 17, name: 'Summoner', frontline: 1, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 1, divine: 0},
        
        {id: 18, name: 'Vigilante', frontline: 1, fortitude: 0, reflex: 1, will: 1,
        skills: 1, face: 2, arcane: 0, divine: 0},
        
        {id: 19, name: 'Witch', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 2, divine: 0},
        
        //*****HYBRIDCLASSES*****//*****HYBRIDCLASSES*****//*****HYBRIDCLASSES*****
        {id: 20, name: 'Arcanist', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 2, divine: 0},
        
        {id: 21, name: 'Bloodrager', frontline: 1, fortitude: 1, reflex: 0, will: 0,
        skills: 0, face: 0, arcane: 1, divine: 0},
        
        {id: 22, name: 'Brawler', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 0, face: 0, arcane: 0, divine: 0},
        
        {id: 23, name: 'Hunter', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 1},
        
        {id: 24, name: 'Investigator', frontline: 0, fortitude: 0, reflex: 1, will: 1,
        skills: 2, face: 2, arcane: 1, divine: 0.5},
        
        {id: 25, name: 'Shaman', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 0.5, divine: 1},
        
        {id: 26, name: 'Skald', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 2, arcane: 1, divine: 0},
        
        {id: 27, name: 'Slayer', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 28, name: 'Swashbuckler', frontline: 1, fortitude: 0, reflex: 1, will: 0,
        skills: 0, face: 2, arcane: 0, divine: 0},
        
        {id: 29, name: 'Warpriest', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 0, divine: 1},

        //*****OCCULTCLASSES*****OCCULTCLASSES*****OCCULTCLASSES*****OCCULTCLASSES
        {id: 30, name: 'Kineticist', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 0, face: 0, arcane: 1, divine: 0},

        {id: 31, name: 'Medium', frontline: 1, fortitude: 0, reflex: 0, will: 1,
        skills: 2, face: 1, arcane: 0, divine: 1},

        {id: 32, name: 'Mesmerist', frontline: 0, fortitude: 0, reflex: 1, will: 1,
        skills: 1, face: 2, arcane: 0, divine: 2},

        {id: 33, name: 'Occultist', frontline: 0, fortitude: 1, reflex: 0, will: 1,
        skills: 1, face: 1, arcane: 2, divine: 0},

        {id: 34, name: 'Psychic', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 2, arcane: 2, divine: 0},

        {id: 35, name: 'Spiritualist', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 1, divine: 0}
    ];

    obj.list = function(filter) {
    	return playerClasses;
    };

    obj.findById = function(id) {
    	return _.find(playerClasses, {id: id});
    };

    return obj;
})