// Get the container element
var barrelContainer = $("#barrel-container")

// Get all buttons with class="btn-barrel" inside the container
var btns = barrelContainer.find(".btn-barrel")

//Get the card container
var cardContainer = $('#card-container')

// Loop through the buttons and add the active class to the current/clicked button
btns.each(function(){
    $(this).click(function(){
        var current = $(".btn-barrel.active")
        if(current[0] != null){
            current[0].className = current[0].className.replace(" active", "")    
        }

        this.className += " active"
    })
})

//Gandle click on open
$('#btn-open').click(function(){
    let selectedFaction =  $('.btn-barrel.active').attr('id')

    if(selectedFaction != null){
        clearCards()
        openBarrel(selectedFaction)
    } else {
        swal('You must choose a barrel first')
    }
})

$('#btn-clear').click(function(){
    clearCards()
})

// Generate the cards and display them
function openBarrel(faction){
    let usedCommonCards = []
    let usedRareCards   = []

    switch(faction){
        case 'monster':
            usedCommonCards = [].concat(monsterCardsBronze)
            usedRareCards   = [].concat(monsterCardsGold  )
            break
        case "nilfgaard":
            usedCommonCards = [].concat(nilfgaardCardsBronze)
            usedRareCards   = [].concat(nilfgaardCardsGold  )
            break
        case "skellige":
            usedCommonCards = [].concat(skelligeCardsBronze)
            usedRareCards   = [].concat(skelligeCardsGold  )
            break
        case "scoiatael":
            usedCommonCards = [].concat(scoiataelCardsBronze)
            usedRareCards   = [].concat(scoiataelCardsGold  )
            break
        case "northern":
            usedCommonCards = [].concat(northernCardsBronze)
            usedRareCards   = [].concat(northernCardsGold  )
            break
        case "neutral":
            usedCommonCards = [].concat(bronzeCards)
            usedRareCards   = [].concat(goldCards  )
            break
    }

    commonDisplayCards = []
    //Pick random cards (4 bronze and 1 gold)
    while(commonDisplayCards.length < 4){
        let rand = getRandomInt(usedCommonCards.length)

        commonDisplayCards.push( usedCommonCards[rand] )
        usedCommonCards.splice(rand, 1)
    }
    //pick 3 gold card to make the user choose
    rareDisplayCards = []
    while(rareDisplayCards.length<3){
        let rand = getRandomInt(usedRareCards.length)

        rareDisplayCards.push( usedRareCards[rand] )
        usedRareCards.splice(rand, 1)
    }

    displayCards(commonDisplayCards, rareDisplayCards)
}

function displayCards(commons) {

    //Créer une balise img pour toute les cartes
    for(i=0; i<commons.length; i++){
        newDiv = $('<div class="col"></div>')
        newCard = $('<img class="img-fluid img-card card-common" id="card_'+i+'" src="'+commons[i]+'" alt="'+commons[i]+'">')
        newDiv.append(newCard)
        cardContainer.append(newDiv)
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