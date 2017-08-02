$(document).ready(function(){

    $('.header-toggle').on('click', function(){
        $('.drop-down-buttons').slideToggle('slow');
    });

    $('.drop-down-button').on('click', function(){
        $('.drop-down-buttons').slideToggle('slow');
    });

});