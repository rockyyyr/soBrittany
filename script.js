$(document).ready(function(){

    $('.header-toggle').on('click', function(){
        spinHeaderToggle();
        $('.drop-down-buttons').slideToggle('slow');
    });

    $('.drop-down-button').on('click', function(){
        spinHeaderToggle();
        $('.drop-down-buttons').slideToggle('slow');
    });

});

function spinHeaderToggle(){
    var element = $('.header-toggle');

    if(element.hasClass('active-drop-down')){
        element.removeClass('active-drop-down');
        element.addClass('deactive-drop-down')
    } else {
        element.addClass('active-drop-down');
        element.removeClass('deactive-drop-down');
    }
}