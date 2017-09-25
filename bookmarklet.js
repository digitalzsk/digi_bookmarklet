	(function() {
		$ = jQuery;
		$videos = $('iframe');
		$.fn.populate = function(index) {

			$('<textarea/>', {
				id: 'textarea_'+index,
				style: "border: 2px solid #2e68e5;margin-bottom:20px;display:block;height:100px;width:"+$(this).attr('width')+";",
				readonly: true,
				onclick: "console.log('klik na textarea');var box = jQuery('#textarea_'+"+index+"); box.select();document.execCommand('copy');" +
				"box.text('Text bol skopirovany do schranky.');box.css('font-size','30px');",
				text: '<div style="z-index:99999;position:fixed;top:0;right:5px'
				+';width:258px;margin:0;padding:0;box-sizing:content-box;font-family:san'
				+'s-serif;font-size:18px;line-height:20px;"><div style="overflow:hidden;'
				+'width:258px;height:20px;margin:0;padding:0;text-align:right;background'
				+'-color:#356;cursor:move;box-sizing:content-box;font-family:sans-serif;'
				+'font-size:18px;line-height:20px;"><span style="padding:0 5px;color:#ff'
				+'f;cursor:pointer;font-family:sans-serif;font-size:18px;line-height:20p'
				+'x;">×</span></div><div id="main" style="background-color:white;"><h1 s'
				+'tyle="font-size:20px;padding-top:10px;margin-bottom:10px;text-align:ce'
				+'nter;">IFRAME generator</h1><noscript>Requires JavaScript!</noscript><'
				+'select id="genSelect" style=" width: 50%; margin: 15px auto 15px auto;'
				+' display: block;"></select><button id="genButton" style=" display: blo'
				+'ck; margin: 1px auto 15px auto; width: 75%;">Generuj</button><textarea'
				+' id="genTextArea" readonly="" style="height: 302px; width: 258px; marg'
				+'in: 0px;">Vygenerovany iframe</textarea></div></div>',
				resize: 'none',
			}).prependTo($(this).parent());

			$('<p/>', {
				id: 'nadpis_textarea_'+index,
				style: 'margin:auto;text-align:center;display:block;font-size:30px;font-weight:bold;color:#2e68e5;',
				text: 'Kod pre zdielanie videa',
			}).prependTo($(this).parent());
		};
		
		$videos.each(function(index, element){
			if($(element).attr('src').search('vimeo') > -1) {
				console.log('IFRAME VIMEO',$(element));
				$(element).populate(index);
			}
		});
	})();