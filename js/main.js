
$(document).ready(function(){
	console.log('it works');
  $(".film-container").addClass("active"); 
});

$(".film-button").click(function (event) {
     event.preventDefault();
     console.log('inside click')
     $(".film-container").removeClass("active");
     var contentid = $(this).attr("href");
     $(contentid).addClass("active");
 });


