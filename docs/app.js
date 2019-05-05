/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

// https://github.com/kanduvisla/plygrnd
var Plygrnd = function() {

	var _this = this;                   // Reference to root object;
	this.views = [];                    // Array with views
	this.totalViews = [];               // Counter to keep track if all views are loaded.
	this.currentView = 0;               // CurrentView
	this.mousePosition = {x: (document.body.clientWidth/100*20), y: (document.body.clientHeight/100*20) }; // Mouse position (can be used by views)
	this.frameRate = 60;
	this.mouseDown = false;
	this.click = false;

	// Create canvas object:
	this.canvas = document.getElementsByClassName("main-bg")[0];
//				document.body.appendChild(this.canvas);

	// Context Object:
	this.ctx = this.canvas.getContext("2d");

	// Resize function:
	this.resize = function(){
		_this.ctx.width  = _this.canvas.width  = document.body.clientWidth;
		_this.ctx.height = _this.canvas.height = document.body.clientHeight;
	};

	// And bind it to the window:
	window.addEventListener("resize", this.resize);
	this.resize();

	// Mouse position (can be used by views):
	window.addEventListener("mousemove", function(e){
		_this.mousePosition.x = e.clientX;
		_this.mousePosition.y = e.clientY;
	});

	/*				this.canvas.addEventListener("touchmove", function(e){
	 e.preventDefault();
	 _this.mousePosition.x = e.touches[0].clientX;
	 _this.mousePosition.y = e.touches[0].clientY;
	 });

	 this.canvas.addEventListener("mousedown", function(e){
	 e.preventDefault();
	 _this.mouseDown = true;
	 _this.click = true;
	 });

	 this.canvas.addEventListener("mouseup", function(e){
	 e.preventDefault();
	 _this.mouseDown = false;
	 _this.click = false;
	 });

	 this.canvas.addEventListener("touchstart", function(e){
	 e.preventDefault();
	 _this.mouseDown = true;
	 _this.click = true;
	 });

	 this.canvas.addEventListener("touchend", function(e){
	 e.preventDefault();
	 _this.mouseDown = false;
	 _this.click = false;
	 });*/

	// Add extra functions to the context object:
	this.ctx.lineThrough = function(points)
	{
		for(var i in points) {
			this.lineTo(points[i].x, points[i].y);
		}
	};

	this.ctx.curveThrough = function(points)
	{
		for (var i = 1; i < points.length - 2; i ++)
		{
			var xc = (points[i].x + points[i + 1].x) / 2;
			var yc = (points[i].y + points[i + 1].y) / 2;
			this.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
		}
		// curve through the last two points
		this.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
	};

	this.ctx.direction = function(x1, y1, x2, y2)
	{
		return Math.atan2(y2 - y1, x2 - x1);
	};

	this.ctx.distance = function(x1, y1, x2, y2)
	{
		return Math.sqrt(
			Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
		);
	};

	this.ctx.drawCircle = function(x, y, radius)
	{
		this.arc(x, y, radius, 0, Math.PI*2, true);
	};

	/*				// Pager function:
	 this.pager = document.createElement("nav");
	 document.body.appendChild(this.pager);

	 this.buildPager = function()
	 {
	 for(var i in _this.views)
	 {
	 // Create an anchor, which loads the specific view:
	 var anchor = document.createElement("a");
	 anchor.innerText = parseInt(i) + 1;
	 anchor.setAttribute("data-view", i);
	 anchor.setAttribute("title", _this.views[i].name);
	 anchor.addEventListener("click", function(e){
	 e.preventDefault();
	 _this.playView(this.getAttribute("data-view"));
	 });
	 _this.pager.appendChild(anchor);
	 }
	 };*/

	// Views functions:
	this.addView = function()
	{
		_this.totalViews.push({
			order: _this.totalViews.length,
			slug: "dots-2",
			loaded: true
		});
	};

	// Check if all is loaded and start if so:
	this.load = function()
	{
		var intervalTimeout = 0;
		var intervalID = setInterval(function(){
			intervalTimeout++;
			if(intervalTimeout == 300) {
				// waited for 30 seconds. Something is clearly wrong.
				alert("Time out! Is your Internet connection thát slow?!?");
				clearInterval(intervalID);
			}
			// Check if all views are loaded:
			var allLoaded = true;
			for(var i in _this.totalViews)
			{
				if(!_this.totalViews[i].loaded) { allLoaded = false; }
			}
			if(allLoaded) {
				// All views are loaded.
				var newViews = [];
				for(var i2 in _this.totalViews) {
					var currentSlug = _this.totalViews[i2].slug;
					for(var j in _this.views) {
						if(_this.views[j].slug == currentSlug) {
							newViews.push(_this.views[j]);
						}
					}
				}
				_this.views = newViews;

				// Clear interval:
				clearInterval(intervalID);

				// Build the pager:
//							_this.buildPager();

				// Start the app:
				_this.start();
			}
		}, 250);
	};

	// Start function:
	this.start = function()
	{
		// Get the right view:
		/*					if(window.location.hash != "") {
		 var currentHash = window.location.hash.replace("#", "");
		 for(var i in _this.views) {
		 if(_this.views[i].slug == currentHash) {
		 _this.currentView = i;
		 }
		 }
		 } else {*/
		_this.currentView = _this.views.length - 1;
//					}
		_this.playView(_this.currentView);
		// Setup the loop:
		// setInterval(function aName(){
		(function aName(){
			// Pass on some variables:
			_this.views[_this.currentView].vars.mousePosition = _this.mousePosition;
			_this.views[_this.currentView].vars.mouseDown = _this.mouseDown;
			_this.views[_this.currentView].vars.click = _this.click;
			_this.click = false;
			// Make that step:
			_this.views[_this.currentView].stepFunction(_this.ctx, _this.views[_this.currentView].vars);
			requestAnimationFrame(aName);
		// }, 1000 / _this.frameRate); // default = 60 fps.
			})();
	};

	this.playView = function(viewNr)
	{
		// Un-initialize the current view:
		try {
			_this.views[_this.currentView].unInitFunction(_this.ctx, _this.views[_this.currentView].vars);
		} catch(e) {}
		// Go further with the requested view from here:
		_this.currentView = viewNr;
		// Remove the class of the active view:
//					if(this.pager.querySelector("a.active")) {
//						this.pager.querySelector("a.active").className = "";
//					}
		// And add it to the new view!
//					this.pager.querySelector("a[data-view="" + _this.currentView + ""]").className = "active"
		// Set the hash:
//					window.location.hash = _this.views[_this.currentView].slug;
		// Initialize the current view:
		_this.views[_this.currentView].initFunction(_this.ctx, _this.views[_this.currentView].vars);
	};

};

var StepGenerator = function(complexity, minInc, maxInc, minMul, maxMul)
{
	this.steps       = [];
	this.incs        = [];
	this.multipliers = [];
	this.complexity  = complexity;

	var _this = this;

	// Defaults:
	if(minInc === null) { minInc = 0; }
	if(maxInc === null) { maxInc = 0.1; }
	if(minMul === null) { minMul = 0.7; }
	if(maxMul === null) { maxMul = 1.3; }

	// Initialise:
	for(var i = 0; i < this.complexity; i++)
	{
		this.steps.push(Math.random() * Math.PI);
		this.incs.push(minInc + Math.random() * (maxInc - minInc));
		this.multipliers.push(minMul + Math.random() * (maxMul - minMul));
	}

	this.step = function()
	{
		// Increase the counters:
		for(var i = 0; i < _this.complexity; i++)
		{
			_this.steps[i] += _this.incs[i];
		}
	};

	// Step XY-function:
	this.getXY = function(offset, w, h)
	{
		if(offset === null) { offset = 0; }

		var xValue = 0;
		var yValue = 0;

		// Calculate XY:
		for(var i = 0; i < _this.complexity; i++)
		{
			xValue += Math.sin(_this.steps[i] + (_this.incs[i] * offset)) * w;
			yValue += Math.cos((_this.steps[i] + (_this.incs[i] * offset)) * _this.multipliers[i]) * h;
		}
		// Return it:
		return {
			x: xValue,
			y: yValue
		};
	};
};





var pg = new Plygrnd();
pg.views.push({
	name            : "Dots 2",
	slug            : "dots-2",
	// Variables used by this view:
	vars            : {
		steps: null,
		currentX: 0,
		currentY: 0
	},
	// Initialisation:
	initFunction    : function(ctx, vars){
		vars.steps = new StepGenerator(4, 0, 0.02, 0.7, 1.3);
		vars.prevDistances = {};
	},
	// Un-initialisation:
	unInitFunction  : function(ctx, vars){},
	// Stepping function:
	stepFunction    : function(ctx, vars){
		ctx.clearRect(0, 0, ctx.width, ctx.height);
		var stepSize = ctx.width / 30;
		var stepsX = ctx.width / stepSize;
		var stepsY = ctx.height / stepSize;

//					ctx.fillStyle = "#00ddff";
		ctx.fillStyle = "#8c243e";

		// Adds a simple ease to the mouse:
		vars.currentX += (vars.mousePosition.x - vars.currentX) / 20;
		vars.currentY += (vars.mousePosition.y - vars.currentY) / 20;

		vars.steps.step();

		var size = ctx.width/1.5;

		for(var y = 0; y < stepsY; y ++)
		{
			for(var x = 0; x < stepsX; x ++)
			{
				var cX = (y%2 * stepSize / 2) + (x * stepSize);
				var cY = y * stepSize;

				// outside:
				var rad = Math.atan2(cX - vars.currentX, cY - vars.currentY);

				// distance:
				var distance = Math.sqrt(
					Math.pow(vars.currentX - cX, 2) + Math.pow(vars.currentY - cY, 2)
				);

				var offset = Math.max(0, (size/2) - distance);
				var p = offset/size;
				p*=1-p;
				offset = (size/2) * p;

				var stepXY = vars.steps.getXY((y*stepsX)+(x*3), offset, offset);

				var dX = stepXY.x + cX + Math.sin(rad) * (offset);
				var dY = stepXY.y + cY + Math.cos(rad) * (offset);
				// var dX = cX;
				// var dY = cY + Math.cos(rad) * (offset);

				ctx.beginPath();
				ctx.drawCircle(dX, dY, distance/80);
				ctx.fill();
			}
		}
	}
});

pg.addView();
// pg.load();

/**
  * 2016-2017 (C) Antonio Redondo / antonioredondo.com
  *
  * DOMTools is a nano-library which contains a bunch of functions to deal with basic
  * needs and problems faced on front-end web applications.
  *
  * It's implemented on ES5 JavaScript as the 'd' object on the global namespace.
  *
  * It contains the following functionality:
  * - Sorter name functions wrapping quering, events and timeouts functions.
  * - Generation of random integers.
  * - Adding, retrieving and removing cookies.
  * - Checking of CSS transforms support.
  * - Checking of OS.
  * - Calculation of element heights and positions.
  * - Loading of images and executing a callback once they're loaded.
  *
  */

