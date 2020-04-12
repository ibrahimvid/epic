$(document).ready(function(){

    // DIMMER
    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    // SIDEBAR
    $('.ui.sidebar')
        .sidebar('attach events', '.toc.item');

    // MODAL
    $('#card1').click(function (){
        $('.ui.modal.modal1').modal('toggle');
    });
    $('#card2').click(function (){
        $('.ui.modal.modal2').modal('toggle');
    });
    $('#card3').click(function (){
        $('.ui.modal.modal3').modal('toggle');
    });
    $('#card4').click(function (){
        $('.ui.modal.modal4').modal('toggle');
    });
    $('#card5').click(function (){
        $('.ui.modal.modal5').modal('toggle');
    });
    $('#card6').click(function (){
        $('.ui.modal.modal6').modal('toggle');
    });
});