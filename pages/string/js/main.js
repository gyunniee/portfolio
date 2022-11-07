

$('document').ready(function(){


    $('.menu li').on('click',function(){
        $('.sub-menu').stop().slideUp(200);
        $(this).find('.sub-menu').stop().slideToggle();

        $('.vertical').fadeIn();
        $(this).find('.vertical').fadeToggle()
    });


    $('.menu-button').click(function(){

        $('.fullscreen-menu').fadeToggle();
        $('.plus-button').toggleClass('active');
    });




    $('main>div').on('mousewheel',function(e,d){

        if(d>0){
            //마우스 휠을 올렸을 때 일어나는 일

            let prv = $(this).prev().offset().top;

            $('html,body').stop().animate({
                'scrollTop' : prv
            })

        }else if(d<0){
            //마우스 휠을 내렸을 때 일어나는 일
            let nxt = $(this).next().offset().top;

            $('html,body').stop().animate({
                'scrollTop' : nxt
            });

        }


    })





}); //시작구문