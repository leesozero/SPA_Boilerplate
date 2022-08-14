$(document).ready(function(){
    $('a.scrollPage').click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop : $($(this).attr('href')).offset().top
            },400,function(){

        })
    })
})

