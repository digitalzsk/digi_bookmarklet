(function() {
	if(typeof jQuery == "undefined") {
		alert('Error: jQuery nie je definované, napíšte prosím email na admin@digitalz.eu');
		return;
	}
	else {
		$ = jQuery;
		$videos = $('iframe');

		if($videos.length < 0 ) {
			alert('Error: Na stránke sa nenachádzajú žiadne video iframe. Ak si myslíte, že je to chyba, napíšte prosím email na admin@digitalz.eu');
			return;
		}
		else {
			$.fn.populate = function(index) {
				$('<textarea/>', {
					id: 'digitalz_textarea_'+index,
					style: "border: 2px solid #2e68e5;margin-bottom:20px;display:block;height:100px;width:"+$(this).attr('width')+";",
					readonly: true,
					onclick: "var box = jQuery('#digitalz_textarea_'+"+index+");box.select();document.execCommand('copy');" +
					"box.text('Video bolo skopírované do vašej schránky.');box.css('font-size','30px');",
					text: 'IFRAME TEXT TODO',
					resize: 'none',
				}).prependTo($(this).parent());

				$('<p/>', {
					id: 'digitalz_title_textarea_'+index,
					style: 'margin:auto;text-align:center;display:block;font-size:30px;font-weight:bold;color:#2e68e5;',
					text: 'Kód pre zdieľanie videa',
				}).prependTo($(this).parent());
			};

			var vimeo_count = 0;
			$videos.each(function(index, element){
				if($(element).attr('src').search('vimeo') > -1) {
					vimeo_count += 1;
					$(element).populate(index);
				}
			});
			if(vimeo_count == 0) {
				alert('Error: Na stránke sa nenachádzajú žiadne video iframe. Ak si myslíte, že je to chyba, napíšte prosím email na admin@digitalz.eu');
			}
		}
	}
})();