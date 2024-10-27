(function($) {



	"use strict";



	//Hide Loading Box (Preloader)

	function handlePreloader() {

		if($('.preloader').length){

			$('.preloader').delay(200).fadeOut(500);

		}

	}





	//Update Header Style and Scroll to Top

	function headerStyle() {

		if($('.main-header').length){

			var windowpos = $(window).scrollTop();

			var siteHeader = $('.main-header');

			var sticky_header = $('.fixed-header .sticky-header');

			var scrollLink = $('.scroll-to-top');

			if (windowpos > 250) {

				siteHeader.addClass('fixed-header');

				sticky_header.addClass("animated slideInDown");

				scrollLink.fadeIn(300);

			} else {

				siteHeader.removeClass('fixed-header');

				sticky_header.removeClass("animated slideInDown");

				scrollLink.fadeOut(300);

			}

		}

	}



	headerStyle();







	// Scroll to a Specific Div

	if($('.scroll-to-target').length){

		$(".scroll-to-target").on('click', function() {

			var target = $(this).attr('data-target');

			// animate

			$('html, body').animate({

				scrollTop: $(target).offset().top

			}, 1500);



		});

	}







	/* ==========================================================================

	When document is Scrollig, do

	========================================================================== */



	$(window).on('scroll', function() {

		headerStyle();

	});



	/* ==========================================================================

	When document is loading, do

	========================================================================== */



	$(window).on('load', function() {

		handlePreloader();

	});









	$(document).on('click', '.navbar-toggler', function(){

		$(".side-menu").addClass("side-menu-active");

	});

	$(document).on('click', '.btn-close', function(){

		$(".side-menu").removeClass("side-menu-active");

	});





})(window.jQuery);



/* section background animation on scroll */

const sections = gsap.utils.toArray('.section-bg');

gsap.set(sections, {width: "0%"});

sections.forEach((section, i) => {



	const anim = gsap.to(section, {duration: 1, paused: true, width: "100%"});



	ScrollTrigger.create({

		trigger: section,

		start: "top 90%",

		once: true,

		onEnter: self => {

			self.progress === 1 ? anim.progress(1) : anim.play()

		}

	});

});



/* Fade element on scroll */

const elements = gsap.utils.toArray('.trigger');

gsap.set(elements, {autoAlpha: 0, y: 50});

elements.forEach((element, i) => {

	// Set up your animation

	const anim = gsap.to(element, {duration: 1, delay: 1, autoAlpha: 1, y: 0, paused: true, stagger: 0.1});



	// Use callbacks to control the state of the animation

	ScrollTrigger.create({

		trigger: element,

		start: "top 100%",

		once: true,

		onEnter: self => {

			// If it's scrolled past, set the state

			// If it's scrolled to, play it

			self.progress === 1 ? anim.progress(1) : anim.play()

		}

	});

});



const photos = gsap.utils.toArray('.photos');

gsap.set(photos, {autoAlpha: 0, x:-300, scale: 0});

photos.forEach((photo, i) => {

	// Set up your animation

	const anim = gsap.to(photo, { duration: 2, x:0, scale:1, autoAlpha: 1, paused: true });



	// Use callbacks to control the state of the animation

	ScrollTrigger.create({

		trigger: photo,

		start: "top 90%",

		once: true,

		onEnter: self => {

			// If it's scrolled past, set the state

			// If it's scrolled to, play it

			self.progress === 1 ? anim.progress(1) : anim.play()

		}

	});

});



const photosUp = gsap.utils.toArray('.photosUp');

gsap.set(photosUp, {autoAlpha: 0, y:200, scale: 0});

photosUp.forEach((photo, i) => {

	// Set up your animation

	const anim = gsap.to(photo, { duration: 2, y:0, scale:1, autoAlpha: 1, paused: true });



	// Use callbacks to control the state of the animation

	ScrollTrigger.create({

		trigger: photo,

		start: "top 95%",

		once: true,

		onEnter: self => {

			// If it's scrolled past, set the state

			// If it's scrolled to, play it

			self.progress === 1 ? anim.progress(1) : anim.play()

		}

	});

});



