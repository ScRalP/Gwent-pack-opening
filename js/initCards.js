const neutralCards = [
    {"path":"Clear_Skies_4.png"       , "rarity":"common"},
    {"path":"Highwaymen_3x4.png"      , "rarity":"common"},
    {"path":"Moon_Dust_5.png"         , "rarity":"common"},
    {"path":"Peasant_Militia_2x4.png" , "rarity":"common"},
    {"path":"Rock_Barrage_6.png"      , "rarity":"rare"},
    {"path":"Spring_Equinox_4.png"    , "rarity":"rare"},   

    {"path":"Aguara_5x9.png"         , "rarity":"epic"},   
    {"path":"Avallac'h_6x8.png"      , "rarity":"epic"},   
    {"path":"Caretaker_3x12.png"     , "rarity":"epic"},   
    {"path":"Gascon_1x8.png"         , "rarity":"legendary"},   
    {"path":"Knickers_3x9.png"       , "rarity":"legendary"},   
    {"path":"Living_Armor_10x12.png" , "rarity":"legendary"},   
]


const monsterCards = [
    {"path":"Alp_3x5.png"              , "rarity":"common"},
    {"path":"Bruxa_2x4.png"            , "rarity":"common"},
    {"path":"Endrega_Warrior_4x4.png"  , "rarity":"common"},
    {"path":"Foglet_3x5.png"           , "rarity":"common"},
    {"path":"Kikimore_Warrior_3x4.png" , "rarity":"rare"},
    {"path":"Predatory_Dive_5.png"     , "rarity":"rare"},

    {"path":"Armored_Crab-Spider_6x8.png" , "rarity":"epic"},
    {"path":"Cave_Troll_7x9.png"          , "rarity":"epic"},
    {"path":"Frightener_Dormant_9.png"    , "rarity":"epic"},
    {"path":"Golyat_10x10.png"            , "rarity":"legendary"},
    {"path":"Katakan_6x9.png"             , "rarity":"legendary"},
    {"path":"Protofleder_4x10.png"        , "rarity":"legendary"},
]

const nilfgaardCards = [
    {"path":"Ard_Feainn_Light_Cavalry_2x4.png" , "rarity":"common"},
    {"path":"Assassination_6.png"              , "rarity":"common"},
    {"path":"Ducal_Guard_3x4.png"              , "rarity":"common"},
    {"path":"Recruit_4x4.png"                  , "rarity":"common"},
    {"path":"Slave_Hunter_1x5.png"             , "rarity":"rare"},
    {"path":"Tourney_Joust_4.png"              , "rarity":"rare"},

    {"path":"Artorius_Vigo_2x9.png"           , "rarity":"epic"},
    {"path":"Fifon_var_Gaernel_2x9.png"       , "rarity":"epic"},
    {"path":"Isbel_of_Hagge_5x8.png"          , "rarity":"epic"},
    {"path":"Milton_de_Peyrac-Peyran_5x8.png" , "rarity":"legendary"},
    {"path":"Roderick_of_Dun_Tynne_2x7.png"   , "rarity":"legendary"},
    {"path":"Traheaern_var_Vdyffir_4x6.png"   , "rarity":"legendary"},
]

const scoiataelCards = [
    {"path":"Brokilon_Sentinel_2x5.png" , "rarity":"common"},
    {"path":"Dryad_Fledgling_3x4.png"   , "rarity":"common"},
    {"path":"Dryad_Grovekeeper_3x4.png" , "rarity":"common"},
    {"path":"Forest_Whisperer_3x5.png"  , "rarity":"common"},
    {"path":"Miner_3x5.png"             , "rarity":"rare"},
    {"path":"Tempering_4.png"           , "rarity":"rare"},

    {"path":"Barnabas_Beckenbauer_6x10.png" , "rarity":"epic"},
    {"path":"Gabor_Zigrin_5x10.png"         , "rarity":"epic"},
    {"path":"Munro_Bruys_7x11.png"          , "rarity":"epic"},
    {"path":"Percival_Schuttenbach_4x7.png" , "rarity":"legendary"},
    {"path":"Water_of_Brokilon_9.png"       , "rarity":"legendary"},
    {"path":"Zoltan's_Company_6.png"        , "rarity":"legendary"},
]

