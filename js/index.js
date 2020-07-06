console.log("Loading successful!");
var $container = $('body'),
    $scrollTo = $('#careerTitle');

$("#Arrow").on("click", function(){
    console.log("you clicked on arrow");

    $container.scrollTop(
        $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
);
});

$("#landingPage").on("scroll", function(){
    console.log("you scrolled the page");
});


ScrollReveal().reveal('#Facebook' , {delay: 200});
ScrollReveal().reveal('#BMW' , {delay: 200});
ScrollReveal().reveal('#Energy' , {delay: 200});
ScrollReveal().reveal('.skill1' , {delay: 100});
ScrollReveal().reveal('.skill2' , {delay: 200});
ScrollReveal().reveal('.skill3' , {delay: 100});
ScrollReveal().reveal('.skill4' , {delay: 200});
