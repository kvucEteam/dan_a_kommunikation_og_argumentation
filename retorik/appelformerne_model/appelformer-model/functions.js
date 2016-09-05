$(function() {
	$(".straalekrans").hover(function() {
		$(this).animate({
			"border-width": "3px"
		}, 100, function() {
			// Animation complete.
		});
	}, function() {
		$(this).animate({
			"border-width": "0px"
		}, 100, function() {
			// Animation complete.
		});
	});

    $(".skema")
      .mouseenter(function(e){
$(".skemabillede").fadeIn("fast");
    }).mouseleave(function(e) {
	$(".skemabillede").fadeOut("fast");
    });

	$('.logos').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top left',
			at: 'bottom center',
			adjust: {
				y: 5
			}
		},
		content: {
			text: 'Logosappelen appellerer til vores fornuft, men er IKKE det samme som logik.<br /><br />Logosappellen vil ikke som logikken tale om uimodsigelige sandheder, men <span style="font-weight: bold;">sandsynliggøre</span> det udsagn afsender kommer med.',
			title: {
				text: 'Logos'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.etos').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top left',
			at: 'bottom center',
			adjust: {
				y: 5
			}
		},
		content: {
			text: 'Etosappellen handler om afsenderens troværdighed. Alle afsendere har en vis portion troværdighed - stor eller lille.<br /><br />Man taler i retorikken om at en afsender har en etoskonto der kan stige og falde. Etoskontoen ligger ikke hos afsenderen, men hos modtagerne. Den er afhængig af modtagernes opfattelse af afsenderen.<br /><br />Det er helt afgørende for at få sit budskab igennem at man har noget på etoskontoen.',
			title: {
				text: 'Etos'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.patos').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top right',
			at: 'bottom center',
			adjust: {
				y: 5
			}
		},
		content: {
			text: 'Patos er appelformen der kan sætte sindene i kog. Patos drejer sig altså ikke om sagen, ej heller om afsenderens troværdighed, men om modtagernes følelser.<br /><br />I modsætning til etosappellen som er de blide og varige følelsers appel, er patos de heftige og kortvarige følelsers appel.',
			title: {
				text: 'Patos'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.aristoteles').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom right',
			at: 'top center',
			adjust: {
				y: -3
			}
		},
		content: {
			text: 'Aristoteles, 384-322 f.Kr., græsk filosof, elev af Platon. Forfatter til adskillige værker om politik, retorik, etik, logik og naturvidenskab.',
			title: {
				text: 'Aristoteles'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

});