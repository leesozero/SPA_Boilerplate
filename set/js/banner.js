
$(function(){
    
    const mySwiper = {
            dir : 'next',
            imginfo : [
            {
                "imgSrc" : "img/1.png",
                "imgLink" : "http://www.naver.com",                
            },{
                "imgSrc" : "img/2.gif",
                "imgLink" : "http://daum.net",                
            },{
                "imgSrc" : "img/3.gif",
                "imgLink" : "http://www.google.com",                
            }
            ],

            bannerEa : () => imginfo.length,                        
            innerDiv : function(){
               
                
                var slideitem = '';
                var slideBtn ='';
                for(const i in this.imginfo){


                    slideitem += `<div class='slide-item' data-key='${i}'>
                                    <a href='${this.imginfo[i].imgLink}'>
                                        <img src='${this.imginfo[i].imgSrc}'>
                                    </a>
                                </div>`;
                    slideBtn += `<button data-key='${i}'>${ parseInt(i) + 1 }</button>`;
                }

                $('.slide-wrapper').html(slideitem);
                $('.indicate').html(slideBtn);
            },

            activeStatu : function(num){
                
                $('.indicate button').eq(num).addClass('act').siblings().removeClass('act');
                $('.slide-item').eq(num).addClass('act').siblings().removeClass('act');
            }
                
  }        
    
    var s_count = 0;
   
    mySwiper.innerDiv();
    mySwiper.activeStatu(s_count);

    var autoBanner = setInterval(function(){
        if($(this).hasClass('next')) {
            if(s_count < 2) s_count++; else s_count=0;
            
        }else{
            if(s_count > 0) s_count--; else s_count=2;            
        }
       
        mySwiper.activeStatu(s_count);
 
  }, 3000)

  $('.btns button').click(function(){
    clearInterval(autoBanner);
    if($(this).hasClass('.next')) {
        if(s_count < 2) s_count++; else s_count=0;
    }else{
        if(s_count > 0) s_count--; else s_count=2;
    }
    mySwiper.activeStatu(s_count);
    
  })

  $('.indicate').on('click','button',function(){
    clearInterval(autoBanner);
    s_count = $(this).index();
    mySwiper.activeStatu(s_count);

    var autoBanner = setInterval(function(){
        if($(this).hasClass('next')) {
            if(s_count < 2) s_count++; else s_count=0;
            
        }else{
            if(s_count > 0) s_count--; else s_count=2;            
        }
       
        mySwiper.activeStatu(s_count);
 
    }, 3000)

  })  

})




