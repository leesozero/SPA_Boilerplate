$(document).ready(function(){
    $('a.scrollPage').on('click',function(e){
        e.preventDefault(); //책갈피기능 막기
        // $('#gnb .navia').removeClass('on') // 클릭하자마자 활성화
        // $(this).addClass('on') // 클릭하자마자 활성화
        $('body, html').animate({
            scrollTop : $($(this).attr('href')).offset().top
            },400, 'linear', () => {
                // if( $(this).hasClass('navia')){ //navia 클래스 가지고 있다면
                //     $('#gnb .navia').removeClass('on') //모든 네비 스타일 빼라
                //     $(this).addClass('on') //지금 클릭한 이 부분만 스타일 넣어줘
                // }
                $('body').attr('data-p', $($(this).attr('href')).offset().top)
                
        })
    }) ////  a.scrollPage click


    $('.section').each(function(){ //each 메서드는 다중처리 프로그래밍을 짧게 해주는 효율적인 메서드
        $(this).attr('data-pos' , $(this).offset().top)
        //각자 .section들은 data-pos속성을 만들고 각자의 body상단에서 떨어지는 상단위치를 지정해라
    })

    $(window).on('scroll' , function(){
        var scrollPos = $(window).scrollTop(); //반드시 scroll 이벤트 안에 선언해둬서 스크롤 할때마다 새로운 값으로 갱신

        $('.section').each(function(){ //섹션 마다 스크롤위치가 나의 상단위치랑 비교
            var thisPos = $(this).offset().top; //나의 상단위치
            
            if( scrollPos > thisPos - 100 ){ //스크롤 위치가 나의 상단위치보다 커지면
                $('#gnb .navia').removeClass('on')
                $('a[href="#'+$(this).attr('id')+'"]').addClass('on')
            }

        })
        
        if( scrollPos > 0 ){
            $('#hd').addClass('on')
        }else{
            $('#hd').removeClass('on')
        }
        
    })


    $('.culture_item button').on( 'click', function(){
        clearInterval(myroll); //자동롤링 멈춰라
        num = $(this).parent().index()
        myrollingfun (num)
        
    })
    // 1번

    
    function myrollingfun(x){
        $('.culture_item').removeClass('active');
        $('.culture_item button').eq(x).parent().addClass('active');
    }

    var num = 0;
    
    // 2번
    
    var myroll = setInterval(function(){

        num++;
        num %= $('.culture_item button').length;
        myrollingfun(num);

    }, 3000)
    

})

