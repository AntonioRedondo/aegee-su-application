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
		yStart = e.touches[0].clientY;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwiRE9NVG9vbHMuanMiLCJpbml0SW50cm8uanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjggLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5vPWJ8fGE7dGhpcy5jPXRoaXMuby5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5vLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9ZnVuY3Rpb24geihhLGIsYyl7ZnVuY3Rpb24gZCgpe20mJmUmJmYmJihtKGcpLG09bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLG09Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEEoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQigpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEMoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RChhKX19ZnVuY3Rpb24gRShhLGIpe2EuYz1iO0QoYSl9ZnVuY3Rpb24gRChhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRihhKXt0aGlzLmE9YXx8XCItXCJ9Ri5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBHKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBIKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitJKGEuYyl9ZnVuY3Rpb24gSShhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBKKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEgoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5vLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEYoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7SyhhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBMKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1LKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBLKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSihjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE0oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBOKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gTyhhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSShhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSChhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBQKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9UC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMuby5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoZiwyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9ZigpfSksZT1udWxsLGY9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtlPXNldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtmLGRdKS50aGVuKGZ1bmN0aW9uKCl7ZSYmKGNsZWFyVGltZW91dChlKSxlPW51bGwpO2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubT10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMubT1uZXcgTSh0aGlzLmMsdGhpcy5zKTthPW5ldyBHKHRoaXMuYS5jK1wiLHNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKFwic2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9XG5PKGEpO3RoaXMubS5hLnN0eWxlLmNzc1RleHQ9YTtOKHRoaXMuZyk7Tih0aGlzLmgpO04odGhpcy5qKTtOKHRoaXMubSl9dmFyIFI9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFM9bnVsbDtmdW5jdGlvbiBUKCl7aWYobnVsbD09PVMpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtTPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFN9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm0uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO1UodGhpcyl9O1xuZnVuY3Rpb24gbGEoYSxiLGMpe2Zvcih2YXIgZCBpbiBSKWlmKFIuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbUltkXV0mJmM9PT1hLmZbUltkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1UKCkmJmxhKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VCgpJiZsYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTptYShhKTpWKGEsYS52KX1mdW5jdGlvbiBtYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtVKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5tLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubT10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7SyhiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubT0hMDtuYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9SyhiLFwiZm9udGluYWN0aXZlXCIsYSk7bmEodGhpcyl9O2Z1bmN0aW9uIG5hKGEpezA9PS0tYS5mJiZhLmomJihhLm0/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxLKGEsXCJhY3RpdmVcIikpOkwoYS5hKSl9O2Z1bmN0aW9uIG9hKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1vYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3BhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiBxYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLG09ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKUwoYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxsPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBrPWNbaF0sbj1tW2suY10scj1iLmEseD1rO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSih4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0socixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO2lmKG51bGw9PT1YKWlmKHdpbmRvdy5Gb250RmFjZSl7dmFyIHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSx4YT0vT1MgWC4qVmVyc2lvblxcLzEwXFwuLipTYWZhcmkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUvLmV4ZWMod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpO1xuWD14PzQyPHBhcnNlSW50KHhbMV0sMTApOnhhPyExOiEwfWVsc2UgWD0hMTtYP3I9bmV3IFAocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLG4pOnI9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLGEsbik7bC5wdXNoKHIpfWZvcihoPTA7aDxsLmxlbmd0aDtoKyspbFtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcGEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtxYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHJhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9XG5yYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIGw9MDtsPGMubGVuZ3RoO2wrKyl7dmFyIGs9Y1tsXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1tsXS5mb250U3R5bGUmJnZvaWQgMCE9Y1tsXS5mb250V2VpZ2h0PyhoPWNbbF0uZm9udFN0eWxlK2NbbF0uZm9udFdlaWdodCxlLnB1c2gobmV3IEcoayxoKSkpOmUucHVzaChuZXcgRyhrKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5vO0EodGhpcy5jLChjLmEuYXBpfHxcImh0dHBzOi8vZmFzdC5mb250cy5uZXQvanNhcGlcIikrXCIvXCIrZCtcIi5qc1wiKyhlP1wiP3Y9XCIrZTpcIlwiKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK1xuZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitkfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9c2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEI7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspeih0aGlzLmMsZFtiXSxDKGcpKTt2YXIgbT1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLGw9MDtsPGgubGVuZ3RoO2wrPTEpbS5wdXNoKG5ldyBHKGRbMF0saFtsXSkpO2Vsc2UgbS5wdXNoKG5ldyBHKGRbMF0pKTtFKGcsZnVuY3Rpb24oKXthKG0sZil9KX07ZnVuY3Rpb24gdGEoYSxiKXthP3RoaXMuYz1hOnRoaXMuYz11YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1ifHxcIlwifXZhciB1YT1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24gdmEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB3YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB5YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIHphPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEFhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQmE9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkNhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBEYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBtPWRbMV07Zz1bXTtpZihtKWZvcih2YXIgbT1tLnNwbGl0KFwiLFwiKSxoPW0ubGVuZ3RoLGw9MDtsPGg7bCsrKXt2YXIgaztrPW1bbF07aWYoay5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPUNhLmV4ZWMoay50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWs9XCJcIjtlbHNle2s9blsyXTtrPW51bGw9PWt8fFwiXCI9PWs/XCJuXCI6QmFba107bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUFhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7az1bayxuXS5qb2luKFwiXCIpfX1lbHNlIGs9XCJcIjtrJiZnLnB1c2goayl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPXphW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD16YVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEcoZSxmW2RdKSl9fTtmdW5jdGlvbiBFYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBGYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEIsYz10aGlzLmMsZD1uZXcgdGEodGhpcy5hLmFwaSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7dmEoZCxlKTt2YXIgZj1uZXcgeWEoZSk7RGEoZik7eihjLHdhKGQpLEMoYikpO0UoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxGYSl9KX07ZnVuY3Rpb24gR2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1HYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubztiP0EodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0sbT1iW2YrMV0saD0wO2g8bS5sZW5ndGg7aCsrKWUucHVzaChuZXcgRyhnLG1baF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobCl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1IYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubyxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxtPWMuZm9udHMubGVuZ3RoO2c8bTsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEcoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQSh0aGlzLmMsKHRoaXMuZi5hcGl8fFwiaHR0cHM6Ly9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBvYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEhhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBHYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEVhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20va2FuZHV2aXNsYS9wbHlncm5kXHJcbnZhciBQbHlncm5kID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7ICAgICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSB0byByb290IG9iamVjdDtcclxuXHR0aGlzLnZpZXdzID0gW107ICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSB3aXRoIHZpZXdzXHJcblx0dGhpcy50b3RhbFZpZXdzID0gW107ICAgICAgICAgICAgICAgLy8gQ291bnRlciB0byBrZWVwIHRyYWNrIGlmIGFsbCB2aWV3cyBhcmUgbG9hZGVkLlxyXG5cdHRoaXMuY3VycmVudFZpZXcgPSAwOyAgICAgICAgICAgICAgIC8vIEN1cnJlbnRWaWV3XHJcblx0dGhpcy5tb3VzZVBvc2l0aW9uID0ge3g6IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLzEwMCoyMCksIHk6IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodC8xMDAqMjApIH07IC8vIE1vdXNlIHBvc2l0aW9uIChjYW4gYmUgdXNlZCBieSB2aWV3cylcclxuXHR0aGlzLmZyYW1lUmF0ZSA9IDYwO1xyXG5cdHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0dGhpcy5jbGljayA9IGZhbHNlO1xyXG5cclxuXHQvLyBDcmVhdGUgY2FudmFzIG9iamVjdDpcclxuXHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWJnXCIpWzBdO1xyXG4vL1x0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG5cdC8vIENvbnRleHQgT2JqZWN0OlxyXG5cdHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHQvLyBSZXNpemUgZnVuY3Rpb246XHJcblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbigpe1xyXG5cdFx0X3RoaXMuY3R4LndpZHRoICA9IF90aGlzLmNhbnZhcy53aWR0aCAgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cdFx0X3RoaXMuY3R4LmhlaWdodCA9IF90aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuXHR9O1xyXG5cclxuXHQvLyBBbmQgYmluZCBpdCB0byB0aGUgd2luZG93OlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplKTtcclxuXHR0aGlzLnJlc2l6ZSgpO1xyXG5cclxuXHQvLyBNb3VzZSBwb3NpdGlvbiAoY2FuIGJlIHVzZWQgYnkgdmlld3MpOlxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi54ID0gZS5jbGllbnRYO1xyXG5cdFx0X3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS5jbGllbnRZO1xyXG5cdH0pO1xyXG5cclxuXHQvKlx0XHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZVBvc2l0aW9uLnggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuXHQgX3RoaXMubW91c2VQb3NpdGlvbi55ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG5cdCBfdGhpcy5jbGljayA9IHRydWU7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0IF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuXHQgX3RoaXMuY2xpY2sgPSB0cnVlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHQgX3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHQgfSk7Ki9cclxuXHJcblx0Ly8gQWRkIGV4dHJhIGZ1bmN0aW9ucyB0byB0aGUgY29udGV4dCBvYmplY3Q6XHJcblx0dGhpcy5jdHgubGluZVRocm91Z2ggPSBmdW5jdGlvbihwb2ludHMpXHJcblx0e1xyXG5cdFx0Zm9yKHZhciBpIGluIHBvaW50cykge1xyXG5cdFx0XHR0aGlzLmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmN1cnZlVGhyb3VnaCA9IGZ1bmN0aW9uKHBvaW50cylcclxuXHR7XHJcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpICsrKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgeGMgPSAocG9pbnRzW2ldLnggKyBwb2ludHNbaSArIDFdLngpIC8gMjtcclxuXHRcdFx0dmFyIHljID0gKHBvaW50c1tpXS55ICsgcG9pbnRzW2kgKyAxXS55KSAvIDI7XHJcblx0XHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHhjLCB5Yyk7XHJcblx0XHR9XHJcblx0XHQvLyBjdXJ2ZSB0aHJvdWdoIHRoZSBsYXN0IHR3byBwb2ludHNcclxuXHRcdHRoaXMucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnksIHBvaW50c1tpKzFdLngscG9pbnRzW2krMV0ueSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlyZWN0aW9uID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZGlzdGFuY2UgPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MilcclxuXHR7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KFxyXG5cdFx0XHRNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRyYXdDaXJjbGUgPSBmdW5jdGlvbih4LCB5LCByYWRpdXMpXHJcblx0e1xyXG5cdFx0dGhpcy5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG5cdH07XHJcblxyXG5cdC8qXHRcdFx0XHQvLyBQYWdlciBmdW5jdGlvbjpcclxuXHQgdGhpcy5wYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcblx0IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wYWdlcik7XHJcblxyXG5cdCB0aGlzLmJ1aWxkUGFnZXIgPSBmdW5jdGlvbigpXHJcblx0IHtcclxuXHQgZm9yKHZhciBpIGluIF90aGlzLnZpZXdzKVxyXG5cdCB7XHJcblx0IC8vIENyZWF0ZSBhbiBhbmNob3IsIHdoaWNoIGxvYWRzIHRoZSBzcGVjaWZpYyB2aWV3OlxyXG5cdCB2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0IGFuY2hvci5pbm5lclRleHQgPSBwYXJzZUludChpKSArIDE7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIiwgaSk7XHJcblx0IGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBfdGhpcy52aWV3c1tpXS5uYW1lKTtcclxuXHQgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5wbGF5Vmlldyh0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKSk7XHJcblx0IH0pO1xyXG5cdCBfdGhpcy5wYWdlci5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG5cdCB9XHJcblx0IH07Ki9cclxuXHJcblx0Ly8gVmlld3MgZnVuY3Rpb25zOlxyXG5cdHRoaXMuYWRkVmlldyA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHRfdGhpcy50b3RhbFZpZXdzLnB1c2goe1xyXG5cdFx0XHRvcmRlcjogX3RoaXMudG90YWxWaWV3cy5sZW5ndGgsXHJcblx0XHRcdHNsdWc6IFwiZG90cy0yXCIsXHJcblx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly8gQ2hlY2sgaWYgYWxsIGlzIGxvYWRlZCBhbmQgc3RhcnQgaWYgc286XHJcblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdHZhciBpbnRlcnZhbFRpbWVvdXQgPSAwO1xyXG5cdFx0dmFyIGludGVydmFsSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRpbnRlcnZhbFRpbWVvdXQrKztcclxuXHRcdFx0aWYoaW50ZXJ2YWxUaW1lb3V0ID09IDMwMCkge1xyXG5cdFx0XHRcdC8vIHdhaXRlZCBmb3IgMzAgc2Vjb25kcy4gU29tZXRoaW5nIGlzIGNsZWFybHkgd3JvbmcuXHJcblx0XHRcdFx0YWxlcnQoXCJUaW1lIG91dCEgSXMgeW91ciBJbnRlcm5ldCBjb25uZWN0aW9uIHRow6F0IHNsb3c/IT9cIik7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDaGVjayBpZiBhbGwgdmlld3MgYXJlIGxvYWRlZDpcclxuXHRcdFx0dmFyIGFsbExvYWRlZCA9IHRydWU7XHJcblx0XHRcdGZvcih2YXIgaSBpbiBfdGhpcy50b3RhbFZpZXdzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoIV90aGlzLnRvdGFsVmlld3NbaV0ubG9hZGVkKSB7IGFsbExvYWRlZCA9IGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoYWxsTG9hZGVkKSB7XHJcblx0XHRcdFx0Ly8gQWxsIHZpZXdzIGFyZSBsb2FkZWQuXHJcblx0XHRcdFx0dmFyIG5ld1ZpZXdzID0gW107XHJcblx0XHRcdFx0Zm9yKHZhciBpMiBpbiBfdGhpcy50b3RhbFZpZXdzKSB7XHJcblx0XHRcdFx0XHR2YXIgY3VycmVudFNsdWcgPSBfdGhpcy50b3RhbFZpZXdzW2kyXS5zbHVnO1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBqIGluIF90aGlzLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdGlmKF90aGlzLnZpZXdzW2pdLnNsdWcgPT0gY3VycmVudFNsdWcpIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdWaWV3cy5wdXNoKF90aGlzLnZpZXdzW2pdKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdGhpcy52aWV3cyA9IG5ld1ZpZXdzO1xyXG5cclxuXHRcdFx0XHQvLyBDbGVhciBpbnRlcnZhbDpcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG5cclxuXHRcdFx0XHQvLyBCdWlsZCB0aGUgcGFnZXI6XHJcbi8vXHRcdFx0XHRcdFx0XHRfdGhpcy5idWlsZFBhZ2VyKCk7XHJcblxyXG5cdFx0XHRcdC8vIFN0YXJ0IHRoZSBhcHA6XHJcblx0XHRcdFx0X3RoaXMuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMjUwKTtcclxuXHR9O1xyXG5cclxuXHQvLyBTdGFydCBmdW5jdGlvbjpcclxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdC8vIEdldCB0aGUgcmlnaHQgdmlldzpcclxuXHRcdC8qXHRcdFx0XHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9IFwiXCIpIHtcclxuXHRcdCB2YXIgY3VycmVudEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuXHRcdCBmb3IodmFyIGkgaW4gX3RoaXMudmlld3MpIHtcclxuXHRcdCBpZihfdGhpcy52aWV3c1tpXS5zbHVnID09IGN1cnJlbnRIYXNoKSB7XHJcblx0XHQgX3RoaXMuY3VycmVudFZpZXcgPSBpO1xyXG5cdFx0IH1cclxuXHRcdCB9XHJcblx0XHQgfSBlbHNlIHsqL1xyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSBfdGhpcy52aWV3cy5sZW5ndGggLSAxO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHRfdGhpcy5wbGF5VmlldyhfdGhpcy5jdXJyZW50Vmlldyk7XHJcblx0XHQvLyBTZXR1cCB0aGUgbG9vcDpcclxuXHRcdC8vIHNldEludGVydmFsKGZ1bmN0aW9uIGFOYW1lKCl7XHJcblx0XHQoZnVuY3Rpb24gYU5hbWUoKXtcclxuXHRcdFx0Ly8gUGFzcyBvbiBzb21lIHZhcmlhYmxlczpcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMubW91c2VQb3NpdGlvbiA9IF90aGlzLm1vdXNlUG9zaXRpb247XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLm1vdXNlRG93biA9IF90aGlzLm1vdXNlRG93bjtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMuY2xpY2sgPSBfdGhpcy5jbGljaztcclxuXHRcdFx0X3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHRcdFx0Ly8gTWFrZSB0aGF0IHN0ZXA6XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zdGVwRnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhTmFtZSk7XHJcblx0XHQvLyB9LCAxMDAwIC8gX3RoaXMuZnJhbWVSYXRlKTsgLy8gZGVmYXVsdCA9IDYwIGZwcy5cclxuXHRcdFx0fSkoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnBsYXlWaWV3ID0gZnVuY3Rpb24odmlld05yKVxyXG5cdHtcclxuXHRcdC8vIFVuLWluaXRpYWxpemUgdGhlIGN1cnJlbnQgdmlldzpcclxuXHRcdHRyeSB7XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS51bkluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHRcdH0gY2F0Y2goZSkge31cclxuXHRcdC8vIEdvIGZ1cnRoZXIgd2l0aCB0aGUgcmVxdWVzdGVkIHZpZXcgZnJvbSBoZXJlOlxyXG5cdFx0X3RoaXMuY3VycmVudFZpZXcgPSB2aWV3TnI7XHJcblx0XHQvLyBSZW1vdmUgdGhlIGNsYXNzIG9mIHRoZSBhY3RpdmUgdmlldzpcclxuLy9cdFx0XHRcdFx0aWYodGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYS5hY3RpdmVcIikpIHtcclxuLy9cdFx0XHRcdFx0XHR0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhLmFjdGl2ZVwiKS5jbGFzc05hbWUgPSBcIlwiO1xyXG4vL1x0XHRcdFx0XHR9XHJcblx0XHQvLyBBbmQgYWRkIGl0IHRvIHRoZSBuZXcgdmlldyFcclxuLy9cdFx0XHRcdFx0dGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYVtkYXRhLXZpZXc9XCJcIiArIF90aGlzLmN1cnJlbnRWaWV3ICsgXCJcIl1cIikuY2xhc3NOYW1lID0gXCJhY3RpdmVcIlxyXG5cdFx0Ly8gU2V0IHRoZSBoYXNoOlxyXG4vL1x0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5zbHVnO1xyXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgY3VycmVudCB2aWV3OlxyXG5cdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLmluaXRGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHR9O1xyXG5cclxufTtcclxuXHJcbnZhciBTdGVwR2VuZXJhdG9yID0gZnVuY3Rpb24oY29tcGxleGl0eSwgbWluSW5jLCBtYXhJbmMsIG1pbk11bCwgbWF4TXVsKVxyXG57XHJcblx0dGhpcy5zdGVwcyAgICAgICA9IFtdO1xyXG5cdHRoaXMuaW5jcyAgICAgICAgPSBbXTtcclxuXHR0aGlzLm11bHRpcGxpZXJzID0gW107XHJcblx0dGhpcy5jb21wbGV4aXR5ICA9IGNvbXBsZXhpdHk7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdC8vIERlZmF1bHRzOlxyXG5cdGlmKG1pbkluYyA9PT0gbnVsbCkgeyBtaW5JbmMgPSAwOyB9XHJcblx0aWYobWF4SW5jID09PSBudWxsKSB7IG1heEluYyA9IDAuMTsgfVxyXG5cdGlmKG1pbk11bCA9PT0gbnVsbCkgeyBtaW5NdWwgPSAwLjc7IH1cclxuXHRpZihtYXhNdWwgPT09IG51bGwpIHsgbWF4TXVsID0gMS4zOyB9XHJcblxyXG5cdC8vIEluaXRpYWxpc2U6XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdHtcclxuXHRcdHRoaXMuc3RlcHMucHVzaChNYXRoLnJhbmRvbSgpICogTWF0aC5QSSk7XHJcblx0XHR0aGlzLmluY3MucHVzaChtaW5JbmMgKyBNYXRoLnJhbmRvbSgpICogKG1heEluYyAtIG1pbkluYykpO1xyXG5cdFx0dGhpcy5tdWx0aXBsaWVycy5wdXNoKG1pbk11bCArIE1hdGgucmFuZG9tKCkgKiAobWF4TXVsIC0gbWluTXVsKSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnN0ZXAgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gSW5jcmVhc2UgdGhlIGNvdW50ZXJzOlxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IF90aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0X3RoaXMuc3RlcHNbaV0gKz0gX3RoaXMuaW5jc1tpXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBTdGVwIFhZLWZ1bmN0aW9uOlxyXG5cdHRoaXMuZ2V0WFkgPSBmdW5jdGlvbihvZmZzZXQsIHcsIGgpXHJcblx0e1xyXG5cdFx0aWYob2Zmc2V0ID09PSBudWxsKSB7IG9mZnNldCA9IDA7IH1cclxuXHJcblx0XHR2YXIgeFZhbHVlID0gMDtcclxuXHRcdHZhciB5VmFsdWUgPSAwO1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZSBYWTpcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdHhWYWx1ZSArPSBNYXRoLnNpbihfdGhpcy5zdGVwc1tpXSArIChfdGhpcy5pbmNzW2ldICogb2Zmc2V0KSkgKiB3O1xyXG5cdFx0XHR5VmFsdWUgKz0gTWF0aC5jb3MoKF90aGlzLnN0ZXBzW2ldICsgKF90aGlzLmluY3NbaV0gKiBvZmZzZXQpKSAqIF90aGlzLm11bHRpcGxpZXJzW2ldKSAqIGg7XHJcblx0XHR9XHJcblx0XHQvLyBSZXR1cm4gaXQ6XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR4OiB4VmFsdWUsXHJcblx0XHRcdHk6IHlWYWx1ZVxyXG5cdFx0fTtcclxuXHR9O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBwZyA9IG5ldyBQbHlncm5kKCk7XHJcbnBnLnZpZXdzLnB1c2goe1xyXG5cdG5hbWUgICAgICAgICAgICA6IFwiRG90cyAyXCIsXHJcblx0c2x1ZyAgICAgICAgICAgIDogXCJkb3RzLTJcIixcclxuXHQvLyBWYXJpYWJsZXMgdXNlZCBieSB0aGlzIHZpZXc6XHJcblx0dmFycyAgICAgICAgICAgIDoge1xyXG5cdFx0c3RlcHM6IG51bGwsXHJcblx0XHRjdXJyZW50WDogMCxcclxuXHRcdGN1cnJlbnRZOiAwXHJcblx0fSxcclxuXHQvLyBJbml0aWFsaXNhdGlvbjpcclxuXHRpbml0RnVuY3Rpb24gICAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe1xyXG5cdFx0dmFycy5zdGVwcyA9IG5ldyBTdGVwR2VuZXJhdG9yKDQsIDAsIDAuMDIsIDAuNywgMS4zKTtcclxuXHRcdHZhcnMucHJldkRpc3RhbmNlcyA9IHt9O1xyXG5cdH0sXHJcblx0Ly8gVW4taW5pdGlhbGlzYXRpb246XHJcblx0dW5Jbml0RnVuY3Rpb24gIDogZnVuY3Rpb24oY3R4LCB2YXJzKXt9LFxyXG5cdC8vIFN0ZXBwaW5nIGZ1bmN0aW9uOlxyXG5cdHN0ZXBGdW5jdGlvbiAgICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7XHJcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC53aWR0aCwgY3R4LmhlaWdodCk7XHJcblx0XHR2YXIgc3RlcFNpemUgPSBjdHgud2lkdGggLyAzMDtcclxuXHRcdHZhciBzdGVwc1ggPSBjdHgud2lkdGggLyBzdGVwU2l6ZTtcclxuXHRcdHZhciBzdGVwc1kgPSBjdHguaGVpZ2h0IC8gc3RlcFNpemU7XHJcblxyXG4vL1x0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gXCIjMDBkZGZmXCI7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjOGMyNDNlXCI7XHJcblxyXG5cdFx0Ly8gQWRkcyBhIHNpbXBsZSBlYXNlIHRvIHRoZSBtb3VzZTpcclxuXHRcdHZhcnMuY3VycmVudFggKz0gKHZhcnMubW91c2VQb3NpdGlvbi54IC0gdmFycy5jdXJyZW50WCkgLyAyMDtcclxuXHRcdHZhcnMuY3VycmVudFkgKz0gKHZhcnMubW91c2VQb3NpdGlvbi55IC0gdmFycy5jdXJyZW50WSkgLyAyMDtcclxuXHJcblx0XHR2YXJzLnN0ZXBzLnN0ZXAoKTtcclxuXHJcblx0XHR2YXIgc2l6ZSA9IGN0eC53aWR0aC8xLjU7XHJcblxyXG5cdFx0Zm9yKHZhciB5ID0gMDsgeSA8IHN0ZXBzWTsgeSArKylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKHZhciB4ID0gMDsgeCA8IHN0ZXBzWDsgeCArKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBjWCA9ICh5JTIgKiBzdGVwU2l6ZSAvIDIpICsgKHggKiBzdGVwU2l6ZSk7XHJcblx0XHRcdFx0dmFyIGNZID0geSAqIHN0ZXBTaXplO1xyXG5cclxuXHRcdFx0XHQvLyBvdXRzaWRlOlxyXG5cdFx0XHRcdHZhciByYWQgPSBNYXRoLmF0YW4yKGNYIC0gdmFycy5jdXJyZW50WCwgY1kgLSB2YXJzLmN1cnJlbnRZKTtcclxuXHJcblx0XHRcdFx0Ly8gZGlzdGFuY2U6XHJcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG5cdFx0XHRcdFx0TWF0aC5wb3codmFycy5jdXJyZW50WCAtIGNYLCAyKSArIE1hdGgucG93KHZhcnMuY3VycmVudFkgLSBjWSwgMilcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR2YXIgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgKHNpemUvMikgLSBkaXN0YW5jZSk7XHJcblx0XHRcdFx0dmFyIHAgPSBvZmZzZXQvc2l6ZTtcclxuXHRcdFx0XHRwKj0xLXA7XHJcblx0XHRcdFx0b2Zmc2V0ID0gKHNpemUvMikgKiBwO1xyXG5cclxuXHRcdFx0XHR2YXIgc3RlcFhZID0gdmFycy5zdGVwcy5nZXRYWSgoeSpzdGVwc1gpKyh4KjMpLCBvZmZzZXQsIG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdHZhciBkWCA9IHN0ZXBYWS54ICsgY1ggKyBNYXRoLnNpbihyYWQpICogKG9mZnNldCk7XHJcblx0XHRcdFx0dmFyIGRZID0gc3RlcFhZLnkgKyBjWSArIE1hdGguY29zKHJhZCkgKiAob2Zmc2V0KTtcclxuXHRcdFx0XHQvLyB2YXIgZFggPSBjWDtcclxuXHRcdFx0XHQvLyB2YXIgZFkgPSBjWSArIE1hdGguY29zKHJhZCkgKiAob2Zmc2V0KTtcclxuXHJcblx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGN0eC5kcmF3Q2lyY2xlKGRYLCBkWSwgZGlzdGFuY2UvODApO1xyXG5cdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxucGcuYWRkVmlldygpO1xyXG4vLyBwZy5sb2FkKCk7XHJcbiIsIi8qKlxyXG4gICogMjAxNi0yMDE3IChDKSBBbnRvbmlvIFJlZG9uZG8gLyBhbnRvbmlvcmVkb25kby5jb21cclxuICAqXHJcbiAgKiBET01Ub29scyBpcyBhIG5hbm8tbGlicmFyeSB3aGljaCBjb250YWlucyBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGggYmFzaWNcclxuICAqIG5lZWRzIGFuZCBwcm9ibGVtcyBmYWNlZCBvbiBmcm9udC1lbmQgd2ViIGFwcGxpY2F0aW9ucy5cclxuICAqXHJcbiAgKiBJdCdzIGltcGxlbWVudGVkIG9uIEVTNSBKYXZhU2NyaXB0IGFzIHRoZSAnZCcgb2JqZWN0IG9uIHRoZSBnbG9iYWwgbmFtZXNwYWNlLlxyXG4gICpcclxuICAqIEl0IGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25hbGl0eTpcclxuICAqIC0gU29ydGVyIG5hbWUgZnVuY3Rpb25zIHdyYXBwaW5nIHF1ZXJpbmcsIGV2ZW50cyBhbmQgdGltZW91dHMgZnVuY3Rpb25zLlxyXG4gICogLSBHZW5lcmF0aW9uIG9mIHJhbmRvbSBpbnRlZ2Vycy5cclxuICAqIC0gQWRkaW5nLCByZXRyaWV2aW5nIGFuZCByZW1vdmluZyBjb29raWVzLlxyXG4gICogLSBDaGVja2luZyBvZiBDU1MgdHJhbnNmb3JtcyBzdXBwb3J0LlxyXG4gICogLSBDaGVja2luZyBvZiBPUy5cclxuICAqIC0gQ2FsY3VsYXRpb24gb2YgZWxlbWVudCBoZWlnaHRzIGFuZCBwb3NpdGlvbnMuXHJcbiAgKiAtIExvYWRpbmcgb2YgaW1hZ2VzIGFuZCBleGVjdXRpbmcgYSBjYWxsYmFjayBvbmNlIHRoZXkncmUgbG9hZGVkLlxyXG4gICpcclxuICAqL1xyXG5cclxuKGZ1bmN0aW9uKGQpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHRcclxuXHRkLmdpID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0fTtcclxuXHRcclxuXHRkLmdjID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xyXG5cdH07XHJcblx0XHJcblx0ZC5nY2EgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSk7XHJcblx0fTtcclxuXHRcclxuXHRkLnFzID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuXHR9O1xyXG5cdFxyXG5cdGQucXNhID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuXHR9O1xyXG5cdFxyXG5cdGQuYWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG5cdH07XHJcblx0XHJcblx0ZC5zdCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH07XHJcblx0XHJcblx0ZC5zaSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldEludGVydmFsKGNhbGxiYWNrLCB0aW1lKTtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8qKlxyXG5cdCAgKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIGEgcmFuZ2UuXHJcblx0ICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXIgbGltaXQgb2YgdGhlIHJhbmdlLiBJdCBkZWZhdWx0cyB0byAtNTAuXHJcblx0ICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVyIGxpbWl0IG9mIHRoZSByYW5nZS4gSXQgZGVmYXVsdHMgdG8gNTAuXHJcblx0ICAqIEByZXR1cm5zIHtudW1iZXJ9IC0gVGhlIGdlbmVyYXRlZCByYW1kb24gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxyXG5cdCAgKi9cclxuXHRkLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcblx0XHRtaW4gPSBtaW4gfHwgLTUwO1xyXG5cdFx0bWF4ID0gbWF4IHx8IDUwO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvKipcclxuXHQgICogUmV0dXJucyB0aGUgc3VtIG9mIGNsaWVudEhlaWdodHMgb2YgYWxsIHRoZSBlbGVtZW50cyBzZWxlY3RlZCBieSB0aGUgQ1NTIHF1ZXJ5IHByb3ZpZGVkLlxyXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzIC0gQ1NTIHF1ZXJ5LlxyXG5cdCAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFRoZSBzdW0gb2YgYWxsIGNsaWVudEhlaWdodHMuIDAgaWYgbm8gZWxlbWVudHMgc2VsZWN0ZWQuXHJcblx0ICAqL1xyXG5cdGQuY2FsY0NsaWVudEhlaWdodHNTdW0gPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIHRvdGFsID0gMDtcclxuXHRcdHZhciBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZC5xc2Eoc2VsZWN0b3IpKTtcclxuXHRcdFxyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdHRvdGFsICs9IGl0ZW0uY2xpZW50SGVpZ2h0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0b3RhbDtcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAgKiBSZXR1cm5zIGFuIEFycmF5IHdpdGggRE9NUmVjdHMgb2YgYWxsIHRoZSBlbGVtZW50cyBzZWxlY3RlZCBieSB0aGUgQ1NTIHF1ZXJ5IHByb3ZpZGVkLlxyXG5cdCAgKiBUaGUgYm9yZGVyLWJveCBjb29yZGluYXRlcycgb3JpZ2luIGlzIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycyAtIENTUyBxdWVyeS5cclxuXHQgICogQHJldHVybnMge0FycmF5fSAtIEFuIGFycmF5IHdpdGggRE9NUmVjdHMuIHVuZGVmaW5lZCBpZiBubyBlbGVtZW50cyBzZWxlY3RlZC5cclxuXHQgICovXHJcblx0ZC5jYWxjUG9zaXRpb25zVG9WaWV3cG9ydCA9IGZ1bmN0aW9uKHNlbGVjdG9ycykge1xyXG5cdFx0dmFyIHBvc2l0aW9ucyA9IFtdO1xyXG5cdFx0dmFyIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkLnFzYShzZWxlY3RvcnMpKTtcclxuXHJcblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdHBvc2l0aW9ucy5wdXNoKGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHBvc2l0aW9ucztcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAgKiBSZXR1cm5zIGFuIE9iamVjdCB3aXRoIGxlZnQsIHRvcCwgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzIG9mIHRoZSBjaGlsZFxyXG5cdCAgKiBlbGVtZW50IGJvcmRlci1ib3ggcG9zaXRpb24gcmVsYXRpdmUgdG8gYSBwYXJlbnQgZWxlbWVudCBzcGVjaWZpZWQgYnkgcGFyZW50U2VsZWN0b3IuXHJcblx0ICAqIFRoZSBwYXJlbnQgYW5kIHRoZSBjaGlsZCBkb24ndCBuZWVkIHRvIGJlIGRpcmVjdGx5IG5lc3RlZCBvbiB0aGUgZWxlbWVudHMnIGhpZXJhcmNoeS5cclxuXHQgICogSWYgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nIGlzIHByb3ZpZGVkIGFuZCBpdCBzZWxlY3RzIG1vcmUgdGhhbiBvbmUgZWxlbWVudFxyXG5cdCAgKiBvbmx5IHRoZSBmaXJzdCBlbGVtZW50IHdpbGwgYmUgdXNlZC5cclxuXHQgICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR9IHBhcmVudFNlbGVjdG9yIC0gQ1NTIHNlbGVjdG9yIHN0cmluZyBvciBIVE1MRWxlbWVudCBmb3IgYSByZWZlcmVuY2UgcGFyZW50LlxyXG5cdCAgKiBAcGFyYW0ge3N0cmluZ3xIVE1MRWxlbWVudH0gY2hpbGRTZWxlY3RvciAtIENTUyBzZWxlY3RvciBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgZm9yIHRoZSBjaGlsZC5cclxuXHQgICogQHJldHVybnMge09iamVjdH0gLSBBbiBPYmplY3Qgd2l0aCBsZWZ0LCB0b3AsIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllcy5cclxuXHQqL1xyXG5cdGQuY2FsY1JlbGF0aXZlUG9zaXRpb24gPSBmdW5jdGlvbihwYXJlbnQsIGNoaWxkKSB7XHJcblx0XHRpZiAodHlwZW9mIHBhcmVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cGFyZW50ID0gZC5xcyhwYXJlbnQpO1xyXG5cdFx0aWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0Y2hpbGQgPSBkLnFzKGNoaWxkKTtcclxuXHJcblx0XHRpZiAoKCFwYXJlbnQgfHwgIWNoaWxkKVxyXG5cdFx0XHRcdCYmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiVGhlIHBhcmVudCBvciBjaGlsZCB3ZXJlIHVuZGVmaW5lZCBvciB0aGV5IHdlcmVuJ3QgSFRNTEVsZW1lbnRzXCIpOy8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHR2YXIgY2hpbGRSZWN0ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0dmFyIG9mZnNldCA9IHtcclxuXHRcdFx0bGVmdDogbnVsbCxcclxuXHRcdFx0dG9wOiBudWxsLFxyXG5cdFx0XHR3aWR0aDogbnVsbCxcclxuXHRcdFx0aGVpZ2h0OiBudWxsXHJcblx0XHR9O1xyXG5cclxuXHRcdG9mZnNldC5sZWZ0ID0gY2hpbGRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQ7XHJcblx0XHRvZmZzZXQudG9wID0gY2hpbGRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wO1xyXG5cdFx0b2Zmc2V0LndpZHRoID0gY2hpbGQub2Zmc2V0V2lkdGg7XHJcblx0XHRvZmZzZXQuaGVpZ2h0ID0gY2hpbGQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRcdHJldHVybiBvZmZzZXQ7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHR2YXIgaW1hZ2VzVG9Mb2FkID0gW107XHJcblx0dmFyXHRjYWxsYmFja3MgPSBbXTtcclxuXHRcdFxyXG5cdHZhciBydW5DYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBhcmVBbGxMb2FkZWQgPSBpbWFnZXNUb0xvYWQuZXZlcnkoZnVuY3Rpb24oaW1hZ2UpIHtcclxuXHRcdFx0cmV0dXJuIGltYWdlLmxvYWRlZDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRpZiAoYXJlQWxsTG9hZGVkKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRkLm5vdGlmeVdoZW5Mb2FkZWQgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzA0MzUwOS90aGlzLWluc2lkZS1vYmplY3RcclxuXHRcdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2MTYyMDIvc2VsZi1yZWZlcmVuY2VzLWluLW9iamVjdC1saXRlcmFsLWRlY2xhcmF0aW9uc1xyXG5cdFx0dmFyIGltYWdlVG9Mb2FkID0ge1xyXG5cdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXHJcblx0XHRcdGxvYWRlZDogZmFsc2UsXHJcblx0XHRcdHNldEFzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpbWFnZVRvTG9hZC5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHJ1bkNhbGxiYWNrcygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR2YXIgaW1hZ2UgPSBkLnFzKHNlbGVjdG9yKTtcclxuXHRcdGlmIChpbWFnZSkge1xyXG5cdFx0XHRpbWFnZXNUb0xvYWQucHVzaChpbWFnZVRvTG9hZCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5Nzc4NzEvY2hlY2staWYtYW4tZWxlbWVudC1pcy1sb2FkZWQtbm8tZXJyb3JzLWluLWphdmFzY3JpcHRcclxuXHRcdFx0aWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxIZWlnaHQpIHtcclxuXHRcdFx0XHRpbWFnZVRvTG9hZC5zZXRBc0xvYWRlZCgpO1xyXG5cdFx0XHR9IGVsc2UgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW1hZ2VUb0xvYWQuc2V0QXNMb2FkZWQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gaW1hZ2U7XHJcblx0fTtcclxuXHRcclxuXHRkLnJ1bldoZW5BbGxMb2FkZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG5cdFx0cnVuQ2FsbGJhY2tzKCk7XHJcblx0fTtcclxuXHRcclxuXHRkLnJlc2V0RWxlbWVudHNUb0xvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGltYWdlc1RvTG9hZCA9IFtdO1xyXG5cdFx0Y2FsbGJhY2tzID0gW107XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRkLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIFwidHJhbnNmb3JtXCI7XHJcblx0XHRlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcIndlYmtpdFRyYW5zZm9ybVwiO1xyXG5cdH07XHJcblx0XHJcblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTIxOTU4Mi9ob3ctdG8tZGV0ZWN0LW15LWJyb3dzZXItdmVyc2lvbi1hbmQtb3BlcmF0aW5nLXN5c3RlbS11c2luZy1qYXZhc2NyaXB0XHJcblx0ZC5nZXRPUyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG9zO1xyXG5cdFx0dmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0XHRcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiV2luXCIpICE9IC0xKVx0XHRvcyA9IFwiV2luZG93c1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJNYWNcIikgIT0gLTEpXHRcdG9zID0gXCJtYWNPU1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJMaW51eFwiKSAhPSAtMSlcdFx0b3MgPSBcIkxpbnV4XCI7XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIkFuZHJvaWRcIikgIT0gLTEpXHRvcyA9IFwiQW5kcm9pZFwiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJsaWtlIE1hY1wiKSAhPSAtMSlcdG9zID0gXCJpT1NcIjtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG9zO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0LyoqXHJcblx0KiBHZXRzIGEgY29va2llIGJ5IG5hbWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGNvb2tpZS5cclxuXHQqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIHZhbHVlIG9mIHRoZSBjb29raWUuIG51bGwgaXMgbm8gY29va2llIHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdCovXHJcblx0ZC5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR2YXIgbmFtZVdpdGhFcXVhbCA9IG5hbWUgKyBcIj1cIjtcclxuXHRcdHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcblx0XHRcclxuXHRcdGZvciAodmFyIGk9MDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjID0gY2FbaV07XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpXHJcblx0XHRcdFx0YyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZiAoYy5pbmRleE9mKG5hbWVXaXRoRXF1YWwpID09PSAwKVxyXG5cdFx0XHRcdHJldHVybiBjLnN1YnN0cmluZyhuYW1lV2l0aEVxdWFsLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fTtcclxuXHRcclxuXHQvKipcclxuXHQqIFNldHMgYSBjb29raWUgYnkgbmFtZS5cclxuXHQqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgY29va2llLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgZm9yIHRoZSBjb29raWUuXHJcblx0KiBAcGFyYW0ge3N0cmluZ30gZGF5cyAtIEV4cGlyYXRpb24gdGltZSBpbiBkYXlzLlxyXG5cdCogQHJldHVybnMge3VuZGVmaW5lZH0gLSBBbHdheXMgdW5kZWZpbmVkXHJcblx0Ki9cclxuXHRkLnNldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcblx0XHR2YXIgZXhwaXJlcztcclxuXHRcdFxyXG5cdFx0aWYgKGRheXMpIHtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG5cdFx0XHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0XHR9IGVsc2UgZXhwaXJlcyA9IFwiXCI7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCogUmVtb3ZlcyBhIGNvb2tpZSBieSBuYW1lLlxyXG5cdCogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBjb29raWUgdG8gcmVtb3ZlLlxyXG5cdCogQHJldHVybnMge3VuZGVmaW5lZH0gLSBBbHdheXMgdW5kZWZpbmVkLlxyXG5cdCovXHJcblx0ZC5yZW1vdmVDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR0aGlzLnNldENvb2tpZShuYW1lLCBcIlwiLCAtMSk7XHJcblx0fTtcclxuXHRcclxufSh3aW5kb3cuZCA9IHdpbmRvdy5kIHx8IHt9KSk7XHJcbiIsIlxyXG5mdW5jdGlvbiBoaWRlSW50cm8odHlwZSkge1xyXG5cdHZhciBtb2RpZmllciA9IFwib3V0XCI7XHJcblx0XHRcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgMjogbW9kaWZpZXIgPSBcIm91dDJcIjtcclxuXHR9XHJcblx0XHJcblx0dmFyIGludHJvID0gZC5nYyhcImludHJvXCIpLFxyXG5cdFx0aW50cm9EYXJrZW5lciA9IGQuZ2MoXCJpbnRyby1kYXJrZW5lclwiKTtcclxuXHRcdFxyXG5cdGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyby0tXCIgKyBtb2RpZmllcik7XHJcblx0aW50cm8uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW50cm9cIikpXHJcblx0XHRcdGludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9KTtcclxuXHRcclxuXHRpbnRyb0RhcmtlbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnRyby1kYXJrZW5lci0tXCIgKyBtb2RpZmllcik7XHJcblx0aW50cm9EYXJrZW5lci5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnRyby1kYXJrZW5lclwiKSAmJiB0eXBlID09PSAyKVxyXG5cdFx0XHRpbnRyb0RhcmtlbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGVsc2UgZC5zdChmdW5jdGlvbigpIHsgaW50cm9EYXJrZW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IH0sIDUwMCk7XHJcblx0fSk7XHJcblx0XHJcblx0ZC5nYyhcIm1haW4tYmdcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tYmctLWluXCIpO1xyXG5cdFxyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGggPj0gODEwKSB7XHJcblx0XHRwZy5sb2FkKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRJbnRybygpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cdGQuZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24tLWJvdHRvbVwiKTtcclxuXHRkLmdjKFwic2Nyb2xsLWRvd25fX2lubmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bl9faW5uZXItLW91dFwiKTtcclxuXHRcclxuXHR2YXIgdmlld1BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcclxuXHRcdHdoZWVsTGV2ZWwgPSAwLFxyXG5cdFx0d2hlZWxMZXZlbEZvcm1lciA9IDAsXHJcblx0XHRwaHJhc2VzID0gZC5nY2EoXCJwaHJhc2VzX19waHJhc2VcIiksXHJcblx0XHRwaHJhc2VzQ291bnQgPSBwaHJhc2VzLmxlbmd0aCxcclxuXHRcdGJ1YmJsZXMgPSBkLmdjYShcImJ1YmJsZXNfX2xheWVyXCIpLFxyXG5cdFx0c2xpZGVzID0gZC5xc2EoXCIuc2xpZGVzPi5zbGlkZVwiKSxcclxuXHRcdHNsaWRlc0NvdW50ID0gc2xpZGVzLmxlbmd0aCxcclxuXHRcdHZpc2libGVQaHJhc2VzID0gW10sXHJcblx0XHR2aXNpYmxlQnViYmxlcyA9IFtdLFxyXG5cdFx0b25UcmFuc2l0aW9uID0gZmFsc2UsXHJcblx0XHR5U3RhcnQsXHJcblx0XHR5RW5kLFxyXG5cdFx0dHJhbnNmb3JtID0gZC5jaGVja1RyYW5zZm9ybXNTdXBwb3J0ZWQoKSxcclxuXHRcdG1vdXNlTW92ZUxpc3RlbmVyLFxyXG5cdFx0Ly8gbW91c2VXaGVlbExpc3RlbmVyLFxyXG5cdFx0Ly8gdG91Y2hTdGFydExpc3RlbmVyLFxyXG5cdFx0Ly8gdG91Y2hFbmRMaXN0ZW5lcixcclxuXHRcdC8vIGtleURvd25MaXN0ZW5lcixcclxuXHRcdHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50LFxyXG5cdFx0dG9IaW50cztcclxuXHRcclxuXHQvLyBPbiBkZXNrdG9wIHZlcnNpb24gaXQgbW92ZXMgdGhlIHBocmFzZXMgYW5kIGJ1YmJsZXMgb24gdGhlIDNkIHNwYWNlIGRlcGVuZGluZyBvbiB0aGUgY3Vyc29yIHBvc2l0aW9uXHJcblx0aWYgKHZpZXdQb3J0V2lkdGggPD0gODEwKSB7XHJcblx0XHR2YXIgcGhyYXNlc0NvbnRhaW5lciA9IGQuZ2MoXCJwaHJhc2VzXCIpLFxyXG5cdFx0XHRidWJibGVzQ29udGFpbmVyID0gZC5nYyhcImJ1YmJsZXNcIik7XHJcblx0XHRkLmFlKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGVsdGFaOiBcIiArIGUuZGVsdGFaKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhTW9kZTogXCIgKyBlLmRlbHRhTW9kZSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRYOiBcIiArIGUuY2xpZW50WCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRZOiBcIiArIGUuY2xpZW50WSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgK1wiZGVnKVwiKTtcclxuXHRcdFx0Ly8gcGhyYXNlc0NvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1dID0gXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgKyBcImRlZykgcm90YXRlWShcIiArICgwLjAyKmUuY2xpZW50WC0yNSkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyAoLTAuMDUqZS5jbGllbnRYKzEwMCkgKyBcInB4LCAwLCAwKVwiO1xyXG5cdFx0XHRwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBcInJvdGF0ZVgoXCIgKyAtKDAuMDIqZS5jbGllbnRZKSArIFwiZGVnKSByb3RhdGVZKFwiICsgKDAuMDIqZS5jbGllbnRYKSArIFwiZGVnKSB0cmFuc2xhdGUzZChcIiArICgtMC4wNSplLmNsaWVudFgrMTAwKSArIFwicHgsIDAsIDApXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEdWUgdG8gYSB3ZWlyZCBiZWhhdmlvdXIgdGhlIGJlbG93IGxpbmUgc3BvaWxzIHRoZSBidWJibGVzIHpvb20gZWZmZWN0IG9mIENocm9tZS5cclxuXHRcdFx0Ly8gV2l0aCB0aGlzIGNvbmRpdGlvbmFsIGlmIHdlIGF2b2lkIGV4ZWN1dGlvbiBvbiBDaHJvbWVcclxuXHRcdFx0aWYgKCEod2luZG93LmNocm9tZSAmJiB3aW5kb3cuY2hyb21lLndlYnN0b3JlKSlcclxuXHRcdFx0XHRidWJibGVzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gU2hvd3MgYSB0ZXh0IGhpbnQgaWYgdGhlIGludHJvIGRvZXNuJ3Qgc3RhcnQgc2Nyb2xsaW5nIGRvd24gaW4gMyBzZWNvbmRzXHJcblx0dG9IaW50cyA9IGQuc3QoZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gMClcclxuXHRcdFx0aWYgKHZpZXdQb3J0V2lkdGggPj0gODEwICYmIGQuZ2V0T1MoKSAhPT0gXCJBbmRyb2lkXCIgJiYgZC5nZXRPUygpICE9PSBcImlPU1wiKVxyXG5cdFx0XHRcdGQuZ2MoXCJzY3JvbGwtZG93bi1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi1oaW50LS1pblwiKTtcclxuXHRcdFx0ZWxzZSBkLmdjKFwic3dpcGUtdXAtaGludFwiKS5jbGFzc0xpc3QuYWRkKFwic3dpcGUtdXAtaGludC0taW5cIik7XHJcblx0fSwgMzAwMCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgcGhyYXNlcyBhbmQgYnViYmxlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVQaHJhc2VzKCkge1xyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDEpIHtcclxuXHRcdFx0ZC5nYyhcInNjcm9sbC1kb3duLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLWhpbnQtLW91dFwiKTtcclxuXHRcdFx0ZC5nYyhcInN3aXBlLXVwLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInN3aXBlLXVwLWhpbnQtLW91dFwiKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IHBocmFzZXNDb3VudCkge1xyXG5cdFx0XHRkLnN0KGZ1bmN0aW9uKCkgeyBkLmdjKFwiZW50ZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJlbnRlci1idXR0b24tLWluXCIpOyB9LCAxMDAwKTtcclxuXHRcdFx0ZC5nYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi0tb3V0XCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZC5nYyhcImVudGVyLWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZW50ZXItYnV0dG9uLS1pblwiKTtcclxuXHRcdFx0ZC5nYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGwtZG93bi0tb3V0XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh3aGVlbExldmVsID4gd2hlZWxMZXZlbEZvcm1lcikge1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5zcGxpY2UoMCwgMCwgKHBocmFzZXNbd2hlZWxMZXZlbC0xXSkpO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlcy5zcGxpY2UoMCwgMCwgKGJ1YmJsZXNbd2hlZWxMZXZlbC0xXSkpO1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJwaHJhc2VzX19waHJhc2UtLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdFx0dmlzaWJsZUJ1YmJsZXNbaV0uY2xhc3NMaXN0LmFkZChcImJ1YmJsZXNfX2xheWVyLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAod2hlZWxMZXZlbCA8IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwicGhyYXNlc19fcGhyYXNlLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHRcdHZpc2libGVCdWJibGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJidWJibGVzX19sYXllci0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLnNwbGljZSgwLCAxKTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXMuc3BsaWNlKDAsIDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSB3aGVlbExldmVsO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvLyBNb3ZlcyBzbGlkZXMgYWNjb3JkaW5nbHlcclxuXHRmdW5jdGlvbiBtb3ZlU2xpZGVzKCkge1xyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPiB3aGVlbExldmVsRm9ybWVyKSB7XHJcblx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudC0xXS5jbGFzc0xpc3QuYWRkKFwic2xpZGUtLWluXCIpO1xyXG5cdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnQtMV0uc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcblx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudC0xXS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtdGV4dC0taW5cIik7XHJcblx0XHRcdGlmICh3aGVlbExldmVsLXBocmFzZXNDb3VudCA+IDEgJiYgc2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlLS1yZW1haW5cIikpIHtcclxuXHRcdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnQtMl0uY2xhc3NMaXN0LmFkZChcInNsaWRlLS1vdXRcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAod2hlZWxMZXZlbCA8IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50XS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtLWluXCIpO1xyXG5cdFx0XHRkLnN0KGZ1bmN0aW9uKCkgeyBzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnRdLnN0eWxlLnpJbmRleCA9IFwiMFwiOyB9LCA1MDApO1xyXG5cdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnRdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS10ZXh0LS1pblwiKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwtcGhyYXNlc0NvdW50ID4gMCkge1xyXG5cdFx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudC0xXS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtLW91dFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSB3aGVlbExldmVsO1xyXG5cdH1cclxuXHRcclxuXHQvLyBDb3VudHMgd2hlZWwgc2Nyb2xsIG1vdmVtZW50c1xyXG5cdGQuYWUoXCJ3aGVlbFwiLCAvKiBtb3VzZVdoZWVsTGlzdGVuZXIgPSAgKi9mdW5jdGlvbihlKSB7XHJcblx0XHRcclxuXHRcdGlmIChvblRyYW5zaXRpb24pXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHRvblRyYW5zaXRpb24gPSB0cnVlO1xyXG5cdFx0XHJcblx0XHRsYWJlbDE6IGlmICgoZS5kZWx0YVkgPiAwIHx8IGUuZGV0YWlsLmRlbHRhWSA+IDApICYmIHdoZWVsTGV2ZWwgPCAocGhyYXNlc0NvdW50ICsgc2xpZGVzQ291bnQpKSB7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSBwaHJhc2VzQ291bnQgJiYgIWQuZ2MoXCJtYWluLWJnXCIpLmNsYXNzTGlzdC5jb250YWlucyhcIm1haW4tYmctLWluXCIpKVxyXG5cdFx0XHRcdGJyZWFrIGxhYmVsMTtcclxuXHRcdFx0Kyt3aGVlbExldmVsO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPD0gcGhyYXNlc0NvdW50KVxyXG5cdFx0XHRcdG1vdmVQaHJhc2VzKCk7XHJcblx0XHRcdGVsc2UgbW92ZVNsaWRlcygpO1xyXG5cdFx0fSBlbHNlIGxhYmVsMjogaWYgKChlLmRlbHRhWSA8IDAgfHwgZS5kZXRhaWwuZGVsdGFZIDwgMCApICYmIHdoZWVsTGV2ZWwgPiAwKSB7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSBwaHJhc2VzQ291bnQgJiYgZC5nYyhcIm1haW4tYmdcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFpbi1iZy0taW5cIikpXHJcblx0XHRcdFx0YnJlYWsgbGFiZWwyO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQtLXdoZWVsTGV2ZWw7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAod2hlZWxMZXZlbCA8IHBocmFzZXNDb3VudClcclxuXHRcdFx0XHRtb3ZlUGhyYXNlcygpO1xyXG5cdFx0XHRlbHNlIG1vdmVTbGlkZXMoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZC5zdChmdW5jdGlvbigpIHtcclxuXHRcdFx0b25UcmFuc2l0aW9uID0gZmFsc2U7XHJcblx0XHR9LCA4MDApO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjI2NDA3Mi9kZXRlY3QtYS1maW5nZXItc3dpcGUtdGhyb3VnaC1qYXZhc2NyaXB0LW9uLXRoZS1pcGhvbmUtYW5kLWFuZHJvaWRcclxuXHRkLmFlKFwidG91Y2hzdGFydFwiLCAvKiB0b3VjaFN0YXJ0TGlzdGVuZXIgPSAgKi9mdW5jdGlvbihlKSB7XHJcblx0XHR5U3RhcnQgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHR9KTtcclxuXHRcclxuXHRkLmFlKFwidG91Y2hlbmRcIiwvKiAgdG91Y2hFbmRMaXN0ZW5lciA9ICAqL2Z1bmN0aW9uKGUpIHtcclxuXHRcdHlFbmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XHJcblx0XHRpZiAoeUVuZCAtIHlTdGFydCA8IC02MClcclxuXHRcdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwid2hlZWxcIiwgeyBkZXRhaWw6IHsgZGVsdGFZOiAxIH0gfSkpO1xyXG5cdFx0ZWxzZSBpZiAoeUVuZCAtIHlTdGFydCA+IDYwKVxyXG5cdFx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IC0xIH0gfSkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIE1vdmVzIHJhbmRvbWx5IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseSB0aGUgYnViYmxlIGxheWVyc1xyXG5cdChmdW5jdGlvbiBjb250cm9sbGVkUmFuZG9tTW92ZW1lbnQoKSB7XHJcblx0XHRmb3IgKHZhciBuPTA7IG48dmlzaWJsZUJ1YmJsZXMubGVuZ3RoOyArK24pIHtcclxuXHRcdFx0Ly92YXIgelRyYW5zID0gL1xcLip0cmFuc2xhdGVaXFwoKC4qKXB4XFwpL2kuZXhlYyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR2XCIpLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKVsxXTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXNbbl0uZmlyc3RDaGlsZC5zdHlsZVt0cmFuc2Zvcm1dID0gXCJ0cmFuc2xhdGUzZChcIiArIGQuZ2V0UmFuZG9tSW50KCkgKyBcInB4LCBcIiArIGQuZ2V0UmFuZG9tSW50KCkgKyBcInB4LCAwKVwiO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlc1tuXS5maXJzdENoaWxkLnN0eWxlW3RyYW5zZm9ybV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgZC5nZXRSYW5kb21JbnQoKSArIFwicHgsIFwiICsgZC5nZXRSYW5kb21JbnQoKSArIFwicHgsIDApXCI7XHJcblx0XHR9XHJcblx0XHR0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCA9IGQuc3QoY29udHJvbGxlZFJhbmRvbU1vdmVtZW50LCAzMDAwKTtcclxuXHR9KSgpO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEhpZGVzIHRoZSBJbnRybyBzY3JlZW5cclxuXHRmdW5jdGlvbiBza2lwSW50cm8oKSB7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVMaXN0ZW5lcik7XHJcblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG1vdXNlV2hlZWxMaXN0ZW5lcik7XHJcblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydExpc3RlbmVyKTtcclxuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRMaXN0ZW5lcik7XHJcblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkxpc3RlbmVyKTtcclxuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodG9Db250cm9sbGVkUmFuZG9tTW92ZW1lbnQpO1xyXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0b0hpbnRzKTtcclxuXHRcdFxyXG5cdFx0aGlkZUludHJvKCk7XHJcblx0XHRcclxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIndoZWVsXCIsIHsgZGV0YWlsOiB7IGRlbHRhWTogMSB9IH0pKTtcclxuXHR9XHJcblx0XHJcblx0ZC5nYyhcImVudGVyLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IHNraXBJbnRybygpOyB9KTtcclxuXHRcclxuXHRkLmFlKFwia2V5ZG93blwiLCAvKiBrZXlEb3duTGlzdGVuZXIgPSAgKi9mdW5jdGlvbihlKSB7XHJcblx0XHRzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG5cdFx0XHRjYXNlIDM5OlxyXG5cdFx0XHRjYXNlIDQwOiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IDEgfSB9KSk7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM3OlxyXG5cdFx0XHRjYXNlIDM4OiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IC0xIH0gfSkpOyBicmVhaztcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBza2lwSW50cm8oKTsgLy8gVW5jb21tZW50IGl0IHdoZW4gZGV2ZW9waW5nIGFuZCBjb21tZW50IDxkaXYgY2xhc3M9XCJwaHJhc2VzXCI+IG9uIGluZGV4Lmh0bVxyXG59XHJcbiIsIlxyXG5XZWJGb250LmxvYWQoe1xyXG5cdGdvb2dsZToge1xyXG5cdFx0ZmFtaWxpZXM6IFtcIk9wZW4gU2FucyBDb25kZW5zZWQ6MzAwXCIsIFwiU291cmNlIFNhbnMgUHJvOjQwMCw5MDBcIiwgXCJCbGFjayBPcHMgT25lOjQwMFwiLCBcIkJ1bmdlZSBTaGFkZTo0MDBcIiwgXCJDYXZlYXQ6NDAwXCIsIFwiUGFjaWZpY29cIiwgXCJNb25vZmV0dFwiIF1cclxuXHR9LFxyXG5cdGFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpbml0SW50cm8oKTtcclxuXHR9LFxyXG5cdGluYWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9LFxyXG5cdGNsYXNzZXM6IGZhbHNlLFxyXG5cdHRpbWVvdXQ6IDgwMDBcclxufSk7XHJcbiJdfQ==
