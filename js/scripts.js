include('js/jquery.easing.js');
include('js/jquery.backgroundpos.min.js');
include('js/superfish.js');
include('js/switcher.js');
include("js/bgStretch.js");
include("js/sImg.js");
include('js/forms.js');
include('js/googleMap.js');
include('js/jquery.mousewheel.js');
include('js/jquery.color.js');
include('js/jquery.cycle.all.min.js');
include("js/preloadIMG.js");
include('js/uScroll.js');
//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript"></script>'); 
}
//--------global-------------
var isSplash = true;
var isFirst = true;

var spinner;
var mapSpinner;
var bgSpinner;

var MSIE = ($.browser.msie) && ($.browser.version <= 8)


function addAllListeners() {
	
	 $('.scroll')
		.uScroll({
			axis:'y'
			,lay:'outside'
			,duration:600
			,easing:'easeInOutSine'
			,step:100
			,mousewheel:true
		})
		
		$('.scroll-btns > a > img').hover(function(){
    		$(this).stop().animate({marginTop:"-27"}, 350, "easeOutExpo");						 
    	}, function(){
    		$(this).stop().animate({marginTop:"0"}, 350, "easeOutExpo");		 
    	})
		
	
}



//------DocReady-------------
$(document).ready(function(){ 
    if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
///////////////////////////////////////////////////////////////////

$("body").css({'min-height':'950px'});

///////////////////////////////////////////////////////////////////



     $('ul#menu').superfish({
          delay:       800,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
                       $(this).append("<div class='_area'></div><div class='_overPl'></div><div class='mTextOver'>"+conText+"</div>"); 
                       
  				})

  	 		}
        });
});
  
 //------WinLoad-------------  
$(window).load(function(){  
   
	var win=$(window)
   
   // Main Gallery
	setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'leftTop',
           autoplay:true,
          // navs:$('.pagin').navs({})
		   navs:$('.pagin').navs({autoPlay: 10000})
        })
        .sImg({
            sleep: 1000,
			spinner:$('<div class="spinner"></div>').css({opacity:0.6}).stop().hide(3000)
        });
        var img=0;
        var num=$('.pagin li').length-1;
        $('.prev').click(function(){
            img=img-1;
    		if (img<0) img=img+num+1;
    		$.when($('#bgStretch img')).then(function(){
    			$('.pagin li a').eq(img).click();
    		})
    		return false
    	});
    	$('.next').click(function(){
    		img=img+1;
    		if (img>num) img=img-num-1;
    		$.when($('#bgStretch img')).then(function(){
    			$('.pagin li a').eq(img).click();
    		})
            return false
    	});
    },0);
	
	
	 $('.next,.prev').hover(
        function(){
            if (!MSIE){
                $(this).children('span').css({opacity:'0',display:'block'}).stop().animate({opacity:'1'});  
            } else {
                $(this).children('span').stop().show();
            }  
        },
        function(){
            if (!MSIE){
                $(this).children('span').stop().animate({opacity:'0'},function(){$(this).css({display:'none'});});  
            }else {
                 $(this).children('span').stop().hide();
            }
        }
    );
	
	
	
	// End Main Gallery
   
   
    //*************** SPLASH ******************//
	
   
	function showSplash(){
	
		$('header').stop().delay(300).animate({top:'671px'}, 500, 'easeOutSine'); 

	}
	function hideSplash(){
		
		$('header').stop().delay(100).animate({top:'182px'}, 500, 'easeOutSine'); 
		
	}
	function hideSplashQ(){
		
		$('header').css({top:'182px'}); 

	}
   
    //*************** END SPLASH ******************//
   
   //services list -------------------------------------------------
    $('.ser_list .pic_over').css({opacity:0});
	$('.ser_list .pic_comm').css({opacity:0, top:'60px'});
	$('.ser_list > li > a').hover(function(){
		$(this).parent().find('.pic_over').animate({opacity:1}, 550, 'easeOutSine');
		$(this).parent().find('.pic_comm').animate({opacity:1, top:'40px'}, 550, 'easeOutSine');		
	}, function(){;
		$(this).parent().find('.pic_over').animate({opacity:0}, 550, 'easeOutSine');
		$(this).parent().find('.pic_comm').animate({opacity:0, top:'60px'}, 550, 'easeOutSine'); 
	})   
    //end services list -------------------------------------------------
   
   
   
   
   
   //list_1-------------------------------------------------
	$('.list_1 > li > a').hover(function(){
    $(this).stop().animate({color:"#fff", marginLeft:5}, 300, "easeOutCubic")
	}, function(){;
    $(this).stop().animate({color:"#9a9a9a", marginLeft:0}, 300, "easeOutCubic");
	})   
    //end list_1-------------------------------------------------
	
	//list_2-------------------------------------------------
	$('.list_2 > li > a').hover(function(){
    $(this).stop().animate({color:"#fff"}, 300, "easeOutCubic")
	}, function(){;
    $(this).stop().animate({color:"#9a9a9a"}, 300, "easeOutCubic");
	})   
    //end list_2-------------------------------------------------
	//list_3-------------------------------------------------
	$('.list_3 > li > a').hover(function(){
    $(this).stop().animate({color:"#9a9a9a"}, 300, "easeOutCubic")
	}, function(){;
    $(this).stop().animate({color:"#fff"}, 300, "easeOutCubic");
	})   
    //end list_3-------------------------------------------------
	
	
	   
	var menuItems = $('#menu >li'); 
	var currentIm = 0;
	var lastIm = 0;

