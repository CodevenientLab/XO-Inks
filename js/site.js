"use strict";

$(document).ready(function () {
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});


	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});

// WhatsApp Form Submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `Hello XO Inks! 👋\n\n` +
                `Name: ${name}\n` +
                `Phone: ${phone}\n` +
                `Email: ${email}\n` +
                `Service: ${service}\n` +
                `Message: ${message}\n\n` +
                `Looking forward to hearing from you!`;
            
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            const whatsappNumber = '27734322826';
            
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            
            this.reset();
        });



$(window).load(function () { 
	$('#status').fadeOut(); 
	$('#preloader').delay(350).fadeOut('slow'); 
	$('body').delay(350).css({'overflow-y': 'visible'});

	
	if (typeof WOW == 'function') {
		new WOW().init();
	}


	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
