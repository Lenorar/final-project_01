
// $(document).ready( function(){
// 	console.log('it works');

// 	// when I click on the .main-nav slide the .site-nav ul down 
// 	// when I click on the icon again, slide the nav up 

// 	$('.main-nav').on('click', function(){
// 		$('.main-nav ul').slideToggle();

// 	});

// 	//this is when the browser scales	

// 	$(window).on('resize', function(){
// 		console.log('resizing');
// 		if ($(window).width()>640) {
// 			$('.site-nav ul').show();
// 			$('.nav-icon').hide();
// 		}else {
// 			$('.site-nav ul').hide();
// 			$('.nav-icon').show();		
// 		}
// 	});

// });



$(document).ready( function(){
	console.log('it works');
});


// this is for the nav toggle


$('.main-nav').menu({
  firstFontSize: '16px',
  secondFontSize: '16px',
  height: 40,
  itemWidth: 20,
  itemMargin: 1,
  theme: 'blue', // or dark
  menuIconColor: '#000',
  menuMaskColor: '#000',
  mFirstBgColor: '#000',
  mFirstFontColor: '#fff',
  mSecondBgColor: '#222',
  mSecondFontColor: '#fff',
  closeIconColor: '#fff',
  animate: false,
  speed: 200
});


