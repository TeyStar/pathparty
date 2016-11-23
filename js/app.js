angular.module('wsir', [
    ])
    

.controller('MainCtrl', function($scope){
    $scope.playerClasses = [
        {id: 0, name: 'Fighter', frontline: 2, fortitude: 1, reflex: 0, will: 0,
        skills: 0, face: 0, arcane: 0, divine: 0},
        
        {id: 1, name: 'Cleric',  frontline: 0, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 1, arcane: 0, divine: 2},
        
        {id: 2, name: 'Rogue', frontline: 0, fortitude: 0, reflex: 1, will: 0,
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
        
        {id: 8, name: 'Paladin', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 0, divine: 1},
        
        {id: 9, name: 'Ranger', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 10, name: 'Sorcerer', frontline: 0, fortitude: 0, reflex: 0, will: 1,
        skills: 0, face: 0, arcane: 2, divine: 0},
        
        //*****BASECLASSES*****//*****BASECLASSES*****//*****BASECLASSES*****
        {id: 11, name: 'Alchemist', frontline: 0, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 1, divine: 0.5},
        
        {id: 12, name: 'Cavalier', frontline: 1, fortitude: 1, reflex: 0, will: 0,
        skills: 0, face: 2, arcane: 0, divine: 0},
        
        {id: 13, name: 'Gunslinger', frontline: 1, fortitude: 1, reflex: 1, will: 0,
        skills: 1, face: 0, arcane: 0, divine: 0},
        
        {id: 14, name: 'Inquisitor', frontline: 1, fortitude: 1, reflex: 0, will: 1,
        skills: 1, face: 2, arcane: 0, divine: 1},
        
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
        skills: 0, face: 1, arcane: 0, divine: 1}
    ];
    
    $scope.party = [];
    
    $scope.suggest = [{classSuggest: '', reasonSuggest: ''}];
    
    //#################
    //#Party Creation#
    //#################
    
    function createPartyMember(playerClassId, playerClasses, party, suggest) {
        var playerClass = [];
        if (playerClassId != ""){
            playerClass = playerClasses[playerClassId];
            playerClass.id = party.length;
            party.push(playerClass);
        }
        
        return giveSuggestion(findPartyStats(party), party);
        
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
    
    
    function giveSuggestion(totalStats, party, suggest){
        var needsMap = [
            {frontline: 3, fortitude: 3, reflex: 3, will: 3,
            skills: 2, face: 2, arcane: 3, divine: 3},
            {frontline: 2, fortitude: 2, reflex: 2, will: 2,
            skills: 2, face: 2, arcane: 2, divine: 2},
            {frontline: 1, fortitude: 2, reflex: 2, will: 2,
            skills: 1, face: 1, arcane: 1, divine: 1},
            {frontline: 1, fortitude: 1, reflex: 1, will: 1,
            skills: 1, face: 1, arcane: 1, divine: 1}
        ];
        
        var shortClasses = party.map(function(item){
            return item.name;
        });
        
        
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        //DISCOVERING WHAT IS NEEDED FOR SUGGESTION
        
        var currentNeeds = needsMap[0];
        
        if (party.length >= 5){
            currentNeeds = needsMap[1];
        }
        else if (party.length == 3){
            currentNeeds = needsMap[2];
        }
        else if (party.length < 3){
            currentNeeds = needsMap[3];
        }
        //currentNeeds.prototype.shift();  //Remove the id from the array.
        console.log(currentNeeds);
        //Check for huge holes in the party first in order of severity.
        var suggestedClass;
        var suggestedReason;
        
        if (totalStats.frontline == 0){ //Frontline Checking
            if (currentNeeds.frontline >= 2){  //Desperately NEEDS!
                suggestedClass = "Fighter";
                suggestedReason = "The party desperately needs someone in the frontline " +
                "and Fighter's access to heavy armor training, which gives their DEX bonus while wearing heavy armor, and polearms for long ranged attacks of opportunity makes them a great choice!  Pick up the Combat Reflexes feat to get multiple attacks of opportunities with your reach weapons to punish anyone trying to get by you and attempt to attack your party's soft and squishy mages!";
                if (totalStats.fortitude < currentNeeds.fortitude){
                    suggestedReason += "\n\nYour party also needs more characters with good fortitude, which Fighter also provides.";
                }
            }
            
            else if (totalStats.divine < currentNeeds.divine){ //Need divine?
                if (totalStats.skills < currentNeeds.skills){
                    suggestedClass = "Hunter";
                    suggestedReason = "The party needs a frontliner and the Hunter's medium armor " +
                    "and animal focus makes them decent frontliners... BUT then you include their pet fighting " +
                    "by their side and that makes them GREAT frontliners!";
                    suggestedReason += "\n\nThe party can use some divine casting, Hunters bring the Druid spell list " +
                    "up to level 6 and this includes the cure wounds line of spells!";
                    suggestedReason += "\n\nThe party can also use a skill monkey and Hunters bring Perception, " +
                    "Stealth, Spellcraft, can Track, and  other outdoorsy skills to the table.";
                    if (totalStats.fortitude < currentNeeds.fortitude){
                        suggestedReason += "\n\nYour party also needs more characters with good fortitude, which Hunter also provides.";
                    }
                    if (totalStats.reflex < currentNeeds.reflex){
                        suggestedReason += "\n\nYour party also needs more characters with good reflex, which Hunter also provides.";
                    }
                }
                else if (totalStats.face < currentNeeds.face){
                    suggestedClass = "Warpriest";
                    suggestedReason = "The party needs a frontliner and the Warpriest clad in heavy armor " +
                    "blessed with extra enhancement bonus to it from Sacred Armor, add in a Blessing " +
                    "that summons a battle companion and you have a fantastic frontliner!";
                    suggestedReason += "\n\nThe party can use some divine casting, Warpriests bring the Cleric spell list " +
                    "up to level 6 and even can channel energy to heal!";
                    suggestedReason += "\n\nThe party can also use a face and Warpriests have Diplomacy, " +
                    "Intimidate, Sense Motive, and even Handle Animal to help win the battles of words!  Roleplay " +
                    "as a worshipper of a Lawful Good diety for bonus leader points from your Dungeon Master!";
                    if (totalStats.fortitude < currentNeeds.fortitude){
                        suggestedReason += "\n\nYour party also needs more characters with good fortitude, which Warpriest also provides.";
                    }
                    if (totalStats.will < currentNeeds.will){
                        suggestedReason += "\n\nYour party also needs more characters with good will, which Warpriest also provides.";
                    }
                }
                else{
                    suggestedClass = "Paladin";
                    suggestedReason = "The party needs a frontliner.  A Paladin becomes immune to many status effects, " +
                    "add their Charisma on top of their saves to make them more resistant to the effects they aren't immune to, " +
                    "while wearing heavy armor and sporting a d10 hit die!  They're a great frontliner!";
                    suggestedReason += "\n\nThe party can use some divine casting, Paladins brings only a small repertoire of spells " +
                    "but they also carry channel energy and lay on hands for many healing options!  They're also the kings of removing status effects!";
                    if (totalStats.fortitude < currentNeeds.fortitude){
                        suggestedReason += "\n\nYour party also needs more characters with good fortitude, which Paladins also provide with an additional bonus from their Charisma on top!";
                    }
                    if (totalStats.will < currentNeeds.will){
                        suggestedReason += "\n\nYour party also needs more characters with good will, which Paladins also provide with an additional bonus from their Charisma on top!";
                    }
                }
            }
            
            else if (totalStats.arcane < currentNeeds.arcane){  //Need arcane?
                if(totalStats.face < currentNeeds.face){
                    suggestedClass = "Summoner";
                    suggestedReason = "The party needs a frontliner.  A Summoner may seem like the last option " +
                    "you'd select as they wear light armor and suffer from arcane failure in anything heavier, but " +
                    "their Eidolon and Summon Monster Spell Like Abilities allow for them to create a tremendously effective " +
                    "frontline!  Build your Eidolon to have as many attacks of opprotunity as possible and give him long reach " +
                    "with solid tripping ability and nothing will be able to safely move around your summons without being tripped and severely punished!  " +
                    "Pick up some traits that will give you Bluff and Diplomacy and you're set to be a makeshift party face since your casting stat is Charisma after all.  You also get every Knowledge check and Linguistics, learn about the cultures, current events, and the languages of the area before you start talking and you should be fine as the party leader.";
                    suggestedReason += "\n\nThe party can use some arcane casting, Summoners bring at least up to level 6 arcane casting!";
                    if (totalStats.will < currentNeeds.will){
                        suggestedReason += "\n\nYour party also needs more characters with good will, which Summoners provide.";
                    }
                }
                else{
                    suggestedClass = "Bloodrager";
                    suggestedReason = "The party needs a frontliner.  Bloodrager has a d10 hit die, gains extra health " +
                    "during a bloodrage and damage reduction!  Pick up a bloodline that grants more defensive properties and you're gold!" +
                    "\n\nBloodragers only cast up to 4th level arcane spells but it adds to the party's currently weak arcane department.";
                    if (totalStats.fortitude < currentNeeds.fortitude){
                        suggestedReason += "\n\nYour party also needs more characters with good fortitude, which Bloodrager provides.";
                    }
                }
            }
            
            else if (totalStats.skills < currentNeeds.skills){  //Need skills?
                if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Ranger";
                    suggestedReason = "The party needs a frontliner, more characters with reflex saves, and is lacking " +
                    "in the skills department.  As a Ranger, you can do very well in the frontline, bring a tanky pet out there with you " +
                    "have solid reflex saves, and help the party with Perception, Stealth, Tracking, and several Knowledge checks!  All in one package!";
                }
                else if(totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Barbarian";
                    suggestedReason = "The party needs a frontliner, more characters with fortitude saves, and is lacking " +
                    "in the skills department.  As a Barbarian, you can serve the frontline with your damage reduction, rage, and amazing d12 Hit Die, " +
                    "have great fortitude saves (especially being so constitution focused), and help the party with Perception and Survival checks. " +
                    "More importantly, if you don't have someone scouting for traps or with Disable Device, your Trap Sense can go a long way!";
                }
                else if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Oracle with Metal Mystery";
                    suggestedReason = "The party needs a frontliner, more characters with will saves, and is lacking " +
                    "in the skills department.  As an Oracle with the Metal Mystery you can spend a feat on heavy armor profeciency " +
                    "and utilize full movement speed in heavy armor and the increased DEX bonus you're allowed in that armor! " +
                    "You bring solid will saves as well as several Knowledges, Spellcraft, AND DISABLE DEVICE!!  Don't even need a Rogue to handle those traps now!";
                }
                else{
                    suggestedClass = "Slayer";
                    suggestedReason = "The party needs a frontliner and is lacking in the skills department. " +
                    "As a Slayer you have a d10 Hit Die, medium armor, full BAB, and Sneak Attacks to hold the frontlines. " +
                    "You also bring Perception, Stealth, Tracking, several Knowledges, and Acrobatics to bolster the skills of your party.";
                }
            }
            
            else if (totalStats.face < currentNeeds.face){  //Need face?
                if(totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Cavalier";
                    suggestedReason = "The party needs a frontliner, more characters with fortitude saves, and is lacking " +
                    "in the social department.  Rushing to the frontline on your steed, full of fortitude, forcing enemies to fight you through challenges, " +
                    "buffing, and granting teamwork feats to your allies, Cavalier makes a great frontliner!" +
                    "With your Bluff, Diplomacy, Intimidate, Handle Animal, and Sense Motive skills, you can carry yourself elegantly as your party's leader!";
                }
                else if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Swashbuckler";
                    suggestedReason = "The party needs a frontliner, more characters with reflex saves, and is lacking " +
                    "in the social department.  While a light armor wearer, the Swashbuckler has a swift foot and can avoid " +
                    "attacks using their increased dodge bonuses from Nimble and using their Panache to add their Charisma to their AC " +
                    "or to parry an attack with their own weapon!  Since you'll have high Charisma for your Panache, you'll be " +
                    "one charming gentleperson boosting your Bluff, Diplomacy, Intimidate, Knowledge Local, Knowledge Nobility, Sense Motive, and even Perform skills making you a great party leader!" +
                    "Not to mention your high reflex saves and charmed life to add your Charisma to all saves!";
                }
                else if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Skald";
                    suggestedReason = "The party needs a frontliner, more characters with will saves, and is lacking " +
                    "in the social department.  As a Skald you bring the will saves, inspire rage to increase everyone's health, " +
                    "wear medium armor, and eventually gain damage reduction, all which can help you frontline. " +
                    "As Skalds are half Bard, you're looking at all Knowledges, Bardic Knowledge, the Bard spell list, Bluff, Diplomacy, Handle Animal, Intimidate, Linguistics, Perform, and Sense Motive to make you the complete party face package!";
                }
                else{
                    suggestedClass = "Gunslinger";
                    suggestedReason = "The party needs a frontliner and is lacking in the social department. " +
                    "Take a trait to make Diplomacy a class skill and Gunslinger can make for a solid choice because " +
                    "while guns make you think 'far ranged' but most guns to be effective have to be within 20-30ft. " +
                    "With a d10 Hit Die, medium armor, deeds to grant bonus AC, Nimble granting dodge bonus, you're a better frontline than most give credit for!  " +
                    "Pick up the Gun Tank archetype and you can run around in heavy armor while holding a tower shield to make you even more of a beefy frontliner.  " +
                    "Charisma gains you more grit for Deeds, on another plus side is that it can make you a great social face for the party with your Bluff, Handle Animal, Intimidate, Knowledge Local, and Diplomacy if you make one of your starting traits give it to you as a class skill.";
                }
            }
            
            else{ //Just needs frontline, check for saves.
                if(totalStats.fortitude < currentNeeds.fortitude && totalStats.reflex < currentNeeds.reflex && totalStats.will < currentNeeds.will){
                    suggestedClass = "Monk";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline and you are lacking in all saves.  " +
                    "While a Monk is not great at defense but with your already solid party, adding WIS and DEX to your AC, and self healing through Ki, it shouldn't " +
                    "be too much of a problem.  If you want more AC, pick up the Sohei archetype to wear light armor on top of the AC bonuses!  " +
                    "Monks are also the only class in the game to be granted all saves!\n\nIf you are still feeling uncomfortable being a Monk for your party, just be a Paladin and give yourself plenty of CHA to add to your save rolls.";
                }
                else if (totalStats.fortitude < currentNeeds.fortitude && totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Brawler as Shield Champion archetype";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline and you are lacking in fortitude and reflex saves.  " +
                    "A Shield Champion you get fortitude and reflex saves, PLUS YOU CAN BE CAPTAIN AMERICA!  You gain bonus AC from your class and from shields " +
                    "but your most powerful asset is the ability to perform Bull Rushes, Dirty Tricks, Disarmings, Repositionings, and Trippings from range from when you throw your shield! " +
                    "You can control the battlefield from a wide range making sure no one gets passed you!";
                }
                else if (totalStats.will < currentNeeds.will && totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Paladin";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline and you are lacking in fortitude and will saves.  " +
                    "A Paladin becomes immune to many status effects, " +
                    "add their Charisma on top of their saves to make them more resistant to the effects they aren't immune to, " +
                    "while wearing heavy armor, provide the best combat healing in the game through Lay on Hands, and sporting a d10 hit die!  They're a great frontliner and brings the saves you need!";
                }
                else if (totalStats.will < currentNeeds.will && totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Vigilante";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline and you are lacking in will and reflex saves.  " +
                    "If your GM will allow Vigilantes and you don't feel like being a Monk or Paladin, then Vigilante can be the frontliner that brings Will and Reflex saves for your team!  " +
                    "Pick up the Heavy Training and Armor Skin Vigilante Talents and if you want to wield a Two-Hander pick up the Vigilante Talent called Shield of Blades to add AC when ever you Power Attack!  " +
                    "If you want to have a Shield and a One-Hander for the extra AC, drop Shield of Blades and instead get the Vigilante Talents called Lethal Grace and Shield of Fury and you will turn that shield into a lethal weapon!";
                }
                else if(totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = " Barbarian as Armored Hulk archetype";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline and you are lacking in fortitude saves.  " +
                    "The Armored Hulk takes Barbarian's 12d Hit Die and protects it with Heavy Amrmor!  Since your party is solid in all other departments " +
                    "trading off your Trap Sense to be swapped out for being a fast, heavy armored, raging, DR having, frontliner!  This class needs " +
                    "consitution to increase their rages per day, top the high consitution with their high fortitude save and you are filling the fortitude save rolls for your party insanely well!";
                }
                else if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Hunter as Feral Hunter archetype";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline and you are lacking in reflex saves.  " +
                    "With medium armor, Wildshape into something medium sized (or larger sizes at higher levels) to get +2 AC, take on the Animal Focus " +
                    "of Tiger for DEX bonus for more AC or Bear for CON bonus for more HP.  All your summons gain any teamwork feats you have, the Animal Focus that's on you AND at level 6 you get to " +
                    "summon two animals at the same time at the cost of one!  You and your animals will create a solid wall for your frontline, plus you bring the reflex saves!";
                }
                else if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Summoner as Synthesist archetype";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline and you are lacking in will saves.  " +
                    "If your GM allows for Synthesist players in his game (otherwise play a Paladin), you're in luck!  A Synthesist essentually summons their eidolon " +
                    "on top of themselves and wears them like a suit of armor!  This gives the Synthesist the STR, DEX, and CON scores of the Eidolon. " +
                    "The Synthesist uses the eidolon HP as their own temp HP, their BAB, their AC, and even their evolutions!!  This deadly duo is a powerhouse of a frontliner and brings the will saves!";
                }
                else{
                    suggestedClass = "Fighter as Armor Master archetype";
                    suggestedReason = "This party is solid in all areas but its non-existant frontline.  " +
                    "An Armor Master would fill the last need of the party because of how difficult they are to kill, " +
                    "with their bonus to touch AC, Damage Reduction, d10 Hit Die, Heavy Armor, and the chance at negating sneak attacks and critical hits!";
                }
            }
        }
        
        else if (totalStats.divine == 0){ //Divine Zero
            if (currentNeeds.divine >= 2){
                suggestedClass = "Cleric";
                suggestedReason = "Your party is in desperate need of a Divine spellcaster!  Cleric is the quintessential Divine caster bringing in the widest Divine spell list, which will hopefully take care of all your Divine needs!";
            }
            
            else if (totalStats.frontline < currentNeeds.frontline){
                if (totalStats.skills < currentNeeds.skills){
                    suggestedClass = "Inquisitor as Sacred Huntsmaster archetype";
                    suggestedReason = "Your party needs Divine spells in its repertoire, the party's frontline could use some help, and it needs more skillful characters.  " +
                    "An Inquisitor brings social skills, scouting skills, many knowledges, and Divine spells up to 6th level.  The Sacred Huntsmaster brings a nice tanky animal companion to bolster the frontline!  ";
                }
                else if (totalStats.face < currentNeeds.face){
                    suggestedClass = "Warpriest";
                    suggestedReason = "Your party needs Divine spells in its repertoire, the party's frontline could use some help, and it needs more social skills.  " +
                    "With Heavy Armor, Sacred Armor enhancing their armor, with a blessing that can summon someone to frontline with them, Diplomacy, Intimidate, and Sense Motive class skills to lead the party, the Warpriest with his 6th level Divine casting is just what your party needs!  ";
                }
                else{
                    suggestedClass = "Druid";
                    suggestedReason = "Your party needs Divine spells in its repertoire and the party's frontline could use some help.  " +
                    "Druid is a perfect fit.  With the full 9th level Druidic Divine casting most issues can be solved through magic AND with a solid Animal Companion pick from Nature Bond, you're party will have another powerful asset to their frontline.  ";
                }
            }
            
            else if (totalStats.skills < currentNeeds.skills) {
                if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Oracle with Metal Mystery";
                    suggestedReason = "Your party needs Divine spells in its repertoire, the party's scouting abilities could use some help, and it needs more characters with will saves.  " +
                    "Oracle has good Will saves, a full 9th level Divine spell list, but when you throw in the Metal Mystery you gain Disable Device to disarm all the traps and open all the locks that your team will encounter.  You also have all the face skills to be the party's face if you ever need to step in for that role.";
                }
                else if (totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Inquisitor as Urban Infiltrator archetype";
                    suggestedReason = "Your party needs Divine spells in its repertoire, the party's scouting abilities could use some help, and it needs more characters with fortitude saves.  " +
                    "Inquisitor brings in 6+INT skill ranks per level with all of the important scouting and social skills as class skills... except for Disable Device... BUT the Urban Infiltrator does get Disable Device as a class skill!  As an Urban Infiltrator you also bring the needed Divine casting up to 6th level and Fortitude saves.";
                }
                else if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Hunter";
                    suggestedReason = "Your party needs Divine spells in its repertoire, the party's scouting abilities could use some help, and it needs more characters with reflex saves.  " +
                    "Reflex saves and Divine casters above 4th level are rare.  Hunter brings 6th level Druid spells, reflex saves, and has great scouting skills, including tracking!";
                }
                else{
                    suggestedClass = "Inquisitor as Urban Infiltrator archetype";
                    suggestedReason = "Your party needs Divine spells in its repertoire and the party's scouting abilities could use some help.  " +
                    "Inquisitor brings in 6+INT skill ranks per level with all of the important scouting and social skills as class skills... except for Disable Device... BUT the Urban Infiltrator does get Disable Device as a class skill!  As an Urban Infiltrator you also bring the needed Divine casting up to 6th level.";
                }
            }
            
            else if (totalStats.face < currentNeeds.face) {  
                suggestedClass = "Inquisitor";
                suggestedReason = "Your party needs Divine spells in its repertoire and the party's social abilities could use some help.  " +
                "Inquisitor brings in 6+INT skill ranks per level with all of the important scouting and social skills as class skills.  You also bring the needed Divine casting up to 6th level.";
            }
            
            else if (totalStats.arcane < currentNeeds.arcane){ //Push this one back for better results.
                suggestedClass = "Multiclass Cleric and Wizard to Prestige into Mystic Theurge";
                suggestedReason = "Your party needs Divine spells in its repertoire and the party's Arcane casting could use some help.  " +
                "This is a really awkward situation that your party is in, they need both casting types because it is always good to have a wide range of different spells available to solve any issue the party runs into.  Leveling Cleric and Wizard to level 3 each means that you won't get to get into the benefits of the Mystic Theurge Prestige Class until level 7 but you will be brining the largest spread of spells any character could, if there is a puzzle you cannot solve with magic, you're lying to yourself!  " +
                "\n\nA lot of players are not cool with all the work it takes to be and become a Mystic Theurge, if you don't want to do Mystic Theurge, go Shaman.  A Shaman brings full 9th level Divine casting WITH Hexes AND Spirit Magic to broaden their already huge spell toolset to greater proportions!";
            }
            
            else {
                if(totalStats.will < currentNeeds.will){
                    suggestedClass = "Cleric as Ecclesitheurge archetype";
                    suggestedReason = "Your party needs Divine spells in its repertoire and it needs more characters with will saves.  " +
                    "The Ecclesitheurge is the pure caster version of Cleric, you get all the casting and saves of a Cleric with the ability to prepare spells from your primary domain's spell list into your regular spell slots and everyday you can swap out your second domain's spell list!  Yes, you can change your second domain spell list daily, while keeping your old domain powers too!  Your armor and weapon profeciencies get nerfed down to what a Wizard gets, so expect to have the survivability of a Wizard, but it is worth it for the wider spell range and spell freedom!";
                }
                else if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Hunter";
                    suggestedReason = "Your party needs Divine spells in its repertoire, and it needs more characters with reflex saves.  " +
                    "Reflex saves and Divine casters above 4th level are rare.  Hunter brings 6th level Druid spells, reflex saves, an awesome Animal Companion, and has great scouting skills, including tracking!";
                }
                else{
                    suggestedClass = "Cleric as Ecclesitheurge archetype";
                    suggestedReason = "Your party needs Divine spells in its repertoire.  " +
                    "The Ecclesitheurge is the pure caster version of Cleric, you get all the casting of a Cleric with the ability to prepare spells from your primary domain's spell list into your regular spell slots and everyday you can swap out your second domain's spell list!  Yes, you can change your second domain spell list daily, while keeping your old domain powers too!  Your armor and weapon profeciencies get nerfed down to what a Wizard gets, so expect to have the survivability of a Wizard, but it is worth it for the wider spell range and spell freedom!";
                }
            }
        }
        
        else if (totalStats.arcane == 0){ //Arcane Zero
            if (currentNeeds.arcane >= 2) {
                suggestedClass = "Wizard";
                suggestedReason = "Your party desperately needs Arcane spells in its repertoire.  " +
                "Wizards are the pinnacle of Arcane spell casting bringing everything you'll ever need in that department!";
            }
            
            else if (totalStats.frontline < currentNeeds.frontline){
                if (totalStats.face < currentNeeds.face){
                    suggestedClass = "Skald";
                    suggestedReason = "Your party needs Arcane spells in its repertoire, the party's frontline could use some help, and it needs more social characters.  " +
                    "As a Skald, you have almost the same party face potential as a Bard, you can cast your 6th level arcane magic within your medium armor and fight on the frontlines giving buffs and Rage Powers to everyone through your Inspired Rage.  You also bring Spell Kenning which is a tremendous help to any party, granting you spells for any issue, no matter how situational!";
                }
                else{
                    suggestedClass = "Magus";
                    suggestedReason = "Your party needs Arcane spells in its repertoire and the party's frontline could use some help.  " +
                    "Magus brings very high damage output with Spell Combat and Spellstrike in the frontlines and you carry a spellbook like a Wizard, meaning you can learn every possible spell to your class as long as you get a shot at writing it down in your book!  So even outside of combat you still have plenty of uses solving problems with your magic.";
                }
            }
            
            else if (totalStats.divine < currentNeeds.divine){
                suggestedClass = "Multiclass Wizard and Cleric to Prestige into Mystic Theurge";
                suggestedReason = "Your party needs Arcane spells in its repertoire and the party's Divine casting could use some help.  " +
                "This is a really awkward situation that your party is in, they need both casting types because it is always good to have a wide range of different spells available to solve any issue the party runs into.  Leveling Wizard and Cleric to level 3 each means that you won't get to get into the benefits of the Mystic Theurge Prestige Class until level 7 but you will be brining the largest spread of spells any character could, if there is a puzzle you cannot solve with magic, you're lying to yourself!  " +
                "\n\nA lot of players are not cool with all the work it takes to be and become a Mystic Theurge, if you don't want to do Mystic Theurge, go Witch.  A Witch brings full 9th level Arcane casting that contains spells from Wizard, Druid, and Cleric spell lists, PLUS Hexes AND Patron Spells to broaden their already huge spell toolset to greater proportions!";
            }
            
            else if (totalStats.face < currentNeeds.face){
                if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Bard";
                    suggestedReason = "Your party needs Arcane spells in its repertoire, it needs more social characters, and more who can survive will saves.  " +
                    "This is the perfect time to roll a Bard!  What is a better party leader than a Bard?  They also bring 6th level Arcane spells to the party and will saves, both of which the party needs.";
                }
                else if (totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Skald";
                    suggestedReason = "Your party needs Arcane spells in its repertoire, it needs more social characters, and more who can survive fortitude saves.  " +
                    "As a Skald, you have almost the same party face potential as a Bard, you bring 6th level arcane magic as well as Spell Kenning which is a tremendous help to any party, granting you spells for any issue, no matter how situational!  You also carry the fortitude saves the party needs.";
                }
                else {
                    suggestedClass = "Bard";
                    suggestedReason = "Your party needs Arcane spells in its repertoire and it needs more social characters.  " +
                    "This is the perfect time to roll a Bard!  What is a better party leader than a Bard?  They also bring 6th level Arcane spells to the party.";
                }
            }
            
            else if (totalStats.skills < currentNeeds.skills){
                suggestedClass = "Bard";
                suggestedReason = "Your party needs Arcane spells in its repertoire and it needs more skillful characters.  " +
                "You're going to want to pick up a trait that includes Disable Device as a class skill for you and a Bard would be set to bring 6th level Arcane Magic and all the skills any scout/trapfinder would need!";
            }
            
            else{
                if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Wizard";
                    suggestedReason = "Your party needs Arcane spells in its repertoire and it needs more characters who can survive will saves.  " +
                    "Wizards are the pinnacle of Arcane spell casting bringing everything you'll ever need in that department!  Plus your only good save is the will saves the party needs.";
                }
                else if (totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Magus";
                    suggestedReason = "Your party needs Arcane spells in its repertoire and it needs more characters who can survive fortitude saves.  " +
                    "Magus brings very high damage output with Spell Combat and Spellstrike in the frontlines and you carry a spellbook like a Wizard, meaning you can learn every possible spell to your class as long as you get a shot at writing it down in your book!  So even outside of combat you still have plenty of uses solving problems with your magic.  Plus Magus is one of the few Arcane casters that even get a good Fortitude save.";
                }
                else if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Bard";
                    suggestedReason = "Your party needs Arcane spells in its repertoire and it needs more characters who can survive reflex saves.  " +
                    "If you don't count the alchemical classes, Bard is the only Arcane caster that has a good Reflex save.  It is a good thing they also bring so much to a party as well with their songs, scouting, social, and knowledge skills!";
                }
                else{
                    suggestedClass = "Wizard";
                    suggestedReason = "Your party needs Arcane spells in its repertoire.  " +
                    "Wizards are the pinnacle of Arcane spell casting bringing everything you'll ever need in that department!";
                }
            }
        }
        
        else if (totalStats.skills == 0){ //Skills Zero
            if (currentNeeds.skills >= 2){
                suggestedClass = "Rogue";
                suggestedReason = "Your party desperately needs a scout and trapfinder.  " +
                "Rogues are the iconic and much needed skill monkey of almost every fantasy game!  Keep your skills high, if you are being hit by traps you cannot see or disarm with your rolls, pick up Rogue talents that improve your skills.  Your sneak attacks are FANTASTIC damage but almost everyone can produce damage, most likely you'll be the only one who can scout ahead, do stealth missions, and handle traps for the party.  So I repeat myself, keep your skills high!";
            }
            
            else if (totalStats.frontline < currentNeeds.frontline){
                suggestedClass = "Slayer";
                suggestedReason = "Your party needs a skill monkey and your frontline needs work.  " +
                "Firstly, pick up a trait that gives you Disable Device.  A Slayer brings a d10 and medium armor to work in the frontline and Slayers are half Rogues.  Keep your skills high and pick the Rogue Talents that keep them sharp enough that you can stealth, scout, track, and be the party's trapfinder.";
            }
            
            else if (totalStats.divine < currentNeeds.divine){
                suggestedClass = "Inquisitor";
                suggestedReason = "Your party needs a skill monkey and your Divine casting needs work.  " +
                "Firstly, pick up a trait that gives you Disable Device.  Inquisitor has many skills and can fill the roles of scouting, stealthing, and even tracking along with a 6th level Divine spell list.";
            }
            
            else if (totalStats.arcane < currentNeeds.arcane){
                suggestedClass = "Alchemist";
                suggestedReason = "Your party needs a skill monkey and your Arcane casting needs work.  " +
                "Alchemist brings many skills and is able to find and disable traps with his Perception and Disable Device class skills.  They also 'cast' up to 6th level extract formulae and throw bombs that deal AoE damage that can be altered with Discoveries to deal AoE debuffs and other effects which can stand in for some moments that need a spell casted.  So they can certainly help the Arcane department of this party!";
            }
            
            else if (totalStats.face < currentNeeds.face){
                suggestedClass = "Investigator";
                suggestedReason = "Your party needs a skill monkey and your social skills needs work.  " +
                "It is CRIMINAL how overlooked Investigator is when it comes to being the party face but they fill the role even better than a Bard!  Pick up Expanded Inspiration and Underworld Inspiration, you can drop as many inspirations as you want in any social skill without costing a use of inspiration, pick up Amazing Inspiration at level 7 and you are rolling d20+CHA+d8+INT+half your level!  No one will be able to out talk you and you're just as great a skill monkey!";
            }
            
            else{
                if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Rogue";
                    suggestedReason = "Your party needs a skill monkey and you need more characters who can survive reflex saves.  " +
                    "As a Rogue, you'll obviously get the reflex saves needed.  Rogues are the iconic and much needed skill monkey of almost every fantasy game!  Keep your skills high, if you are being hit by traps you cannot see or disarm with your rolls, pick up Rogue talents that improve your skills.  Your sneak attacks are FANTASTIC damage but almost everyone can produce damage, most likely you'll be the only one who can scout ahead, do stealth missions, and handle traps for the party.  So I repeat myself, keep your skills high!";
                }
                else if (totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Alchemist";
                    suggestedReason = "Your party needs a skill monkey and you need more characters who can survive fortitude saves.  " +
                    "As an Alchemist, you'll get the fortitude saves needed.  Alchemist brings many skills and is able to find and disable traps with his Perception and Disable Device class skills.  They also 'cast' up to 6th level extract formulae and throw bombs that deal AoE damage that can be altered with Discoveries to deal AoE debuffs and other effects which can stand in for some moments that need a spell casted.  So they can certainly help the Arcane department of this party!";
                }
                else if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Investigator";
                    suggestedReason = "Your party needs a skill monkey and you need more characters who can survive will saves.  " +
                    "As an Investigator, you'll get the will saves needed and you grant your party to a library of skills and knowledges that are increased by an additional 1d6+INT+half your level any time you use Inspiration!";
                }
                else{
                    suggestedClass = "Rogue";
                    suggestedReason = "Your party needs a skill monkey.  " +
                    "Rogues are the iconic and much needed skill monkey of almost every fantasy game!  Keep your skills high, if you are being hit by traps you cannot see or disarm with your rolls, pick up Rogue talents that improve your skills.  Your sneak attacks are FANTASTIC damage but almost everyone can produce damage, most likely you'll be the only one who can scout ahead, do stealth missions, and handle traps for the party.  So I repeat myself, keep your skills high!";
                }
            }
        }
        
        else if (totalStats.face == 0){ //Face Zero
            if (currentNeeds.face >= 2){
                suggestedClass = "Bard";
                suggestedReason = "Your desperately needs a party face." +
                "This is the perfect time to roll a Bard!  What is a better party leader than a Bard?";
            }
            
            else if (totalStats.frontline < currentNeeds.frontline){
                suggestedClass = "Vigilante";
                suggestedReason = "Your party needs a party face and the party's frontline can use some help.  " +
                    "Only do this if your GM will allow Vigilantes, otherwise play Cavalier.  " +
                    "Pick up the Heavy Training and Armor Skin Vigilante Talents and if you want to wield a Two-Hander pick up the Vigilante Talent called Shield of Blades to add AC when ever you Power Attack!  " +
                    "If you want to have a Shield and a One-Hander for the extra AC, drop Shield of Blades and instead get the Vigilante Talents called Lethal Grace and Shield of Fury and you will turn that shield into a lethal weapon!  " +
                    "Now with all that frontline jazz out of the way, Vigilante's get all the much needed party face social skills (Bluff, Intimidate, Diplomacy, Sense Motive) but also gain Social Talents that can improve their ability to represent the party!  Pick up Social Grace for your social skills that you wish to never roll low on again!";
            }
            
            else if (totalStats.divine < currentNeeds.divine){
                suggestedClass = "Oracle with Bones Mystery";
                suggestedReason = "Your party needs a party face and the party's divine casting department can use some help.  " +
                "Oracle brings 9th level spontaneous divine casting and with the Bones Mystery you also get all the social skills you will ever need to be the face!  ";
            }
            
            else if (totalStats.arcane < currentNeeds.arcane){
                suggestedClass = "Bard";
                suggestedReason = "Your party needs a party face and the party's arcane casting department can use some help.  " +
                "This is the perfect time to roll a Bard!  Bards have up to 6th level spontaneous arcane casting and what is a better party leader than a Bard?";
            }
            
            else if (totalStats.skills < currentNeeds.skills){
                suggestedClass = "Investigator";
                suggestedReason = "Your party needs a party face and the party's skill monkey department can use some help.  " +
                "As an Investigator you grant your party to a library of skills and knowledges that are increased by an additional 1d6+INT+half your level any time you use Inspiration and this includes all the social skills!";
            }
            
            else{
                if (totalStats.reflex < currentNeeds.reflex){
                    suggestedClass = "Bard";
                    suggestedReason = "Your party needs a party face and the party is lacking on reflex saves.  " +
                    "This is the perfect time to roll a Bard because they have reflex as a good save!  What is a better party leader than a Bard?";
                }
                else if (totalStats.fortitude < currentNeeds.fortitude){
                    suggestedClass = "Cleric with Trade Subdomain (Travel) and Revolution Subdomain (Liberation)"; //bluff trait
                    suggestedReason = "Your party needs a party face and the party is lacking on fortitude saves.  " +
                    "First off pick up a trait that allows you to have Bluff as a class skill, then make Trade and Revolutoin your domains.  Trade allows you to add half your level to Bluff, Diplomacy, and Sense Motive skills.  Revolutoin allows you to roll twice and take the higher result on Diplomacy and Intimidation skill rolls.  So outside of bringing the fortitude saves and divine clericy goodness, you also serve as a solid face!";
                }
                else if (totalStats.will < currentNeeds.will){
                    suggestedClass = "Bard";
                    suggestedReason = "Your party needs a party face and the party is lacking on will saves.  " +
                    "This is the perfect time to roll a Bard because they have will as a good save!  What is a better party leader than a Bard?";
                }
                else {
                    suggestedClass = "Bard";
                    suggestedReason = "Your party needs a party face.  " +
                    "This is the perfect time to roll a Bard!  What is a better party leader than a Bard?";
                }
            }
        }
        
        //Check for weak spots in the party that can use reinforcement 
        else if (totalStats.frontline < currentNeeds.frontline){
            //Defender Check
            
            if ( _.includes(shortClasses, 'Fighter') || _.includes(shortClasses, 'Paladin') || _.includes(shortClasses, 'Cavalier')){
                //Strikers
                suggestedReason = "Your party contains a Defender who has both heavy armor and a d10 Hit Die but can use a side-tank Striker to help them.  \n\n";
                //Arcane
                if (totalStats.arcane < currentNeeds.arcane){
                    suggestedClass = "Magus";
                    suggestedReason += "You can use some more arcane magic.  \n\nMagus brings very high damage output with Spell Combat and Spellstrike in the frontlines and you carry a spellbook like a Wizard, meaning you can learn every possible spell to your class as long as you get a shot at writing it down in your book!  So even outside of combat you still have plenty of uses solving problems with your magic.";
                }
                //Divine
                else if (totalStats.divine < currentNeeds.divine){
                    suggestedReason += "You can use some more divine magic.  \n\n";
                    if (_.includes(shortClasses, 'Cleric')){
                        suggestedClass = "Hunter";
                        suggestedReason += "Since your party already has a Cleric, a Hunter would be a good fit bringing the Druid spellbook.   The Hunter's medium armor " +
                        "and animal focus makes them decent frontliners... BUT then you include their pet fighting " +
                        "by their side and that makes them GREAT frontliners!";
                    }
                    else{
                        suggestedClass = "Warpriest";
                        suggestedReason += "Since your party is lacking a Cleric within its divine casting abilities, a Warpriest would be a good fit bringing the Cleric spellbook.  The Warpriest clad in heavy armor " +
                        "blessed with extra enhancement bonus to it from Sacred Armor, add in a Blessing " +
                        "that summons a battle companion and you have a fantastic frontliner!";
                    }
                }
                //Skills
                else if (totalStats.skills < currentNeeds.skills){
                    suggestedReason += "Your party needs access to more skills.  \n\n";
                    if(_.includes(shortClasses, 'Alchemist')){
                        suggestedClass = "Ranger";//Ranger
                        suggestedReason += "As a Ranger, you can do very well in the frontline, bring a tanky pet out there with you and since the party already has someone with Disable Device, you can help the party with Perception, Stealth, Tracking, and several Knowledge checks!  All in one package!";
                    }
                    else{
                        suggestedClass = "Alchemist as Beastmorph archetype";//Beastmorph
                        suggestedReason += "The Beastmorph archetype takes the Alchemist Mutagens to the next level!  When you create a Mutagen, not only do you get the usual selected buff but you also recieve animalistic features of an animal-like humanoid.  Which means you gain the natural attacks, movement, senses, and natural armor of that creature.  On top of that you can also choose an additional ability (or two depending on the level) from the polymorphing spell described for your current level of Mutagen.  So what does that mean?  You can build a beefcake melee Alchemist who eventually will be able to pounce (amazing!), fly (also amazing!) trip, poison, grab, and have darkvision!  Tons of options to play around with and all of them can be changed from Mutagen to Mutagen, you're never stuck!  You also bring in the Disable Device that your party needs to deal with traps.";
                    }
                }
                //Face
                else if (totalStats.face < currentNeeds.face){
                    suggestedReason += "Your party need more options in social situations.  \n\n";
                    if (_.includes(shortClasses, 'Summoner')){
                        suggestedClass = "Gunslinger";//Gunslinger
                        suggestedReason += "You have a Summoner in your party that can grab every knowledge and even linguistics, so you need to pick up the rest of the slack in social skills.  " +
                        "Take a trait to make Diplomacy a class skill and Gunslinger can make for a solid choice because " +
                        "while guns make you think 'far ranged' but most guns to be effective have to be within 20-30ft. " +
                        "With a d10 Hit Die, medium armor, deeds to grant bonus AC, Nimble granting dodge bonus, you're a better frontline than most give credit for!  " +
                        "Pick up the Gun Tank archetype and you can run around in heavy armor while holding a tower shield to make you even more of a beefy frontliner.  " +
                        "Charisma gains you more grit for Deeds, on another plus side is that it can make you a great social face for the party with your Bluff, Handle Animal, Intimidate, Knowledge Local, and Diplomacy if you make one of your starting traits give it to you as a class skill.";
                    }
                    else {
                        suggestedClass = "Summoner";//Summoner 
                        suggestedReason += "A Summoner may seem like the last option " +
                        "you'd select as they wear light armor and suffer from arcane failure in anything heavier, but " +
                        "their Eidolon and Summon Monster Spell Like Abilities allow for them to create a tremendously effective " +
                        "frontline!  Build your Eidolon to have as many attacks of opprotunity as possible and give him long reach " +
                        "with solid tripping ability and nothing will be able to safely move around your summons without being tripped and severely punished!  " +
                        "Pick up some traits that will give you Bluff and Diplomacy and you're set to be a makeshift party face since your casting stat is Charisma after all.  You also get every Knowledge check and Linguistics, learn about the cultures, current events, and the languages of the area before you start talking and you should be fine as the party leader.";
                    }
                }
            }
            else{
                //Defenders
                suggestedReason = "Your party can use a Defender in the frontline.  At least someone with a d10 Hit Die and Heavy Armor.  ";
                if (totalStats.divine < currentNeeds.divine){
                    suggestedClass = "Paladin";//Pally
                    suggestedReason += "A Paladin becomes immune to many status effects, " +
                    "add their Charisma on top of their saves to make them more resistant to the effects they aren't immune to, " +
                    "while wearing heavy armor and sporting a d10 hit die!  They're a great frontliner!  " +
                    "Paladins brings only a small repertoire of spells but they also carry channel energy and lay on hands for many healing options!  They're also the kings of removing status effects!  Your party is a lacking in the Divine Casting area so it will really help out there as well.";
                }
                else if (totalStats.face < currentNeeds.face){
                    suggestedClass = "Cavalier";//Cav
                    suggestedReason += "Rushing to the frontline on your steed, full of fortitude, forcing enemies to fight you through challenges, " +
                    "buffing, and granting teamwork feats to your allies, Cavalier makes a great frontliner!" +
                    "With your Bluff, Diplomacy, Intimidate, Handle Animal, and Sense Motive skills, you can carry yourself elegantly as your party's leader!";
                }
                else{
                    suggestedClass = "Fighter";//Fighter
                    suggestedReason += "Fighter's access to heavy armor training, which gives their DEX bonus while wearing heavy armor, and polearms for long ranged attacks of opportunity makes them a great choice!  Pick up the Combat Reflexes feat to get multiple attacks of opportunities with your reach weapons to punish anyone trying to get by you and attempt to attack your party's soft and squishy mages!";
                }
            }
        }
        
        else if (totalStats.skills < currentNeeds.skills){
            //Disable Device Check
            if (_.includes(shortClasses, 'Rogue') || _.includes(shortClasses, 'Alchemist') || _.includes(shortClasses, 'Investigator')){
                suggestedReason = "Your party has someone who can disable devices but not someone who can track effectively.  \n\n";
                if (_.includes(shortClasses, 'Druid')){
                    //Ranger
                    suggestedClass = "Slayer";
                    suggestedReason += "Since your party already contains a Druid, you don't need the spell lists Rangers and Hunters bring.  Slayers have 6+INT Mod skill ranks per level and all the important class skills you're going to need for stealthing, ambushing, tracking, and surviving out in the wilderness.   Not to mention you are a full BAB, sneak attacking, d10 HD having, medium armor wearing KILLER!  What's not to like?!";
                }
                else{
                    //Hunter
                    suggestedClass = "Hunter";
                    suggestedReason += "Since your team lacks the spell list of a Druid, it doesn't hurt to be both a 6+INT Mod skill ranks per level, important stealthing, ambushing, tracking, surviving in the wilderness class skill having, Druid spell list casting, Animal Companion possessing Hunter!  You're going to fill out more for your party than just the wilderness skills and they will be grateful for it!";
                }
            }
            else{
                suggestedReason = "Your party needs someone who can disable devices at an effecient level if you want to survive passed traps.  \n\n";
                //Rogue
                suggestedClass = "Rogue";
                suggestedReason += "Rogues are the iconic and much needed skill monkey of almost every fantasy game!  Keep your skills high, if you are being hit by traps you cannot see or disarm with your rolls, pick up Rogue talents that improve your skills.  Your sneak attacks are FANTASTIC damage but almost everyone can produce damage, most likely you'll be the only one who can scout ahead, do stealth missions, and handle traps for the party.  So I repeat myself, keep your skills high!";
            }
        }
        
        else if (totalStats.face < currentNeeds.face){
            suggestedReason = "Your current party has a somewhat weak face, it can use some assistance from a larger range of social or knowledge skills.  \n\n";
            //Has all face skills
            /*if (_.includes(shortClasses, 'Bard') || _.includes(shortClasses, 'Cavalier') || _.includes(shortClasses, 'Inquisitor') || _.includes(shortClasses, 'Rogue') || _.includes(shortClasses, 'Investigator') || _.includes(shortClasses, 'Skald') || _.includes(shortClasses, 'Swashbuckler') || _.includes(shortClasses, 'Vigilante')){
                
            }
            //Librarians that aren't counted yet.
            else*/ if (_.includes(shortClasses, 'Summoner') || _.includes(shortClasses, 'Wizard') || _.includes(shortClasses, 'Arcanist')){
                suggestedClass = "Inquisitor";//Inquisitor?
                suggestedReason += "You have an arcane caster supplying all the knowledge checks that you need, so a Bard would overlap too much with them because Bards provide arcane casting and knowledges.  Inquisitor on the other hand brings all the social skills you need to be a party face and a wide array of class abilities that your party can benefit from, with a divine spell list to boot!";
            }
            //Bluffers -- Maybe remove Sorc
            else if (_.includes(shortClasses, 'Gunslinger') || _.includes(shortClasses, 'Slayer')){
                suggestedClass = "Cleric";//Diplomas?
                suggestedReason += "You have someone on your party that can handle being the bad cop on your party, but you can still use someone who can be the good cop and provide more knowledge skills.  Cleric definitely fits the bill bringing both of those and one of the most powerful set of spells in Pathfinder along side Channel Energy to heal and help the party in many more ways than just being a face!";
            }
            //Diplomacy
            else if (_.includes(shortClasses, 'Cleric') || _.includes(shortClasses, 'Oracle') || _.includes(shortClasses, 'Paladin') || _.includes(shortClasses, 'Warpriest')){
                //Use Bluffers?
                suggestedClass = "Gunsinger";
                suggestedReason += "You have someone in your party that is sweet and polite for social situations, but you don't have someone who is willing to tell it like it is or even lie to get the party through tough negotiations.  The rough and tumble Gunslinger isn't afraid to bring those social skills to the table along with high Charisma for his Grit and great ranged damage from his guns!";
            }
            else{
                suggestedClass = "Bard";
                suggestedReason += "Your party is far too weak in knowledge checks AND social skills.  They need a dedicated face and a Bard makes one of the best party leaders in the game!";
            }
            
        }
        
        else if (totalStats.arcane < currentNeeds.arcane){
            if (_.includes(shortClasses, 'Wizard')){
                //Witch
                suggestedClass = "Witch";
                suggestedReason = "Your party needs more arcane magic and you already have a Wizard.  The best move is to bring the Witch spell list and hexes to expand further beyond what a Wizard provides to the party.  Unless you feel like collaborating with the Wizard as another Wizard and select different schools of magic to specialize in...";
            }
            else{
                //Wizard
                suggestedClass = "Wizard";
                suggestedReason = "Your party needs more arcane magic and nothing beats the Wizard in arcane!  Nothing!!";
            }
            
        }
        
        else if (totalStats.divine < currentNeeds.divine){
            if (_.includes(shortClasses, 'Cleric')){
                //Druid
                suggestedClass = "Druid";
                suggestedReason = "Your party needs more divine magic and you already have a Cleric.  The best move is to bring the Druid spell list to expand further beyond what a Cleric provides to the party.";
            }
            else{
                //Cleric
                suggestedClass = "Cleric";
                suggestedReason = "Your party needs more divine magic and nothing beats the Cleric in divine!  Nothing!!";
            }
        }
        
       // else if (party.length){
            
        //}
        
        else{
            //DONE
            suggestedClass = "ANYTHING!!!";
            suggestedReason = "Seriously, outside of maybe some real niche encounters... there shouldn't be anything this party cannot handle!  Be whatever you want to be, heck go for a silly build this time around for some laughs, your party's lives should not be at risk in this set up... Or ask your GM what niche encounters the party might encounter and specifically pick something to counter that (Ranger with Favored Enemy of an Enemy the GM tells you there will be a lot of, or Paladin if the GM tells you there is a lot of Undead, etc.).";
        }
        
        $scope.suggest.classSuggest = suggestedClass;
        $scope.suggest.reasonSuggest = suggestedReason;
    }
    
    $scope.createPartyMember = createPartyMember;
});