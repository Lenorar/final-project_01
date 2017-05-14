
//click link to fade in images for series2 
//click link to fade images out for series2

//toggle fade in and out of photography series: France
$(document).ready( function () {
	var $france = $('#france');
	$france.hide();
	$('a.france-button').click(function () {
		if($france.is(':hidden')) {
			$france.fadeIn('slow');

            //change the button to be a different color to indicate active
			$('a.france-button').css("background-color", "green");
            //is this working
			console.log('working!');

            //when one gallery is revealed hide all other galleries
            $('.gallery').hide();

            
		} else {
			$france.fadeOut('slow');
		} 
		return false; 
	} );
}); 




$(document).ready( function () {
	var $delaware = $('#delaware');
	$delaware.hide();
	$('a.delaware-button').click(function () {
		if($delaware.is(':hidden')) {
			$delaware.fadeIn('slow');
			$('a.delaware-button').css("background-color", "green");
			console.log('working!');
		} else {
			$delaware.fadeOut('slow');
		} 
		return false; 
	} );
}); 



// // retryy

// $(document).ready( function() {
//     $('#france .button').on('click', function( event ){

//         event.preventDefault();

//         if ( $('#france .button').hasClass('active') ){
//             //hide
//             $('#france').slideUp(500, function () {
//                 $('#france .button').removeClass('active');
//             });
//         } else {
//             //highlight the france button item (use css () or addClass)
//             $('.button').removeClass('.active')

//         }





 
// $(document).ready( function() {
//     $('#primary-nav .international').on('click', function( event ){

//         event.preventDefault();

//         if ( $('#primary-nav .international').hasClass('active') ){
//             //slideup
//             $('#slide-down').slideUp(500, function () {
//                 $('#primary-nav .international').removeClass('active');
//             });


//         } else {
//             // Highlight the .international nav item (use css() or addClass() )
//             $('#primary-nav li').removeClass('active');
//             $('#primary-nav .international').addClass('active');

//             // Hide the other sections 
//             $('.drop').hide();

//             // Show the .international section of articles 
//             $('#slide-down .international').show();
        
//             // Slide down the #side-down
//             $('#slide-down').slideDown();
//         }
//     });



// // //new code


// //  $('a.france-button').click( function(event){
// //         event.stopPropagation();
// //         $('#france').fadeToggle();
// //     });

// //     $(document).click( function(){
// //         $('#france').hide();
// //     });


// //  $('a.delaware-button').click( function(event){
// //         event.stopPropagation();
// //         $('#delaware').fadeToggle();
// //     });

// //     $(document).click( function(){
// //         $('#delaware').hide();
// //     });



