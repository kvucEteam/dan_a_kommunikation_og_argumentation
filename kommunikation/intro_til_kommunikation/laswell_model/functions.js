$(function() {
	$(".straalekrans").hover(function() {
		$(this).animate({
			borderColor: "rgba(255,255,255,1)"
		}, 300, function() {
			// Animation complete.
		});
	}, function() {

		$(this).animate({
			"border-color": "rgba(255,255,255,0)"
		}, 300, function() {
			// Animation complete.
		});
	});


	$('.afsender').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'En afsender er den eller de personer der udtrykker sig med henblik på at påvirke andre',
			title: {
				text: 'Afsender'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

	$('.formaal').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Afsenderen har et formål med at sende en meddelelse.<br /><br />Det kan være at få unge til at drikke mindre hvis det er en alkoholkampagne, eller at blive bekræftet i at man er populær, klog, sjov eller andet, hvis det er en statusopdatering på Facebook.',
			title: {
				text: 'Formål'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.modtager').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom right',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'En modtager er den eller de personer der modtager en meddelelse fra en afsender. Meddelelsen er ikke nødvendigvis bestemt for modtageren',
			title: {
				text: 'Modtager'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.adressat').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top right',
			at: 'bottom center'
		},
		content: {
			text: 'En adressat er den eller de personer en meddelelse er bestemt for',
			title: {
				text: 'Adressat'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.meddelelse').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'En meddelelse er i bred forstand den tekst en afsender sender til en modtager i form af (skrevne eller talte) ord, billeder, video mm.',
			title: {
				text: 'Meddelelse'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.medie').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Mediet er den kanal teksten sendes i. Teksten kan sendes gennem “luften” (samtale), telefon, avis, tidsskrift, facebook mm.',
			title: {
				text: 'Medie'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.situation').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'En hvilken som helst kommunikation finder sted under bestemte omstændigheder:'+
			'<ul><li>Geografisk sted: (kontinent, land, by).</li>'+
			'<li>Fysisk miljø (koldt/varmt, inde/ude, hav, skov, bjerge osv.)</li>'+
			'<li>Socialt miljø (socialt lag, klasse, kulturelt miljø, social gruppe, etnisk gruppe) osv.</li>'+
			'<li>tid...</li></ul>'+

			'Disse omstændigheder kan være meget afgørende for om argumentationen lykkes',
			title: {
				text: 'Situation'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.samfund').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom left',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Samfund(sværdier) og normer f.eks. landbrugssamfund, storby, diktatur,demokrati osv.',
			title: {
				text: 'Samfund'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.virkning').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'bottom right',
			at: 'top center',
			viewport: $("body")
		},
		content: {
			text: 'Enhver kommunikation vil have som mål at påvirke. Kommunikationen skal virke.<br /><br />Enten får afsenderen meddelelsen igennem som modtageren så reagerer på, eller også bliver meddelelsen misforstået eller slet ikke opfattet, og virkningen udebliver.',
			title: {
				text: 'Virkning'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});
	
	$('.stoej').qtip({
		show: {
			event: 'click mouseenter'
		},
		hide: {
			event: "click unfocus mouseleave"
		},
		position: {
			my: 'top center',
			at: 'bottom center'
		},
		content: {
			text: ' I en kommunikationssituation kan der ofte være støj på linjen.<br /><br />Det kan være helt konkret i en telefonsamtale fx, hvor der er udfald, baggrundstøj, knitren etc., men det kan også være på Facebook hvor reklamer forstyrrer kommunikationen.',
			title: {
				text: 'Støj'
			}
		},
		style: {
			classes: 'qtip-light qtip-shadow qtip-rounded'
		}
	});

});