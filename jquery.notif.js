(function ($) {
	$.fn.notif = function (options) {
		
		var settings = {
			
			html : '<div class="notification animated wobble ">\
								<div class="left">\
									{{#icon}}\
									<div class="icon">{{{icon}}}</div>\
									{{/icon}}\
								</div>\
								<div class="right">\
									<span class="close"></span>\
									<h2>{{title}}</h2>\
									<p>{{{content}}}</p>\
								</div>\
							</div>',

			icon : '&#8505;', // default icon
			timeout :false
		}

		switch (options.cls) {
			case 'success': settings.icon = "&#128276;";
			break;

			case 'error': settings.icon = "&#10060;";
			break;
		}



		var options = $.extend( settings, options);

		return this.each(function(){
			var $this = $(this);
			var $notifs = $('> .notifications', this);

			var $notif = $(Mustache.render(options.html, options));
			var close = $notif.find("span.close");

			if($notifs.length == 0){
				$notifs = $('<div class="notifications animated flipInX"/>');
				$this.append($notifs);
			}

			$notifs.append($notif);


			$notif.click(function(event){
				event.preventDefault();
				//a rajouter le delay selon la version de la librarie javascript
				
				/*$(this).addClass('bounceOut').slideUp(1000, function() {
					if($notif.siblings().length == 0){
						$notifs.remove();
					}
					$(this).remove();
				});*/
			});

			var timeId;
			if(options.timeout){
				timeId = setTimeout( 
					function(){
						close.trigger('click');
					}, 
					options.timeout
				)
			}

			$notif.hover(
				function(){
					//console.log('clear timeout');
					clearTimeout(timeId);

				}, 
				function(){
					//console.log('set timeout');
					if(options.timeout){
						timeId = setTimeout( 
							function(){
								close.trigger('click');
							}, 
							options.timeout
						)
					}
				}
			);

			close.click(function(event){
				$notif.addClass('bounceOut').slideUp(1000, function() {
					if($notif.siblings().length == 0){
						$notifs.remove();
					}
					$(this).remove();
				});
			});


			if(options.link){
				$notif.find(".left, h2, p").click(function(event){
					document.location.href = options.link;
				});
			}

			



		})

	}


	$(".add").click(function(event){
		event.preventDefault();
		/*
		$('body').notif({
			title:'Casting #012842', 
			content:'Vous <b>avez</b> été accepté pour le casting <a href="http://www.google.com">#012842</a>', 
			img:"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn1/s480x480/488120_482715655127675_569111275_n.jpg"
		});
		*/
		
		$('body').notif({
			title:'Alert', 
			content:"You're hired !!",
			timeout:4000		
		});
		

		$('body').notif({
			title:'success', 
			content:"You're hired !!", 
			cls:"success",
			link:"http://google.com",
			timeout: 6000
		});

		$('body').notif({
			title:'Alert', 
			content:"You're hired !!"	
		});
	})

	

})(jQuery);