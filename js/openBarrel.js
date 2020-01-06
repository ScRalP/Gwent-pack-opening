// Get the container element
var barrelContainer = $("#barrel-container")

// Get all buttons with class="btn-barrel" inside the container
var btns = barrelContainer.find(".btn-barrel")

//Get the card container
var cardContainer = $('#card-container')

var $commonCards = []

// Loop through the barrels and add the active class to the current barrel
btns.each(function(){
    $(this).click(function(){
        var current = $(".btn-barrel.active")
        if(current[0] != null){
            current[0].className = current[0].className.replace(" active", "")    
        }

        this.className += " active"
    })
})

//Handle click on open
$('#btn-open').click(function(){
    let selectedFaction =  $('.btn-barrel.active').attr('id')

    if(selectedFaction != null){
        clearCards()
        openBarrel(selectedFaction)
    } else {
        swal('You must choose a barrel first')
    }
})

//Handle click on clear
$('#btn-clear').click(function(){
    clearCards()
})

var usedCommonCards    
var usedRareCards      
var usedEpicCards      
var usedLegendaryCards 

// Generate the cards and display them
function openBarrel(faction){

    //Nettoie les tableaux avant de les replir
    usedCommonCards    = []
    usedRareCards      = []
    usedEpicCards      = []
    usedLegendaryCards = []

    switch(faction){
        case 'monster':
            for(i = 0; i<monsterCards.length; i++){
                if(monsterCards[i].rarity == "common"   ) usedCommonCards.push(monsterCards[i])
                if(monsterCards[i].rarity == "rare"     ) usedRareCards.push(monsterCards[i])
                if(monsterCards[i].rarity == "epic"     ) usedEpicCards.push(monsterCards[i])
                if(monsterCards[i].rarity == "legendary") usedLegendaryCards.push(monsterCards[i])
            }
            break
        case "nilfgaard":
            for(i = 0; i<nilfgaardCards.length; i++){
                if(nilfgaardCards[i].rarity == "common"   ) usedCommonCards.push(nilfgaardCards[i])
                if(nilfgaardCards[i].rarity == "rare"     ) usedRareCards.push(nilfgaardCards[i])
                if(nilfgaardCards[i].rarity == "epic"     ) usedEpicCards.push(nilfgaardCards[i])
                if(nilfgaardCards[i].rarity == "legendary") usedLegendaryCards.push(nilfgaardCards[i])
            }
            break
        case "skellige":
            for(i = 0; i<skelligeCards.length; i++){
                if(skelligeCards[i].rarity == "common"   ) usedCommonCards.push(skelligeCards[i])
                if(skelligeCards[i].rarity == "rare"     ) usedRareCards.push(skelligeCards[i])
                if(skelligeCards[i].rarity == "epic"     ) usedEpicCards.push(skelligeCards[i])
                if(skelligeCards[i].rarity == "legendary") usedLegendaryCards.push(skelligeCards[i])
            }
            break
        case "scoiatael":
            for(i = 0; i<scoiataelCards.length; i++){
                if(scoiataelCards[i].rarity == "common"   ) usedCommonCards.push(scoiataelCards[i])
                if(scoiataelCards[i].rarity == "rare"     ) usedRareCards.push(scoiataelCards[i])
                if(scoiataelCards[i].rarity == "epic"     ) usedEpicCards.push(scoiataelCards[i])
                if(scoiataelCards[i].rarity == "legendary") usedLegendaryCards.push(scoiataelCards[i])
            }
            break
        case "northern":
            for(i = 0; i<northernCards.length; i++){
                if(northernCards[i].rarity == "common"   ) usedCommonCards.push(northernCards[i])
                if(northernCards[i].rarity == "rare"     ) usedRareCards.push(northernCards[i])
                if(northernCards[i].rarity == "epic"     ) usedEpicCards.push(northernCards[i])
                if(northernCards[i].rarity == "legendary") usedLegendaryCards.push(northernCards[i])
            }
            break
        case "neutral":
            for(i = 0; i<allCards.length; i++){
                if(allCards[i].rarity == "common"   ) usedCommonCards.push(allCards[i])
                if(allCards[i].rarity == "rare"     ) usedRareCards.push(allCards[i])
                if(allCards[i].rarity == "epic"     ) usedEpicCards.push(allCards[i])
                if(allCards[i].rarity == "legendary") usedLegendaryCards.push(allCards[i])
            }
            break
    }
/*
    // Visualiser le contenu des tableaux de cartes apres les avoir actualisé
    console.log("--------------------------------")
    console.log("apres : ")
    console.log(JSON.parse(JSON.stringify(usedCommonCards)))
    console.log(JSON.parse(JSON.stringify(usedRareCards)))
    console.log(JSON.parse(JSON.stringify(usedEpicCards)))
    console.log(JSON.parse(JSON.stringify(usedLegendaryCards)))
    console.log("--------------------------------")
*/
    //Generate cards randomly
    commonDisplayCards = generateRandomCards(false)

    //Generate 3 cards of the same rarity for the user to pick one
    rareDisplayCards = generateRandomCards(true)

    //Afficher les cartes
    displayCards(commonDisplayCards, rareDisplayCards)
}

