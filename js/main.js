$(document).ready(function() {
	
	// HOME i RESTART
	$("x3d").click( 
		function(){
			$("div.sve").slideUp(300);
	});

	// OTVARANJE ODGOVARAJUĆEG TABA
	$('.linksz').click(function (){

		var link = $(this).attr('id');
		var textUContentu = $("div."+link+" p, h2, img, ul, ol").not(".linksz");
		
		$(".sve").hide();
		textUContentu.css("opacity","0");
		$("div."+link).slideToggle(200);
		textUContentu.animate({opacity: 1}, 600);

		// Close
		$(".close").click(
		function () {
		$("div."+link).slideUp(200);
		});
	});

	// GALERIJA
	$(".galleryCall").click(function() {
			$(".gallery").slideDown(300);
			$("img, .gallery").click(function() {
					$(".gallery").slideUp(300);
			});
	});	

	// OTVARANJE TABELE ILI LISTE
	$('.call').click(function(){

		var call = $(this);
		var callIdUn = call.attr('id'),
			callId = $('.' + callIdUn);

		var callTitleUn = call.attr('title'),
			callTitle = $('#' + callTitleUn);

		callId.animate({
			'width'   : '620px',
			'opacity' : '1'
		}, 200, function(){
			console.log('stigli' + callTitle);
			callTitle.slideDown(200);
			$('.linksz, x3d, .close, .' + callIdUn).click(function(){
				callTitle.slideUp(200, function(){
					callId.animate({
					 	width   : '0px',
					 	opacity : '0'
					}, 200);
				});					
			});

		});
	});


	// BACKUP, ne brisati 

	// TABELA (izdrkavanje)
	// $('#tableCall').click(function(){
	// 	$('.tbl').animate({
	// 		'width'   : '620px',
	// 		'opacity' : '1'
	// 	}, 200, function() {
	// 		$('#explTbl').slideDown(200);
	// 		$('.linksz, .tbl, x3d, #infoCall').click(function(){
	// 			$('#explTbl').slideUp(200, function(){
	// 				$('.tbl').animate({
	// 				 	width   : '0px',
	// 				 	opacity : '0',
	// 				}, 200);
	// 			});			
	// 		});
	// 	});
	// });	

	// $('#tableCall').click( function(){
	// 	$('.tbl').animate({
	// 		'width'   : '620px',
	// 		'opacity' : '1'
	// 	}, 200, function() {
	// 		$('#explTbl').slideDown(200);
	// 		$('.linksz, .tbl, x3d, #infoCall').click(function(){
	// 			$('#explTbl').slideUp(200, function(){
	// 				$('.tbl').animate({
	// 				 	width   : '0px',
	// 				 	opacity : '0',
	// 				}, 200);
	// 			});			
	// 		});
	// 	});
	// });


	// $('#infoCall').click( function(){
	// 	$('.info').animate({
	// 		'width'   : '500px',
	// 		'opacity' : '1'
	// 	}, 200, function() {
	// 		$('.info div').slideDown(200);
	// 		$('.linksz, .info, x3d, #tableCall').click(function(){
	// 			$('.info div').slideUp(200, function(){
	// 				$('.info').animate({
	// 				 	width   : '0px',
	// 				 	opacity : '0'
	// 				}, 200);
	// 			});					
	// 		});
	// 	});
	// });


}); 
