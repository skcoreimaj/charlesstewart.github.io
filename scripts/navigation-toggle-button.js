$('.side-nav .nav-toggle').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('nav-open');
    console.log("should have run");
});





