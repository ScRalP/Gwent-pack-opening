//Taux de drop des cartes en %
//Taux de drop pour les cartes banales
const commonRareDrop      = 20
const commonEpicDrop      = 4
const commonLegendaryDrop = 1

//Taux de drop pour les cartes du milieu
const rareEpicDrop      = 20
const rareLegendaryDrop = 5

/**
 * Return a table with the cards picked randomly
 * @param boolean, represent if it's to generate the rare cards or not 
 */
function generateRandomCards(isRare){
    let cards = []

    if(isRare){ //Pour le cas ou on genere les cartes du milieu
        usedCards = usedRareCards

        //On tire au sort la couleur des cartes du milieu
        drop = getRandomInt(100)
        if( drop <= rareLegendaryDrop ){
            usedCards = usedLegendaryCards
        } else if( drop <= rareEpicDrop ){
            usedCards = usedEpicCards
        }

        console.log(drop)
        console.log(usedCards)

        //Il nous faut 3 cartes
        for(i = 0; i<3; i++){
            rand = getRandomInt(usedCards.lenght)

            cards.push( usedCards[rand] )
            usedCards.splice(rand, 1) //On retire la carte du tableau pour empecher de tomber plusieurs fois dessus
        }

    } else{ //Pour le cas ou on genère les 4 cartes communes
        //console.log(usedCommonCards)
    }

    return cards
}