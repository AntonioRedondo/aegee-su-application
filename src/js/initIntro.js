
function hideIntro(type) {
	var modifier = "out";
		
	switch (type) {
		case 2: modifier = "out2";
	}
	
	var intro = d.gc("intro"),
		introDarkener = d.gc("intro-darkener");
		
	intro.classList.add("intro--" + modifier);
	intro.addEventListener("transitionend", function(e) {
		if(e.target.classList.contains("intro"))
			intro.style.display = "none";
	});
	
	introDarkener.classList.add("intro-darkener--" + modifier);
	introDarkener.addEventListener("transitionend", function(e) {
		if(e.target.classList.contains("intro-darkener") && type === 2)
			introDarkener.style.display = "none";
		else d.st(function() { introDarkener.style.display = "none"; }, 500);
	});
	
	d.gc("main-bg").classList.add("main-bg--in");
	
	if (document.documentElement.offsetWidth >= 810) {
		pg.load();
	}
}



function initIntro() { // eslint-disable-line
	d.gc("scroll-down").classList.add("scroll-down--bottom");
	d.gc("scroll-down__inner").classList.add("scroll-down__inner--out");
	
	var viewPortWidth = document.documentElement.offsetWidth,
		wheelLevel = 0,
		wheelLevelFormer = 0,
		phrases = d.gca("phrases__phrase"),
		phrasesCount = phrases.length,
		bubbles = d.gca("bubbles__layer"),
		slides = d.qsa(".slides>.slide"),
		slidesCount = slides.length,
		visiblePhrases = [],
		visibleBubbles = [],
		onTransition = false,
		yStart,
		yEnd,
		transform = d.checkTransformsSupported(),
		mouseMoveListener,
		// mouseWheelListener,
		// touchStartListener,
		// touchEndListener,
		// keyDownListener,
		toControlledRandomMovement,
		toHints;
	
	// On desktop version it moves the phrases and bubbles on the 3d space depending on the cursor position
	if (viewPortWidth <= 810) {
		var phrasesContainer = d.gc("phrases"),
			bubblesContainer = d.gc("bubbles");
		d.ae("mousemove", mouseMoveListener = function(e) {
			//console.log("deltaZ: " + e.deltaZ);
			//console.log("deltaMode: " + e.deltaMode);
			//console.log("clientX: " + e.clientX);
			//console.log("clientY: " + e.clientY);
			//console.log("rotateX(" + -(0.02*e.clientY-10) +"deg)");
			// phrasesContainer.style[transform] = "rotateX(" + -(0.02*e.clientY-10) + "deg) rotateY(" + (0.02*e.clientX-25) + "deg) translate3d(" + (-0.05*e.clientX+100) + "px, 0, 0)";
			phrasesContainer.style[transform] = "rotateX(" + -(0.02*e.clientY) + "deg) rotateY(" + (0.02*e.clientX) + "deg) translate3d(" + (-0.05*e.clientX+100) + "px, 0, 0)";
			
			// Due to a weird behaviour the below line spoils the bubbles zoom effect of Chrome.
			// With this conditional if we avoid execution on Chrome
			if (!(window.chrome && window.chrome.webstore))
				bubblesContainer.style[transform] = phrasesContainer.style[transform];
		});
	}
	
	
	
	// Shows a text hint if the intro doesn't start scrolling down in 3 seconds
	toHints = d.st(function() {
		if (wheelLevel === 0)
			if (viewPortWidth >= 810 && d.getOS() !== "Android" && d.getOS() !== "iOS")
				d.gc("scroll-down-hint").classList.add("scroll-down-hint--in");
			else d.gc("swipe-up-hint").classList.add("swipe-up-hint--in");
	}, 3000);
	
	
	
	// Moves phrases and bubbles accordingly
	function movePhrases() {
		if (wheelLevel === 1) {
			d.gc("scroll-down-hint").classList.add("scroll-down-hint--out");
			d.gc("swipe-up-hint").classList.add("swipe-up-hint--out");
		}
		
		if (wheelLevel === phrasesCount) {
			d.st(function() { d.gc("enter-button").classList.add("enter-button--in"); }, 1000);
			d.gc("scroll-down").classList.add("scroll-down--out");
		} else {
			d.gc("enter-button").classList.remove("enter-button--in");
			d.gc("scroll-down").classList.remove("scroll-down--out");
		}

		if (wheelLevel > wheelLevelFormer) {
			visiblePhrases.splice(0, 0, (phrases[wheelLevel-1]));
			visibleBubbles.splice(0, 0, (bubbles[wheelLevel-1]));
			visiblePhrases.forEach(function(item, i) {
				item.classList.add("phrases__phrase--pos" + (i + 1));
				visibleBubbles[i].classList.add("bubbles__layer--pos" + (i + 1));
			});
		} else if (wheelLevel < wheelLevelFormer) {
			visiblePhrases.forEach(function(item, i) {
				item.classList.remove("phrases__phrase--pos" + (i + 1));
				visibleBubbles[i].classList.remove("bubbles__layer--pos" + (i + 1));
			});
			visiblePhrases.splice(0, 1);
			visibleBubbles.splice(0, 1);
		}

		wheelLevelFormer = wheelLevel;
	}
	
	
	// Moves slides accordingly
	function moveSlides() {
		if (wheelLevel > wheelLevelFormer) {
			slides[wheelLevel-phrasesCount-1].classList.add("slide--in");
			slides[wheelLevel-phrasesCount-1].style.zIndex = "1";
			slides[wheelLevel-phrasesCount-1].firstElementChild.classList.add("slide-text--in");
			if (wheelLevel-phrasesCount > 1 && slides[wheelLevel-phrasesCount-1].classList.contains("slide--remain")) {
				slides[wheelLevel-phrasesCount-2].classList.add("slide--out");
			}
		} else if (wheelLevel < wheelLevelFormer) {
			slides[wheelLevel-phrasesCount].classList.remove("slide--in");
			d.st(function() { slides[wheelLevel-phrasesCount].style.zIndex = "0"; }, 500);
			slides[wheelLevel-phrasesCount].firstElementChild.classList.remove("slide-text--in");
			if (wheelLevel-phrasesCount > 0) {
				slides[wheelLevel-phrasesCount-1].classList.remove("slide--out");
			}
		}

		wheelLevelFormer = wheelLevel;
	}
	
	// Counts wheel scroll movements
	d.ae("wheel", /* mouseWheelListener =  */function(e) {
		
		if (onTransition)
			// console.log(); // eslint-disable-line
			return;
		
		onTransition = true;
		
		label1: if ((e.deltaY > 0 || e.detail.deltaY > 0) && wheelLevel < (phrasesCount + slidesCount)) {
			if (wheelLevel === phrasesCount && !d.gc("main-bg").classList.contains("main-bg--in"))
				break label1;
			++wheelLevel;
			
			if (wheelLevel <= phrasesCount)
				movePhrases();
			else moveSlides();
		} else label2: if ((e.deltaY < 0 || e.detail.deltaY < 0 ) && wheelLevel > 0) {
			if (wheelLevel === phrasesCount && d.gc("main-bg").classList.contains("main-bg--in"))
				break label2;
				
			--wheelLevel;
			
			if (wheelLevel < phrasesCount)
				movePhrases();
			else moveSlides();
		}
		
		d.st(function() {
			onTransition = false;
		}, 800);
	});
	
	// http://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
	d.ae("touchstart", /* touchStartListener =  */function(e) {
		yStart = e.stuches[0].clientY;
	});
	
	d.ae("touchend",/*  touchEndListener =  */function(e) {
		yEnd = e.changedTouches[0].clientY;
		if (yEnd - yStart < -60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 } }));
		else if (yEnd - yStart > 60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: -1 } }));
	});
	
	
	
	// Moves randomly horizontally and vertically the bubble layers
	(function controlledRandomMovement() {
		for (var n=0; n<visibleBubbles.length; ++n) {
			//var zTrans = /\.*translateZ\((.*)px\)/i.exec(document.getElementById("dv").getAttribute("style"))[1];
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + d.getRandomInt() + "px, " + d.getRandomInt() + "px, 0)";
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + d.getRandomInt() + "px, " + d.getRandomInt() + "px, 0)";
		}
		toControlledRandomMovement = d.st(controlledRandomMovement, 3000);
	})();
	
	
	
	// Hides the Intro screen
	function skipIntro() {
		window.removeEventListener("mousemove", mouseMoveListener);
		// window.removeEventListener("wheel", mouseWheelListener);
		// window.removeEventListener("touchstart", touchStartListener);
		// window.removeEventListener("touchend", touchEndListener);
		// window.removeEventListener("keydown", keyDownListener);
		window.clearTimeout(toControlledRandomMovement);
		window.clearTimeout(toHints);
		
		hideIntro();
		
		window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 } }));
	}
	
	d.gc("enter-button").addEventListener("click", function() { skipIntro(); });
	
	d.ae("keydown", /* keyDownListener =  */function(e) {
		switch (e.keyCode) {
			case 39:
			case 40: window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 } })); break;
			case 37:
			case 38: window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: -1 } })); break;
		}
	});
	
	
	
	// skipIntro(); // Uncomment it when deveoping and comment <div class="phrases"> on index.htm
}
