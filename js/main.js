// $(document).ready(function(){
// 	console.log('it works');
//   $(".film-container").addClass("active");
  
// });

// $(".film-button").click(function (e) {
//      e.preventDefault();
//      console.log('inside click')
//      $(".film-container").removeClass("active");
//      var contentid = $(this).attr("href");
//      $(contentid).addClass("active");
    
//  });





$(document).ready(function(){
	console.log('it works');
	$(".film-container").show();

  
});

// $(".film-buttons").click(function(event) {
// 	event.preventDefault();
// 	$(".film-container").hide()

// });


$(".film-buttons .no").click(function (event) {
     event.preventDefault();
     $(".film-container").hide();

    $( ".film-container").filter( ".notes" );
    $(".notes").show();
});


$(".film-buttons .nar").click(function (event) {
     event.preventDefault();
    $(".film-container").hide();

	    $( ".film-container" ).filter( ".narratives");
	    $(".narratives").show();
	    $(".row").append(".film-container");
	 // 	$('.narratives').slick({
	 // 		  	centerMode: false,
  // 				centerPadding: '600px',
 	// 		    slidesToShow: 1,
		// });
});















// $(document).ready(function(){
// 	console.log('it works');
//   $(".film-container").addClass("active");
  
// });

// // $(".film-button").click(function (e) {
// //      e.preventDefault();
// //      console.log('inside click')
// //      $(".film-container").removeClass("active");
// //      var contentid = $(this).attr("href");
// //      $(contentid).addClass("active");
    
// //  });



// $('.row').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1
// });



// var filtered = false;

// $('.film-button .nar').on('click', function(){
//   if (filtered === false) {
//     $('.row').slick('slickFilter','.narratives');
//     $(this).text('Unfilter Slides');
//     filtered = true;
//   } else {
//     $('.filtering').slick('slickUnfilter');
//     $(this).text('Filter Slides');
//     filtered = false;
//   }
// });



// // $(".film-button").click(function (e) {
// //      e.preventDefault();
// //      console.log('inside click')
// //      $(".film-container").removeClass("active");
// //      var contentid = $(this).attr("href");
// //      $(contentid).addClass("active");
    
// //  });

// // $(".nar").click(function (e) {
// //      e.preventDefault();
// //      console.log('blahhhhh')
// //      $(".film-container").removeClass("active");
// //      var contentid = $(this).attr("href");
// //      $(contentid).addClass("active");

// //      $(contentid).addClass("inline");
// //      console.log('whahahahah');

    
// //  });



 

  


		


  



  


		

