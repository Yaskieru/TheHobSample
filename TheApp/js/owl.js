$(document).ready(function() {
/*VIEWS*/
  var owl = $(".carousel");
  owl.owlCarousel({
    autoPlay: 3000,
    navigation : false,
    pagination: false,
    singleItem : true,
    transitionStyle : "fade"
  });
$("#owl-demoses").owlCarousel({
  navigation : true, // Show next and prev buttons
  slideSpeed : 500,
  paginationSpeed : 400,
  singleItem:true,
  pagination:false,
  transitionStyle : "backSlide",
  navigation: false,
  mouseDrag: false,
  touchDrag: false
  // "singleItem:true" is a shortcut for:
  // items : 1,
  // itemsDesktop : false,
  // itemsDesktopSmall : false,
  // itemsTablet: false,
  // itemsMobile : false
});
var owl = $("#owl-demoses");
owl.owlCarousel();
// Custom Navigation Events
$(".next").click(function(){
owl.trigger('owl.next');
})
$(".prev").click(function(){
owl.trigger('owl.prev');
})
$("#owl-demo2").owlCarousel({

  autoPlay: 3000, //Set AutoPlay to 3 seconds

  singleItem:true,
  pagination: false,
  transitionStyle : "fade",
  mouseDrag: false,
  touchDrag: false
});
$("#owl-demo3").owlCarousel({

  autoPlay: 3000, //Set AutoPlay to 3 seconds

  singleItem:true,
  pagination: false,
  transitionStyle : "fade",
  mouseDrag: false,
  touchDrag: false
});
$("#owl-demo4").owlCarousel({

  autoPlay: 3000, //Set AutoPlay to 3 seconds

  singleItem:true,
  pagination: false,
  transitionStyle : "fade",
  mouseDrag: false,
  touchDrag: false
});
$("#owl-demo5").owlCarousel({

  autoPlay: 3000, //Set AutoPlay to 3 seconds

  singleItem:true,
  pagination: false,
  transitionStyle : "fade",
  mouseDrag: false,
  touchDrag: false
});
/*VIEWS END*/
});