///////////////////////////////////////////////
    var navItems = $('.menu > ul >li');

  
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		
		preFu:function(_){
			_.li.css({left:"-1700px",'visibility':'hidden'});
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({'visibility':'visible', left:'1700px'}).stop(true).delay(400).animate({left:"0px"},800,'easeOutCubic');
               
				
				//console.log("_.n " + _.n);
				
			if (_.n == 0){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			if (_.pren == undefined){
                _.pren = -1;
                hideSplashQ();
            }
					
            }
			if(_.prev){
			     _.prev.stop(true).animate({left:'-1700px'},600,'easeInOutCubic',function(){_.prev.css({'visibility':'hidden'});} );
             }
		}
	})
    
    
	$('.submenu_1 a b').css({width:'0px'})
	$('.submenu_2 a span').css({width:'0px'})
    $('.submenu_1 a').hover(function()
    {
        //$(this).find('b').css({width:'0px', left:'-23px'}).stop().animate({width:'203px'}, 300,'easeOutCubic');	
		//$(this).find('span').css({width:'0px', left:'-23px'}).stop().animate({width:'203px'}, 300,'easeOutCubic');			
		 
	}, function(){
        //$(this).find('b').stop().animate({width:'0px', left:'180px'}, 300,'easeOutCubic');
		//$(this).find('span').stop().animate({width:'0px', left:'180px'}, 300,'easeOutCubic');
		
    })
	
	nav.navs({
			useHash:true,
			defHash:'#!/splash',
             hoverIn:function(li){
                $(".mText", li).stop(true).animate({top:"60px"}, 600, 'easeOutCubic');
                $(".mTextOver", li).stop(true).delay(50).animate({top:"32px"}, 500, 'easeOutCubic');
                $("._overPl", li).stop(true).animate({bottom:"0px"}, 500, 'easeOutCubic');
				

                   // if(($.browser.msie) && ($.browser.version <= 8)){}else{}
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
                        $(".mTextOver", li).stop(true).delay(20).animate({top:"-100px"}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({bottom:"100px"}, 400, 'easeOutCubic');
						
                    } 
                } 
		})

		.navs(function(n){			
			$('#content').tabs(n);
		})
        
//////////////////////////////////////////

   	var h_cont=605;
	function centrRepos() {
		var h=$(window).height();
		if (h>(h_cont+385)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=371;
			h_new=h_cont+385;
		}
		
            if(m_top > 155){
		          $('.center').stop().animate({paddingTop:m_top}, 800, 'easeOutExpo');
          }else{
            
            $('.center').stop().animate({paddingTop:"155px"}, 800, 'easeOutExpo');
          }
        
	}
	centrRepos();
	

	//follow-icons-------------	 
	$('.follow-icon a').hover(function(){
		$(this).find('.img_icon').stop().animate({paddingTop:'7px'})					 
	}, function(){
		$(this).find('.img_icon').stop().animate({paddingTop:'0px'})						 
	})
	//end follow-icons-------------
	

    ///////////Window resize///////
    
    function windowW() {
 return (($(window).width()>=parseInt($('body').css('minWidth')))?$(window).width():parseInt($('body').css('minWidth')));
}
    
	$(window).resize(function(){
        centrRepos();
         
        }
    );
	
	
	 addAllListeners();

    } //window function
) //window load