function displayCards(commons, rares) {

    //Créer une balise img pour toute les cartes communes
    secondRow = $('<div class="row col-12 my-2"></div>')
    for(i=0; i<commons.length; i++){
        newDiv = $('<div class="col"></div>')
        //Faction can change on each card
        faction = commons[i].path.split("/")[1]
        backPath = "img/" + faction + "/" + faction.charAt(0).toUpperCase() + faction.slice(1) + "Back.jpg"
        newCard = $('<img class="w-100 img-fluid img-card card-'+ commons[i].rarity +'" id="card_common_'+i+'" src="'+backPath+'" alt="'+commons[i].path+'">')
        
        $commonCards.push(newCard)

        //Add middle locked card
        if( i == 2) {
            middleDiv = $('<div class="col"></div>')
            middleCard = $('<img class="w-100 img-fluid img-card card-'+ rares[0].rarity +'" id="middle_card" src="img/neutral/NeutralBack.jpg" alt="Locked card">')
        
            middleCard.click(function(){
                revealAll($commonCards)
                displayRares(commons, rares)
                middleDiv.remove()
                hideMiddlePopover()
            })

            middleCard.hover(function(){
                displayMiddleInfo()
            })

            middleDiv.append(middleCard)
            secondRow.append(middleDiv)
        }
        
        //Add click event listener to the created card
        newCard.click(function(){
            reveal(this)
        })

        newDiv.append(newCard)
        secondRow.append(newDiv)
    }
    cardContainer.append(secondRow)
}

function displayRares(commons, rares){
    //Créer une balise img pour toute les cartes rares
    firstRow = $('<div class="row col-12 my-2"></div>')
    for(i=0; i<rares.length; i++){
        newDiv = $('<div class="col"></div>')
        newCard = $('<img class="w-100 img-fluid img-card card-'+ rares[i].rarity +'" id="card_rare_'+i+'" src="'+rares[i].path+'" alt="'+rares[i].path+'">')
        
        //Handle click to choose the card
        newCard.click(function(){
            displayFinal(commons, this)
        })

        newDiv.append(newCard)
        firstRow.append(newDiv)
    }

    message = $('<h3 class="col-12">Choose a card to keep</h3>')

    cardContainer.prepend(firstRow)
    cardContainer.prepend(message)
}

function displayFinal(commons, rare){

    //Clear cards to display all again
    clearCards()

    row = $('<div class="row col-12 my-2"></div>')
    for(i = 0; i<commons.length; i++){
        newDiv = $('<div class="col"></div>')

        //Create all cards
        newCard = $('<img class="w-100 img-fluid img-card card-'+ commons[i].rarity +'" id="card_common_'+i+'" src="'+commons[i].path+'" alt="'+commons[i].path+'">')

        if(i == 2){
            middleDiv = $('<div class="col"></div>')
            middleCard = rare

            middleDiv.append(middleCard)
            row.append(middleDiv)
        }

        newDiv.append(newCard)
        row.append(newDiv)
    }
    cardContainer.append(row)
}

function revealAll(cards){
    console.log(cards)
    for(i = 0; i<cards.length; i++){
        reveal( cards[i].get(0) )
    }
}

function reveal(card){
    num = card.getAttribute("id").split('_')[2]
    categ = card.getAttribute("id").split('_')[1]

    if( categ == "rare" ){
        card.setAttribute( "src", rareDisplayCards[num].path )
    } else {
        card.setAttribute( "src", commonDisplayCards[num].path )
    }
}

//Renvoie un entier aléatoire entre 0 et la valeure passé en paramètre
function getRandomInt(max) {
    min = 0
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}

function clearCards(){
    cardContainer.empty()
}