(function(d) {
	"use strict";
	
	d.gi = function(id) {
		return document.getElementById(id);
	};
	
	d.gc = function(className) {
		return document.getElementsByClassName(className)[0];
	};
	
	d.gca = function(className) {
		return [].slice.call(document.getElementsByClassName(className));
	};
	
	d.qs = function(query) {
		return document.querySelector(query);
	};
	
	d.qsa = function(query) {
		return [].slice.call(document.querySelectorAll(query));
	};
	
	d.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	};
	
	d.st = function(callback, time) {
		return window.setTimeout(callback, time);
	};
	
	d.si = function(callback, time) {
		return window.setInterval(callback, time);
	};
	
	
	
	
	
	/**
	  * Returns a random integer within a range.
	  * @param {number} min - The lower limit of the range. It defaults to -50.
	  * @param {number} max - The higher limit of the range. It defaults to 50.
	  * @returns {number} - The generated ramdon integer within the range.
	  */
	d.getRandomInt = function(min, max) {
		min = min || -50;
		max = max || 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	
	
	
	
	/**
	  * Returns the sum of clientHeights of all the elements selected by the CSS query provided.
	  * @param {string} selectors - CSS query.
	  * @returns {number} - The sum of all clientHeights. 0 if no elements selected.
	  */
	d.calcClientHeightsSum = function(selector) {
		var total = 0;
		var elements = [].slice.call(d.qsa(selector));
		
		elements.forEach(function(item) {
			total += item.clientHeight;
		});
		
		return total;
	};
	
	/**
	  * Returns an Array with DOMRects of all the elements selected by the CSS query provided.
	  * The border-box coordinates' origin is relative to the viewport.
	  * @param {string} selectors - CSS query.
	  * @returns {Array} - An array with DOMRects. undefined if no elements selected.
	  */
	d.calcPositionsToViewport = function(selectors) {
		var positions = [];
		var elements = [].slice.call(d.qsa(selectors));

		if (elements.length === 0)
			return;

		elements.forEach(function(item) {
			positions.push(item.getBoundingClientRect());
		});

		return positions;
	};
	
	/**
	  * Returns an Object with left, top, width and height properties of the child
	  * element border-box position relative to a parent element specified by parentSelector.
	  * The parent and the child don't need to be directly nested on the elements' hierarchy.
	  * If a CSS selector string is provided and it selects more than one element
	  * only the first element will be used.
	  * @param {string|HTMLElement} parentSelector - CSS selector string or HTMLElement for a reference parent.
	  * @param {string|HTMLElement} childSelector - CSS selector string or HTMLElement for the child.
	  * @returns {Object} - An Object with left, top, width and height properties.
	*/
	d.calcRelativePosition = function(parent, child) {
		if (typeof parent === "string")
			parent = d.qs(parent);
		if (typeof child === "string")
			child = d.qs(child);

		if ((!parent || !child)
				&& (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))) {
			console.error("The parent or child were undefined or they weren't HTMLElements");// eslint-disable-line no-console
			return;
		}

		var parentRect = parent.getBoundingClientRect();
		var childRect = child.getBoundingClientRect();

		var offset = {
			left: null,
			top: null,
			width: null,
			height: null
		};

		offset.left = childRect.left - parentRect.left;
		offset.top = childRect.top - parentRect.top;
		offset.width = child.offsetWidth;
		offset.height = child.offsetHeight;

		return offset;
	};
	
	
	
	
	
	var imagesToLoad = [];
	var	callbacks = [];
		
	var runCallbacks = function() {
		var areAllLoaded = imagesToLoad.every(function(image) {
			return image.loaded;
		});
		
		if (areAllLoaded) {
			callbacks.forEach(function(callback) {
				callback();
			});
		}
	};
	
	d.notifyWhenLoaded = function(selector) {
		// https://stackoverflow.com/questions/7043509/this-inside-object
		// https://stackoverflow.com/questions/4616202/self-references-in-object-literal-declarations
		var imageToLoad = {
			selector: selector,
			loaded: false,
			setAsLoaded: function() {
				imageToLoad.loaded = true;
				runCallbacks();
			}
		};
		
		var image = d.qs(selector);
		if (image) {
			imagesToLoad.push(imageToLoad);
			
			// http://stackoverflow.com/questions/1977871/check-if-an-element-is-loaded-no-errors-in-javascript
			if (image.complete && image.naturalHeight) {
				imageToLoad.setAsLoaded();
			} else image.addEventListener("load", imageToLoad.setAsLoaded);
		}
		
		return image;
	};
	
	d.runWhenAllLoaded = function(callback) {
		callbacks.push(callback);
		runCallbacks();
	};
	
	d.resetElementsToLoad = function() {
		imagesToLoad = [];
		callbacks = [];
	};
	
	
	
	
	
	d.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	};
	
	// http://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
	d.getOS = function() {
		var os;
		var ua = window.navigator.userAgent;
		
		if (ua.indexOf("Win") != -1)		os = "Windows";
		if (ua.indexOf("Mac") != -1)		os = "macOS";
		if (ua.indexOf("Linux") != -1)		os = "Linux";
		if (ua.indexOf("Android") != -1)	os = "Android";
		if (ua.indexOf("like Mac") != -1)	os = "iOS";
		
		return os;
	};
	
	
	
	
	/**
	* Gets a cookie by name.
	* @param {string} name - Name of the cookie.
	* @returns {string} - The value of the cookie. null is no cookie was found with the given name.
	*/
	d.getCookie = function(name) {
		var nameWithEqual = name + "=";
		var ca = document.cookie.split(";");
		
		for (var i=0; i < ca.length; i++) {
			var c = ca[i];
			
			while (c.charAt(0) == " ")
				c = c.substring(1,c.length);
				
			if (c.indexOf(nameWithEqual) === 0)
				return c.substring(nameWithEqual.length, c.length);
		}
		return null;
	};
	
	/**
	* Sets a cookie by name.
	* @param {string} name - Name of the cookie.
	* @param {string} value - Value for the cookie.
	* @param {string} days - Expiration time in days.
	* @returns {undefined} - Always undefined
	*/
	d.setCookie = function(name, value, days) {
		var expires;
		
		if (days) {
			var date = new Date();
			
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		} else expires = "";
		
		document.cookie = name + "=" + value + expires + "; path=/";
	};
	
	/**
	* Removes a cookie by name.
	* @param {string} name - Name of the cookie to remove.
	* @returns {undefined} - Always undefined.
	*/
	d.removeCookie = function(name) {
		this.setCookie(name, "", -1);
	};
	
}(window.d = window.d || {}));


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
		audioTrack,
		audioTrackFormer,
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
	
	
	
	function changeAudio(audio) {
		audioTrackFormer = audioTrack;
		audioTrack = audio;
		
		if (audioTrack !== audioTrackFormer) {
			fadeAudio(audioTrackFormer);
			var audioTrackElement = d.gi("audio" + audio);
			audioTrackElement.currentTime = 0;
			audioTrackElement.volume = 1;
			audioTrackElement.play();
		}
	}
	
	
	
	function fadeAudio(audioTrackFormer) {
		if (audioTrackFormer) {
			var audioTrackFormerElement = d.gi("audio" + audioTrackFormer);
			var fadeAudio = d.si(function() {
				// console.log("volume: " + audioTrackFormerElement.volume); // eslint-disable-line
				if (audioTrackFormerElement.volume - 0.1 < 0) {
					audioTrackFormerElement.pause();
					clearInterval(fadeAudio);
					return;
				}
				audioTrackFormerElement.volume -= 0.1;
			}, 100);
		}
	}
	
	
	
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
			return;
		
		onTransition = true;
		
		label1: if ((e.deltaY > 0 || e.detail.deltaY > 0) && wheelLevel < (phrasesCount + slidesCount)) {
			if (wheelLevel === phrasesCount && !d.gc("main-bg").classList.contains("main-bg--in"))
				break label1;
			++wheelLevel;
			
			if (wheelLevel === 1) changeAudio(1);
			if (wheelLevel === 6) changeAudio(2);
			if (wheelLevel === 9) changeAudio(3);
			if (wheelLevel === 15) changeAudio(4);
			if (wheelLevel === 20) changeAudio(5);
			if (wheelLevel === 23) changeAudio(6);
			
			if (wheelLevel <= phrasesCount)
				movePhrases();
			else moveSlides();
		} else label2: if ((e.deltaY < 0 || e.detail.deltaY < 0 ) && wheelLevel > 0) {
			if (wheelLevel === phrasesCount && d.gc("main-bg").classList.contains("main-bg--in"))
				break label2;
				
			--wheelLevel;
			
			if (wheelLevel === 7) changeAudio(2);
			if (wheelLevel === 13) changeAudio(3);
			if (wheelLevel === 19) changeAudio(4);
			if (wheelLevel === 21) changeAudio(5);
			
			if (wheelLevel < phrasesCount)
				movePhrases();
			else moveSlides();
		}
		
		// console.log(wheelLevel); // eslint-disable-line
		
		d.st(function() { onTransition = false; }, 800);
	});
	
	// http://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
	d.ae("touchstart", /* touchStartListener =  */function(e) {
		yStart = e.touches[0].clientY;
	});
	
	d.ae("touchend",/*  touchEndListener =  */function(e) {
		yEnd = e.changedTouches[0].clientY;
		if (yEnd - yStart < -60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 } }));
		else if (yEnd - yStart > 60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: -1 } }));
	});
	
	
	
	// Moves horizontally and vertically the bubble layers in a random way
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
	
	
	
	// skipIntro(); // Uncomment it when developing and comment <div class="phrases"> on index.htm
}


