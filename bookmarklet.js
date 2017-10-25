(function() {
	if(typeof jQuery == "undefined") {
		//alert('Error: jQuery nie je definované, napíšte prosím email na admin@digitalz.eu');
		return;
	}
	else {
		$ = jQuery;

		if (localStorage.getItem('digitalz_sme_video')) {

			$videos = $('iframe');
			$("[id^=digitalz_title_textarea_]").remove();
			$("[id^=digitalz_textarea_]").remove();


			if ($videos.length < 0) {
				alert('Error: Na stránke sa nenachádzajú žiadne video iframe. Ak si myslíte, že je to chyba, napíšte prosím email na admin@digitalz.eu');
				return;
			}
			else {
				$.fn.populate = function (index, style) {

					var video_id = $(this).attr("src").substr(31, $(this).attr("src").search(/\?/) - 31);

					$('<p/>', {
						id: 'digitalz_title_textarea_' + index,
						style: 'margin:auto;text-align:center;display:block;font-size:30px;font-weight:bold;color:#2e68e5;',
						text: 'Kód pre zdieľanie videa',
					}).insertBefore($(this).parent());

					$('<textarea/>', {
						id: 'digitalz_textarea_' + index,
						style: style,
						readonly: true,
						onclick: "var box = jQuery('#digitalz_textarea_'+" + index + ");box.select();document.execCommand('copy');" +
						"box.text('Video bolo skopírované do vašej schránky.');box.css('font-size','30px');box.attr('onclick','')",
						text: '<iframe id="digitalz_vimeo_video_' + video_id + '" src="https://digisport.sk/wp-content/uploads/2017/09/digitalz_iframe.html?vimeo_video_id=' + video_id + '" ></iframe>',
						resize: 'none',
					}).insertBefore($(this).parent());
				};

				var vimeo_count = 0;
				$videos.each(function (index, element) {
					if ($(element).attr('src').search('vimeo') > -1) {
						vimeo_count += 1;
						var style = "border: 2px solid #2e68e5;margin-bottom:20px;display:block;height:100px;width:" + $(element).outerWidth() + "px;";
						$(element).populate(index, style);
					}
				});
				if (vimeo_count == 0) {
					alert('Error: Na stránke sa nenachádzajú žiadne video iframe. Ak si myslíte, že je to chyba, napíšte prosím email na admin@digitalz.eu');
				}
			}
		}
	}
})();