$(document).ready(function (){

	var windowWidth = $(window).width();

	if (windowWidth > 768){

		gsap.from(".nav-item", {yPercent: -50,autoAlpha: 0,delay: 0.5, ease: Power1.out, stagger: 0.2});

	}

});



const starsFirstAnim = gsap.timeline()

const starsFirst = gsap.utils.toArray('.stars .twinkleFirst');

starsFirst.forEach((starFirst, i) => {

	starsFirstAnim.fromTo(starFirst, {scaleX:1, scaleY:1}, { duration:1.2, scaleX:0.7, scaleY:0.7,yoyo:true, repeat:-1, repeatDelay:0})

});



const starsSecondAnim = gsap.timeline()

const starsSecond = gsap.utils.toArray('.stars .twinkleSecond');

starsSecond.forEach((starSecond, i) => {

	starsSecondAnim.fromTo(starSecond, {scaleX:1.3, scaleY:1.3}, { duration:0.5, delay:3, scaleX:0.7, scaleY:0.7,yoyo:true, repeat:-1, repeatDelay:0})

});



const starsThirdAnim = gsap.timeline()

const starsThird = gsap.utils.toArray('.stars .twinkleThird');

starsThird.forEach((starThird, i) => {

	starsThirdAnim.fromTo(starThird, {scaleX:1.3, scaleY:1.3}, { duration:2, delay:6, scaleX:0.7, scaleY:0.7,yoyo:true,repeat:-1, repeatDelay:0})

});



const starsFourthAnim = gsap.timeline()

const starsFourth = gsap.utils.toArray('.stars .twinkleFourth');

starsFourth.forEach((starFourth, i) => {

	starsFourthAnim.fromTo(starFourth, {scaleX:1, scaleY:1}, { duration:0.8,delay:9, scaleX:0.7, scaleY:0.7,yoyo:true,repeat:-1, repeatDelay:0})

});



const meteorAnim = gsap.timeline()

meteorAnim.fromTo(".meteor", {scaleX:1, scaleY:1,x:-120, y:70},{x:0, y:50, yoyo:true, opacity:1, scaleX:0.9, scaleY:0.9,duration:0.7, repeat:-1, repeatDelay:0});

// meteorAnim.fromTo(".meteorLines", {x:30, y: -50, scaleX:1, scaleY:1}, {duration:1, x:-300, y:100,repeat:-1, repeatDelay:0})



const intro = gsap.timeline({paused:true});



intro.set(".intro-img", {autoAlpha: 0, y: 200});

intro.set(".intro-area .theme-btn", {autoAlpha: 0});

intro.set(".intro-area .small-txt", {autoAlpha: 0});

intro.set(".standard", {autoAlpha: 0,y: 200});



var $demoText = $(".intro-area .stitle-tagline");

intro.staggerFromTo($demoText.find("span"), 1, {autoAlpha: 0,scale: 7}, {autoAlpha: 1,scale: 1,delay: 1}, 0.2);

intro.staggerFromTo(".intro-area .section-title", 1, {autoAlpha: 0,scale: 3}, {autoAlpha: 1,scale: 1});



intro.set(".fire", {transformOrigin:'50%'});

intro.fromTo(".fire", {scaleX:1, scaleY:1,duration:0.1,x:-60, y:110},{x:0, y:50, yoyo:true, opacity:1, scaleX:0.8, scaleY:0.8,duration:0.3, repeat:-1, repeatDelay:0});

intro.fromTo(".rocket" , {x: -300, y: 300, opacity:0}, {duration:3, opacity:1, x: 0, y: 0, ease: Sine.easeIn});



intro.to(".intro-area .theme-btn", {autoAlpha: 1, duration:0.5},7);

intro.to(".intro-area .small-txt", {autoAlpha: 1, duration:0.5},7);



intro.to(".intro-img", {duration: 1, delay: 1, autoAlpha: 1, y: 0},5);



intro.fromTo(".book-one", { x: 4000}, {duration: 0.5, x: 0},5);

intro.fromTo(".book-two", { x: 4000}, {duration: 0.5, x: 0});

intro.fromTo(".book-three", { x: 4000}, {duration: 0.5, x: 0});

intro.fromTo(".book-four", { x: 4000}, {duration: 0.5, x: 0});