const skelligeCards = [
    {"path":"Dimun_Corsair_3x5.png"      , "rarity":"common"},
    {"path":"Dimun_Pirate_5x5.png"       , "rarity":"common"},
    {"path":"Disgraced_Brawler_7x5.png"  , "rarity":"common"},
    {"path":"Drummond_Warmonger_4x5.png" , "rarity":"common"},
    {"path":"Svalblod_Butcher_4x4.png"   , "rarity":"rare"},
    {"path":"Tuirseach_Axeman_2x4.png"   , "rarity":"rare"},

    {"path":"Arnvald_4x6.png"               , "rarity":"epic"},
    {"path":"Champion_of_Svalblod_12x9.png" , "rarity":"epic"},
    {"path":"Corrupted_Flaminica_4x6.png"   , "rarity":"epic"},
    {"path":"Knut_the_Callous_6x9.png"      , "rarity":"legendary"},
    {"path":"Lippy_Gudmund_2x8.png"         , "rarity":"legendary"},
    {"path":"Sigvald_5x8.png"               , "rarity":"legendary"},
]

const northernCards = [
    {"path":"Cintrian_Artificer_3x5.png"   , "rarity":"common"},
    {"path":"Cintrian_Enchantress_3x4.png" , "rarity":"common"},
    {"path":"Cintrian_Envoy_3x5.png"       , "rarity":"common"},
    {"path":"Cintrian_Knight_2x4.png"      , "rarity":"common"},
    {"path":"Cintrian_Royal_Guard_4x5.png" , "rarity":"rare"},
    {"path":"Cintrian_Spellweaver_4x5.png" , "rarity":"rare"},
    
    {"path":"Anna_Strenger_4x6.png"  , "rarity":"epic"},
    {"path":"Black_Rayla_3x7.png"    , "rarity":"epic"},
    {"path":"Coodcoodak_4x6.png"     , "rarity":"epic"},
    {"path":"Knighthood_7.png"       , "rarity":"legendary"},
    {"path":"Prince_Anséis_4x10.png" , "rarity":"legendary"},
    {"path":"Reynard_Odo_5x10.png"   , "rarity":"legendary"},
]

    /*--------------------------*/
    /*  Adding path to strings  */
    /*--------------------------*/
//Neutral
for(i = 0; i<neutralCards.length; i++){
    if(neutralCards[i].rarity == "common" || neutralCards[i].rarity == "rare" ){
        neutralCards[i].path = "img/neutral/bronze/" + neutralCards[i].path
    } else{
        neutralCards[i].path = "img/neutral/gold/".concat(neutralCards[i].path)
    }
}

//Monster
for(i = 0; i<monsterCards.length; i++){
    if(monsterCards[i].rarity == "common" || monsterCards[i].rarity == "rare" ){
        monsterCards[i].path = "img/monster/bronze/" + monsterCards[i].path
    } else{
        monsterCards[i].path = "img/monster/gold/".concat(monsterCards[i].path)
    }
}

//Nilfgaard
for(i = 0; i<nilfgaardCards.length; i++){
    if(nilfgaardCards[i].rarity == "common" || nilfgaardCards[i].rarity == "rare" ){
        nilfgaardCards[i].path = "img/nilfgaard/bronze/" + nilfgaardCards[i].path
    } else{
        nilfgaardCards[i].path = "img/nilfgaard/gold/".concat(nilfgaardCards[i].path)
    }
}

//Scoia'Tael
for(i = 0; i<scoiataelCards.length; i++){
    if(scoiataelCards[i].rarity == "common" || scoiataelCards[i].rarity == "rare" ){
        scoiataelCards[i].path = "img/scoiatael/bronze/" + scoiataelCards[i].path
    } else{
        scoiataelCards[i].path = "img/scoiatael/gold/".concat(scoiataelCards[i].path)
    }
}

//Skellige
for(i = 0; i<skelligeCards.length; i++){
    if(skelligeCards[i].rarity == "common" || skelligeCards[i].rarity == "rare" ){
        skelligeCards[i].path = "img/skellige/bronze/" + skelligeCards[i].path
    } else{
        skelligeCards[i].path = "img/skellige/gold/".concat(skelligeCards[i].path)
    }
}

//Northern Realm
for(i = 0; i<northernCards.length; i++){
    if(northernCards[i].rarity == "common" || northernCards[i].rarity == "rare" ){
        northernCards[i].path = "img/northern/bronze/" + northernCards[i].path
    } else{
        northernCards[i].path = "img/northern/gold/".concat(northernCards[i].path)
    }
}

const allCards = [].concat(neutralCards, monsterCards, nilfgaardCards, scoiataelCards, skelligeCards, northernCards)