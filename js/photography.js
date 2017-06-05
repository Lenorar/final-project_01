$(document).ready(function(){
    console.log('working');
    $('.gallery').hide();
    $('#lames').show();
    $('.button').css('color', 'white');    
    $('#lames-button').css('color', '#4893FF');
   
    $('.button').click(function () {
        var $this = $(this);
        var element = $this.attr('href');
        $('.button').css('color', 'white');    

        if ($('.gallery').is(':hidden')) {
            $('.gallery').hide();
            $(element).fadeIn('slow');
            $(this).css('color','#4893FF');    
        }
    });
});
