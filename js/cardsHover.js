function displayCardInfo(card){
    
}

function displayMiddleInfo(){
    $('#middle_card').popover({
        trigger: 'hover',
        content: 'Click this card to reveal all other cards and to choose a rarecard',
        placement: 'bottom'
      })
}

function hideMiddlePopover(){
    $('#middle_card').click()
}