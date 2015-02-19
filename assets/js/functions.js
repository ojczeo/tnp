
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');
var  aboutImage = jQuery('#about').data('background-image');
var  musicImage = jQuery('#music').data('background-image');
var  contactImage = jQuery('#contact').data('background-image');

if (pageTopImage) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (aboutImage) {  jQuery('#about').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (musicImage) {  jQuery('#music').css({ 'background-image':'url(' + musicImage + ')' }); };
if (contactImage) {  jQuery('#contact').css({ 'background-image':'url(' + contactImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {

	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/



	/* Main Menu
	-------------------------------------------------------------------*/
	$('#main-menu #headernavigation').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		scrollOffset: 0,
		filter: '',
		easing: 'swing'
	});

	/* Main Menu End
	-------------------------------------------------------------------*/




	/* Time Countdown
	-------------------------------------------------------------------*/
	// $('#time_countdown').countDown({
	//
  //       // targetDate: {
  //       //     'day': 30,
  //       //     'month': 9,
  //       //     'year': 2015,
  //       //     'hour': 0,
  //       //     'min': 0,
  //       //     'sec': 0
  //       // },
  //       // omitWeeks: true
	//
  //        targetOffset: {
  //           'day':      0,
  //           'month':    0,
  //           'year':     1,
  //           'hour':     0,
  //           'min':      0,
  //           'sec':      3
	// 	},
	// 	omitWeeks: true
	//
	//     });


    /* Time Countdown End
	-------------------------------------------------------------------*/




	/* Next Section
	-------------------------------------------------------------------*/
	$('.next-section .go-to-about').click(function(e, t) {
	console.log(e, t);
    	$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
  	});
  	$('.next-section .go-to-music').click(function() {
    	$('html,body').animate({scrollTop:$('#music').offset().top}, 1000);
  	});
  	$('.next-section .go-to-contact').click(function() {
    	$('html,body').animate({scrollTop:$('#contact').offset().top}, 1000);
  	});
  	$('.next-section .go-to-page-top').click(function() {
    	$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
  	});

  	/* Next Section End
	-------------------------------------------------------------------*/




	// /* music
	// -------------------------------------------------------------------*/
	//
  //   $('#music-submit').click(function () {
  //       $('.music-error').hide();
	//
  //       var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  //       var emailVal = $('#music-email').val();
	//
  //       if (emailVal == "" || emailVal == "Email Address *") {
  //           $('.music-error').html('<i class="fa fa-exclamation"></i> Email address required.').fadeIn();
  //           return false;
	//
  //       } else if (!emailReg.test(emailVal)) {
  //           $('.music-error').html('<i class="fa fa-exclamation"></i> Invalid email address.').fadeIn();
  //           return false;
  //       }
	//
  //       var data_string = $('.news-letter').serialize();
	//
  //       $('#music-submit').hide();
  //       $('#music-loading').fadeIn();
  //       $('.music-error').fadeOut();
	//
  //       $.ajax({
  //           type: "POST",
  //           url: "php/music.php",
  //           data: data_string,
	//
  //           //success
  //           success: function (data) {
  //               $('.music-hide').hide();
  //               $('.music-message').html('<i class="fa fa-check contact-success"></i><div>Thank you! You have been musicd.<div>').fadeIn();
  //           },
  //           error: function (data) {
  //               $('.music-hide').hide();
  //               $('.music-message').html('<i class="fa fa-exclamation contact-error"></i><div>Something went wrong, please try again later.<div>').fadeIn();
  //           }
	//
  //       }) //end ajax call
  //       return false;
  //   });
	//
	// /* music End
	// -------------------------------------------------------------------*/




	/* Contact
	-------------------------------------------------------------------*/
		$('#contact-form').submit(function (e) {
			e.preventDefault();
		});
		$('#contact-submit').click(function (e) {
        $('.first-name-error, .last-name-error, .contact-email-error, .contact-subject-error, .contact-message-error').hide();
        var first_nameVal = $('input[name=first_name]').val();
        var last_nameVal = $('input[name=last_name]').val();
        var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        var emailVal = $('#contact_email').val();
        var contact_subjectVal = $('input[name=contact_subject]').val();
        var messageVal = $('textarea[name=message]').val();

        //validate

        if (first_nameVal == '' || first_nameVal == 'First Name *') {
            $('.first-name-error').html('<i class="fa fa-exclamation"></i> First name is required.').fadeIn();
            return false;
        }
        if (last_nameVal == '' || last_nameVal == 'Last Name *') {
            $('.last-name-error').html('<i class="fa fa-exclamation"></i> Last name is required.').fadeIn();
            return false;
        }
        if (emailVal == "" || emailVal == "Email Address *") {

            $('.contact-email-error').html('<i class="fa fa-exclamation"></i> Your email address is required.').fadeIn();
            return false;

        } else if (!emailReg.test(emailVal)) {

            $('.contact-email-error').html('<i class="fa fa-exclamation"></i> Invalid email address.').fadeIn();
            return false;
        }
         if (contact_subjectVal == '' || contact_subjectVal == 'Subject *') {
            $('.contact-subject-error').html('<i class="fa fa-exclamation"></i> Subject is required.').fadeIn();
            return false;
        }
        if (messageVal == '' || messageVal == 'Message *') {
            $('.contact-message-error').html('<i class="fa fa-exclamation"></i> Please provide a message.').fadeIn();
            return false;
        }

        var data_string = $('.contact-form').serialize();

        $('#contact-submit').hide();
        $('#contact-loading').fadeIn();
        $('.contact-error-field').fadeOut();

        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: data_string,

            //success
            success: function (data) {

                $('.contact-box-hide').slideUp();
                $('.contact-message').html('<i class="fa fa-check contact-success"></i><div>Your message has been sent.</div>').fadeIn();
            },
            error: function (data) {

                $('.btn-contact-container').hide();
                $('.contact-message').html('<i class="fa fa-exclamation contact-error"></i><div>Something went wrong, please try again later.</div>').fadeIn();
            }

        }) //end ajax call
        return false;
    });

	/* Contact End
	-------------------------------------------------------------------*/








});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder
-------------------------------------------------------------------*/
$(window).load(function () {
    "use strict";
    $("#loader").fadeOut();
    $("#preloader-container").delay(350).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
