function displayCardInfo(card){
    
}

function displayMiddleInfo(){
    $('#middle_card').popover({
        trigger: 'hover',
        content: 'Click this card to reveal all common cards and to choose a rare card',
        placement: 'bottom'
      })
}

function hideMiddlePopover(){
    $('.popover').hide()
}