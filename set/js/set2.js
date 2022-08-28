  
        var _classNm = 'next';
        var autoTimer = setInterval( function(){
            _setTimefun($('.timer').html(), _classNm)
            },1000)
                
            $('button').click(function(){
                
                    clearInterval(autoTimer);
                    _classNm = $(this).attr('class');
                    _setTimefun($('.timer').html(), _classNm);  
                    
                    autoTimer = setInterval( function(){
                    _setTimefun($('.timer').html(), _classNm)
                    },1000)
                
            })
      
        function _setTimefun(count, dir){ 
            if( dir == 'next' ) {
                if(count < 4) count++; else count = 0;    
            }
            else { 
                if(count > 0) count--; else count = 4;
            }

            $('.timer').html(count);           
        }        
