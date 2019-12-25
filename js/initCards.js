const neutralCardsBronze   = ["Clear_Skies_4.png", "Highwaymen_3x4.png", "Moon_Dust_5.png", "Peasant_Militia_2x4.png", "Rock_Barrage_6.png", "Spring_Equinox_4.png"]
const monsterCardsBronze   = ["Alp_3x5.png", "Bruxa_2x4.png", "Endrega_Warrior_4x4.png", "Foglet_3x5.png", "Kikimore_Warrior_3x4.png", "Predatory_Dive_5.png"]
const nilfgaardCardsBronze = ["Ard_Feainn_Light_Cavalry_2x4.png", "Assassination_6.png", "Ducal_Guard_3x4.png", "Recruit_4x4.png", "Slave_Hunter_1x5.png", "Tourney_Joust_4.png"]
const scoiataelCardsBronze = ["Brokilon_Sentinel_2x5.png", "Dryad_Fledgling_3x4.png", "Dryad_Grovekeeper_3x4.png", "Forest_Whisperer_3x5.png", "Miner_3x5.png", "Tempering_4.png"]
const skelligeCardsBronze  = ["Dimun_Corsair_3x5.png", "Dimun_Pirate_5x5.png", "Disgraced_Brawler_7x5.png", "Drummond_Warmonger_4x5.png", "Svalblod_Butcher_4x4.png", "Tuirseach_Axeman_2x4.png"]
const northernCardsBronze   = ["Cintrian_Artificer_3x5.png", "Cintrian_Enchantress_3x4.png", "Cintrian_Envoy_3x5.png", "Cintrian_Knight_2x4.png", "Cintrian_Royal_Guard_4x5.png", "Cintrian_Spellweaver_4x5.png"]

const neutralCardsGold   = ["Aguara_5x9.png", "Avallac'h_6x8.png", "Caretaker_3x12.png", "Gascon_1x8.png", "Knickers_3x9.png", "Living_Armor_10x12.png"]
const monsterCardsGold   = ["Armored_Crab-Spider_6x8.png", "Cave_Troll_7x9.png", "Frightener_Dormant_9.png", "Golyat_10x10.png", "Katakan_6x9.png", "Protofleder_4x10.png"]
const nilfgaardCardsGold = ["Artorius_Vigo_2x9.png", "Fifon_var_Gaernel_2x9.png", "Isbel_of_Hagge_5x8.png", "Milton_de_Peyrac-Peyran_5x8.png", "Roderick_of_Dun_Tynne_2x7.png", "Traheaern_var_Vdyffir_4x6.png"]
const scoiataelCardsGold = ["Barnabas_Beckenbauer_6x10.png", "Gabor_Zigrin_5x10.png", "Munro_Bruys_7x11.png", "Percival_Schuttenbach_4x7.png", "Water_of_Brokilon_9.png", "Zoltan's_Company_6.png"]
const skelligeCardsGold  = ["Arnvald_4x6.png", "Champion_of_Svalblod_12x9.png", "Corrupted_Flaminica_4x6.png", "Knut_the_Callous_6x9.png", "Lippy_Gudmund_2x8.png", "Sigvald_5x8.png"]
const northernCardsGold   = ["Anna_Strenger_4x6.png", "Black_Rayla_3x7.png", "Coodcoodak_4x6.png", "Knighthood_7.png", "Prince_Anséis_4x10.png", "Reynard_Odo_5x10.png"]

    //Adding path to strings
//Neutral
for(i = 0; i<neutralCardsBronze.length; i++){ neutralCardsBronze[i] = "img/neutral/bronze/".concat(neutralCardsBronze[i]) }
for(i = 0; i<neutralCardsGold.length  ; i++){ neutralCardsGold[i]   = "img/neutral/gold/"  .concat(neutralCardsGold[i])   }

//Monster
for(i = 0; i<monsterCardsBronze.length; i++){ monsterCardsBronze[i] = "img/monster/bronze/".concat(monsterCardsBronze[i]) }
for(i = 0; i<monsterCardsGold.length  ; i++){ monsterCardsGold[i]   = "img/monster/gold/"  .concat(monsterCardsGold[i])   }

//Skellige
for(i = 0; i<skelligeCardsBronze.length; i++){ skelligeCardsBronze[i] = "img/skellige/bronze/".concat(skelligeCardsBronze[i]) }
for(i = 0; i<skelligeCardsGold.length  ; i++){ skelligeCardsGold[i]   = "img/skellige/gold/"  .concat(skelligeCardsGold[i])   }

//Nilfgaard
for(i = 0; i<nilfgaardCardsBronze.length; i++){ nilfgaardCardsBronze[i] = "img/nilfgaard/bronze/".concat(nilfgaardCardsBronze[i]) }
for(i = 0; i<nilfgaardCardsGold.length  ; i++){ nilfgaardCardsGold[i]   = "img/nilfgaard/gold/"  .concat(nilfgaardCardsGold[i])   }

//Northern
for(i = 0; i<northernCardsBronze.length; i++){ northernCardsBronze[i] = "img/northern/bronze/".concat(northernCardsBronze[i]) }
for(i = 0; i<northernCardsGold.length  ; i++){ northernCardsGold[i]   = "img/northern/gold/"  .concat(northernCardsGold[i])   }

//Scoia'tael
for(i = 0; i<scoiataelCardsBronze.length; i++){ scoiataelCardsBronze[i] = "img/scoiatael/bronze/".concat(scoiataelCardsBronze[i]) }
for(i = 0; i<scoiataelCardsGold.length  ; i++){ scoiataelCardsGold[i]   = "img/scoiatael/gold/"  .concat(scoiataelCardsGold[i])   }



const bronzeCards = [].concat( neutralCardsBronze, monsterCardsBronze, nilfgaardCardsBronze, scoiataelCardsBronze, skelligeCardsBronze, northernCardsBronze )
const goldCards = [].concat( neutralCardsGold, monsterCardsGold, nilfgaardCardsGold, scoiataelCardsGold, skelligeCardsGold, northernCardsGold )
