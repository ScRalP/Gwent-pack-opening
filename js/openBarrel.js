

function generateBarrel(faction){
    let usedBronzeCards = []
    let usedGoldCards   = []

    switch(faction){
        case "monster":
            usedBronzeCards.concat(monsterCardsBronze)
            usedGoldCards  .concat(monsterCardsGold  )
            break
        case "nilfgaard":
            usedBronzeCards.concat(monsterCardsBronze)
            usedGoldCards  .concat(monsterCardsGold  )
            break
        case "skellige":
            usedBronzeCards.concat(monsterCardsBronze)
            usedGoldCards  .concat(monsterCardsGold  )
            break
        case "scoia'tael":
            usedBronzeCards.concat(monsterCardsBronze)
            usedGoldCards  .concat(monsterCardsGold  )
            break
        case "northern realm":
            usedBronzeCards.concat(monsterCardsBronze)
            usedGoldCards  .concat(monsterCardsGold  )
            break
        case "monster":
            usedBronzeCards.concat(monsterCardsBronze)
            usedGoldCards  .concat(monsterCardsGold  )
            break
        default:
            usedBronzeCards.concat(bronzeCards)
            usedGoldCards  .concat(goldCards  )
            break
    }
}