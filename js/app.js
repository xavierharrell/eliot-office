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
            autoplay: false
    });
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

