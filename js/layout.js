$(function() { 

	$(".page.main .linkbox .simg").click(function(e) { 
		e.preventDefault();
		var p2Offset = $(".page.p02").offset().top;

		$("html, body").animate({"scrollTop" : p2Offset});

	})

	var pshparell = { }
	pshparell.winHT = $(window).height();
	pshparell.distance = pshparell.winHT;
	pshparell.count = 0;
	pshparell.mnoving = false;	
	pshparell.length = $(document).find(".page").length;
		
		$(".page").each(function (index, element) { 
			
			$(element).on("mousewheel DOMMouseScroll", function (e) {
				//console.log($(this).html());
				
				console.log("e ====", e);
				console.log("originalEvent ====", e.originalEvent);
				
				e.preventDefault();
	
				var El = e.originalEvent;			
	
				var delta = 0;
	
				if (El.wheelDelta) {
					delta = event.wheelDelta / 120;
					//if (window.opera) delta = -delta;
				} else if (El.detail) delta = -El.detail / 3;		
	
				//console.log("dd?????? ==", El.detail);
				//console.log("event.wheelDelta ==", event.wheelDelta);
	
				
				//console.log("next", $(window).scrollTop());
				//console.log("moveTop", moveTop);
				
				
				if(pshparell.mnoving == false) { 				
					pshparell.mnoving = true;
					
					// 마우스휠을 위에서 아래로			
					if (delta  < 0 ) {
						if($(window).scrollTop() == pshparell.distance * (pshparell.length-1)) {
							moveTop = $(this).offset().top;				   
						} else { 
							moveTop = $(this).next().offset().top;
							pshparell.count++;
						}
					// 마우스휠을 아래에서 위로
					} else {
						if($(window).scrollTop() < pshparell.distance) { 
						   moveTop = $(this).offset().top;
						} else { 
							moveTop = $(this).prev().offset().top;
							pshparell.count--;
						}	
					}

					console.log(pshparell.count);

					$("header nav .navlist > li").removeClass("on");
					$("header nav .navlist > li").eq(pshparell.count).addClass("on");
	
					
					
					$("html,body").stop().animate({
						scrollTop: moveTop + 'px'
					}, {
						duration: 800, complete: function () {
							pshparell.mnoving = false;	
						}
					});	
				}
				
			});
		});
		
		
		
		//var itemleng = $('.box').length;
		var scfunc = function(event) { 
			event.preventDefault();
			var _this = $(this);
			var _thispt = $(this).parent();
			var _target = $(event).target;
			var _index = _thispt.index(_target);
	
			pshparell.count = _index;		
			var scrollHT = 	pshparell.distance * pshparell.count;
			console.log("scrollHT", scrollHT);

			$("header nav .navlist > li").removeClass("on");
			$("header nav .navlist > li").eq(pshparell.count).addClass("on");			
			
			$("html,body").stop().animate({scrollTop : scrollHT + 'px'}, 500);	
		};
		
		var parrelTrigger = $('header nav .navlist > li > a');
		parrelTrigger.on("click", scfunc);
	
		
	})	