intro.fromTo(".book-five", { x: 4000}, {duration: 0.5, x: 0});

intro.fromTo(".book-six", { x: 4000,rotate:100}, {duration: 1.5, x: 0,rotate:0});



intro.to(".standard", {autoAlpha: 1,y: 0, duration:1},5);



ScrollTrigger.create({

	trigger: ".intro-sec",

	start: "top 80%",

	once: true,

	onEnter: self => {

		self.progress === 1 ? intro.progress(1) : intro.play()

	}

});



const studentPencil = gsap.timeline({paused: true});

studentPencil.from(".pencil-box img", {duration: 2,scale: 0.5,opacity: 0,delay: 0.5,stagger: 0.2,ease: "elastic",force3D: true});



ScrollTrigger.create({

	trigger: ".student-sec",

	start: "top 80%",

	once: true,

	onEnter: self => {

		self.progress === 1 ? studentPencil.progress(1) : studentPencil.play()

	}

});



function drawLine(){

let line = document.querySelector('#squigglyMask');

    line.classList.add("drawLine");

}



gsap.set(".st-img-one", {autoAlpha:0})

gsap.to(".st-img-one", {autoAlpha:1, delay:3});



gsap.set("#pencil", {xPercent:-48, yPercent:-100, transformOrigin:"center center"})

const pencilAnim = gsap.timeline({delay:3, paused: true});

pencilAnim.call(drawLine, null, 0);

pencilAnim

//.fromTo("#squigglyMask", {drawSVG:"0%"}, {drawSVG:"100%" ,duration: 5, ease:"power2.easeOut"})

.to("#pencil", {duration:5, ease:"none", motionPath:{path:"#squigglyMask", align:"#squigglyMask"}}, 0);



ScrollTrigger.create({

	trigger: ".student-sec",

	start: "top 80%",

	once: true,

	onEnter: self => {

		self.progress === 1 ? pencilAnim.progress(1) : pencilAnim.play()

	}

});



// const familyAnim = gsap.timeline({delay:1, repeat: -1, repeatDelay: 0, paused: true});

// gsap.set("#male", {x:-150, y:-150});

//

// familyAnim.to("#male ", {duration:4, ease:"power2.easeOut", motionPath:{path:"#familyCircle", align:"#familyCircle"}}, 0);

//

// ScrollTrigger.create({

// 	trigger: "#familyCircle",

// 	start: "top 80%",

// 	once: true,

// 	onEnter: self => {

// 		self.progress === 1 ? familyAnim.progress(1) : familyAnim.play()

// 	}

// });



const mapAnim = gsap.timeline({paused: true});

mapAnim.set(".micon", {autoAlpha:0})

mapAnim.to(".micon", {autoAlpha:1, stagger:0.4, duration:2, ease: Elastic.easeInOut})



ScrollTrigger.create({

	trigger: ".operate-area",

	start: "top 80%",

	once: true,

	onEnter: self => {

		self.progress === 1 ? mapAnim.progress(1) : mapAnim.play()

	}

});





// gsap.set("#tableLamp", {autoAlpha:0});

// var lamp = gsap.timeline();

// lamp.to("#tableLamp", {autoAlpha:1});

// var bulb = gsap.timeline({repeat: -1,repeatDelay: 0, delay:1});

// bulb.from("#bulb", {autoAlpha: 0, duration:4, ease:Linear.easeNone, yoyo: true})

// bulb.to("#bulb", {autoAlpha: 0, duration:7, ease:Linear.easeNone, yoyo: true});

// var light = gsap.timeline({repeat: -1, repeatDelay: 0, delay:1});

// light.from("#light", {autoAlpha: 0, duration:4,ease:Linear.easeNone, yoyo: true})

// light.to("#light", {autoAlpha: 0,duration:7, ease:Linear.easeNone, yoyo: true});



// ScrollTrigger.create({

// 	trigger: ".academic-sec",

// 	start: "top 80%",

// 	once: true,

// 	onEnter: self => {

// 		self.progress === 1 ? mapAnim.progress(1) : mapAnim.play()

// 		self.progress === 1 ? lamp.progress(1) : lamp.play()

// 	}

// });

