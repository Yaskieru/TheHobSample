var owl = $('#myowlcarousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots: false

});
var owlse = $('#myowlcarousel3');
owlse.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots: false

});
var owl4 = $('#myowlcarousel4');
owl4.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots: false

});
var owl5 = $('#myowlcarousel5');
owl5.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots: false

});
var owls = $('#myowlcarousel2');
owls.owlCarousel({
  mouseDrag: false,
  touchDrag: false,
  items:1,
  loop:true,
  margin:10,
  autoplay:false,
  dots:false
})
$('.btnnext').on('click',function(){
  owls.trigger('prev.owl.carousel');
})
$('.btnprev').on('click',function(){
  owls.trigger('next.owl.carousel');
})
