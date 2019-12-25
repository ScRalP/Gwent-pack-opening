// Get the container element
var btnContainer = $("#barrel-container")

// Get all buttons with class="btn-barrel" inside the container
var btns = btnContainer.find(".btn-barrel")

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
        openBarrel(selectedFaction)
    } else {
        swal('You must choose a barrel first')
    }
})

// Generate the cards and display them
function openBarrel(faction){
    let usedBronzeCards = []
    let usedGoldCards   = []

    switch(faction){
        case 'monster':
            usedBronzeCards = [].concat(monsterCardsBronze)
            usedGoldCards   = [].concat(monsterCardsGold  )
            break
        case "nilfgaard":
            usedBronzeCards = [].concat(nilfgaardCardsBronze)
            usedGoldCards   = [].concat(nilfgaardCardsGold  )
            break
        case "skellige":
            usedBronzeCards = [].concat(skelligeCardsBronze)
            usedGoldCards   = [].concat(skelligeCardsGold  )
            break
        case "scoia'tael":
            usedBronzeCards = [].concat(scoiataelCardsBronze)
            usedGoldCards   = [].concat(scoiataelCardsGold  )
            break
        case "northern":
            usedBronzeCards = [].concat(nothernCardsBronze)
            usedGoldCards   = [].concat(nothernCardsGold  )
            break
        default:
            usedBronzeCards = [].concat(bronzeCards)
            usedGoldCards   = [].concat(goldCards  )
            break
    }

    console.log(usedBronzeCards)
    console.log(usedGoldCards)
}