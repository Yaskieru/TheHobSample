var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbar-default';
    navbarTransparent = 'navbar-transparent';
    navbarFixedTop = 'navbar-fixed-top';

    fadeInDown = 'fadeInDown';

$document.scroll(function(){
    if($document.scrollTop() >= 100) {
    	$element.addClass(navbarDefault);

    	$element.removeClass(navbarTransparent);



    } else {

        $element.addClass(navbarTransparent);
        $element.removeClass(navbarDefault);



    }
});