WebFont.load({
	google: {
		families: ["Open Sans Condensed:300", "Source Sans Pro:400,900", "Black Ops One:400", "Bungee Shade:400", "Caveat:400", "Pacifico", "Monofett" ]
	},
	active: function() {
		initIntro();
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwiRE9NVG9vbHMuanMiLCJpbml0SW50cm8uanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdlYiBGb250IExvYWRlciB2MS42LjI4IC0gKGMpIEFkb2JlIFN5c3RlbXMsIEdvb2dsZS4gTGljZW5zZTogQXBhY2hlIDIuMCAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGFhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHAoYSxiLGMpe3A9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9hYTpiYTtyZXR1cm4gcC5hcHBseShudWxsLGFyZ3VtZW50cyl9dmFyIHE9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfTtmdW5jdGlvbiBjYShhLGIpe3RoaXMuYT1hO3RoaXMubz1ifHxhO3RoaXMuYz10aGlzLm8uZG9jdW1lbnR9dmFyIGRhPSEhd2luZG93LkZvbnRGYWNlO2Z1bmN0aW9uIHQoYSxiLGMsZCl7Yj1hLmMuY3JlYXRlRWxlbWVudChiKTtpZihjKWZvcih2YXIgZSBpbiBjKWMuaGFzT3duUHJvcGVydHkoZSkmJihcInN0eWxlXCI9PWU/Yi5zdHlsZS5jc3NUZXh0PWNbZV06Yi5zZXRBdHRyaWJ1dGUoZSxjW2VdKSk7ZCYmYi5hcHBlbmRDaGlsZChhLmMuY3JlYXRlVGV4dE5vZGUoZCkpO3JldHVybiBifWZ1bmN0aW9uIHUoYSxiLGMpe2E9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGIpWzBdO2F8fChhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7YS5pbnNlcnRCZWZvcmUoYyxhLmxhc3RDaGlsZCl9ZnVuY3Rpb24gdihhKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX1cbmZ1bmN0aW9uIHcoYSxiLGMpe2I9Ynx8W107Yz1jfHxbXTtmb3IodmFyIGQ9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxlPTA7ZTxiLmxlbmd0aDtlKz0xKXtmb3IodmFyIGY9ITEsZz0wO2c8ZC5sZW5ndGg7Zys9MSlpZihiW2VdPT09ZFtnXSl7Zj0hMDticmVha31mfHxkLnB1c2goYltlXSl9Yj1bXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSs9MSl7Zj0hMTtmb3IoZz0wO2c8Yy5sZW5ndGg7Zys9MSlpZihkW2VdPT09Y1tnXSl7Zj0hMDticmVha31mfHxiLnB1c2goZFtlXSl9YS5jbGFzc05hbWU9Yi5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKX1mdW5jdGlvbiB5KGEsYil7Zm9yKHZhciBjPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylpZihjW2RdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24gZWEoYSl7cmV0dXJuIGEuby5sb2NhdGlvbi5ob3N0bmFtZXx8YS5hLmxvY2F0aW9uLmhvc3RuYW1lfWZ1bmN0aW9uIHooYSxiLGMpe2Z1bmN0aW9uIGQoKXttJiZlJiZmJiYobShnKSxtPW51bGwpfWI9dChhLFwibGlua1wiLHtyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpiLG1lZGlhOlwiYWxsXCJ9KTt2YXIgZT0hMSxmPSEwLGc9bnVsbCxtPWN8fG51bGw7ZGE/KGIub25sb2FkPWZ1bmN0aW9uKCl7ZT0hMDtkKCl9LGIub25lcnJvcj1mdW5jdGlvbigpe2U9ITA7Zz1FcnJvcihcIlN0eWxlc2hlZXQgZmFpbGVkIHRvIGxvYWRcIik7ZCgpfSk6c2V0VGltZW91dChmdW5jdGlvbigpe2U9ITA7ZCgpfSwwKTt1KGEsXCJoZWFkXCIsYil9XG5mdW5jdGlvbiBBKGEsYixjLGQpe3ZhciBlPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07aWYoZSl7dmFyIGY9dChhLFwic2NyaXB0XCIse3NyYzpifSksZz0hMTtmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2d8fHRoaXMucmVhZHlTdGF0ZSYmXCJsb2FkZWRcIiE9dGhpcy5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPXRoaXMucmVhZHlTdGF0ZXx8KGc9ITAsYyYmYyhudWxsKSxmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiSEVBRFwiPT1mLnBhcmVudE5vZGUudGFnTmFtZSYmZS5yZW1vdmVDaGlsZChmKSl9O2UuYXBwZW5kQ2hpbGQoZik7c2V0VGltZW91dChmdW5jdGlvbigpe2d8fChnPSEwLGMmJmMoRXJyb3IoXCJTY3JpcHQgbG9hZCB0aW1lb3V0XCIpKSl9LGR8fDVFMyk7cmV0dXJuIGZ9cmV0dXJuIG51bGx9O2Z1bmN0aW9uIEIoKXt0aGlzLmE9MDt0aGlzLmM9bnVsbH1mdW5jdGlvbiBDKGEpe2EuYSsrO3JldHVybiBmdW5jdGlvbigpe2EuYS0tO0QoYSl9fWZ1bmN0aW9uIEUoYSxiKXthLmM9YjtEKGEpfWZ1bmN0aW9uIEQoYSl7MD09YS5hJiZhLmMmJihhLmMoKSxhLmM9bnVsbCl9O2Z1bmN0aW9uIEYoYSl7dGhpcy5hPWF8fFwiLVwifUYucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIucHVzaChhcmd1bWVudHNbY10ucmVwbGFjZSgvW1xcV19dKy9nLFwiXCIpLnRvTG93ZXJDYXNlKCkpO3JldHVybiBiLmpvaW4odGhpcy5hKX07ZnVuY3Rpb24gRyhhLGIpe3RoaXMuYz1hO3RoaXMuZj00O3RoaXMuYT1cIm5cIjt2YXIgYz0oYnx8XCJuNFwiKS5tYXRjaCgvXihbbmlvXSkoWzEtOV0pJC9pKTtjJiYodGhpcy5hPWNbMV0sdGhpcy5mPXBhcnNlSW50KGNbMl0sMTApKX1mdW5jdGlvbiBmYShhKXtyZXR1cm4gSChhKStcIiBcIisoYS5mK1wiMDBcIikrXCIgMzAwcHggXCIrSShhLmMpfWZ1bmN0aW9uIEkoYSl7dmFyIGI9W107YT1hLnNwbGl0KC8sXFxzKi8pO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLnJlcGxhY2UoL1snXCJdL2csXCJcIik7LTEhPWQuaW5kZXhPZihcIiBcIil8fC9eXFxkLy50ZXN0KGQpP2IucHVzaChcIidcIitkK1wiJ1wiKTpiLnB1c2goZCl9cmV0dXJuIGIuam9pbihcIixcIil9ZnVuY3Rpb24gSihhKXtyZXR1cm4gYS5hK2EuZn1mdW5jdGlvbiBIKGEpe3ZhciBiPVwibm9ybWFsXCI7XCJvXCI9PT1hLmE/Yj1cIm9ibGlxdWVcIjpcImlcIj09PWEuYSYmKGI9XCJpdGFsaWNcIik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBnYShhKXt2YXIgYj00LGM9XCJuXCIsZD1udWxsO2EmJigoZD1hLm1hdGNoKC8obm9ybWFsfG9ibGlxdWV8aXRhbGljKS9pKSkmJmRbMV0mJihjPWRbMV0uc3Vic3RyKDAsMSkudG9Mb3dlckNhc2UoKSksKGQ9YS5tYXRjaCgvKFsxLTldMDB8bm9ybWFsfGJvbGQpL2kpKSYmZFsxXSYmKC9ib2xkL2kudGVzdChkWzFdKT9iPTc6L1sxLTldMDAvLnRlc3QoZFsxXSkmJihiPXBhcnNlSW50KGRbMV0uc3Vic3RyKDAsMSksMTApKSkpO3JldHVybiBjK2J9O2Z1bmN0aW9uIGhhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWEuby5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dGhpcy5oPWI7dGhpcy5hPW5ldyBGKFwiLVwiKTt0aGlzLmo9ITEhPT1iLmV2ZW50czt0aGlzLmc9ITEhPT1iLmNsYXNzZXN9ZnVuY3Rpb24gaWEoYSl7YS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV0pO0soYSxcImxvYWRpbmdcIil9ZnVuY3Rpb24gTChhKXtpZihhLmcpe3ZhciBiPXkoYS5mLGEuYS5jKFwid2ZcIixcImFjdGl2ZVwiKSksYz1bXSxkPVthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXTtifHxjLnB1c2goYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIikpO3coYS5mLGMsZCl9SyhhLFwiaW5hY3RpdmVcIil9ZnVuY3Rpb24gSyhhLGIsYyl7aWYoYS5qJiZhLmhbYl0paWYoYylhLmhbYl0oYy5jLEooYykpO2Vsc2UgYS5oW2JdKCl9O2Z1bmN0aW9uIGphKCl7dGhpcy5jPXt9fWZ1bmN0aW9uIGthKGEsYixjKXt2YXIgZD1bXSxlO2ZvcihlIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIGY9YS5jW2VdO2YmJmQucHVzaChmKGJbZV0sYykpfXJldHVybiBkfTtmdW5jdGlvbiBNKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPXQodGhpcy5jLFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9LHRoaXMuZil9ZnVuY3Rpb24gTihhKXt1KGEuYyxcImJvZHlcIixhLmEpfWZ1bmN0aW9uIE8oYSl7cmV0dXJuXCJkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O2xlZnQ6LTk5OTlweDtmb250LXNpemU6MzAwcHg7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztsaW5lLWhlaWdodDpub3JtYWw7bWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtdmFyaWFudDpub3JtYWw7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5OlwiK0koYS5jKStcIjtcIisoXCJmb250LXN0eWxlOlwiK0goYSkrXCI7Zm9udC13ZWlnaHQ6XCIrKGEuZitcIjAwXCIpK1wiO1wiKX07ZnVuY3Rpb24gUChhLGIsYyxkLGUsZil7dGhpcy5nPWE7dGhpcy5qPWI7dGhpcy5hPWQ7dGhpcy5jPWM7dGhpcy5mPWV8fDNFMzt0aGlzLmg9Znx8dm9pZCAwfVAucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jLm8uZG9jdW1lbnQsYj10aGlzLGM9cSgpLGQ9bmV3IFByb21pc2UoZnVuY3Rpb24oZCxlKXtmdW5jdGlvbiBmKCl7cSgpLWM+PWIuZj9lKCk6YS5mb250cy5sb2FkKGZhKGIuYSksYi5oKS50aGVuKGZ1bmN0aW9uKGEpezE8PWEubGVuZ3RoP2QoKTpzZXRUaW1lb3V0KGYsMjUpfSxmdW5jdGlvbigpe2UoKX0pfWYoKX0pLGU9bnVsbCxmPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsZCl7ZT1zZXRUaW1lb3V0KGQsYi5mKX0pO1Byb21pc2UucmFjZShbZixkXSkudGhlbihmdW5jdGlvbigpe2UmJihjbGVhclRpbWVvdXQoZSksZT1udWxsKTtiLmcoYi5hKX0sZnVuY3Rpb24oKXtiLmooYi5hKX0pfTtmdW5jdGlvbiBRKGEsYixjLGQsZSxmLGcpe3RoaXMudj1hO3RoaXMuQj1iO3RoaXMuYz1jO3RoaXMuYT1kO3RoaXMucz1nfHxcIkJFU2Jzd3lcIjt0aGlzLmY9e307dGhpcy53PWV8fDNFMzt0aGlzLnU9Znx8bnVsbDt0aGlzLm09dGhpcy5qPXRoaXMuaD10aGlzLmc9bnVsbDt0aGlzLmc9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5oPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMuaj1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLm09bmV3IE0odGhpcy5jLHRoaXMucyk7YT1uZXcgRyh0aGlzLmEuYytcIixzZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuZy5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKHRoaXMuYS5jK1wiLHNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmguYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5qLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcoXCJzYW5zLXNlcmlmXCIsSih0aGlzLmEpKTthPVxuTyhhKTt0aGlzLm0uYS5zdHlsZS5jc3NUZXh0PWE7Tih0aGlzLmcpO04odGhpcy5oKTtOKHRoaXMuaik7Tih0aGlzLm0pfXZhciBSPXtEOlwic2VyaWZcIixDOlwic2Fucy1zZXJpZlwifSxTPW51bGw7ZnVuY3Rpb24gVCgpe2lmKG51bGw9PT1TKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7Uz0hIWEmJig1MzY+cGFyc2VJbnQoYVsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGFbMV0sMTApJiYxMT49cGFyc2VJbnQoYVsyXSwxMCkpfXJldHVybiBTfVEucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy5mLnNlcmlmPXRoaXMuai5hLm9mZnNldFdpZHRoO3RoaXMuZltcInNhbnMtc2VyaWZcIl09dGhpcy5tLmEub2Zmc2V0V2lkdGg7dGhpcy5BPXEoKTtVKHRoaXMpfTtcbmZ1bmN0aW9uIGxhKGEsYixjKXtmb3IodmFyIGQgaW4gUilpZihSLmhhc093blByb3BlcnR5KGQpJiZiPT09YS5mW1JbZF1dJiZjPT09YS5mW1JbZF1dKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIFUoYSl7dmFyIGI9YS5nLmEub2Zmc2V0V2lkdGgsYz1hLmguYS5vZmZzZXRXaWR0aCxkOyhkPWI9PT1hLmYuc2VyaWYmJmM9PT1hLmZbXCJzYW5zLXNlcmlmXCJdKXx8KGQ9VCgpJiZsYShhLGIsYykpO2Q/cSgpLWEuQT49YS53P1QoKSYmbGEoYSxiLGMpJiYobnVsbD09PWEudXx8YS51Lmhhc093blByb3BlcnR5KGEuYS5jKSk/VihhLGEudik6VihhLGEuQik6bWEoYSk6VihhLGEudil9ZnVuY3Rpb24gbWEoYSl7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7VSh0aGlzKX0sYSksNTApfWZ1bmN0aW9uIFYoYSxiKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXt2KHRoaXMuZy5hKTt2KHRoaXMuaC5hKTt2KHRoaXMuai5hKTt2KHRoaXMubS5hKTtiKHRoaXMuYSl9LGEpLDApfTtmdW5jdGlvbiBXKGEsYixjKXt0aGlzLmM9YTt0aGlzLmE9Yjt0aGlzLmY9MDt0aGlzLm09dGhpcy5qPSExO3RoaXMucz1jfXZhciBYPW51bGw7Vy5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7Yi5nJiZ3KGIuZixbYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIildLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIiksYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKV0pO0soYixcImZvbnRhY3RpdmVcIixhKTt0aGlzLm09ITA7bmEodGhpcyl9O1xuVy5wcm90b3R5cGUuaD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7aWYoYi5nKXt2YXIgYz15KGIuZixiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKSksZD1bXSxlPVtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildO2N8fGQucHVzaChiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpKTt3KGIuZixkLGUpfUsoYixcImZvbnRpbmFjdGl2ZVwiLGEpO25hKHRoaXMpfTtmdW5jdGlvbiBuYShhKXswPT0tLWEuZiYmYS5qJiYoYS5tPyhhPWEuYSxhLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJhY3RpdmVcIildLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpLGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpXSksSyhhLFwiYWN0aXZlXCIpKTpMKGEuYSkpfTtmdW5jdGlvbiBvYShhKXt0aGlzLmo9YTt0aGlzLmE9bmV3IGphO3RoaXMuaD0wO3RoaXMuZj10aGlzLmc9ITB9b2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dGhpcy5jPW5ldyBjYSh0aGlzLmosYS5jb250ZXh0fHx0aGlzLmopO3RoaXMuZz0hMSE9PWEuZXZlbnRzO3RoaXMuZj0hMSE9PWEuY2xhc3NlcztwYSh0aGlzLG5ldyBoYSh0aGlzLmMsYSksYSl9O1xuZnVuY3Rpb24gcWEoYSxiLGMsZCxlKXt2YXIgZj0wPT0tLWEuaDsoYS5mfHxhLmcpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGE9ZXx8bnVsbCxtPWR8fG51bGx8fHt9O2lmKDA9PT1jLmxlbmd0aCYmZilMKGIuYSk7ZWxzZXtiLmYrPWMubGVuZ3RoO2YmJihiLmo9Zik7dmFyIGgsbD1bXTtmb3IoaD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgaz1jW2hdLG49bVtrLmNdLHI9Yi5hLHg9aztyLmcmJncoci5mLFtyLmEuYyhcIndmXCIseC5jLEooeCkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildKTtLKHIsXCJmb250bG9hZGluZ1wiLHgpO3I9bnVsbDtpZihudWxsPT09WClpZih3aW5kb3cuRm9udEZhY2Upe3ZhciB4PS9HZWNrby4qRmlyZWZveFxcLyhcXGQrKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkseGE9L09TIFguKlZlcnNpb25cXC8xMFxcLi4qU2FmYXJpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKTtcblg9eD80MjxwYXJzZUludCh4WzFdLDEwKTp4YT8hMTohMH1lbHNlIFg9ITE7WD9yPW5ldyBQKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxrLGIucyxuKTpyPW5ldyBRKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxrLGIucyxhLG4pO2wucHVzaChyKX1mb3IoaD0wO2g8bC5sZW5ndGg7aCsrKWxbaF0uc3RhcnQoKX19LDApfWZ1bmN0aW9uIHBhKGEsYixjKXt2YXIgZD1bXSxlPWMudGltZW91dDtpYShiKTt2YXIgZD1rYShhLmEsYyxhLmMpLGY9bmV3IFcoYS5jLGIsZSk7YS5oPWQubGVuZ3RoO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKWRbYl0ubG9hZChmdW5jdGlvbihiLGQsYyl7cWEoYSxmLGIsZCxjKX0pfTtmdW5jdGlvbiByYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifVxucmEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe2lmKGZbXCJfX210aV9mbnRMc3RcIitkXSl7dmFyIGM9ZltcIl9fbXRpX2ZudExzdFwiK2RdKCksZT1bXSxoO2lmKGMpZm9yKHZhciBsPTA7bDxjLmxlbmd0aDtsKyspe3ZhciBrPWNbbF0uZm9udGZhbWlseTt2b2lkIDAhPWNbbF0uZm9udFN0eWxlJiZ2b2lkIDAhPWNbbF0uZm9udFdlaWdodD8oaD1jW2xdLmZvbnRTdHlsZStjW2xdLmZvbnRXZWlnaHQsZS5wdXNoKG5ldyBHKGssaCkpKTplLnB1c2gobmV3IEcoaykpfWEoZSl9ZWxzZSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YigpfSw1MCl9dmFyIGM9dGhpcyxkPWMuYS5wcm9qZWN0SWQsZT1jLmEudmVyc2lvbjtpZihkKXt2YXIgZj1jLmMubztBKHRoaXMuYywoYy5hLmFwaXx8XCJodHRwczovL2Zhc3QuZm9udHMubmV0L2pzYXBpXCIpK1wiL1wiK2QrXCIuanNcIisoZT9cIj92PVwiK2U6XCJcIiksZnVuY3Rpb24oZSl7ZT9hKFtdKTooZltcIl9fTW9ub3R5cGVDb25maWd1cmF0aW9uX19cIitcbmRdPWZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0sYigpKX0pLmlkPVwiX19Nb25vdHlwZUFQSVNjcmlwdF9fXCIrZH1lbHNlIGEoW10pfTtmdW5jdGlvbiBzYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXNhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmEudXJsc3x8W10sZT10aGlzLmEuZmFtaWxpZXN8fFtdLGY9dGhpcy5hLnRlc3RTdHJpbmdzfHx7fSxnPW5ldyBCO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKXoodGhpcy5jLGRbYl0sQyhnKSk7dmFyIG09W107Yj0wO2ZvcihjPWUubGVuZ3RoO2I8YztiKyspaWYoZD1lW2JdLnNwbGl0KFwiOlwiKSxkWzFdKWZvcih2YXIgaD1kWzFdLnNwbGl0KFwiLFwiKSxsPTA7bDxoLmxlbmd0aDtsKz0xKW0ucHVzaChuZXcgRyhkWzBdLGhbbF0pKTtlbHNlIG0ucHVzaChuZXcgRyhkWzBdKSk7RShnLGZ1bmN0aW9uKCl7YShtLGYpfSl9O2Z1bmN0aW9uIHRhKGEsYil7YT90aGlzLmM9YTp0aGlzLmM9dWE7dGhpcy5hPVtdO3RoaXMuZj1bXTt0aGlzLmc9Ynx8XCJcIn12YXIgdWE9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzc1wiO2Z1bmN0aW9uIHZhKGEsYil7Zm9yKHZhciBjPWIubGVuZ3RoLGQ9MDtkPGM7ZCsrKXt2YXIgZT1iW2RdLnNwbGl0KFwiOlwiKTszPT1lLmxlbmd0aCYmYS5mLnB1c2goZS5wb3AoKSk7dmFyIGY9XCJcIjsyPT1lLmxlbmd0aCYmXCJcIiE9ZVsxXSYmKGY9XCI6XCIpO2EuYS5wdXNoKGUuam9pbihmKSl9fVxuZnVuY3Rpb24gd2EoYSl7aWYoMD09YS5hLmxlbmd0aCl0aHJvdyBFcnJvcihcIk5vIGZvbnRzIHRvIGxvYWQhXCIpO2lmKC0xIT1hLmMuaW5kZXhPZihcImtpdD1cIikpcmV0dXJuIGEuYztmb3IodmFyIGI9YS5hLmxlbmd0aCxjPVtdLGQ9MDtkPGI7ZCsrKWMucHVzaChhLmFbZF0ucmVwbGFjZSgvIC9nLFwiK1wiKSk7Yj1hLmMrXCI/ZmFtaWx5PVwiK2Muam9pbihcIiU3Q1wiKTswPGEuZi5sZW5ndGgmJihiKz1cIiZzdWJzZXQ9XCIrYS5mLmpvaW4oXCIsXCIpKTswPGEuZy5sZW5ndGgmJihiKz1cIiZ0ZXh0PVwiK2VuY29kZVVSSUNvbXBvbmVudChhLmcpKTtyZXR1cm4gYn07ZnVuY3Rpb24geWEoYSl7dGhpcy5mPWE7dGhpcy5hPVtdO3RoaXMuYz17fX1cbnZhciB6YT17bGF0aW46XCJCRVNic3d5XCIsXCJsYXRpbi1leHRcIjpcIlxcdTAwZTdcXHUwMGY2XFx1MDBmY1xcdTAxMWZcXHUwMTVmXCIsY3lyaWxsaWM6XCJcXHUwNDM5XFx1MDQ0ZlxcdTA0MTZcIixncmVlazpcIlxcdTAzYjFcXHUwM2IyXFx1MDNhM1wiLGtobWVyOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCIsSGFudW1hbjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwifSxBYT17dGhpbjpcIjFcIixleHRyYWxpZ2h0OlwiMlwiLFwiZXh0cmEtbGlnaHRcIjpcIjJcIix1bHRyYWxpZ2h0OlwiMlwiLFwidWx0cmEtbGlnaHRcIjpcIjJcIixsaWdodDpcIjNcIixyZWd1bGFyOlwiNFwiLGJvb2s6XCI0XCIsbWVkaXVtOlwiNVwiLFwic2VtaS1ib2xkXCI6XCI2XCIsc2VtaWJvbGQ6XCI2XCIsXCJkZW1pLWJvbGRcIjpcIjZcIixkZW1pYm9sZDpcIjZcIixib2xkOlwiN1wiLFwiZXh0cmEtYm9sZFwiOlwiOFwiLGV4dHJhYm9sZDpcIjhcIixcInVsdHJhLWJvbGRcIjpcIjhcIix1bHRyYWJvbGQ6XCI4XCIsYmxhY2s6XCI5XCIsaGVhdnk6XCI5XCIsbDpcIjNcIixyOlwiNFwiLGI6XCI3XCJ9LEJhPXtpOlwiaVwiLGl0YWxpYzpcImlcIixuOlwiblwiLG5vcm1hbDpcIm5cIn0sXG5DYT0vXih0aGlufCg/Oig/OmV4dHJhfHVsdHJhKS0/KT9saWdodHxyZWd1bGFyfGJvb2t8bWVkaXVtfCg/Oig/OnNlbWl8ZGVtaXxleHRyYXx1bHRyYSktPyk/Ym9sZHxibGFja3xoZWF2eXxsfHJ8YnxbMS05XTAwKT8obnxpfG5vcm1hbHxpdGFsaWMpPyQvO1xuZnVuY3Rpb24gRGEoYSl7Zm9yKHZhciBiPWEuZi5sZW5ndGgsYz0wO2M8YjtjKyspe3ZhciBkPWEuZltjXS5zcGxpdChcIjpcIiksZT1kWzBdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSxmPVtcIm40XCJdO2lmKDI8PWQubGVuZ3RoKXt2YXIgZzt2YXIgbT1kWzFdO2c9W107aWYobSlmb3IodmFyIG09bS5zcGxpdChcIixcIiksaD1tLmxlbmd0aCxsPTA7bDxoO2wrKyl7dmFyIGs7az1tW2xdO2lmKGsubWF0Y2goL15bXFx3LV0rJC8pKXt2YXIgbj1DYS5leGVjKGsudG9Mb3dlckNhc2UoKSk7aWYobnVsbD09bilrPVwiXCI7ZWxzZXtrPW5bMl07az1udWxsPT1rfHxcIlwiPT1rP1wiblwiOkJhW2tdO249blsxXTtpZihudWxsPT1ufHxcIlwiPT1uKW49XCI0XCI7ZWxzZSB2YXIgcj1BYVtuXSxuPXI/cjppc05hTihuKT9cIjRcIjpuLnN1YnN0cigwLDEpO2s9W2ssbl0uam9pbihcIlwiKX19ZWxzZSBrPVwiXCI7ayYmZy5wdXNoKGspfTA8Zy5sZW5ndGgmJihmPWcpOzM9PWQubGVuZ3RoJiYoZD1kWzJdLGc9W10sZD1kP2Quc3BsaXQoXCIsXCIpOlxuZywwPGQubGVuZ3RoJiYoZD16YVtkWzBdXSkmJihhLmNbZV09ZCkpfWEuY1tlXXx8KGQ9emFbZV0pJiYoYS5jW2VdPWQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKz0xKWEuYS5wdXNoKG5ldyBHKGUsZltkXSkpfX07ZnVuY3Rpb24gRWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn12YXIgRmE9e0FyaW1vOiEwLENvdXNpbmU6ITAsVGlub3M6ITB9O0VhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBCLGM9dGhpcy5jLGQ9bmV3IHRhKHRoaXMuYS5hcGksdGhpcy5hLnRleHQpLGU9dGhpcy5hLmZhbWlsaWVzO3ZhKGQsZSk7dmFyIGY9bmV3IHlhKGUpO0RhKGYpO3ooYyx3YShkKSxDKGIpKTtFKGIsZnVuY3Rpb24oKXthKGYuYSxmLmMsRmEpfSl9O2Z1bmN0aW9uIEdhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9R2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLmlkLGM9dGhpcy5jLm87Yj9BKHRoaXMuYywodGhpcy5hLmFwaXx8XCJodHRwczovL3VzZS50eXBla2l0Lm5ldFwiKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7aWYoYilhKFtdKTtlbHNlIGlmKGMuVHlwZWtpdCYmYy5UeXBla2l0LmNvbmZpZyYmYy5UeXBla2l0LmNvbmZpZy5mbil7Yj1jLlR5cGVraXQuY29uZmlnLmZuO2Zvcih2YXIgZT1bXSxmPTA7ZjxiLmxlbmd0aDtmKz0yKWZvcih2YXIgZz1iW2ZdLG09YltmKzFdLGg9MDtoPG0ubGVuZ3RoO2grKyllLnB1c2gobmV3IEcoZyxtW2hdKSk7dHJ5e2MuVHlwZWtpdC5sb2FkKHtldmVudHM6ITEsY2xhc3NlczohMSxhc3luYzohMH0pfWNhdGNoKGwpe31hKGUpfX0sMkUzKTphKFtdKX07ZnVuY3Rpb24gSGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9W119SGEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5mLmlkLGM9dGhpcy5jLm8sZD10aGlzO2I/KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX3x8KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfXz17fSksYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fW2JdPWZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBnPTAsbT1jLmZvbnRzLmxlbmd0aDtnPG07KytnKXt2YXIgaD1jLmZvbnRzW2ddO2QuYS5wdXNoKG5ldyBHKGgubmFtZSxnYShcImZvbnQtd2VpZ2h0OlwiK2gud2VpZ2h0K1wiO2ZvbnQtc3R5bGU6XCIraC5zdHlsZSkpKX1hKGQuYSl9LEEodGhpcy5jLCh0aGlzLmYuYXBpfHxcImh0dHBzOi8vZi5mb250ZGVjay5jb20vcy9jc3MvanMvXCIpK2VhKHRoaXMuYykrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2ImJmEoW10pfSkpOmEoW10pfTt2YXIgWT1uZXcgb2Eod2luZG93KTtZLmEuYy5jdXN0b209ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHNhKGIsYSl9O1kuYS5jLmZvbnRkZWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBIYShiLGEpfTtZLmEuYy5tb25vdHlwZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgcmEoYixhKX07WS5hLmMudHlwZWtpdD1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgR2EoYixhKX07WS5hLmMuZ29vZ2xlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBFYShiLGEpfTt2YXIgWj17bG9hZDpwKFkubG9hZCxZKX07XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gWn0pOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1aOih3aW5kb3cuV2ViRm9udD1aLHdpbmRvdy5XZWJGb250Q29uZmlnJiZZLmxvYWQod2luZG93LldlYkZvbnRDb25maWcpKTt9KCkpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2thbmR1dmlzbGEvcGx5Z3JuZFxyXG52YXIgUGx5Z3JuZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHR2YXIgX3RoaXMgPSB0aGlzOyAgICAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gcm9vdCBvYmplY3Q7XHJcblx0dGhpcy52aWV3cyA9IFtdOyAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgd2l0aCB2aWV3c1xyXG5cdHRoaXMudG90YWxWaWV3cyA9IFtdOyAgICAgICAgICAgICAgIC8vIENvdW50ZXIgdG8ga2VlcCB0cmFjayBpZiBhbGwgdmlld3MgYXJlIGxvYWRlZC5cclxuXHR0aGlzLmN1cnJlbnRWaWV3ID0gMDsgICAgICAgICAgICAgICAvLyBDdXJyZW50Vmlld1xyXG5cdHRoaXMubW91c2VQb3NpdGlvbiA9IHt4OiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC8xMDAqMjApLCB5OiAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQvMTAwKjIwKSB9OyAvLyBNb3VzZSBwb3NpdGlvbiAoY2FuIGJlIHVzZWQgYnkgdmlld3MpXHJcblx0dGhpcy5mcmFtZVJhdGUgPSA2MDtcclxuXHR0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cdHRoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHJcblx0Ly8gQ3JlYXRlIGNhbnZhcyBvYmplY3Q6XHJcblx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1iZ1wiKVswXTtcclxuLy9cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuXHQvLyBDb250ZXh0IE9iamVjdDpcclxuXHR0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblx0Ly8gUmVzaXplIGZ1bmN0aW9uOlxyXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24oKXtcclxuXHRcdF90aGlzLmN0eC53aWR0aCAgPSBfdGhpcy5jYW52YXMud2lkdGggID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHRcdF90aGlzLmN0eC5oZWlnaHQgPSBfdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcblx0fTtcclxuXHJcblx0Ly8gQW5kIGJpbmQgaXQgdG8gdGhlIHdpbmRvdzpcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZSk7XHJcblx0dGhpcy5yZXNpemUoKTtcclxuXHJcblx0Ly8gTW91c2UgcG9zaXRpb24gKGNhbiBiZSB1c2VkIGJ5IHZpZXdzKTpcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKXtcclxuXHRcdF90aGlzLm1vdXNlUG9zaXRpb24ueCA9IGUuY2xpZW50WDtcclxuXHRcdF90aGlzLm1vdXNlUG9zaXRpb24ueSA9IGUuY2xpZW50WTtcclxuXHR9KTtcclxuXHJcblx0LypcdFx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VQb3NpdGlvbi54ID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0IF90aGlzLm1vdXNlUG9zaXRpb24ueSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuXHQgX3RoaXMuY2xpY2sgPSB0cnVlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cdCBfdGhpcy5jbGljayA9IGZhbHNlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IHRydWU7XHJcblx0IF90aGlzLmNsaWNrID0gdHJ1ZTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0IF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0IH0pOyovXHJcblxyXG5cdC8vIEFkZCBleHRyYSBmdW5jdGlvbnMgdG8gdGhlIGNvbnRleHQgb2JqZWN0OlxyXG5cdHRoaXMuY3R4LmxpbmVUaHJvdWdoID0gZnVuY3Rpb24ocG9pbnRzKVxyXG5cdHtcclxuXHRcdGZvcih2YXIgaSBpbiBwb2ludHMpIHtcclxuXHRcdFx0dGhpcy5saW5lVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5jdXJ2ZVRocm91Z2ggPSBmdW5jdGlvbihwb2ludHMpXHJcblx0e1xyXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMjsgaSArKylcclxuXHRcdHtcclxuXHRcdFx0dmFyIHhjID0gKHBvaW50c1tpXS54ICsgcG9pbnRzW2kgKyAxXS54KSAvIDI7XHJcblx0XHRcdHZhciB5YyA9IChwb2ludHNbaV0ueSArIHBvaW50c1tpICsgMV0ueSkgLyAyO1xyXG5cdFx0XHR0aGlzLnF1YWRyYXRpY0N1cnZlVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55LCB4YywgeWMpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY3VydmUgdGhyb3VnaCB0aGUgbGFzdCB0d28gcG9pbnRzXHJcblx0XHR0aGlzLnF1YWRyYXRpY0N1cnZlVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55LCBwb2ludHNbaSsxXS54LHBvaW50c1tpKzFdLnkpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRpcmVjdGlvbiA9IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKVxyXG5cdHtcclxuXHRcdHJldHVybiBNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRpc3RhbmNlID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydChcclxuXHRcdFx0TWF0aC5wb3coeDIgLSB4MSwgMikgKyBNYXRoLnBvdyh5MiAtIHkxLCAyKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5kcmF3Q2lyY2xlID0gZnVuY3Rpb24oeCwgeSwgcmFkaXVzKVxyXG5cdHtcclxuXHRcdHRoaXMuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCB0cnVlKTtcclxuXHR9O1xyXG5cclxuXHQvKlx0XHRcdFx0Ly8gUGFnZXIgZnVuY3Rpb246XHJcblx0IHRoaXMucGFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5cdCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucGFnZXIpO1xyXG5cclxuXHQgdGhpcy5idWlsZFBhZ2VyID0gZnVuY3Rpb24oKVxyXG5cdCB7XHJcblx0IGZvcih2YXIgaSBpbiBfdGhpcy52aWV3cylcclxuXHQge1xyXG5cdCAvLyBDcmVhdGUgYW4gYW5jaG9yLCB3aGljaCBsb2FkcyB0aGUgc3BlY2lmaWMgdmlldzpcclxuXHQgdmFyIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdCBhbmNob3IuaW5uZXJUZXh0ID0gcGFyc2VJbnQoaSkgKyAxO1xyXG5cdCBhbmNob3Iuc2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIsIGkpO1xyXG5cdCBhbmNob3Iuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgX3RoaXMudmlld3NbaV0ubmFtZSk7XHJcblx0IGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMucGxheVZpZXcodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIikpO1xyXG5cdCB9KTtcclxuXHQgX3RoaXMucGFnZXIuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcclxuXHQgfVxyXG5cdCB9OyovXHJcblxyXG5cdC8vIFZpZXdzIGZ1bmN0aW9uczpcclxuXHR0aGlzLmFkZFZpZXcgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0X3RoaXMudG90YWxWaWV3cy5wdXNoKHtcclxuXHRcdFx0b3JkZXI6IF90aGlzLnRvdGFsVmlld3MubGVuZ3RoLFxyXG5cdFx0XHRzbHVnOiBcImRvdHMtMlwiLFxyXG5cdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIENoZWNrIGlmIGFsbCBpcyBsb2FkZWQgYW5kIHN0YXJ0IGlmIHNvOlxyXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHR2YXIgaW50ZXJ2YWxUaW1lb3V0ID0gMDtcclxuXHRcdHZhciBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0aW50ZXJ2YWxUaW1lb3V0Kys7XHJcblx0XHRcdGlmKGludGVydmFsVGltZW91dCA9PSAzMDApIHtcclxuXHRcdFx0XHQvLyB3YWl0ZWQgZm9yIDMwIHNlY29uZHMuIFNvbWV0aGluZyBpcyBjbGVhcmx5IHdyb25nLlxyXG5cdFx0XHRcdGFsZXJ0KFwiVGltZSBvdXQhIElzIHlvdXIgSW50ZXJuZXQgY29ubmVjdGlvbiB0aMOhdCBzbG93PyE/XCIpO1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gQ2hlY2sgaWYgYWxsIHZpZXdzIGFyZSBsb2FkZWQ6XHJcblx0XHRcdHZhciBhbGxMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRmb3IodmFyIGkgaW4gX3RoaXMudG90YWxWaWV3cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCFfdGhpcy50b3RhbFZpZXdzW2ldLmxvYWRlZCkgeyBhbGxMb2FkZWQgPSBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGFsbExvYWRlZCkge1xyXG5cdFx0XHRcdC8vIEFsbCB2aWV3cyBhcmUgbG9hZGVkLlxyXG5cdFx0XHRcdHZhciBuZXdWaWV3cyA9IFtdO1xyXG5cdFx0XHRcdGZvcih2YXIgaTIgaW4gX3RoaXMudG90YWxWaWV3cykge1xyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRTbHVnID0gX3RoaXMudG90YWxWaWV3c1tpMl0uc2x1ZztcclxuXHRcdFx0XHRcdGZvcih2YXIgaiBpbiBfdGhpcy52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRpZihfdGhpcy52aWV3c1tqXS5zbHVnID09IGN1cnJlbnRTbHVnKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3Vmlld3MucHVzaChfdGhpcy52aWV3c1tqXSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X3RoaXMudmlld3MgPSBuZXdWaWV3cztcclxuXHJcblx0XHRcdFx0Ly8gQ2xlYXIgaW50ZXJ2YWw6XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuXHJcblx0XHRcdFx0Ly8gQnVpbGQgdGhlIHBhZ2VyOlxyXG4vL1x0XHRcdFx0XHRcdFx0X3RoaXMuYnVpbGRQYWdlcigpO1xyXG5cclxuXHRcdFx0XHQvLyBTdGFydCB0aGUgYXBwOlxyXG5cdFx0XHRcdF90aGlzLnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIDI1MCk7XHJcblx0fTtcclxuXHJcblx0Ly8gU3RhcnQgZnVuY3Rpb246XHJcblx0dGhpcy5zdGFydCA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHQvLyBHZXQgdGhlIHJpZ2h0IHZpZXc6XHJcblx0XHQvKlx0XHRcdFx0XHRpZih3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIlwiKSB7XHJcblx0XHQgdmFyIGN1cnJlbnRIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcblx0XHQgZm9yKHZhciBpIGluIF90aGlzLnZpZXdzKSB7XHJcblx0XHQgaWYoX3RoaXMudmlld3NbaV0uc2x1ZyA9PSBjdXJyZW50SGFzaCkge1xyXG5cdFx0IF90aGlzLmN1cnJlbnRWaWV3ID0gaTtcclxuXHRcdCB9XHJcblx0XHQgfVxyXG5cdFx0IH0gZWxzZSB7Ki9cclxuXHRcdF90aGlzLmN1cnJlbnRWaWV3ID0gX3RoaXMudmlld3MubGVuZ3RoIC0gMTtcclxuLy9cdFx0XHRcdFx0fVxyXG5cdFx0X3RoaXMucGxheVZpZXcoX3RoaXMuY3VycmVudFZpZXcpO1xyXG5cdFx0Ly8gU2V0dXAgdGhlIGxvb3A6XHJcblx0XHQvLyBzZXRJbnRlcnZhbChmdW5jdGlvbiBhTmFtZSgpe1xyXG5cdFx0KGZ1bmN0aW9uIGFOYW1lKCl7XHJcblx0XHRcdC8vIFBhc3Mgb24gc29tZSB2YXJpYWJsZXM6XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLm1vdXNlUG9zaXRpb24gPSBfdGhpcy5tb3VzZVBvc2l0aW9uO1xyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycy5tb3VzZURvd24gPSBfdGhpcy5tb3VzZURvd247XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLmNsaWNrID0gX3RoaXMuY2xpY2s7XHJcblx0XHRcdF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0XHRcdC8vIE1ha2UgdGhhdCBzdGVwOlxyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10uc3RlcEZ1bmN0aW9uKF90aGlzLmN0eCwgX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMpO1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYU5hbWUpO1xyXG5cdFx0Ly8gfSwgMTAwMCAvIF90aGlzLmZyYW1lUmF0ZSk7IC8vIGRlZmF1bHQgPSA2MCBmcHMuXHJcblx0XHRcdH0pKCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5wbGF5VmlldyA9IGZ1bmN0aW9uKHZpZXdOcilcclxuXHR7XHJcblx0XHQvLyBVbi1pbml0aWFsaXplIHRoZSBjdXJyZW50IHZpZXc6XHJcblx0XHR0cnkge1xyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udW5Jbml0RnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0XHR9IGNhdGNoKGUpIHt9XHJcblx0XHQvLyBHbyBmdXJ0aGVyIHdpdGggdGhlIHJlcXVlc3RlZCB2aWV3IGZyb20gaGVyZTpcclxuXHRcdF90aGlzLmN1cnJlbnRWaWV3ID0gdmlld05yO1xyXG5cdFx0Ly8gUmVtb3ZlIHRoZSBjbGFzcyBvZiB0aGUgYWN0aXZlIHZpZXc6XHJcbi8vXHRcdFx0XHRcdGlmKHRoaXMucGFnZXIucXVlcnlTZWxlY3RvcihcImEuYWN0aXZlXCIpKSB7XHJcbi8vXHRcdFx0XHRcdFx0dGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYS5hY3RpdmVcIikuY2xhc3NOYW1lID0gXCJcIjtcclxuLy9cdFx0XHRcdFx0fVxyXG5cdFx0Ly8gQW5kIGFkZCBpdCB0byB0aGUgbmV3IHZpZXchXHJcbi8vXHRcdFx0XHRcdHRoaXMucGFnZXIucXVlcnlTZWxlY3RvcihcImFbZGF0YS12aWV3PVwiXCIgKyBfdGhpcy5jdXJyZW50VmlldyArIFwiXCJdXCIpLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCJcclxuXHRcdC8vIFNldCB0aGUgaGFzaDpcclxuLy9cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10uc2x1ZztcclxuXHRcdC8vIEluaXRpYWxpemUgdGhlIGN1cnJlbnQgdmlldzpcclxuXHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5pbml0RnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0fTtcclxuXHJcbn07XHJcblxyXG52YXIgU3RlcEdlbmVyYXRvciA9IGZ1bmN0aW9uKGNvbXBsZXhpdHksIG1pbkluYywgbWF4SW5jLCBtaW5NdWwsIG1heE11bClcclxue1xyXG5cdHRoaXMuc3RlcHMgICAgICAgPSBbXTtcclxuXHR0aGlzLmluY3MgICAgICAgID0gW107XHJcblx0dGhpcy5tdWx0aXBsaWVycyA9IFtdO1xyXG5cdHRoaXMuY29tcGxleGl0eSAgPSBjb21wbGV4aXR5O1xyXG5cclxuXHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHQvLyBEZWZhdWx0czpcclxuXHRpZihtaW5JbmMgPT09IG51bGwpIHsgbWluSW5jID0gMDsgfVxyXG5cdGlmKG1heEluYyA9PT0gbnVsbCkgeyBtYXhJbmMgPSAwLjE7IH1cclxuXHRpZihtaW5NdWwgPT09IG51bGwpIHsgbWluTXVsID0gMC43OyB9XHJcblx0aWYobWF4TXVsID09PSBudWxsKSB7IG1heE11bCA9IDEuMzsgfVxyXG5cclxuXHQvLyBJbml0aWFsaXNlOlxyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHR7XHJcblx0XHR0aGlzLnN0ZXBzLnB1c2goTWF0aC5yYW5kb20oKSAqIE1hdGguUEkpO1xyXG5cdFx0dGhpcy5pbmNzLnB1c2gobWluSW5jICsgTWF0aC5yYW5kb20oKSAqIChtYXhJbmMgLSBtaW5JbmMpKTtcclxuXHRcdHRoaXMubXVsdGlwbGllcnMucHVzaChtaW5NdWwgKyBNYXRoLnJhbmRvbSgpICogKG1heE11bCAtIG1pbk11bCkpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zdGVwID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdC8vIEluY3JlYXNlIHRoZSBjb3VudGVyczpcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdF90aGlzLnN0ZXBzW2ldICs9IF90aGlzLmluY3NbaV07XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gU3RlcCBYWS1mdW5jdGlvbjpcclxuXHR0aGlzLmdldFhZID0gZnVuY3Rpb24ob2Zmc2V0LCB3LCBoKVxyXG5cdHtcclxuXHRcdGlmKG9mZnNldCA9PT0gbnVsbCkgeyBvZmZzZXQgPSAwOyB9XHJcblxyXG5cdFx0dmFyIHhWYWx1ZSA9IDA7XHJcblx0XHR2YXIgeVZhbHVlID0gMDtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgWFk6XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3RoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR4VmFsdWUgKz0gTWF0aC5zaW4oX3RoaXMuc3RlcHNbaV0gKyAoX3RoaXMuaW5jc1tpXSAqIG9mZnNldCkpICogdztcclxuXHRcdFx0eVZhbHVlICs9IE1hdGguY29zKChfdGhpcy5zdGVwc1tpXSArIChfdGhpcy5pbmNzW2ldICogb2Zmc2V0KSkgKiBfdGhpcy5tdWx0aXBsaWVyc1tpXSkgKiBoO1xyXG5cdFx0fVxyXG5cdFx0Ly8gUmV0dXJuIGl0OlxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0eDogeFZhbHVlLFxyXG5cdFx0XHR5OiB5VmFsdWVcclxuXHRcdH07XHJcblx0fTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgcGcgPSBuZXcgUGx5Z3JuZCgpO1xyXG5wZy52aWV3cy5wdXNoKHtcclxuXHRuYW1lICAgICAgICAgICAgOiBcIkRvdHMgMlwiLFxyXG5cdHNsdWcgICAgICAgICAgICA6IFwiZG90cy0yXCIsXHJcblx0Ly8gVmFyaWFibGVzIHVzZWQgYnkgdGhpcyB2aWV3OlxyXG5cdHZhcnMgICAgICAgICAgICA6IHtcclxuXHRcdHN0ZXBzOiBudWxsLFxyXG5cdFx0Y3VycmVudFg6IDAsXHJcblx0XHRjdXJyZW50WTogMFxyXG5cdH0sXHJcblx0Ly8gSW5pdGlhbGlzYXRpb246XHJcblx0aW5pdEZ1bmN0aW9uICAgIDogZnVuY3Rpb24oY3R4LCB2YXJzKXtcclxuXHRcdHZhcnMuc3RlcHMgPSBuZXcgU3RlcEdlbmVyYXRvcig0LCAwLCAwLjAyLCAwLjcsIDEuMyk7XHJcblx0XHR2YXJzLnByZXZEaXN0YW5jZXMgPSB7fTtcclxuXHR9LFxyXG5cdC8vIFVuLWluaXRpYWxpc2F0aW9uOlxyXG5cdHVuSW5pdEZ1bmN0aW9uICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7fSxcclxuXHQvLyBTdGVwcGluZyBmdW5jdGlvbjpcclxuXHRzdGVwRnVuY3Rpb24gICAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe1xyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjdHgud2lkdGgsIGN0eC5oZWlnaHQpO1xyXG5cdFx0dmFyIHN0ZXBTaXplID0gY3R4LndpZHRoIC8gMzA7XHJcblx0XHR2YXIgc3RlcHNYID0gY3R4LndpZHRoIC8gc3RlcFNpemU7XHJcblx0XHR2YXIgc3RlcHNZID0gY3R4LmhlaWdodCAvIHN0ZXBTaXplO1xyXG5cclxuLy9cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwZGRmZlwiO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzhjMjQzZVwiO1xyXG5cclxuXHRcdC8vIEFkZHMgYSBzaW1wbGUgZWFzZSB0byB0aGUgbW91c2U6XHJcblx0XHR2YXJzLmN1cnJlbnRYICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueCAtIHZhcnMuY3VycmVudFgpIC8gMjA7XHJcblx0XHR2YXJzLmN1cnJlbnRZICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueSAtIHZhcnMuY3VycmVudFkpIC8gMjA7XHJcblxyXG5cdFx0dmFycy5zdGVwcy5zdGVwKCk7XHJcblxyXG5cdFx0dmFyIHNpemUgPSBjdHgud2lkdGgvMS41O1xyXG5cclxuXHRcdGZvcih2YXIgeSA9IDA7IHkgPCBzdGVwc1k7IHkgKyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCBzdGVwc1g7IHggKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY1ggPSAoeSUyICogc3RlcFNpemUgLyAyKSArICh4ICogc3RlcFNpemUpO1xyXG5cdFx0XHRcdHZhciBjWSA9IHkgKiBzdGVwU2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gb3V0c2lkZTpcclxuXHRcdFx0XHR2YXIgcmFkID0gTWF0aC5hdGFuMihjWCAtIHZhcnMuY3VycmVudFgsIGNZIC0gdmFycy5jdXJyZW50WSk7XHJcblxyXG5cdFx0XHRcdC8vIGRpc3RhbmNlOlxyXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChcclxuXHRcdFx0XHRcdE1hdGgucG93KHZhcnMuY3VycmVudFggLSBjWCwgMikgKyBNYXRoLnBvdyh2YXJzLmN1cnJlbnRZIC0gY1ksIDIpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dmFyIG9mZnNldCA9IE1hdGgubWF4KDAsIChzaXplLzIpIC0gZGlzdGFuY2UpO1xyXG5cdFx0XHRcdHZhciBwID0gb2Zmc2V0L3NpemU7XHJcblx0XHRcdFx0cCo9MS1wO1xyXG5cdFx0XHRcdG9mZnNldCA9IChzaXplLzIpICogcDtcclxuXHJcblx0XHRcdFx0dmFyIHN0ZXBYWSA9IHZhcnMuc3RlcHMuZ2V0WFkoKHkqc3RlcHNYKSsoeCozKSwgb2Zmc2V0LCBvZmZzZXQpO1xyXG5cclxuXHRcdFx0XHR2YXIgZFggPSBzdGVwWFkueCArIGNYICsgTWF0aC5zaW4ocmFkKSAqIChvZmZzZXQpO1xyXG5cdFx0XHRcdHZhciBkWSA9IHN0ZXBYWS55ICsgY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblx0XHRcdFx0Ly8gdmFyIGRYID0gY1g7XHJcblx0XHRcdFx0Ly8gdmFyIGRZID0gY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguZHJhd0NpcmNsZShkWCwgZFksIGRpc3RhbmNlLzgwKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbnBnLmFkZFZpZXcoKTtcclxuLy8gcGcubG9hZCgpO1xyXG4iLCIvKipcclxuICAqIDIwMTYtMjAxNyAoQykgQW50b25pbyBSZWRvbmRvIC8gYW50b25pb3JlZG9uZG8uY29tXHJcbiAgKlxyXG4gICogRE9NVG9vbHMgaXMgYSBuYW5vLWxpYnJhcnkgd2hpY2ggY29udGFpbnMgYSBidW5jaCBvZiBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoIGJhc2ljXHJcbiAgKiBuZWVkcyBhbmQgcHJvYmxlbXMgZmFjZWQgb24gZnJvbnQtZW5kIHdlYiBhcHBsaWNhdGlvbnMuXHJcbiAgKlxyXG4gICogSXQncyBpbXBsZW1lbnRlZCBvbiBFUzUgSmF2YVNjcmlwdCBhcyB0aGUgJ2QnIG9iamVjdCBvbiB0aGUgZ2xvYmFsIG5hbWVzcGFjZS5cclxuICAqXHJcbiAgKiBJdCBjb250YWlucyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uYWxpdHk6XHJcbiAgKiAtIFNvcnRlciBuYW1lIGZ1bmN0aW9ucyB3cmFwcGluZyBxdWVyaW5nLCBldmVudHMgYW5kIHRpbWVvdXRzIGZ1bmN0aW9ucy5cclxuICAqIC0gR2VuZXJhdGlvbiBvZiByYW5kb20gaW50ZWdlcnMuXHJcbiAgKiAtIEFkZGluZywgcmV0cmlldmluZyBhbmQgcmVtb3ZpbmcgY29va2llcy5cclxuICAqIC0gQ2hlY2tpbmcgb2YgQ1NTIHRyYW5zZm9ybXMgc3VwcG9ydC5cclxuICAqIC0gQ2hlY2tpbmcgb2YgT1MuXHJcbiAgKiAtIENhbGN1bGF0aW9uIG9mIGVsZW1lbnQgaGVpZ2h0cyBhbmQgcG9zaXRpb25zLlxyXG4gICogLSBMb2FkaW5nIG9mIGltYWdlcyBhbmQgZXhlY3V0aW5nIGEgY2FsbGJhY2sgb25jZSB0aGV5J3JlIGxvYWRlZC5cclxuICAqXHJcbiAgKi9cclxuXHJcbihmdW5jdGlvbihkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHJcblx0ZC5naSA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5nYyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuZ2NhID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5xcyA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcblx0fTtcclxuXHRcclxuXHRkLnFzYSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcblx0fTtcclxuXHRcclxuXHRkLmFlID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuc3QgPSBmdW5jdGlvbihjYWxsYmFjaywgdGltZSkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuc2kgPSBmdW5jdGlvbihjYWxsYmFjaywgdGltZSkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChjYWxsYmFjaywgdGltZSk7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiBhIHJhbmdlLlxyXG5cdCAgKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VyIGxpbWl0IG9mIHRoZSByYW5nZS4gSXQgZGVmYXVsdHMgdG8gLTUwLlxyXG5cdCAgKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlciBsaW1pdCBvZiB0aGUgcmFuZ2UuIEl0IGRlZmF1bHRzIHRvIDUwLlxyXG5cdCAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSBnZW5lcmF0ZWQgcmFtZG9uIGludGVnZXIgd2l0aGluIHRoZSByYW5nZS5cclxuXHQgICovXHJcblx0ZC5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCkge1xyXG5cdFx0bWluID0gbWluIHx8IC01MDtcclxuXHRcdG1heCA9IG1heCB8fCA1MDtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LyoqXHJcblx0ICAqIFJldHVybnMgdGhlIHN1bSBvZiBjbGllbnRIZWlnaHRzIG9mIGFsbCB0aGUgZWxlbWVudHMgc2VsZWN0ZWQgYnkgdGhlIENTUyBxdWVyeSBwcm92aWRlZC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycyAtIENTUyBxdWVyeS5cclxuXHQgICogQHJldHVybnMge251bWJlcn0gLSBUaGUgc3VtIG9mIGFsbCBjbGllbnRIZWlnaHRzLiAwIGlmIG5vIGVsZW1lbnRzIHNlbGVjdGVkLlxyXG5cdCAgKi9cclxuXHRkLmNhbGNDbGllbnRIZWlnaHRzU3VtID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdHZhciB0b3RhbCA9IDA7XHJcblx0XHR2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGQucXNhKHNlbGVjdG9yKSk7XHJcblx0XHRcclxuXHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHR0b3RhbCArPSBpdGVtLmNsaWVudEhlaWdodDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdG90YWw7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyBhbiBBcnJheSB3aXRoIERPTVJlY3RzIG9mIGFsbCB0aGUgZWxlbWVudHMgc2VsZWN0ZWQgYnkgdGhlIENTUyBxdWVyeSBwcm92aWRlZC5cclxuXHQgICogVGhlIGJvcmRlci1ib3ggY29vcmRpbmF0ZXMnIG9yaWdpbiBpcyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQuXHJcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMgLSBDU1MgcXVlcnkuXHJcblx0ICAqIEByZXR1cm5zIHtBcnJheX0gLSBBbiBhcnJheSB3aXRoIERPTVJlY3RzLiB1bmRlZmluZWQgaWYgbm8gZWxlbWVudHMgc2VsZWN0ZWQuXHJcblx0ICAqL1xyXG5cdGQuY2FsY1Bvc2l0aW9uc1RvVmlld3BvcnQgPSBmdW5jdGlvbihzZWxlY3RvcnMpIHtcclxuXHRcdHZhciBwb3NpdGlvbnMgPSBbXTtcclxuXHRcdHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZC5xc2Eoc2VsZWN0b3JzKSk7XHJcblxyXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRwb3NpdGlvbnMucHVzaChpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBwb3NpdGlvbnM7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyBhbiBPYmplY3Qgd2l0aCBsZWZ0LCB0b3AsIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllcyBvZiB0aGUgY2hpbGRcclxuXHQgICogZWxlbWVudCBib3JkZXItYm94IHBvc2l0aW9uIHJlbGF0aXZlIHRvIGEgcGFyZW50IGVsZW1lbnQgc3BlY2lmaWVkIGJ5IHBhcmVudFNlbGVjdG9yLlxyXG5cdCAgKiBUaGUgcGFyZW50IGFuZCB0aGUgY2hpbGQgZG9uJ3QgbmVlZCB0byBiZSBkaXJlY3RseSBuZXN0ZWQgb24gdGhlIGVsZW1lbnRzJyBoaWVyYXJjaHkuXHJcblx0ICAqIElmIGEgQ1NTIHNlbGVjdG9yIHN0cmluZyBpcyBwcm92aWRlZCBhbmQgaXQgc2VsZWN0cyBtb3JlIHRoYW4gb25lIGVsZW1lbnRcclxuXHQgICogb25seSB0aGUgZmlyc3QgZWxlbWVudCB3aWxsIGJlIHVzZWQuXHJcblx0ICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBwYXJlbnRTZWxlY3RvciAtIENTUyBzZWxlY3RvciBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgZm9yIGEgcmVmZXJlbmNlIHBhcmVudC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR9IGNoaWxkU2VsZWN0b3IgLSBDU1Mgc2VsZWN0b3Igc3RyaW5nIG9yIEhUTUxFbGVtZW50IGZvciB0aGUgY2hpbGQuXHJcblx0ICAqIEByZXR1cm5zIHtPYmplY3R9IC0gQW4gT2JqZWN0IHdpdGggbGVmdCwgdG9wLCB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXMuXHJcblx0Ki9cclxuXHRkLmNhbGNSZWxhdGl2ZVBvc2l0aW9uID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZCkge1xyXG5cdFx0aWYgKHR5cGVvZiBwYXJlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHBhcmVudCA9IGQucXMocGFyZW50KTtcclxuXHRcdGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdGNoaWxkID0gZC5xcyhjaGlsZCk7XHJcblxyXG5cdFx0aWYgKCghcGFyZW50IHx8ICFjaGlsZClcclxuXHRcdFx0XHQmJiAoIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIlRoZSBwYXJlbnQgb3IgY2hpbGQgd2VyZSB1bmRlZmluZWQgb3IgdGhleSB3ZXJlbid0IEhUTUxFbGVtZW50c1wiKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0dmFyIGNoaWxkUmVjdCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdHZhciBvZmZzZXQgPSB7XHJcblx0XHRcdGxlZnQ6IG51bGwsXHJcblx0XHRcdHRvcDogbnVsbCxcclxuXHRcdFx0d2lkdGg6IG51bGwsXHJcblx0XHRcdGhlaWdodDogbnVsbFxyXG5cdFx0fTtcclxuXHJcblx0XHRvZmZzZXQubGVmdCA9IGNoaWxkUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0O1xyXG5cdFx0b2Zmc2V0LnRvcCA9IGNoaWxkUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcDtcclxuXHRcdG9mZnNldC53aWR0aCA9IGNoaWxkLm9mZnNldFdpZHRoO1xyXG5cdFx0b2Zmc2V0LmhlaWdodCA9IGNoaWxkLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHRyZXR1cm4gb2Zmc2V0O1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0dmFyIGltYWdlc1RvTG9hZCA9IFtdO1xyXG5cdHZhclx0Y2FsbGJhY2tzID0gW107XHJcblx0XHRcclxuXHR2YXIgcnVuQ2FsbGJhY2tzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYXJlQWxsTG9hZGVkID0gaW1hZ2VzVG9Mb2FkLmV2ZXJ5KGZ1bmN0aW9uKGltYWdlKSB7XHJcblx0XHRcdHJldHVybiBpbWFnZS5sb2FkZWQ7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0aWYgKGFyZUFsbExvYWRlZCkge1xyXG5cdFx0XHRjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0ZC5ub3RpZnlXaGVuTG9hZGVkID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcwNDM1MDkvdGhpcy1pbnNpZGUtb2JqZWN0XHJcblx0XHQvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjE2MjAyL3NlbGYtcmVmZXJlbmNlcy1pbi1vYmplY3QtbGl0ZXJhbC1kZWNsYXJhdGlvbnNcclxuXHRcdHZhciBpbWFnZVRvTG9hZCA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IHNlbGVjdG9yLFxyXG5cdFx0XHRsb2FkZWQ6IGZhbHNlLFxyXG5cdFx0XHRzZXRBc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aW1hZ2VUb0xvYWQubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRydW5DYWxsYmFja3MoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0dmFyIGltYWdlID0gZC5xcyhzZWxlY3Rvcik7XHJcblx0XHRpZiAoaW1hZ2UpIHtcclxuXHRcdFx0aW1hZ2VzVG9Mb2FkLnB1c2goaW1hZ2VUb0xvYWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc3ODcxL2NoZWNrLWlmLWFuLWVsZW1lbnQtaXMtbG9hZGVkLW5vLWVycm9ycy1pbi1qYXZhc2NyaXB0XHJcblx0XHRcdGlmIChpbWFnZS5jb21wbGV0ZSAmJiBpbWFnZS5uYXR1cmFsSGVpZ2h0KSB7XHJcblx0XHRcdFx0aW1hZ2VUb0xvYWQuc2V0QXNMb2FkZWQoKTtcclxuXHRcdFx0fSBlbHNlIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGltYWdlVG9Mb2FkLnNldEFzTG9hZGVkKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIGltYWdlO1xyXG5cdH07XHJcblx0XHJcblx0ZC5ydW5XaGVuQWxsTG9hZGVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuXHRcdHJ1bkNhbGxiYWNrcygpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5yZXNldEVsZW1lbnRzVG9Mb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpbWFnZXNUb0xvYWQgPSBbXTtcclxuXHRcdGNhbGxiYWNrcyA9IFtdO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0ZC5jaGVja1RyYW5zZm9ybXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcInRyYW5zZm9ybVwiO1xyXG5cdFx0ZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcclxuXHR9O1xyXG5cdFxyXG5cdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTEyMTk1ODIvaG93LXRvLWRldGVjdC1teS1icm93c2VyLXZlcnNpb24tYW5kLW9wZXJhdGluZy1zeXN0ZW0tdXNpbmctamF2YXNjcmlwdFxyXG5cdGQuZ2V0T1MgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBvcztcclxuXHRcdHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdFx0XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIldpblwiKSAhPSAtMSlcdFx0b3MgPSBcIldpbmRvd3NcIjtcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiTWFjXCIpICE9IC0xKVx0XHRvcyA9IFwibWFjT1NcIjtcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiTGludXhcIikgIT0gLTEpXHRcdG9zID0gXCJMaW51eFwiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJBbmRyb2lkXCIpICE9IC0xKVx0b3MgPSBcIkFuZHJvaWRcIjtcclxuXHRcdGlmICh1YS5pbmRleE9mKFwibGlrZSBNYWNcIikgIT0gLTEpXHRvcyA9IFwiaU9TXCI7XHJcblx0XHRcclxuXHRcdHJldHVybiBvcztcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8qKlxyXG5cdCogR2V0cyBhIGNvb2tpZSBieSBuYW1lLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBjb29raWUuXHJcblx0KiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSB2YWx1ZSBvZiB0aGUgY29va2llLiBudWxsIGlzIG5vIGNvb2tpZSB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHQqL1xyXG5cdGQuZ2V0Q29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dmFyIG5hbWVXaXRoRXF1YWwgPSBuYW1lICsgXCI9XCI7XHJcblx0XHR2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBpPTA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgYyA9IGNhW2ldO1xyXG5cdFx0XHRcclxuXHRcdFx0d2hpbGUgKGMuY2hhckF0KDApID09IFwiIFwiKVxyXG5cdFx0XHRcdGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYgKGMuaW5kZXhPZihuYW1lV2l0aEVxdWFsKSA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm4gYy5zdWJzdHJpbmcobmFtZVdpdGhFcXVhbC5sZW5ndGgsIGMubGVuZ3RoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0KiBTZXRzIGEgY29va2llIGJ5IG5hbWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGNvb2tpZS5cclxuXHQqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIGZvciB0aGUgY29va2llLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IGRheXMgLSBFeHBpcmF0aW9uIHRpbWUgaW4gZGF5cy5cclxuXHQqIEByZXR1cm5zIHt1bmRlZmluZWR9IC0gQWx3YXlzIHVuZGVmaW5lZFxyXG5cdCovXHJcblx0ZC5zZXRDb29raWUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG5cdFx0dmFyIGV4cGlyZXM7XHJcblx0XHRcclxuXHRcdGlmIChkYXlzKSB7XHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHJcblx0XHRcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuXHRcdFx0ZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b0dNVFN0cmluZygpO1xyXG5cdFx0fSBlbHNlIGV4cGlyZXMgPSBcIlwiO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQqIFJlbW92ZXMgYSBjb29raWUgYnkgbmFtZS5cclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgY29va2llIHRvIHJlbW92ZS5cclxuXHQqIEByZXR1cm5zIHt1bmRlZmluZWR9IC0gQWx3YXlzIHVuZGVmaW5lZC5cclxuXHQqL1xyXG5cdGQucmVtb3ZlQ29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dGhpcy5zZXRDb29raWUobmFtZSwgXCJcIiwgLTEpO1xyXG5cdH07XHJcblx0XHJcbn0od2luZG93LmQgPSB3aW5kb3cuZCB8fCB7fSkpO1xyXG4iLCJcclxuZnVuY3Rpb24gaGlkZUludHJvKHR5cGUpIHtcclxuXHR2YXIgbW9kaWZpZXIgPSBcIm91dFwiO1xyXG5cdFx0XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIDI6IG1vZGlmaWVyID0gXCJvdXQyXCI7XHJcblx0fVxyXG5cdFxyXG5cdHZhciBpbnRybyA9IGQuZ2MoXCJpbnRyb1wiKSxcclxuXHRcdGludHJvRGFya2VuZXIgPSBkLmdjKFwiaW50cm8tZGFya2VuZXJcIik7XHJcblx0XHRcclxuXHRpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm8tLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImludHJvXCIpKVxyXG5cdFx0XHRpbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fSk7XHJcblx0XHJcblx0aW50cm9EYXJrZW5lci5jbGFzc0xpc3QuYWRkKFwiaW50cm8tZGFya2VuZXItLVwiICsgbW9kaWZpZXIpO1xyXG5cdGludHJvRGFya2VuZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW50cm8tZGFya2VuZXJcIikgJiYgdHlwZSA9PT0gMilcclxuXHRcdFx0aW50cm9EYXJrZW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRlbHNlIGQuc3QoZnVuY3Rpb24oKSB7IGludHJvRGFya2VuZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9LCA1MDApO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGQuZ2MoXCJtYWluLWJnXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWJnLS1pblwiKTtcclxuXHRcclxuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoID49IDgxMCkge1xyXG5cdFx0cGcubG9hZCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0SW50cm8oKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHRkLmdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLS1ib3R0b21cIik7XHJcblx0ZC5nYyhcInNjcm9sbC1kb3duX19pbm5lclwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd25fX2lubmVyLS1vdXRcIik7XHJcblx0XHJcblx0dmFyIHZpZXdQb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcblx0XHR3aGVlbExldmVsID0gMCxcclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSAwLFxyXG5cdFx0cGhyYXNlcyA9IGQuZ2NhKFwicGhyYXNlc19fcGhyYXNlXCIpLFxyXG5cdFx0cGhyYXNlc0NvdW50ID0gcGhyYXNlcy5sZW5ndGgsXHJcblx0XHRidWJibGVzID0gZC5nY2EoXCJidWJibGVzX19sYXllclwiKSxcclxuXHRcdHNsaWRlcyA9IGQucXNhKFwiLnNsaWRlcz4uc2xpZGVcIiksXHJcblx0XHRzbGlkZXNDb3VudCA9IHNsaWRlcy5sZW5ndGgsXHJcblx0XHR2aXNpYmxlUGhyYXNlcyA9IFtdLFxyXG5cdFx0dmlzaWJsZUJ1YmJsZXMgPSBbXSxcclxuXHRcdG9uVHJhbnNpdGlvbiA9IGZhbHNlLFxyXG5cdFx0eVN0YXJ0LFxyXG5cdFx0eUVuZCxcclxuXHRcdHRyYW5zZm9ybSA9IGQuY2hlY2tUcmFuc2Zvcm1zU3VwcG9ydGVkKCksXHJcblx0XHRhdWRpb1RyYWNrLFxyXG5cdFx0YXVkaW9UcmFja0Zvcm1lcixcclxuXHRcdG1vdXNlTW92ZUxpc3RlbmVyLFxyXG5cdFx0Ly8gbW91c2VXaGVlbExpc3RlbmVyLFxyXG5cdFx0Ly8gdG91Y2hTdGFydExpc3RlbmVyLFxyXG5cdFx0Ly8gdG91Y2hFbmRMaXN0ZW5lcixcclxuXHRcdC8vIGtleURvd25MaXN0ZW5lcixcclxuXHRcdHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50LFxyXG5cdFx0dG9IaW50cztcclxuXHRcclxuXHQvLyBPbiBkZXNrdG9wIHZlcnNpb24gaXQgbW92ZXMgdGhlIHBocmFzZXMgYW5kIGJ1YmJsZXMgb24gdGhlIDNkIHNwYWNlIGRlcGVuZGluZyBvbiB0aGUgY3Vyc29yIHBvc2l0aW9uXHJcblx0aWYgKHZpZXdQb3J0V2lkdGggPD0gODEwKSB7XHJcblx0XHR2YXIgcGhyYXNlc0NvbnRhaW5lciA9IGQuZ2MoXCJwaHJhc2VzXCIpLFxyXG5cdFx0XHRidWJibGVzQ29udGFpbmVyID0gZC5nYyhcImJ1YmJsZXNcIik7XHJcblx0XHRkLmFlKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGVsdGFaOiBcIiArIGUuZGVsdGFaKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhTW9kZTogXCIgKyBlLmRlbHRhTW9kZSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRYOiBcIiArIGUuY2xpZW50WCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRZOiBcIiArIGUuY2xpZW50WSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgK1wiZGVnKVwiKTtcclxuXHRcdFx0Ly8gcGhyYXNlc0NvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1dID0gXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgKyBcImRlZykgcm90YXRlWShcIiArICgwLjAyKmUuY2xpZW50WC0yNSkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyAoLTAuMDUqZS5jbGllbnRYKzEwMCkgKyBcInB4LCAwLCAwKVwiO1xyXG5cdFx0XHRwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBcInJvdGF0ZVgoXCIgKyAtKDAuMDIqZS5jbGllbnRZKSArIFwiZGVnKSByb3RhdGVZKFwiICsgKDAuMDIqZS5jbGllbnRYKSArIFwiZGVnKSB0cmFuc2xhdGUzZChcIiArICgtMC4wNSplLmNsaWVudFgrMTAwKSArIFwicHgsIDAsIDApXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEdWUgdG8gYSB3ZWlyZCBiZWhhdmlvdXIgdGhlIGJlbG93IGxpbmUgc3BvaWxzIHRoZSBidWJibGVzIHpvb20gZWZmZWN0IG9mIENocm9tZS5cclxuXHRcdFx0Ly8gV2l0aCB0aGlzIGNvbmRpdGlvbmFsIGlmIHdlIGF2b2lkIGV4ZWN1dGlvbiBvbiBDaHJvbWVcclxuXHRcdFx0aWYgKCEod2luZG93LmNocm9tZSAmJiB3aW5kb3cuY2hyb21lLndlYnN0b3JlKSlcclxuXHRcdFx0XHRidWJibGVzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gU2hvd3MgYSB0ZXh0IGhpbnQgaWYgdGhlIGludHJvIGRvZXNuJ3Qgc3RhcnQgc2Nyb2xsaW5nIGRvd24gaW4gMyBzZWNvbmRzXHJcblx0dG9IaW50cyA9IGQuc3QoZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gMClcclxuXHRcdFx0aWYgKHZpZXdQb3J0V2lkdGggPj0gODEwICYmIGQuZ2V0T1MoKSAhPT0gXCJBbmRyb2lkXCIgJiYgZC5nZXRPUygpICE9PSBcImlPU1wiKVxyXG5cdFx0XHRcdGQuZ2MoXCJzY3JvbGwtZG93bi1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi1oaW50LS1pblwiKTtcclxuXHRcdFx0ZWxzZSBkLmdjKFwic3dpcGUtdXAtaGludFwiKS5jbGFzc0xpc3QuYWRkKFwic3dpcGUtdXAtaGludC0taW5cIik7XHJcblx0fSwgMzAwMCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0ZnVuY3Rpb24gY2hhbmdlQXVkaW8oYXVkaW8pIHtcclxuXHRcdGF1ZGlvVHJhY2tGb3JtZXIgPSBhdWRpb1RyYWNrO1xyXG5cdFx0YXVkaW9UcmFjayA9IGF1ZGlvO1xyXG5cdFx0XHJcblx0XHRpZiAoYXVkaW9UcmFjayAhPT0gYXVkaW9UcmFja0Zvcm1lcikge1xyXG5cdFx0XHRmYWRlQXVkaW8oYXVkaW9UcmFja0Zvcm1lcik7XHJcblx0XHRcdHZhciBhdWRpb1RyYWNrRWxlbWVudCA9IGQuZ2koXCJhdWRpb1wiICsgYXVkaW8pO1xyXG5cdFx0XHRhdWRpb1RyYWNrRWxlbWVudC5jdXJyZW50VGltZSA9IDA7XHJcblx0XHRcdGF1ZGlvVHJhY2tFbGVtZW50LnZvbHVtZSA9IDE7XHJcblx0XHRcdGF1ZGlvVHJhY2tFbGVtZW50LnBsYXkoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0ZnVuY3Rpb24gZmFkZUF1ZGlvKGF1ZGlvVHJhY2tGb3JtZXIpIHtcclxuXHRcdGlmIChhdWRpb1RyYWNrRm9ybWVyKSB7XHJcblx0XHRcdHZhciBhdWRpb1RyYWNrRm9ybWVyRWxlbWVudCA9IGQuZ2koXCJhdWRpb1wiICsgYXVkaW9UcmFja0Zvcm1lcik7XHJcblx0XHRcdHZhciBmYWRlQXVkaW8gPSBkLnNpKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwidm9sdW1lOiBcIiArIGF1ZGlvVHJhY2tGb3JtZXJFbGVtZW50LnZvbHVtZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHRcdFx0XHRpZiAoYXVkaW9UcmFja0Zvcm1lckVsZW1lbnQudm9sdW1lIC0gMC4xIDwgMCkge1xyXG5cdFx0XHRcdFx0YXVkaW9UcmFja0Zvcm1lckVsZW1lbnQucGF1c2UoKTtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoZmFkZUF1ZGlvKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YXVkaW9UcmFja0Zvcm1lckVsZW1lbnQudm9sdW1lIC09IDAuMTtcclxuXHRcdFx0fSwgMTAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgcGhyYXNlcyBhbmQgYnViYmxlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVQaHJhc2VzKCkge1xyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDEpIHtcclxuXHRcdFx0ZC5nYyhcInNjcm9sbC1kb3duLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLWhpbnQtLW91dFwiKTtcclxuXHRcdFx0ZC5nYyhcInN3aXBlLXVwLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInN3aXBlLXVwLWhpbnQtLW91dFwiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IHBocmFzZXNDb3VudCkge1xyXG5cdFx0XHRkLnN0KGZ1bmN0aW9uKCkgeyBkLmdjKFwiZW50ZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJlbnRlci1idXR0b24tLWluXCIpOyB9LCAxMDAwKTtcclxuXHRcdFx0ZC5nYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi0tb3V0XCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZC5nYyhcImVudGVyLWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZW50ZXItYnV0dG9uLS1pblwiKTtcclxuXHRcdFx0ZC5nYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGwtZG93bi0tb3V0XCIpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAod2hlZWxMZXZlbCA+IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuc3BsaWNlKDAsIDAsIChwaHJhc2VzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXMuc3BsaWNlKDAsIDAsIChidWJibGVzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKFwicGhyYXNlc19fcGhyYXNlLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHRcdHZpc2libGVCdWJibGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJidWJibGVzX19sYXllci0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHdoZWVsTGV2ZWwgPCB3aGVlbExldmVsRm9ybWVyKSB7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInBocmFzZXNfX3BocmFzZS0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0XHR2aXNpYmxlQnViYmxlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlc19fbGF5ZXItLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5zcGxpY2UoMCwgMSk7XHJcblx0XHRcdHZpc2libGVCdWJibGVzLnNwbGljZSgwLCAxKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0d2hlZWxMZXZlbEZvcm1lciA9IHdoZWVsTGV2ZWw7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vIE1vdmVzIHNsaWRlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVTbGlkZXMoKSB7XHJcblx0XHRpZiAod2hlZWxMZXZlbCA+IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS0taW5cIik7XHJcblx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudC0xXS5zdHlsZS56SW5kZXggPSBcIjFcIjtcclxuXHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS10ZXh0LS1pblwiKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwtcGhyYXNlc0NvdW50ID4gMSAmJiBzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnQtMV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xpZGUtLXJlbWFpblwiKSkge1xyXG5cdFx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudC0yXS5jbGFzc0xpc3QuYWRkKFwic2xpZGUtLW91dFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh3aGVlbExldmVsIDwgd2hlZWxMZXZlbEZvcm1lcikge1xyXG5cdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnRdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS0taW5cIik7XHJcblx0XHRcdGQuc3QoZnVuY3Rpb24oKSB7IHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudF0uc3R5bGUuekluZGV4ID0gXCIwXCI7IH0sIDUwMCk7XHJcblx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudF0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLXRleHQtLWluXCIpO1xyXG5cdFx0XHRpZiAod2hlZWxMZXZlbC1waHJhc2VzQ291bnQgPiAwKSB7XHJcblx0XHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS0tb3V0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0d2hlZWxMZXZlbEZvcm1lciA9IHdoZWVsTGV2ZWw7XHJcblx0fVxyXG5cdFxyXG5cdC8vIENvdW50cyB3aGVlbCBzY3JvbGwgbW92ZW1lbnRzXHJcblx0ZC5hZShcIndoZWVsXCIsIC8qIG1vdXNlV2hlZWxMaXN0ZW5lciA9ICAqL2Z1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChvblRyYW5zaXRpb24pXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0b25UcmFuc2l0aW9uID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0bGFiZWwxOiBpZiAoKGUuZGVsdGFZID4gMCB8fCBlLmRldGFpbC5kZWx0YVkgPiAwKSAmJiB3aGVlbExldmVsIDwgKHBocmFzZXNDb3VudCArIHNsaWRlc0NvdW50KSkge1xyXG5cdFx0XHRpZiAod2hlZWxMZXZlbCA9PT0gcGhyYXNlc0NvdW50ICYmICFkLmdjKFwibWFpbi1iZ1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJtYWluLWJnLS1pblwiKSlcclxuXHRcdFx0XHRicmVhayBsYWJlbDE7XHJcblx0XHRcdCsrd2hlZWxMZXZlbDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSAxKSBjaGFuZ2VBdWRpbygxKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDYpIGNoYW5nZUF1ZGlvKDIpO1xyXG5cdFx0XHRpZiAod2hlZWxMZXZlbCA9PT0gOSkgY2hhbmdlQXVkaW8oMyk7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSAxNSkgY2hhbmdlQXVkaW8oNCk7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSAyMCkgY2hhbmdlQXVkaW8oNSk7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSAyMykgY2hhbmdlQXVkaW8oNik7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAod2hlZWxMZXZlbCA8PSBwaHJhc2VzQ291bnQpXHJcblx0XHRcdFx0bW92ZVBocmFzZXMoKTtcclxuXHRcdFx0ZWxzZSBtb3ZlU2xpZGVzKCk7XHJcblx0XHR9IGVsc2UgbGFiZWwyOiBpZiAoKGUuZGVsdGFZIDwgMCB8fCBlLmRldGFpbC5kZWx0YVkgPCAwICkgJiYgd2hlZWxMZXZlbCA+IDApIHtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPT09IHBocmFzZXNDb3VudCAmJiBkLmdjKFwibWFpbi1iZ1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJtYWluLWJnLS1pblwiKSlcclxuXHRcdFx0XHRicmVhayBsYWJlbDI7XHJcblx0XHRcdFx0XHJcblx0XHRcdC0td2hlZWxMZXZlbDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSA3KSBjaGFuZ2VBdWRpbygyKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDEzKSBjaGFuZ2VBdWRpbygzKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDE5KSBjaGFuZ2VBdWRpbyg0KTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDIxKSBjaGFuZ2VBdWRpbyg1KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh3aGVlbExldmVsIDwgcGhyYXNlc0NvdW50KVxyXG5cdFx0XHRcdG1vdmVQaHJhc2VzKCk7XHJcblx0XHRcdGVsc2UgbW92ZVNsaWRlcygpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZyh3aGVlbExldmVsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cdFx0XHJcblx0XHRkLnN0KGZ1bmN0aW9uKCkgeyBvblRyYW5zaXRpb24gPSBmYWxzZTsgfSwgODAwKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNjQwNzIvZGV0ZWN0LWEtZmluZ2VyLXN3aXBlLXRocm91Z2gtamF2YXNjcmlwdC1vbi10aGUtaXBob25lLWFuZC1hbmRyb2lkXHJcblx0ZC5hZShcInRvdWNoc3RhcnRcIiwgLyogdG91Y2hTdGFydExpc3RlbmVyID0gICovZnVuY3Rpb24oZSkge1xyXG5cdFx0eVN0YXJ0ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0fSk7XHJcblx0XHJcblx0ZC5hZShcInRvdWNoZW5kXCIsLyogIHRvdWNoRW5kTGlzdGVuZXIgPSAgKi9mdW5jdGlvbihlKSB7XHJcblx0XHR5RW5kID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdFx0aWYgKHlFbmQgLSB5U3RhcnQgPCAtNjApXHJcblx0XHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIndoZWVsXCIsIHsgZGV0YWlsOiB7IGRlbHRhWTogMSB9IH0pKTtcclxuXHRcdGVsc2UgaWYgKHlFbmQgLSB5U3RhcnQgPiA2MClcclxuXHRcdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwid2hlZWxcIiwgeyBkZXRhaWw6IHsgZGVsdGFZOiAtMSB9IH0pKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBNb3ZlcyBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgdGhlIGJ1YmJsZSBsYXllcnMgaW4gYSByYW5kb20gd2F5XHJcblx0KGZ1bmN0aW9uIGNvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCgpIHtcclxuXHRcdGZvciAodmFyIG49MDsgbjx2aXNpYmxlQnViYmxlcy5sZW5ndGg7ICsrbikge1xyXG5cdFx0XHQvL3ZhciB6VHJhbnMgPSAvXFwuKnRyYW5zbGF0ZVpcXCgoLiopcHhcXCkvaS5leGVjKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHZcIikuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpWzFdO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlc1tuXS5maXJzdENoaWxkLnN0eWxlW3RyYW5zZm9ybV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgZC5nZXRSYW5kb21JbnQoKSArIFwicHgsIFwiICsgZC5nZXRSYW5kb21JbnQoKSArIFwicHgsIDApXCI7XHJcblx0XHRcdHZpc2libGVCdWJibGVzW25dLmZpcnN0Q2hpbGQuc3R5bGVbdHJhbnNmb3JtXSA9IFwidHJhbnNsYXRlM2QoXCIgKyBkLmdldFJhbmRvbUludCgpICsgXCJweCwgXCIgKyBkLmdldFJhbmRvbUludCgpICsgXCJweCwgMClcIjtcclxuXHRcdH1cclxuXHRcdHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50ID0gZC5zdChjb250cm9sbGVkUmFuZG9tTW92ZW1lbnQsIDMwMDApO1xyXG5cdH0pKCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gSGlkZXMgdGhlIEludHJvIHNjcmVlblxyXG5cdGZ1bmN0aW9uIHNraXBJbnRybygpIHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyKTtcclxuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgbW91c2VXaGVlbExpc3RlbmVyKTtcclxuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0TGlzdGVuZXIpO1xyXG5cdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZExpc3RlbmVyKTtcclxuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duTGlzdGVuZXIpO1xyXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCk7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRvSGludHMpO1xyXG5cdFx0XHJcblx0XHRoaWRlSW50cm8oKTtcclxuXHRcdFxyXG5cdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwid2hlZWxcIiwgeyBkZXRhaWw6IHsgZGVsdGFZOiAxIH0gfSkpO1xyXG5cdH1cclxuXHRcclxuXHRkLmdjKFwiZW50ZXItYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgc2tpcEludHJvKCk7IH0pO1xyXG5cdFxyXG5cdGQuYWUoXCJrZXlkb3duXCIsIC8qIGtleURvd25MaXN0ZW5lciA9ICAqL2Z1bmN0aW9uKGUpIHtcclxuXHRcdHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcblx0XHRcdGNhc2UgMzk6XHJcblx0XHRcdGNhc2UgNDA6IHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIndoZWVsXCIsIHsgZGV0YWlsOiB7IGRlbHRhWTogMSB9IH0pKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6IHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIndoZWVsXCIsIHsgZGV0YWlsOiB7IGRlbHRhWTogLTEgfSB9KSk7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIHNraXBJbnRybygpOyAvLyBVbmNvbW1lbnQgaXQgd2hlbiBkZXZlbG9waW5nIGFuZCBjb21tZW50IDxkaXYgY2xhc3M9XCJwaHJhc2VzXCI+IG9uIGluZGV4Lmh0bVxyXG59XHJcbiIsIlxyXG5XZWJGb250LmxvYWQoe1xyXG5cdGdvb2dsZToge1xyXG5cdFx0ZmFtaWxpZXM6IFtcIk9wZW4gU2FucyBDb25kZW5zZWQ6MzAwXCIsIFwiU291cmNlIFNhbnMgUHJvOjQwMCw5MDBcIiwgXCJCbGFjayBPcHMgT25lOjQwMFwiLCBcIkJ1bmdlZSBTaGFkZTo0MDBcIiwgXCJDYXZlYXQ6NDAwXCIsIFwiUGFjaWZpY29cIiwgXCJNb25vZmV0dFwiIF1cclxuXHR9LFxyXG5cdGFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpbml0SW50cm8oKTtcclxuXHR9LFxyXG5cdGluYWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9LFxyXG5cdGNsYXNzZXM6IGZhbHNlLFxyXG5cdHRpbWVvdXQ6IDgwMDBcclxufSk7XHJcbiJdfQ==
