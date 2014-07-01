/* Scroller for the Testimonials */
$(function () {
    $('.testi-frame').slick({
            dots: true,
            autoplay: true
    });
        $('.video-frame').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            centerMode: true,
            centerPadding: '200px',
    });
});

    $('.scroll').smoothScroll({
        offset: -80,
        speed: 1000

    });


var $container = $('.grid').isotope({
    itemSelector: 'figure',
    layoutMode: 'masonry',
    masonry: {
        columnWidth: '.slide',
        gutter: 0,
    }
});

$('.filter-select').on('click', 'li a', function(){
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter: filterValue});
        return false;
});

/* Waypoint and Animation */
$('.animate').css('opacity', '0');
$('.animate').waypoint(function(){
    var animation = $(this).attr('data-animate'),
        $this = $(this);

        $this.addClass(animation);
        $this.css('opacity', '1');
        $this.addClass('animated');
    },{offset: '50%'});



$(document).foundation();

new WOW().init();

