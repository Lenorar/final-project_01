
$(document).ready(function(){
	console.log('it works');
  $(".film-container").addClass("active");
  
});

$(".film-button").click(function (e) {
     e.preventDefault();
     console.log('inside click')
     $(".film-container").removeClass("active");
     var contentid = $(this).attr("href");
     $(contentid).addClass("active");
    
 });


