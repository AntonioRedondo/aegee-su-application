/* Web Font Loader v1.6.27 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),ya=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):ya?!1:!0}else X=!1;X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function za(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function Aa(a){this.f=a;this.a=[];this.c={}}
var Ba={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ca={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Da={i:"i",italic:"i",n:"n",normal:"n"},
Ea=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Fa(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Ea.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Da[l];n=n[1];if(null==n||""==n)n="4";else var r=Ca[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Ba[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Ba[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Ga(a,b){this.c=a;this.a=b}var Ha={Arimo:!0,Cousine:!0,Tinos:!0};Ga.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new Aa(e);Fa(f);A(c,za(d),D(b));F(b,function(){a(f.a,f.c,Ha)})};function Ia(a,b){this.c=a;this.a=b}Ia.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ja(a,b){this.c=a;this.f=b;this.a=[]}Ja.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ja(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ia(b,a)};Y.a.c.google=function(a,b){return new Ga(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

// https://github.com/kanduvisla/plygrnd
var Plygrnd = function() {

	var _this = this;                   // Reference to root object;
	this.views = [];                    // Array with views
	this.totalViews = [];               // Counter to keep track if all views are loaded.
	this.currentView = 0;               // CurrentView
	this.mousePosition = {x: (document.body.clientWidth/100*20), y: (document.body.clientHeight/100*20)};  // Mouse position (can be used by views)
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
  * "o" is a nano-library which contains a bunch of functions to deal with basic DOM tasks but with a shorter name.
  * It also contains functions to deal with cookies, and CSS transforms support checking.
  * Mainly used on my personal projects but open to anyone.
  */

(function(o) {
	
	o.gi = function(id) {
		return document.getElementById(id);
	};
	
	o.gc = function(className) {
		return document.getElementsByClassName(className)[0];
	};
	
	o.gca = function(className) {
		return [].slice.call(document.getElementsByClassName(className));
	};
	
	o.qs = function(query) {
		return document.querySelector(query);
	};
	
	o.qsa = function(query) {
		return [].slice.call(document.querySelectorAll(query));
	};
	
	o.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	};
	
	o.to = function(callback, time) {
		return window.setTimeout(callback, time);
	};
	
	o.si = function(callback, time) {
		return window.setInterval(callback, time);
	};
	
	
	
	
	
	o.getRandomInt = function() {
		var min = -50, max = 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	
	
	
	
	o.calcTotalClientHeight = function(selector) {
		var total = 0,
			elements = [].slice.call(o.qsa(selector));
			
		elements.forEach(function(e) {
			total += e.clientHeight;
		});
		
		// console.log(total);
		// console.log(document.body.scrollHeight);
		
		return total;
	};
	
	o.calcRelativePositions = function(selector) {
		var positions = [],
			elements = [].slice.call(o.qsa(selector));
		
		if (elements.length === 0)
			return;
		
		elements.forEach(function(e) {
			positions.push(e.getBoundingClientRect());
			// console.log(e.getBoundingClientRect());
		});
		
		return positions;
	};
	
	o.calcAbsolutePosition = function(parentSelector, childSelector) {
		var parent = o.qs(parentSelector);
		var child = o.qs(childSelector);
		
		if (!parent || !child)
			return;
		
		var offset = {
			left: 0,
			top: 0
		};
		
		while (child !== parent && child) {
			offset.left += child.offsetLeft;
			offset.top += child.offsetTop;
			child = child.parentNode;
		}

		return offset;
	};
	
	o.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	};
	
	
	
	
	
	var elementsToLoad = [],
		callbacks = [];
		
	var runCallbacks = function() {
		var allLoaded = elementsToLoad.every(function(i) {
			return i.loaded;
		});
		
		if (allLoaded) {
			callbacks.forEach(function(i) {
				i();
			});
		}
	};
	
	o.notifyWhenLoaded = function(selector) {
		var elementToLoad = {
			selector: selector,
			loaded: false,
			get setAsLoaded() {
				this.loaded = true;
				runCallbacks();
			}
			// Chrome 53 works. Firefox 49 and Edge 14 don"t
			//setAsLoaded: function() {
			//	elementToLoad.loaded = true;
			//	runCallbacks();
			//	console.log("bbb");
			//}
			// Doesn"t work on browsers
			//setAsLoaded: function() {
			//	this.loaded = true;
			//	runCallbacks();
			//	console.log("ccc");
			//}
		};
		
		var element = o.qs(selector);
		if (element) {
			elementsToLoad.push(elementToLoad);
			
			// http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript
			if (element.complete && element.naturalHeight !== 0) {
				/*jshint -W030 */
				elementToLoad.setAsLoaded;
				/*jshint +W030 */
			} else element.addEventListener("load", elementToLoad.setAsLoaded);
		}
		
		return element;
	};
	
	o.runWhenAllLoaded = function(callback) {
		callbacks.push(callback);
		runCallbacks();
	};
	
	o.resetElementsToLoad = function() {
		elementsToLoad = [];
		callbacks = [];
	};
	
	
	
	
	
	// http://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript
	o.getOS = function() {
		var os;
		var ua = window.navigator.userAgent;
		
		if (ua.indexOf("Win") != -1)		os = "Windows";
		if (ua.indexOf("Mac") != -1)		os = "macOS";
		if (ua.indexOf("Linux") != -1)		os = "Linux";
		if (ua.indexOf("Android") != -1)	os = "Android";
		if (ua.indexOf("like Mac") != -1)	os = "iOS";

		return os;
	};
	
	
	
	
	
	o.getCookie = function(name) {
		var nameEQ = name + "=",
				ca = document.cookie.split(";");
		for (var i=0; i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0) == " ")
				c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) === 0)
				return c.substring(nameEQ.length,c.length);
		}
		return null;
	};
	
	o.setCookie = function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		} else expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	};
	
	o.removeCookie = function(name) {
		this.setCookie(name,"",-1);
	};
	
}(window.o = window.o || {}));


function hideIntro(type) {
	var modifier = "out",
		time = 4000;
		
	switch (type) {
		case 2: modifier = "out2"; time = 1000;
	}
	
	var intro = o.gc("intro"),
		introDarkener = o.gc("intro-darkener");
		
	intro.classList.add("intro--" + modifier);
	intro.addEventListener("transitionend", function(e) {
		if(e.target.classList.contains("intro"))
			intro.style.display = "none";
	});
	
	introDarkener.classList.add("intro-darkener--" + modifier);
	introDarkener.addEventListener("transitionend", function(e) {
		if(e.target.classList.contains("intro-darkener") && type === 2)
			introDarkener.style.display = "none";
		else o.to(function() { introDarkener.style.display = "none"; }, 2500);
	});
	
	o.gc("main-bg").classList.add("main-bg--in");
	
	if (document.documentElement.offsetWidth >= 810) {
		pg.load();
	}
}



function initIntro() {
	o.gc("scroll-down").classList.add("scroll-down--bottom");
	o.gc("scroll-down__inner").classList.add("scroll-down__inner--out");
	
	var viewPortWidth = document.documentElement.offsetWidth,
		wheelLevel = 0,
		wheelLevelFormer = 0,
		phrases = o.gca("phrases__phrase"),
		phrasesCount = phrases.length,
		bubbles = o.gca("bubbles__layer"),
		slides = o.qsa(".slides>.slide"),
		slidesCount = slides.length,
		visiblePhrases = [],
		visibleBubbles = [],
		phrasesCountReached = false,
		yStart,
		yEnd,
		transform = o.checkTransformsSupported(),
		mouseMoveListener,
		mouseWheelListener,
		touchStartListener,
		touchEndListener,
		keyDownListener,
		toControlledRandomMovement,
		toHints;
		
		
		
	// On desktop version it moves the phrases and bubbles on the 3d space depending on the cursor position
	if (viewPortWidth <= 810) {
		var phrasesContainer = o.gc("phrases"), 
			bubblesContainer = o.gc("bubbles");
		o.ae("mousemove", mouseMoveListener = function(e) {
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
	toHints = o.to(function() {
		if (wheelLevel === 0)
			if (viewPortWidth >= 810 && o.getOS() !== "Android" && o.getOS() !== "iOS")
				o.gc("scroll-down-hint").classList.add("scroll-down-hint--in");
			else o.gc("swipe-up-hint").classList.add("swipe-up-hint--in");
	}, 3000);
	
	
	
	// Moves phrases and bubbles accordingly
	function movePhrases() {
		if (wheelLevel === 1) {
			o.gc("scroll-down-hint").classList.add("scroll-down-hint--out");
			o.gc("swipe-up-hint").classList.add("swipe-up-hint--out");
		} 
		
		if (wheelLevel === phrasesCount) {
			o.to(function() { o.gc("enter-button").classList.add("enter-button--in"); }, 1000);
			o.gc("scroll-down").classList.add("scroll-down--out");
		} else {
			o.gc("enter-button").classList.remove("enter-button--in");
			o.gc("scroll-down").classList.remove("scroll-down--out");
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
			slides[wheelLevel-phrasesCount-1].firstElementChild.classList.add("slide-text--in");
			if (wheelLevel-phrasesCount > 1 && !slides[wheelLevel-phrasesCount-1].classList.contains("slide--remain")) {
				slides[wheelLevel-phrasesCount-2].classList.add("slide--out");
			}
		} else if (wheelLevel < wheelLevelFormer) {
			slides[wheelLevel-phrasesCount].classList.remove("slide--in");
			slides[wheelLevel-phrasesCount].firstElementChild.classList.remove("slide-text--in");
			if (wheelLevel-phrasesCount > 0) {
				slides[wheelLevel-phrasesCount-1].classList.remove("slide--out");
			}
		}

		wheelLevelFormer = wheelLevel;
	}
	
	// Counts wheel scroll movements
	o.ae("wheel", mouseWheelListener = function (e) {
		if ((e.deltaY > 0 || e.detail.deltaY > 0) && wheelLevel < (phrasesCount + slidesCount)) {
			if (wheelLevel === phrasesCount && !o.gc("main-bg").classList.contains("main-bg--in"))
				return;
				
			++wheelLevel;
			
			if (wheelLevel <= phrasesCount)
				movePhrases();
			else moveSlides();
		} else if ((e.deltaY < 0 || e.detail.deltaY < 0 ) && wheelLevel > 0) {
			if (wheelLevel === phrasesCount && o.gc("main-bg").classList.contains("main-bg--in"))
				return;
				
			--wheelLevel;
			
			if (wheelLevel < phrasesCount)
				movePhrases();
			else moveSlides();
		}
		console.log(wheelLevel);
	});
	
	http://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
	o.ae("touchstart", touchStartListener = function(e) {
		yStart = e.touches[0].clientY;
	});
	
	o.ae("touchend", touchEndListener = function(e) {
		yEnd = e.changedTouches[0].clientY;
		if (yEnd - yStart < -60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 }}));
		else if (yEnd - yStart > 60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: -1 }}))
	});
	
	
	
	// Moves randomly horizontally and vertically the bubble layers
	(function controlledRandomMovement() {
		for (var n=0; n<visibleBubbles.length; ++n) {
			//var zTrans = /\.*translateZ\((.*)px\)/i.exec(document.getElementById("dv").getAttribute("style"))[1];
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + o.getRandomInt() + "px, " + o.getRandomInt() + "px, 0)";
			visibleBubbles[n].firstChild.style[transform] = "translate3d(" + o.getRandomInt() + "px, " + o.getRandomInt() + "px, 0)";
		}
		toControlledRandomMovement = o.to(controlledRandomMovement, 3000);
	})();
	
	
	
	// Hides the Intro screen
	function skipIntro(gaLabel) {
		window.removeEventListener("mousemove", mouseMoveListener);
		// window.removeEventListener("wheel", mouseWheelListener);
		// window.removeEventListener("touchstart", touchStartListener);
		// window.removeEventListener("touchend", touchEndListener);
		// window.removeEventListener("keydown", keyDownListener);
		window.clearTimeout(toControlledRandomMovement);
		window.clearTimeout(toHints);
		
		hideIntro();
		
		window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 }}));
	}
	
	o.gc("enter-button").addEventListener("click", function(e) { skipIntro("Enter button"); });
	
	o.ae("keydown", keyDownListener = function(e) {
		console.log(e.keyCode);
		switch (e.keyCode) {
			case 39:
			case 40: window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 }})); break;
			case 37:
			case 38: window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: -1 }})); break;
		}
	});
	
}


WebFont.load({
	google: {
		families: ["Open Sans:300,800", "Open Sans Condensed:300", "Black Ops One:400", "Bungee Shade:400", "Caveat:400", "Pacifico", "Monofett" ]
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwiby5qcyIsImluaXRJbnRyby5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjcgLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5tPWJ8fGE7dGhpcy5jPXRoaXMubS5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiB6KGEpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYS5mKXJldHVybiBhLmY7dmFyIGI9YS5tLmxvY2F0aW9uLnByb3RvY29sO1wiYWJvdXQ6XCI9PWImJihiPWEuYS5sb2NhdGlvbi5wcm90b2NvbCk7cmV0dXJuXCJodHRwczpcIj09Yj9cImh0dHBzOlwiOlwiaHR0cDpcIn1mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5tLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9XG5mdW5jdGlvbiBBKGEsYixjKXtmdW5jdGlvbiBkKCl7ayYmZSYmZiYmKGsoZyksaz1udWxsKX1iPXQoYSxcImxpbmtcIix7cmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YixtZWRpYTpcImFsbFwifSk7dmFyIGU9ITEsZj0hMCxnPW51bGwsaz1jfHxudWxsO2RhPyhiLm9ubG9hZD1mdW5jdGlvbigpe2U9ITA7ZCgpfSxiLm9uZXJyb3I9ZnVuY3Rpb24oKXtlPSEwO2c9RXJyb3IoXCJTdHlsZXNoZWV0IGZhaWxlZCB0byBsb2FkXCIpO2QoKX0pOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlPSEwO2QoKX0sMCk7dShhLFwiaGVhZFwiLGIpfVxuZnVuY3Rpb24gQihhLGIsYyxkKXt2YXIgZT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO2lmKGUpe3ZhciBmPXQoYSxcInNjcmlwdFwiLHtzcmM6Yn0pLGc9ITE7Zi5vbmxvYWQ9Zi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtnfHx0aGlzLnJlYWR5U3RhdGUmJlwibG9hZGVkXCIhPXRoaXMucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT10aGlzLnJlYWR5U3RhdGV8fChnPSEwLGMmJmMobnVsbCksZi5vbmxvYWQ9Zi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcIkhFQURcIj09Zi5wYXJlbnROb2RlLnRhZ05hbWUmJmUucmVtb3ZlQ2hpbGQoZikpfTtlLmFwcGVuZENoaWxkKGYpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtnfHwoZz0hMCxjJiZjKEVycm9yKFwiU2NyaXB0IGxvYWQgdGltZW91dFwiKSkpfSxkfHw1RTMpO3JldHVybiBmfXJldHVybiBudWxsfTtmdW5jdGlvbiBDKCl7dGhpcy5hPTA7dGhpcy5jPW51bGx9ZnVuY3Rpb24gRChhKXthLmErKztyZXR1cm4gZnVuY3Rpb24oKXthLmEtLTtFKGEpfX1mdW5jdGlvbiBGKGEsYil7YS5jPWI7RShhKX1mdW5jdGlvbiBFKGEpezA9PWEuYSYmYS5jJiYoYS5jKCksYS5jPW51bGwpfTtmdW5jdGlvbiBHKGEpe3RoaXMuYT1hfHxcIi1cIn1HLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTA7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliLnB1c2goYXJndW1lbnRzW2NdLnJlcGxhY2UoL1tcXFdfXSsvZyxcIlwiKS50b0xvd2VyQ2FzZSgpKTtyZXR1cm4gYi5qb2luKHRoaXMuYSl9O2Z1bmN0aW9uIEgoYSxiKXt0aGlzLmM9YTt0aGlzLmY9NDt0aGlzLmE9XCJuXCI7dmFyIGM9KGJ8fFwibjRcIikubWF0Y2goL14oW25pb10pKFsxLTldKSQvaSk7YyYmKHRoaXMuYT1jWzFdLHRoaXMuZj1wYXJzZUludChjWzJdLDEwKSl9ZnVuY3Rpb24gZmEoYSl7cmV0dXJuIEkoYSkrXCIgXCIrKGEuZitcIjAwXCIpK1wiIDMwMHB4IFwiK0ooYS5jKX1mdW5jdGlvbiBKKGEpe3ZhciBiPVtdO2E9YS5zcGxpdCgvLFxccyovKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5yZXBsYWNlKC9bJ1wiXS9nLFwiXCIpOy0xIT1kLmluZGV4T2YoXCIgXCIpfHwvXlxcZC8udGVzdChkKT9iLnB1c2goXCInXCIrZCtcIidcIik6Yi5wdXNoKGQpfXJldHVybiBiLmpvaW4oXCIsXCIpfWZ1bmN0aW9uIEsoYSl7cmV0dXJuIGEuYSthLmZ9ZnVuY3Rpb24gSShhKXt2YXIgYj1cIm5vcm1hbFwiO1wib1wiPT09YS5hP2I9XCJvYmxpcXVlXCI6XCJpXCI9PT1hLmEmJihiPVwiaXRhbGljXCIpO3JldHVybiBifVxuZnVuY3Rpb24gZ2EoYSl7dmFyIGI9NCxjPVwiblwiLGQ9bnVsbDthJiYoKGQ9YS5tYXRjaCgvKG5vcm1hbHxvYmxpcXVlfGl0YWxpYykvaSkpJiZkWzFdJiYoYz1kWzFdLnN1YnN0cigwLDEpLnRvTG93ZXJDYXNlKCkpLChkPWEubWF0Y2goLyhbMS05XTAwfG5vcm1hbHxib2xkKS9pKSkmJmRbMV0mJigvYm9sZC9pLnRlc3QoZFsxXSk/Yj03Oi9bMS05XTAwLy50ZXN0KGRbMV0pJiYoYj1wYXJzZUludChkWzFdLnN1YnN0cigwLDEpLDEwKSkpKTtyZXR1cm4gYytifTtmdW5jdGlvbiBoYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1hLm0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3RoaXMuaD1iO3RoaXMuYT1uZXcgRyhcIi1cIik7dGhpcy5qPSExIT09Yi5ldmVudHM7dGhpcy5nPSExIT09Yi5jbGFzc2VzfWZ1bmN0aW9uIGlhKGEpe2EuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildKTtMKGEsXCJsb2FkaW5nXCIpfWZ1bmN0aW9uIE0oYSl7aWYoYS5nKXt2YXIgYj15KGEuZixhLmEuYyhcIndmXCIsXCJhY3RpdmVcIikpLGM9W10sZD1bYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV07Ynx8Yy5wdXNoKGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpKTt3KGEuZixjLGQpfUwoYSxcImluYWN0aXZlXCIpfWZ1bmN0aW9uIEwoYSxiLGMpe2lmKGEuaiYmYS5oW2JdKWlmKGMpYS5oW2JdKGMuYyxLKGMpKTtlbHNlIGEuaFtiXSgpfTtmdW5jdGlvbiBqYSgpe3RoaXMuYz17fX1mdW5jdGlvbiBrYShhLGIsYyl7dmFyIGQ9W10sZTtmb3IoZSBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoZSkpe3ZhciBmPWEuY1tlXTtmJiZkLnB1c2goZihiW2VdLGMpKX1yZXR1cm4gZH07ZnVuY3Rpb24gTihhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT10KHRoaXMuYyxcInNwYW5cIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSx0aGlzLmYpfWZ1bmN0aW9uIE8oYSl7dShhLmMsXCJib2R5XCIsYS5hKX1mdW5jdGlvbiBQKGEpe3JldHVyblwiZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTlweDtsZWZ0Oi05OTk5cHg7Zm9udC1zaXplOjMwMHB4O3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bGluZS1oZWlnaHQ6bm9ybWFsO21hcmdpbjowO3BhZGRpbmc6MDtmb250LXZhcmlhbnQ6bm9ybWFsO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpcIitKKGEuYykrXCI7XCIrKFwiZm9udC1zdHlsZTpcIitJKGEpK1wiO2ZvbnQtd2VpZ2h0OlwiKyhhLmYrXCIwMFwiKStcIjtcIil9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYpe3RoaXMuZz1hO3RoaXMuaj1iO3RoaXMuYT1kO3RoaXMuYz1jO3RoaXMuZj1lfHwzRTM7dGhpcy5oPWZ8fHZvaWQgMH1RLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYy5tLmRvY3VtZW50LGI9dGhpcyxjPXEoKSxkPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGQsZSl7ZnVuY3Rpb24gaygpe3EoKS1jPj1iLmY/ZSgpOmEuZm9udHMubG9hZChmYShiLmEpLGIuaCkudGhlbihmdW5jdGlvbihhKXsxPD1hLmxlbmd0aD9kKCk6c2V0VGltZW91dChrLDI1KX0sZnVuY3Rpb24oKXtlKCl9KX1rKCl9KSxlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsZCl7c2V0VGltZW91dChkLGIuZil9KTtQcm9taXNlLnJhY2UoW2UsZF0pLnRoZW4oZnVuY3Rpb24oKXtiLmcoYi5hKX0sZnVuY3Rpb24oKXtiLmooYi5hKX0pfTtmdW5jdGlvbiBSKGEsYixjLGQsZSxmLGcpe3RoaXMudj1hO3RoaXMuQj1iO3RoaXMuYz1jO3RoaXMuYT1kO3RoaXMucz1nfHxcIkJFU2Jzd3lcIjt0aGlzLmY9e307dGhpcy53PWV8fDNFMzt0aGlzLnU9Znx8bnVsbDt0aGlzLm89dGhpcy5qPXRoaXMuaD10aGlzLmc9bnVsbDt0aGlzLmc9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5oPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMuaj1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLm89bmV3IE4odGhpcy5jLHRoaXMucyk7YT1uZXcgSCh0aGlzLmEuYytcIixzZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuZy5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKHRoaXMuYS5jK1wiLHNhbnMtc2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmguYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSChcInNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5qLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgoXCJzYW5zLXNlcmlmXCIsSyh0aGlzLmEpKTthPVxuUChhKTt0aGlzLm8uYS5zdHlsZS5jc3NUZXh0PWE7Tyh0aGlzLmcpO08odGhpcy5oKTtPKHRoaXMuaik7Tyh0aGlzLm8pfXZhciBTPXtEOlwic2VyaWZcIixDOlwic2Fucy1zZXJpZlwifSxUPW51bGw7ZnVuY3Rpb24gVSgpe2lmKG51bGw9PT1UKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7VD0hIWEmJig1MzY+cGFyc2VJbnQoYVsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGFbMV0sMTApJiYxMT49cGFyc2VJbnQoYVsyXSwxMCkpfXJldHVybiBUfVIucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy5mLnNlcmlmPXRoaXMuai5hLm9mZnNldFdpZHRoO3RoaXMuZltcInNhbnMtc2VyaWZcIl09dGhpcy5vLmEub2Zmc2V0V2lkdGg7dGhpcy5BPXEoKTtsYSh0aGlzKX07XG5mdW5jdGlvbiBtYShhLGIsYyl7Zm9yKHZhciBkIGluIFMpaWYoUy5oYXNPd25Qcm9wZXJ0eShkKSYmYj09PWEuZltTW2RdXSYmYz09PWEuZltTW2RdXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBsYShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1VKCkmJm1hKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VSgpJiZtYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTpuYShhKTpWKGEsYS52KX1mdW5jdGlvbiBuYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtsYSh0aGlzKX0sYSksNTApfWZ1bmN0aW9uIFYoYSxiKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXt2KHRoaXMuZy5hKTt2KHRoaXMuaC5hKTt2KHRoaXMuai5hKTt2KHRoaXMuby5hKTtiKHRoaXMuYSl9LGEpLDApfTtmdW5jdGlvbiBXKGEsYixjKXt0aGlzLmM9YTt0aGlzLmE9Yjt0aGlzLmY9MDt0aGlzLm89dGhpcy5qPSExO3RoaXMucz1jfXZhciBYPW51bGw7Vy5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7Yi5nJiZ3KGIuZixbYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIildLFtiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIiksYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKV0pO0woYixcImZvbnRhY3RpdmVcIixhKTt0aGlzLm89ITA7b2EodGhpcyl9O1xuVy5wcm90b3R5cGUuaD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7aWYoYi5nKXt2YXIgYz15KGIuZixiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKSksZD1bXSxlPVtiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildO2N8fGQucHVzaChiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpKTt3KGIuZixkLGUpfUwoYixcImZvbnRpbmFjdGl2ZVwiLGEpO29hKHRoaXMpfTtmdW5jdGlvbiBvYShhKXswPT0tLWEuZiYmYS5qJiYoYS5vPyhhPWEuYSxhLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJhY3RpdmVcIildLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpLGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpXSksTChhLFwiYWN0aXZlXCIpKTpNKGEuYSkpfTtmdW5jdGlvbiBwYShhKXt0aGlzLmo9YTt0aGlzLmE9bmV3IGphO3RoaXMuaD0wO3RoaXMuZj10aGlzLmc9ITB9cGEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dGhpcy5jPW5ldyBjYSh0aGlzLmosYS5jb250ZXh0fHx0aGlzLmopO3RoaXMuZz0hMSE9PWEuZXZlbnRzO3RoaXMuZj0hMSE9PWEuY2xhc3NlcztxYSh0aGlzLG5ldyBoYSh0aGlzLmMsYSksYSl9O1xuZnVuY3Rpb24gcmEoYSxiLGMsZCxlKXt2YXIgZj0wPT0tLWEuaDsoYS5mfHxhLmcpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGE9ZXx8bnVsbCxrPWR8fG51bGx8fHt9O2lmKDA9PT1jLmxlbmd0aCYmZilNKGIuYSk7ZWxzZXtiLmYrPWMubGVuZ3RoO2YmJihiLmo9Zik7dmFyIGgsbT1bXTtmb3IoaD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgbD1jW2hdLG49a1tsLmNdLHI9Yi5hLHg9bDtyLmcmJncoci5mLFtyLmEuYyhcIndmXCIseC5jLEsoeCkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildKTtMKHIsXCJmb250bG9hZGluZ1wiLHgpO3I9bnVsbDtpZihudWxsPT09WClpZih3aW5kb3cuRm9udEZhY2Upe3ZhciB4PS9HZWNrby4qRmlyZWZveFxcLyhcXGQrKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkseWE9L09TIFguKlZlcnNpb25cXC8xMFxcLi4qU2FmYXJpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKTtcblg9eD80MjxwYXJzZUludCh4WzFdLDEwKTp5YT8hMTohMH1lbHNlIFg9ITE7WD9yPW5ldyBRKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxuKTpyPW5ldyBSKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxhLG4pO20ucHVzaChyKX1mb3IoaD0wO2g8bS5sZW5ndGg7aCsrKW1baF0uc3RhcnQoKX19LDApfWZ1bmN0aW9uIHFhKGEsYixjKXt2YXIgZD1bXSxlPWMudGltZW91dDtpYShiKTt2YXIgZD1rYShhLmEsYyxhLmMpLGY9bmV3IFcoYS5jLGIsZSk7YS5oPWQubGVuZ3RoO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKWRbYl0ubG9hZChmdW5jdGlvbihiLGQsYyl7cmEoYSxmLGIsZCxjKX0pfTtmdW5jdGlvbiBzYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZD16KGEuYyk7YT0oYS5hLmFwaXx8XCJmYXN0LmZvbnRzLm5ldC9qc2FwaVwiKS5yZXBsYWNlKC9eLipodHRwKHM/KTooXFwvXFwvKT8vLFwiXCIpO3JldHVybiBkK1wiLy9cIithK1wiL1wiK2IrXCIuanNcIisoYz9cIj92PVwiK2M6XCJcIil9XG5zYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIG09MDttPGMubGVuZ3RoO20rKyl7dmFyIGw9Y1ttXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1ttXS5mb250U3R5bGUmJnZvaWQgMCE9Y1ttXS5mb250V2VpZ2h0PyhoPWNbbV0uZm9udFN0eWxlK2NbbV0uZm9udFdlaWdodCxlLnB1c2gobmV3IEgobCxoKSkpOmUucHVzaChuZXcgSChsKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5tO0IodGhpcy5jLHRhKGMsZCxlKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK2RdPWZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0sYigpKX0pLmlkPVwiX19Nb25vdHlwZUFQSVNjcmlwdF9fXCIrXG5kfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHVhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9dWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEM7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspQSh0aGlzLmMsZFtiXSxEKGcpKTt2YXIgaz1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLG09MDttPGgubGVuZ3RoO20rPTEpay5wdXNoKG5ldyBIKGRbMF0saFttXSkpO2Vsc2Ugay5wdXNoKG5ldyBIKGRbMF0pKTtGKGcsZnVuY3Rpb24oKXthKGssZil9KX07ZnVuY3Rpb24gdmEoYSxiLGMpe2E/dGhpcy5jPWE6dGhpcy5jPWIrd2E7dGhpcy5hPVtdO3RoaXMuZj1bXTt0aGlzLmc9Y3x8XCJcIn12YXIgd2E9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzc1wiO2Z1bmN0aW9uIHhhKGEsYil7Zm9yKHZhciBjPWIubGVuZ3RoLGQ9MDtkPGM7ZCsrKXt2YXIgZT1iW2RdLnNwbGl0KFwiOlwiKTszPT1lLmxlbmd0aCYmYS5mLnB1c2goZS5wb3AoKSk7dmFyIGY9XCJcIjsyPT1lLmxlbmd0aCYmXCJcIiE9ZVsxXSYmKGY9XCI6XCIpO2EuYS5wdXNoKGUuam9pbihmKSl9fVxuZnVuY3Rpb24gemEoYSl7aWYoMD09YS5hLmxlbmd0aCl0aHJvdyBFcnJvcihcIk5vIGZvbnRzIHRvIGxvYWQhXCIpO2lmKC0xIT1hLmMuaW5kZXhPZihcImtpdD1cIikpcmV0dXJuIGEuYztmb3IodmFyIGI9YS5hLmxlbmd0aCxjPVtdLGQ9MDtkPGI7ZCsrKWMucHVzaChhLmFbZF0ucmVwbGFjZSgvIC9nLFwiK1wiKSk7Yj1hLmMrXCI/ZmFtaWx5PVwiK2Muam9pbihcIiU3Q1wiKTswPGEuZi5sZW5ndGgmJihiKz1cIiZzdWJzZXQ9XCIrYS5mLmpvaW4oXCIsXCIpKTswPGEuZy5sZW5ndGgmJihiKz1cIiZ0ZXh0PVwiK2VuY29kZVVSSUNvbXBvbmVudChhLmcpKTtyZXR1cm4gYn07ZnVuY3Rpb24gQWEoYSl7dGhpcy5mPWE7dGhpcy5hPVtdO3RoaXMuYz17fX1cbnZhciBCYT17bGF0aW46XCJCRVNic3d5XCIsXCJsYXRpbi1leHRcIjpcIlxcdTAwZTdcXHUwMGY2XFx1MDBmY1xcdTAxMWZcXHUwMTVmXCIsY3lyaWxsaWM6XCJcXHUwNDM5XFx1MDQ0ZlxcdTA0MTZcIixncmVlazpcIlxcdTAzYjFcXHUwM2IyXFx1MDNhM1wiLGtobWVyOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCIsSGFudW1hbjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwifSxDYT17dGhpbjpcIjFcIixleHRyYWxpZ2h0OlwiMlwiLFwiZXh0cmEtbGlnaHRcIjpcIjJcIix1bHRyYWxpZ2h0OlwiMlwiLFwidWx0cmEtbGlnaHRcIjpcIjJcIixsaWdodDpcIjNcIixyZWd1bGFyOlwiNFwiLGJvb2s6XCI0XCIsbWVkaXVtOlwiNVwiLFwic2VtaS1ib2xkXCI6XCI2XCIsc2VtaWJvbGQ6XCI2XCIsXCJkZW1pLWJvbGRcIjpcIjZcIixkZW1pYm9sZDpcIjZcIixib2xkOlwiN1wiLFwiZXh0cmEtYm9sZFwiOlwiOFwiLGV4dHJhYm9sZDpcIjhcIixcInVsdHJhLWJvbGRcIjpcIjhcIix1bHRyYWJvbGQ6XCI4XCIsYmxhY2s6XCI5XCIsaGVhdnk6XCI5XCIsbDpcIjNcIixyOlwiNFwiLGI6XCI3XCJ9LERhPXtpOlwiaVwiLGl0YWxpYzpcImlcIixuOlwiblwiLG5vcm1hbDpcIm5cIn0sXG5FYT0vXih0aGlufCg/Oig/OmV4dHJhfHVsdHJhKS0/KT9saWdodHxyZWd1bGFyfGJvb2t8bWVkaXVtfCg/Oig/OnNlbWl8ZGVtaXxleHRyYXx1bHRyYSktPyk/Ym9sZHxibGFja3xoZWF2eXxsfHJ8YnxbMS05XTAwKT8obnxpfG5vcm1hbHxpdGFsaWMpPyQvO1xuZnVuY3Rpb24gRmEoYSl7Zm9yKHZhciBiPWEuZi5sZW5ndGgsYz0wO2M8YjtjKyspe3ZhciBkPWEuZltjXS5zcGxpdChcIjpcIiksZT1kWzBdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSxmPVtcIm40XCJdO2lmKDI8PWQubGVuZ3RoKXt2YXIgZzt2YXIgaz1kWzFdO2c9W107aWYoaylmb3IodmFyIGs9ay5zcGxpdChcIixcIiksaD1rLmxlbmd0aCxtPTA7bTxoO20rKyl7dmFyIGw7bD1rW21dO2lmKGwubWF0Y2goL15bXFx3LV0rJC8pKXt2YXIgbj1FYS5leGVjKGwudG9Mb3dlckNhc2UoKSk7aWYobnVsbD09bilsPVwiXCI7ZWxzZXtsPW5bMl07bD1udWxsPT1sfHxcIlwiPT1sP1wiblwiOkRhW2xdO249blsxXTtpZihudWxsPT1ufHxcIlwiPT1uKW49XCI0XCI7ZWxzZSB2YXIgcj1DYVtuXSxuPXI/cjppc05hTihuKT9cIjRcIjpuLnN1YnN0cigwLDEpO2w9W2wsbl0uam9pbihcIlwiKX19ZWxzZSBsPVwiXCI7bCYmZy5wdXNoKGwpfTA8Zy5sZW5ndGgmJihmPWcpOzM9PWQubGVuZ3RoJiYoZD1kWzJdLGc9W10sZD1kP2Quc3BsaXQoXCIsXCIpOlxuZywwPGQubGVuZ3RoJiYoZD1CYVtkWzBdXSkmJihhLmNbZV09ZCkpfWEuY1tlXXx8KGQ9QmFbZV0pJiYoYS5jW2VdPWQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKz0xKWEuYS5wdXNoKG5ldyBIKGUsZltkXSkpfX07ZnVuY3Rpb24gR2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn12YXIgSGE9e0FyaW1vOiEwLENvdXNpbmU6ITAsVGlub3M6ITB9O0dhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBDLGM9dGhpcy5jLGQ9bmV3IHZhKHRoaXMuYS5hcGkseihjKSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7eGEoZCxlKTt2YXIgZj1uZXcgQWEoZSk7RmEoZik7QShjLHphKGQpLEQoYikpO0YoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxIYSl9KX07ZnVuY3Rpb24gSWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1JYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubTtiP0IodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0saz1iW2YrMV0saD0wO2g8ay5sZW5ndGg7aCsrKWUucHVzaChuZXcgSChnLGtbaF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobSl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBKYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1KYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubSxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxrPWMuZm9udHMubGVuZ3RoO2c8azsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEgoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQih0aGlzLmMseih0aGlzLmMpKyh0aGlzLmYuYXBpfHxcIi8vZi5mb250ZGVjay5jb20vcy9jc3MvanMvXCIpK2VhKHRoaXMuYykrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2ImJmEoW10pfSkpOmEoW10pfTt2YXIgWT1uZXcgcGEod2luZG93KTtZLmEuYy5jdXN0b209ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHVhKGIsYSl9O1kuYS5jLmZvbnRkZWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBKYShiLGEpfTtZLmEuYy5tb25vdHlwZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMudHlwZWtpdD1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgSWEoYixhKX07WS5hLmMuZ29vZ2xlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBHYShiLGEpfTt2YXIgWj17bG9hZDpwKFkubG9hZCxZKX07XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gWn0pOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1aOih3aW5kb3cuV2ViRm9udD1aLHdpbmRvdy5XZWJGb250Q29uZmlnJiZZLmxvYWQod2luZG93LldlYkZvbnRDb25maWcpKTt9KCkpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2thbmR1dmlzbGEvcGx5Z3JuZFxyXG52YXIgUGx5Z3JuZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHR2YXIgX3RoaXMgPSB0aGlzOyAgICAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2UgdG8gcm9vdCBvYmplY3Q7XHJcblx0dGhpcy52aWV3cyA9IFtdOyAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgd2l0aCB2aWV3c1xyXG5cdHRoaXMudG90YWxWaWV3cyA9IFtdOyAgICAgICAgICAgICAgIC8vIENvdW50ZXIgdG8ga2VlcCB0cmFjayBpZiBhbGwgdmlld3MgYXJlIGxvYWRlZC5cclxuXHR0aGlzLmN1cnJlbnRWaWV3ID0gMDsgICAgICAgICAgICAgICAvLyBDdXJyZW50Vmlld1xyXG5cdHRoaXMubW91c2VQb3NpdGlvbiA9IHt4OiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC8xMDAqMjApLCB5OiAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQvMTAwKjIwKX07ICAvLyBNb3VzZSBwb3NpdGlvbiAoY2FuIGJlIHVzZWQgYnkgdmlld3MpXHJcblx0dGhpcy5mcmFtZVJhdGUgPSA2MDtcclxuXHR0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cdHRoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHJcblx0Ly8gQ3JlYXRlIGNhbnZhcyBvYmplY3Q6XHJcblx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1iZ1wiKVswXTtcclxuLy9cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuXHQvLyBDb250ZXh0IE9iamVjdDpcclxuXHR0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblx0Ly8gUmVzaXplIGZ1bmN0aW9uOlxyXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24oKXtcclxuXHRcdF90aGlzLmN0eC53aWR0aCAgPSBfdGhpcy5jYW52YXMud2lkdGggID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHRcdF90aGlzLmN0eC5oZWlnaHQgPSBfdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcblx0fTtcclxuXHJcblx0Ly8gQW5kIGJpbmQgaXQgdG8gdGhlIHdpbmRvdzpcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZSk7XHJcblx0dGhpcy5yZXNpemUoKTtcclxuXHJcblx0Ly8gTW91c2UgcG9zaXRpb24gKGNhbiBiZSB1c2VkIGJ5IHZpZXdzKTpcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKXtcclxuXHRcdF90aGlzLm1vdXNlUG9zaXRpb24ueCA9IGUuY2xpZW50WDtcclxuXHRcdF90aGlzLm1vdXNlUG9zaXRpb24ueSA9IGUuY2xpZW50WTtcclxuXHR9KTtcclxuXHJcblx0LypcdFx0XHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VQb3NpdGlvbi54ID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0IF90aGlzLm1vdXNlUG9zaXRpb24ueSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuXHQgX3RoaXMuY2xpY2sgPSB0cnVlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cdCBfdGhpcy5jbGljayA9IGZhbHNlO1xyXG5cdCB9KTtcclxuXHJcblx0IHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IHRydWU7XHJcblx0IF90aGlzLmNsaWNrID0gdHJ1ZTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblx0IF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0IH0pOyovXHJcblxyXG5cdC8vIEFkZCBleHRyYSBmdW5jdGlvbnMgdG8gdGhlIGNvbnRleHQgb2JqZWN0OlxyXG5cdHRoaXMuY3R4LmxpbmVUaHJvdWdoID0gZnVuY3Rpb24ocG9pbnRzKVxyXG5cdHtcclxuXHRcdGZvcih2YXIgaSBpbiBwb2ludHMpIHtcclxuXHRcdFx0dGhpcy5saW5lVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5jdXJ2ZVRocm91Z2ggPSBmdW5jdGlvbihwb2ludHMpXHJcblx0e1xyXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMjsgaSArKylcclxuXHRcdHtcclxuXHRcdFx0dmFyIHhjID0gKHBvaW50c1tpXS54ICsgcG9pbnRzW2kgKyAxXS54KSAvIDI7XHJcblx0XHRcdHZhciB5YyA9IChwb2ludHNbaV0ueSArIHBvaW50c1tpICsgMV0ueSkgLyAyO1xyXG5cdFx0XHR0aGlzLnF1YWRyYXRpY0N1cnZlVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55LCB4YywgeWMpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY3VydmUgdGhyb3VnaCB0aGUgbGFzdCB0d28gcG9pbnRzXHJcblx0XHR0aGlzLnF1YWRyYXRpY0N1cnZlVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55LCBwb2ludHNbaSsxXS54LHBvaW50c1tpKzFdLnkpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRpcmVjdGlvbiA9IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKVxyXG5cdHtcclxuXHRcdHJldHVybiBNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY3R4LmRpc3RhbmNlID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpXHJcblx0e1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydChcclxuXHRcdFx0TWF0aC5wb3coeDIgLSB4MSwgMikgKyBNYXRoLnBvdyh5MiAtIHkxLCAyKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5kcmF3Q2lyY2xlID0gZnVuY3Rpb24oeCwgeSwgcmFkaXVzKVxyXG5cdHtcclxuXHRcdHRoaXMuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSoyLCB0cnVlKTtcclxuXHR9O1xyXG5cclxuXHQvKlx0XHRcdFx0Ly8gUGFnZXIgZnVuY3Rpb246XHJcblx0IHRoaXMucGFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5cdCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucGFnZXIpO1xyXG5cclxuXHQgdGhpcy5idWlsZFBhZ2VyID0gZnVuY3Rpb24oKVxyXG5cdCB7XHJcblx0IGZvcih2YXIgaSBpbiBfdGhpcy52aWV3cylcclxuXHQge1xyXG5cdCAvLyBDcmVhdGUgYW4gYW5jaG9yLCB3aGljaCBsb2FkcyB0aGUgc3BlY2lmaWMgdmlldzpcclxuXHQgdmFyIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdCBhbmNob3IuaW5uZXJUZXh0ID0gcGFyc2VJbnQoaSkgKyAxO1xyXG5cdCBhbmNob3Iuc2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIsIGkpO1xyXG5cdCBhbmNob3Iuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgX3RoaXMudmlld3NbaV0ubmFtZSk7XHJcblx0IGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcblx0IGUucHJldmVudERlZmF1bHQoKTtcclxuXHQgX3RoaXMucGxheVZpZXcodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIikpO1xyXG5cdCB9KTtcclxuXHQgX3RoaXMucGFnZXIuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcclxuXHQgfVxyXG5cdCB9OyovXHJcblxyXG5cdC8vIFZpZXdzIGZ1bmN0aW9uczpcclxuXHR0aGlzLmFkZFZpZXcgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0X3RoaXMudG90YWxWaWV3cy5wdXNoKHtcclxuXHRcdFx0b3JkZXI6IF90aGlzLnRvdGFsVmlld3MubGVuZ3RoLFxyXG5cdFx0XHRzbHVnOiBcImRvdHMtMlwiLFxyXG5cdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIENoZWNrIGlmIGFsbCBpcyBsb2FkZWQgYW5kIHN0YXJ0IGlmIHNvOlxyXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHR2YXIgaW50ZXJ2YWxUaW1lb3V0ID0gMDtcclxuXHRcdHZhciBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0aW50ZXJ2YWxUaW1lb3V0Kys7XHJcblx0XHRcdGlmKGludGVydmFsVGltZW91dCA9PSAzMDApIHtcclxuXHRcdFx0XHQvLyB3YWl0ZWQgZm9yIDMwIHNlY29uZHMuIFNvbWV0aGluZyBpcyBjbGVhcmx5IHdyb25nLlxyXG5cdFx0XHRcdGFsZXJ0KFwiVGltZSBvdXQhIElzIHlvdXIgSW50ZXJuZXQgY29ubmVjdGlvbiB0aMOhdCBzbG93PyE/XCIpO1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gQ2hlY2sgaWYgYWxsIHZpZXdzIGFyZSBsb2FkZWQ6XHJcblx0XHRcdHZhciBhbGxMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRmb3IodmFyIGkgaW4gX3RoaXMudG90YWxWaWV3cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCFfdGhpcy50b3RhbFZpZXdzW2ldLmxvYWRlZCkgeyBhbGxMb2FkZWQgPSBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKGFsbExvYWRlZCkge1xyXG5cdFx0XHRcdC8vIEFsbCB2aWV3cyBhcmUgbG9hZGVkLlxyXG5cdFx0XHRcdHZhciBuZXdWaWV3cyA9IFtdO1xyXG5cdFx0XHRcdGZvcih2YXIgaTIgaW4gX3RoaXMudG90YWxWaWV3cykge1xyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRTbHVnID0gX3RoaXMudG90YWxWaWV3c1tpMl0uc2x1ZztcclxuXHRcdFx0XHRcdGZvcih2YXIgaiBpbiBfdGhpcy52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRpZihfdGhpcy52aWV3c1tqXS5zbHVnID09IGN1cnJlbnRTbHVnKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3Vmlld3MucHVzaChfdGhpcy52aWV3c1tqXSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X3RoaXMudmlld3MgPSBuZXdWaWV3cztcclxuXHJcblx0XHRcdFx0Ly8gQ2xlYXIgaW50ZXJ2YWw6XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuXHJcblx0XHRcdFx0Ly8gQnVpbGQgdGhlIHBhZ2VyOlxyXG4vL1x0XHRcdFx0XHRcdFx0X3RoaXMuYnVpbGRQYWdlcigpO1xyXG5cclxuXHRcdFx0XHQvLyBTdGFydCB0aGUgYXBwOlxyXG5cdFx0XHRcdF90aGlzLnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIDI1MCk7XHJcblx0fTtcclxuXHJcblx0Ly8gU3RhcnQgZnVuY3Rpb246XHJcblx0dGhpcy5zdGFydCA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHQvLyBHZXQgdGhlIHJpZ2h0IHZpZXc6XHJcblx0XHQvKlx0XHRcdFx0XHRpZih3aW5kb3cubG9jYXRpb24uaGFzaCAhPSBcIlwiKSB7XHJcblx0XHQgdmFyIGN1cnJlbnRIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcblx0XHQgZm9yKHZhciBpIGluIF90aGlzLnZpZXdzKSB7XHJcblx0XHQgaWYoX3RoaXMudmlld3NbaV0uc2x1ZyA9PSBjdXJyZW50SGFzaCkge1xyXG5cdFx0IF90aGlzLmN1cnJlbnRWaWV3ID0gaTtcclxuXHRcdCB9XHJcblx0XHQgfVxyXG5cdFx0IH0gZWxzZSB7Ki9cclxuXHRcdF90aGlzLmN1cnJlbnRWaWV3ID0gX3RoaXMudmlld3MubGVuZ3RoIC0gMTtcclxuLy9cdFx0XHRcdFx0fVxyXG5cdFx0X3RoaXMucGxheVZpZXcoX3RoaXMuY3VycmVudFZpZXcpO1xyXG5cdFx0Ly8gU2V0dXAgdGhlIGxvb3A6XHJcblx0XHQvLyBzZXRJbnRlcnZhbChmdW5jdGlvbiBhTmFtZSgpe1xyXG5cdFx0KGZ1bmN0aW9uIGFOYW1lKCl7XHJcblx0XHRcdC8vIFBhc3Mgb24gc29tZSB2YXJpYWJsZXM6XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLm1vdXNlUG9zaXRpb24gPSBfdGhpcy5tb3VzZVBvc2l0aW9uO1xyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycy5tb3VzZURvd24gPSBfdGhpcy5tb3VzZURvd247XHJcblx0XHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzLmNsaWNrID0gX3RoaXMuY2xpY2s7XHJcblx0XHRcdF90aGlzLmNsaWNrID0gZmFsc2U7XHJcblx0XHRcdC8vIE1ha2UgdGhhdCBzdGVwOlxyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10uc3RlcEZ1bmN0aW9uKF90aGlzLmN0eCwgX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMpO1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYU5hbWUpO1xyXG5cdFx0Ly8gfSwgMTAwMCAvIF90aGlzLmZyYW1lUmF0ZSk7IC8vIGRlZmF1bHQgPSA2MCBmcHMuXHJcblx0XHRcdH0pKCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5wbGF5VmlldyA9IGZ1bmN0aW9uKHZpZXdOcilcclxuXHR7XHJcblx0XHQvLyBVbi1pbml0aWFsaXplIHRoZSBjdXJyZW50IHZpZXc6XHJcblx0XHR0cnkge1xyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udW5Jbml0RnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0XHR9IGNhdGNoKGUpIHt9XHJcblx0XHQvLyBHbyBmdXJ0aGVyIHdpdGggdGhlIHJlcXVlc3RlZCB2aWV3IGZyb20gaGVyZTpcclxuXHRcdF90aGlzLmN1cnJlbnRWaWV3ID0gdmlld05yO1xyXG5cdFx0Ly8gUmVtb3ZlIHRoZSBjbGFzcyBvZiB0aGUgYWN0aXZlIHZpZXc6XHJcbi8vXHRcdFx0XHRcdGlmKHRoaXMucGFnZXIucXVlcnlTZWxlY3RvcihcImEuYWN0aXZlXCIpKSB7XHJcbi8vXHRcdFx0XHRcdFx0dGhpcy5wYWdlci5xdWVyeVNlbGVjdG9yKFwiYS5hY3RpdmVcIikuY2xhc3NOYW1lID0gXCJcIjtcclxuLy9cdFx0XHRcdFx0fVxyXG5cdFx0Ly8gQW5kIGFkZCBpdCB0byB0aGUgbmV3IHZpZXchXHJcbi8vXHRcdFx0XHRcdHRoaXMucGFnZXIucXVlcnlTZWxlY3RvcihcImFbZGF0YS12aWV3PVwiXCIgKyBfdGhpcy5jdXJyZW50VmlldyArIFwiXCJdXCIpLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCJcclxuXHRcdC8vIFNldCB0aGUgaGFzaDpcclxuLy9cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10uc2x1ZztcclxuXHRcdC8vIEluaXRpYWxpemUgdGhlIGN1cnJlbnQgdmlldzpcclxuXHRcdF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS5pbml0RnVuY3Rpb24oX3RoaXMuY3R4LCBfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycyk7XHJcblx0fTtcclxuXHJcbn07XHJcblxyXG52YXIgU3RlcEdlbmVyYXRvciA9IGZ1bmN0aW9uKGNvbXBsZXhpdHksIG1pbkluYywgbWF4SW5jLCBtaW5NdWwsIG1heE11bClcclxue1xyXG5cdHRoaXMuc3RlcHMgICAgICAgPSBbXTtcclxuXHR0aGlzLmluY3MgICAgICAgID0gW107XHJcblx0dGhpcy5tdWx0aXBsaWVycyA9IFtdO1xyXG5cdHRoaXMuY29tcGxleGl0eSAgPSBjb21wbGV4aXR5O1xyXG5cclxuXHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHQvLyBEZWZhdWx0czpcclxuXHRpZihtaW5JbmMgPT09IG51bGwpIHsgbWluSW5jID0gMDsgfVxyXG5cdGlmKG1heEluYyA9PT0gbnVsbCkgeyBtYXhJbmMgPSAwLjE7IH1cclxuXHRpZihtaW5NdWwgPT09IG51bGwpIHsgbWluTXVsID0gMC43OyB9XHJcblx0aWYobWF4TXVsID09PSBudWxsKSB7IG1heE11bCA9IDEuMzsgfVxyXG5cclxuXHQvLyBJbml0aWFsaXNlOlxyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHR7XHJcblx0XHR0aGlzLnN0ZXBzLnB1c2goTWF0aC5yYW5kb20oKSAqIE1hdGguUEkpO1xyXG5cdFx0dGhpcy5pbmNzLnB1c2gobWluSW5jICsgTWF0aC5yYW5kb20oKSAqIChtYXhJbmMgLSBtaW5JbmMpKTtcclxuXHRcdHRoaXMubXVsdGlwbGllcnMucHVzaChtaW5NdWwgKyBNYXRoLnJhbmRvbSgpICogKG1heE11bCAtIG1pbk11bCkpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zdGVwID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdC8vIEluY3JlYXNlIHRoZSBjb3VudGVyczpcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdF90aGlzLnN0ZXBzW2ldICs9IF90aGlzLmluY3NbaV07XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gU3RlcCBYWS1mdW5jdGlvbjpcclxuXHR0aGlzLmdldFhZID0gZnVuY3Rpb24ob2Zmc2V0LCB3LCBoKVxyXG5cdHtcclxuXHRcdGlmKG9mZnNldCA9PT0gbnVsbCkgeyBvZmZzZXQgPSAwOyB9XHJcblxyXG5cdFx0dmFyIHhWYWx1ZSA9IDA7XHJcblx0XHR2YXIgeVZhbHVlID0gMDtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgWFk6XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3RoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHR4VmFsdWUgKz0gTWF0aC5zaW4oX3RoaXMuc3RlcHNbaV0gKyAoX3RoaXMuaW5jc1tpXSAqIG9mZnNldCkpICogdztcclxuXHRcdFx0eVZhbHVlICs9IE1hdGguY29zKChfdGhpcy5zdGVwc1tpXSArIChfdGhpcy5pbmNzW2ldICogb2Zmc2V0KSkgKiBfdGhpcy5tdWx0aXBsaWVyc1tpXSkgKiBoO1xyXG5cdFx0fVxyXG5cdFx0Ly8gUmV0dXJuIGl0OlxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0eDogeFZhbHVlLFxyXG5cdFx0XHR5OiB5VmFsdWVcclxuXHRcdH07XHJcblx0fTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgcGcgPSBuZXcgUGx5Z3JuZCgpO1xyXG5wZy52aWV3cy5wdXNoKHtcclxuXHRuYW1lICAgICAgICAgICAgOiBcIkRvdHMgMlwiLFxyXG5cdHNsdWcgICAgICAgICAgICA6IFwiZG90cy0yXCIsXHJcblx0Ly8gVmFyaWFibGVzIHVzZWQgYnkgdGhpcyB2aWV3OlxyXG5cdHZhcnMgICAgICAgICAgICA6IHtcclxuXHRcdHN0ZXBzOiBudWxsLFxyXG5cdFx0Y3VycmVudFg6IDAsXHJcblx0XHRjdXJyZW50WTogMFxyXG5cdH0sXHJcblx0Ly8gSW5pdGlhbGlzYXRpb246XHJcblx0aW5pdEZ1bmN0aW9uICAgIDogZnVuY3Rpb24oY3R4LCB2YXJzKXtcclxuXHRcdHZhcnMuc3RlcHMgPSBuZXcgU3RlcEdlbmVyYXRvcig0LCAwLCAwLjAyLCAwLjcsIDEuMyk7XHJcblx0XHR2YXJzLnByZXZEaXN0YW5jZXMgPSB7fTtcclxuXHR9LFxyXG5cdC8vIFVuLWluaXRpYWxpc2F0aW9uOlxyXG5cdHVuSW5pdEZ1bmN0aW9uICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7fSxcclxuXHQvLyBTdGVwcGluZyBmdW5jdGlvbjpcclxuXHRzdGVwRnVuY3Rpb24gICAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe1xyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjdHgud2lkdGgsIGN0eC5oZWlnaHQpO1xyXG5cdFx0dmFyIHN0ZXBTaXplID0gY3R4LndpZHRoIC8gMzA7XHJcblx0XHR2YXIgc3RlcHNYID0gY3R4LndpZHRoIC8gc3RlcFNpemU7XHJcblx0XHR2YXIgc3RlcHNZID0gY3R4LmhlaWdodCAvIHN0ZXBTaXplO1xyXG5cclxuLy9cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwZGRmZlwiO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzhjMjQzZVwiO1xyXG5cclxuXHRcdC8vIEFkZHMgYSBzaW1wbGUgZWFzZSB0byB0aGUgbW91c2U6XHJcblx0XHR2YXJzLmN1cnJlbnRYICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueCAtIHZhcnMuY3VycmVudFgpIC8gMjA7XHJcblx0XHR2YXJzLmN1cnJlbnRZICs9ICh2YXJzLm1vdXNlUG9zaXRpb24ueSAtIHZhcnMuY3VycmVudFkpIC8gMjA7XHJcblxyXG5cdFx0dmFycy5zdGVwcy5zdGVwKCk7XHJcblxyXG5cdFx0dmFyIHNpemUgPSBjdHgud2lkdGgvMS41O1xyXG5cclxuXHRcdGZvcih2YXIgeSA9IDA7IHkgPCBzdGVwc1k7IHkgKyspXHJcblx0XHR7XHJcblx0XHRcdGZvcih2YXIgeCA9IDA7IHggPCBzdGVwc1g7IHggKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY1ggPSAoeSUyICogc3RlcFNpemUgLyAyKSArICh4ICogc3RlcFNpemUpO1xyXG5cdFx0XHRcdHZhciBjWSA9IHkgKiBzdGVwU2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gb3V0c2lkZTpcclxuXHRcdFx0XHR2YXIgcmFkID0gTWF0aC5hdGFuMihjWCAtIHZhcnMuY3VycmVudFgsIGNZIC0gdmFycy5jdXJyZW50WSk7XHJcblxyXG5cdFx0XHRcdC8vIGRpc3RhbmNlOlxyXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChcclxuXHRcdFx0XHRcdE1hdGgucG93KHZhcnMuY3VycmVudFggLSBjWCwgMikgKyBNYXRoLnBvdyh2YXJzLmN1cnJlbnRZIC0gY1ksIDIpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0dmFyIG9mZnNldCA9IE1hdGgubWF4KDAsIChzaXplLzIpIC0gZGlzdGFuY2UpO1xyXG5cdFx0XHRcdHZhciBwID0gb2Zmc2V0L3NpemU7XHJcblx0XHRcdFx0cCo9MS1wO1xyXG5cdFx0XHRcdG9mZnNldCA9IChzaXplLzIpICogcDtcclxuXHJcblx0XHRcdFx0dmFyIHN0ZXBYWSA9IHZhcnMuc3RlcHMuZ2V0WFkoKHkqc3RlcHNYKSsoeCozKSwgb2Zmc2V0LCBvZmZzZXQpO1xyXG5cclxuXHRcdFx0XHR2YXIgZFggPSBzdGVwWFkueCArIGNYICsgTWF0aC5zaW4ocmFkKSAqIChvZmZzZXQpO1xyXG5cdFx0XHRcdHZhciBkWSA9IHN0ZXBYWS55ICsgY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblx0XHRcdFx0Ly8gdmFyIGRYID0gY1g7XHJcblx0XHRcdFx0Ly8gdmFyIGRZID0gY1kgKyBNYXRoLmNvcyhyYWQpICogKG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguZHJhd0NpcmNsZShkWCwgZFksIGRpc3RhbmNlLzgwKTtcclxuXHRcdFx0XHRjdHguZmlsbCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbnBnLmFkZFZpZXcoKTtcclxuLy8gcGcubG9hZCgpO1xyXG4iLCIvKipcclxuICAqIDIwMTYtMjAxNyAoQykgQW50b25pbyBSZWRvbmRvIC8gYW50b25pb3JlZG9uZG8uY29tXHJcbiAgKlxyXG4gICogXCJvXCIgaXMgYSBuYW5vLWxpYnJhcnkgd2hpY2ggY29udGFpbnMgYSBidW5jaCBvZiBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoIGJhc2ljIERPTSB0YXNrcyBidXQgd2l0aCBhIHNob3J0ZXIgbmFtZS5cclxuICAqIEl0IGFsc28gY29udGFpbnMgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aCBjb29raWVzLCBhbmQgQ1NTIHRyYW5zZm9ybXMgc3VwcG9ydCBjaGVja2luZy5cclxuICAqIE1haW5seSB1c2VkIG9uIG15IHBlcnNvbmFsIHByb2plY3RzIGJ1dCBvcGVuIHRvIGFueW9uZS5cclxuICAqL1xyXG5cclxuKGZ1bmN0aW9uKG8pIHtcclxuXHRcclxuXHRvLmdpID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0fTtcclxuXHRcclxuXHRvLmdjID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xyXG5cdH07XHJcblx0XHJcblx0by5nY2EgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKSk7XHJcblx0fTtcclxuXHRcclxuXHRvLnFzID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuXHR9O1xyXG5cdFxyXG5cdG8ucXNhID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuXHRcdHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuXHR9O1xyXG5cdFxyXG5cdG8uYWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG5cdH07XHJcblx0XHJcblx0by50byA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH07XHJcblx0XHJcblx0by5zaSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aW1lKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnNldEludGVydmFsKGNhbGxiYWNrLCB0aW1lKTtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdG8uZ2V0UmFuZG9tSW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbWluID0gLTUwLCBtYXggPSA1MDtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5jYWxjVG90YWxDbGllbnRIZWlnaHQgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIHRvdGFsID0gMCxcclxuXHRcdFx0ZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKG8ucXNhKHNlbGVjdG9yKSk7XHJcblx0XHRcdFxyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdHRvdGFsICs9IGUuY2xpZW50SGVpZ2h0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRvdGFsKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRvdGFsO1xyXG5cdH07XHJcblx0XHJcblx0by5jYWxjUmVsYXRpdmVQb3NpdGlvbnMgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIHBvc2l0aW9ucyA9IFtdLFxyXG5cdFx0XHRlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoby5xc2Eoc2VsZWN0b3IpKTtcclxuXHRcdFxyXG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0cG9zaXRpb25zLnB1c2goZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBwb3NpdGlvbnM7XHJcblx0fTtcclxuXHRcclxuXHRvLmNhbGNBYnNvbHV0ZVBvc2l0aW9uID0gZnVuY3Rpb24ocGFyZW50U2VsZWN0b3IsIGNoaWxkU2VsZWN0b3IpIHtcclxuXHRcdHZhciBwYXJlbnQgPSBvLnFzKHBhcmVudFNlbGVjdG9yKTtcclxuXHRcdHZhciBjaGlsZCA9IG8ucXMoY2hpbGRTZWxlY3Rvcik7XHJcblx0XHRcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHR2YXIgb2Zmc2V0ID0ge1xyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR0b3A6IDBcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHdoaWxlIChjaGlsZCAhPT0gcGFyZW50ICYmIGNoaWxkKSB7XHJcblx0XHRcdG9mZnNldC5sZWZ0ICs9IGNoaWxkLm9mZnNldExlZnQ7XHJcblx0XHRcdG9mZnNldC50b3AgKz0gY2hpbGQub2Zmc2V0VG9wO1xyXG5cdFx0XHRjaGlsZCA9IGNoaWxkLnBhcmVudE5vZGU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG9mZnNldDtcclxuXHR9O1xyXG5cdFxyXG5cdG8uY2hlY2tUcmFuc2Zvcm1zU3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gXCJ0cmFuc2Zvcm1cIjtcclxuXHRcdGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIFwid2Via2l0VHJhbnNmb3JtXCI7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHR2YXIgZWxlbWVudHNUb0xvYWQgPSBbXSxcclxuXHRcdGNhbGxiYWNrcyA9IFtdO1xyXG5cdFx0XHJcblx0dmFyIHJ1bkNhbGxiYWNrcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGFsbExvYWRlZCA9IGVsZW1lbnRzVG9Mb2FkLmV2ZXJ5KGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0cmV0dXJuIGkubG9hZGVkO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGlmIChhbGxMb2FkZWQpIHtcclxuXHRcdFx0Y2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGkoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRvLm5vdGlmeVdoZW5Mb2FkZWQgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIGVsZW1lbnRUb0xvYWQgPSB7XHJcblx0XHRcdHNlbGVjdG9yOiBzZWxlY3RvcixcclxuXHRcdFx0bG9hZGVkOiBmYWxzZSxcclxuXHRcdFx0Z2V0IHNldEFzTG9hZGVkKCkge1xyXG5cdFx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRydW5DYWxsYmFja3MoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDaHJvbWUgNTMgd29ya3MuIEZpcmVmb3ggNDkgYW5kIEVkZ2UgMTQgZG9uXCJ0XHJcblx0XHRcdC8vc2V0QXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvL1x0ZWxlbWVudFRvTG9hZC5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHQvL1x0cnVuQ2FsbGJhY2tzKCk7XHJcblx0XHRcdC8vXHRjb25zb2xlLmxvZyhcImJiYlwiKTtcclxuXHRcdFx0Ly99XHJcblx0XHRcdC8vIERvZXNuXCJ0IHdvcmsgb24gYnJvd3NlcnNcclxuXHRcdFx0Ly9zZXRBc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vXHR0aGlzLmxvYWRlZCA9IHRydWU7XHJcblx0XHRcdC8vXHRydW5DYWxsYmFja3MoKTtcclxuXHRcdFx0Ly9cdGNvbnNvbGUubG9nKFwiY2NjXCIpO1xyXG5cdFx0XHQvL31cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHZhciBlbGVtZW50ID0gby5xcyhzZWxlY3Rvcik7XHJcblx0XHRpZiAoZWxlbWVudCkge1xyXG5cdFx0XHRlbGVtZW50c1RvTG9hZC5wdXNoKGVsZW1lbnRUb0xvYWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc3ODcxL2NoZWNrLWlmLWFuLWltYWdlLWlzLWxvYWRlZC1uby1lcnJvcnMtaW4tamF2YXNjcmlwdFxyXG5cdFx0XHRpZiAoZWxlbWVudC5jb21wbGV0ZSAmJiBlbGVtZW50Lm5hdHVyYWxIZWlnaHQgIT09IDApIHtcclxuXHRcdFx0XHQvKmpzaGludCAtVzAzMCAqL1xyXG5cdFx0XHRcdGVsZW1lbnRUb0xvYWQuc2V0QXNMb2FkZWQ7XHJcblx0XHRcdFx0Lypqc2hpbnQgK1cwMzAgKi9cclxuXHRcdFx0fSBlbHNlIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZWxlbWVudFRvTG9hZC5zZXRBc0xvYWRlZCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBlbGVtZW50O1xyXG5cdH07XHJcblx0XHJcblx0by5ydW5XaGVuQWxsTG9hZGVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuXHRcdHJ1bkNhbGxiYWNrcygpO1xyXG5cdH07XHJcblx0XHJcblx0by5yZXNldEVsZW1lbnRzVG9Mb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRlbGVtZW50c1RvTG9hZCA9IFtdO1xyXG5cdFx0Y2FsbGJhY2tzID0gW107XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExMjE5NTgyL2hvdy10by1kZXRlY3QtbXktYnJvd3Nlci12ZXJzaW9uLWFuZC1vcGVyYXRpbmctc3lzdGVtLXVzaW5nLWphdmFzY3JpcHRcclxuXHRvLmdldE9TID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgb3M7XHJcblx0XHR2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHRcdFxyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJXaW5cIikgIT0gLTEpXHRcdG9zID0gXCJXaW5kb3dzXCI7XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIk1hY1wiKSAhPSAtMSlcdFx0b3MgPSBcIm1hY09TXCI7XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIkxpbnV4XCIpICE9IC0xKVx0XHRvcyA9IFwiTGludXhcIjtcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiQW5kcm9pZFwiKSAhPSAtMSlcdG9zID0gXCJBbmRyb2lkXCI7XHJcblx0XHRpZiAodWEuaW5kZXhPZihcImxpa2UgTWFjXCIpICE9IC0xKVx0b3MgPSBcImlPU1wiO1xyXG5cclxuXHRcdHJldHVybiBvcztcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdG8uZ2V0Q29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIixcclxuXHRcdFx0XHRjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcblx0XHRmb3IgKHZhciBpPTA7IGkgPCBjYS5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdHZhciBjID0gY2FbaV07XHJcblx0XHRcdHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIilcclxuXHRcdFx0XHRjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XHJcblx0XHRcdGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9O1xyXG5cdFxyXG5cdG8uc2V0Q29va2llID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIGRheXMpIHtcclxuXHRcdHZhciBleHBpcmVzO1xyXG5cdFx0aWYgKGRheXMpIHtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcblx0XHRcdGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9HTVRTdHJpbmcoKTtcclxuXHRcdH0gZWxzZSBleHBpcmVzID0gXCJcIjtcclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxuXHR9O1xyXG5cdFxyXG5cdG8ucmVtb3ZlQ29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dGhpcy5zZXRDb29raWUobmFtZSxcIlwiLC0xKTtcclxuXHR9O1xyXG5cdFxyXG59KHdpbmRvdy5vID0gd2luZG93Lm8gfHwge30pKTtcclxuIiwiXHJcbmZ1bmN0aW9uIGhpZGVJbnRybyh0eXBlKSB7XHJcblx0dmFyIG1vZGlmaWVyID0gXCJvdXRcIixcclxuXHRcdHRpbWUgPSA0MDAwO1xyXG5cdFx0XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlIDI6IG1vZGlmaWVyID0gXCJvdXQyXCI7IHRpbWUgPSAxMDAwO1xyXG5cdH1cclxuXHRcclxuXHR2YXIgaW50cm8gPSBvLmdjKFwiaW50cm9cIiksXHJcblx0XHRpbnRyb0RhcmtlbmVyID0gby5nYyhcImludHJvLWRhcmtlbmVyXCIpO1xyXG5cdFx0XHJcblx0aW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvLS1cIiArIG1vZGlmaWVyKTtcclxuXHRpbnRyby5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnRyb1wiKSlcclxuXHRcdFx0aW50cm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGludHJvRGFya2VuZXIuY2xhc3NMaXN0LmFkZChcImludHJvLWRhcmtlbmVyLS1cIiArIG1vZGlmaWVyKTtcclxuXHRpbnRyb0RhcmtlbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImludHJvLWRhcmtlbmVyXCIpICYmIHR5cGUgPT09IDIpXHJcblx0XHRcdGludHJvRGFya2VuZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0ZWxzZSBvLnRvKGZ1bmN0aW9uKCkgeyBpbnRyb0RhcmtlbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgfSwgMjUwMCk7XHJcblx0fSk7XHJcblx0XHJcblx0by5nYyhcIm1haW4tYmdcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tYmctLWluXCIpO1xyXG5cdFxyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGggPj0gODEwKSB7XHJcblx0XHRwZy5sb2FkKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRJbnRybygpIHtcclxuXHRvLmdjKFwic2Nyb2xsLWRvd25cIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLS1ib3R0b21cIik7XHJcblx0by5nYyhcInNjcm9sbC1kb3duX19pbm5lclwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd25fX2lubmVyLS1vdXRcIik7XHJcblx0XHJcblx0dmFyIHZpZXdQb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcblx0XHR3aGVlbExldmVsID0gMCxcclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSAwLFxyXG5cdFx0cGhyYXNlcyA9IG8uZ2NhKFwicGhyYXNlc19fcGhyYXNlXCIpLFxyXG5cdFx0cGhyYXNlc0NvdW50ID0gcGhyYXNlcy5sZW5ndGgsXHJcblx0XHRidWJibGVzID0gby5nY2EoXCJidWJibGVzX19sYXllclwiKSxcclxuXHRcdHNsaWRlcyA9IG8ucXNhKFwiLnNsaWRlcz4uc2xpZGVcIiksXHJcblx0XHRzbGlkZXNDb3VudCA9IHNsaWRlcy5sZW5ndGgsXHJcblx0XHR2aXNpYmxlUGhyYXNlcyA9IFtdLFxyXG5cdFx0dmlzaWJsZUJ1YmJsZXMgPSBbXSxcclxuXHRcdHBocmFzZXNDb3VudFJlYWNoZWQgPSBmYWxzZSxcclxuXHRcdHlTdGFydCxcclxuXHRcdHlFbmQsXHJcblx0XHR0cmFuc2Zvcm0gPSBvLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCgpLFxyXG5cdFx0bW91c2VNb3ZlTGlzdGVuZXIsXHJcblx0XHRtb3VzZVdoZWVsTGlzdGVuZXIsXHJcblx0XHR0b3VjaFN0YXJ0TGlzdGVuZXIsXHJcblx0XHR0b3VjaEVuZExpc3RlbmVyLFxyXG5cdFx0a2V5RG93bkxpc3RlbmVyLFxyXG5cdFx0dG9Db250cm9sbGVkUmFuZG9tTW92ZW1lbnQsXHJcblx0XHR0b0hpbnRzO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdC8vIE9uIGRlc2t0b3AgdmVyc2lvbiBpdCBtb3ZlcyB0aGUgcGhyYXNlcyBhbmQgYnViYmxlcyBvbiB0aGUgM2Qgc3BhY2UgZGVwZW5kaW5nIG9uIHRoZSBjdXJzb3IgcG9zaXRpb25cclxuXHRpZiAodmlld1BvcnRXaWR0aCA8PSA4MTApIHtcclxuXHRcdHZhciBwaHJhc2VzQ29udGFpbmVyID0gby5nYyhcInBocmFzZXNcIiksIFxyXG5cdFx0XHRidWJibGVzQ29udGFpbmVyID0gby5nYyhcImJ1YmJsZXNcIik7XHJcblx0XHRvLmFlKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGVsdGFaOiBcIiArIGUuZGVsdGFaKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhTW9kZTogXCIgKyBlLmRlbHRhTW9kZSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRYOiBcIiArIGUuY2xpZW50WCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRZOiBcIiArIGUuY2xpZW50WSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgK1wiZGVnKVwiKTtcclxuXHRcdFx0Ly8gcGhyYXNlc0NvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1dID0gXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgKyBcImRlZykgcm90YXRlWShcIiArICgwLjAyKmUuY2xpZW50WC0yNSkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyAoLTAuMDUqZS5jbGllbnRYKzEwMCkgKyBcInB4LCAwLCAwKVwiO1xyXG5cdFx0XHRwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBcInJvdGF0ZVgoXCIgKyAtKDAuMDIqZS5jbGllbnRZKSArIFwiZGVnKSByb3RhdGVZKFwiICsgKDAuMDIqZS5jbGllbnRYKSArIFwiZGVnKSB0cmFuc2xhdGUzZChcIiArICgtMC4wNSplLmNsaWVudFgrMTAwKSArIFwicHgsIDAsIDApXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEdWUgdG8gYSB3ZWlyZCBiZWhhdmlvdXIgdGhlIGJlbG93IGxpbmUgc3BvaWxzIHRoZSBidWJibGVzIHpvb20gZWZmZWN0IG9mIENocm9tZS5cclxuXHRcdFx0Ly8gV2l0aCB0aGlzIGNvbmRpdGlvbmFsIGlmIHdlIGF2b2lkIGV4ZWN1dGlvbiBvbiBDaHJvbWVcclxuXHRcdFx0aWYgKCEod2luZG93LmNocm9tZSAmJiB3aW5kb3cuY2hyb21lLndlYnN0b3JlKSlcclxuXHRcdFx0XHRidWJibGVzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gU2hvd3MgYSB0ZXh0IGhpbnQgaWYgdGhlIGludHJvIGRvZXNuJ3Qgc3RhcnQgc2Nyb2xsaW5nIGRvd24gaW4gMyBzZWNvbmRzXHJcblx0dG9IaW50cyA9IG8udG8oZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gMClcclxuXHRcdFx0aWYgKHZpZXdQb3J0V2lkdGggPj0gODEwICYmIG8uZ2V0T1MoKSAhPT0gXCJBbmRyb2lkXCIgJiYgby5nZXRPUygpICE9PSBcImlPU1wiKVxyXG5cdFx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93bi1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi1oaW50LS1pblwiKTtcclxuXHRcdFx0ZWxzZSBvLmdjKFwic3dpcGUtdXAtaGludFwiKS5jbGFzc0xpc3QuYWRkKFwic3dpcGUtdXAtaGludC0taW5cIik7XHJcblx0fSwgMzAwMCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgcGhyYXNlcyBhbmQgYnViYmxlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVQaHJhc2VzKCkge1xyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDEpIHtcclxuXHRcdFx0by5nYyhcInNjcm9sbC1kb3duLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLWhpbnQtLW91dFwiKTtcclxuXHRcdFx0by5nYyhcInN3aXBlLXVwLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInN3aXBlLXVwLWhpbnQtLW91dFwiKTtcclxuXHRcdH0gXHJcblx0XHRcclxuXHRcdGlmICh3aGVlbExldmVsID09PSBwaHJhc2VzQ291bnQpIHtcclxuXHRcdFx0by50byhmdW5jdGlvbigpIHsgby5nYyhcImVudGVyLWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwiZW50ZXItYnV0dG9uLS1pblwiKTsgfSwgMTAwMCk7XHJcblx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24tLW91dFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG8uZ2MoXCJlbnRlci1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImVudGVyLWJ1dHRvbi0taW5cIik7XHJcblx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLWRvd24tLW91dFwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAod2hlZWxMZXZlbCA+IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuc3BsaWNlKDAsIDAsIChwaHJhc2VzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXMuc3BsaWNlKDAsIDAsIChidWJibGVzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKFwicGhyYXNlc19fcGhyYXNlLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHRcdHZpc2libGVCdWJibGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJidWJibGVzX19sYXllci0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHdoZWVsTGV2ZWwgPCB3aGVlbExldmVsRm9ybWVyKSB7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInBocmFzZXNfX3BocmFzZS0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0XHR2aXNpYmxlQnViYmxlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlc19fbGF5ZXItLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5zcGxpY2UoMCwgMSk7XHJcblx0XHRcdHZpc2libGVCdWJibGVzLnNwbGljZSgwLCAxKTtcclxuXHRcdH1cclxuXHJcblx0XHR3aGVlbExldmVsRm9ybWVyID0gd2hlZWxMZXZlbDtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgc2xpZGVzIGFjY29yZGluZ2x5XHJcblx0ZnVuY3Rpb24gbW92ZVNsaWRlcygpIHtcclxuXHRcdGlmICh3aGVlbExldmVsID4gd2hlZWxMZXZlbEZvcm1lcikge1xyXG5cdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnQtMV0uY2xhc3NMaXN0LmFkZChcInNsaWRlLS1pblwiKTtcclxuXHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS10ZXh0LS1pblwiKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwtcGhyYXNlc0NvdW50ID4gMSAmJiAhc2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlLS1yZW1haW5cIikpIHtcclxuXHRcdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnQtMl0uY2xhc3NMaXN0LmFkZChcInNsaWRlLS1vdXRcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAod2hlZWxMZXZlbCA8IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50XS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtLWluXCIpO1xyXG5cdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnRdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS10ZXh0LS1pblwiKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwtcGhyYXNlc0NvdW50ID4gMCkge1xyXG5cdFx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudC0xXS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtLW91dFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSB3aGVlbExldmVsO1xyXG5cdH1cclxuXHRcclxuXHQvLyBDb3VudHMgd2hlZWwgc2Nyb2xsIG1vdmVtZW50c1xyXG5cdG8uYWUoXCJ3aGVlbFwiLCBtb3VzZVdoZWVsTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKChlLmRlbHRhWSA+IDAgfHwgZS5kZXRhaWwuZGVsdGFZID4gMCkgJiYgd2hlZWxMZXZlbCA8IChwaHJhc2VzQ291bnQgKyBzbGlkZXNDb3VudCkpIHtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPT09IHBocmFzZXNDb3VudCAmJiAhby5nYyhcIm1haW4tYmdcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFpbi1iZy0taW5cIikpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQrK3doZWVsTGV2ZWw7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAod2hlZWxMZXZlbCA8PSBwaHJhc2VzQ291bnQpXHJcblx0XHRcdFx0bW92ZVBocmFzZXMoKTtcclxuXHRcdFx0ZWxzZSBtb3ZlU2xpZGVzKCk7XHJcblx0XHR9IGVsc2UgaWYgKChlLmRlbHRhWSA8IDAgfHwgZS5kZXRhaWwuZGVsdGFZIDwgMCApICYmIHdoZWVsTGV2ZWwgPiAwKSB7XHJcblx0XHRcdGlmICh3aGVlbExldmVsID09PSBwaHJhc2VzQ291bnQgJiYgby5nYyhcIm1haW4tYmdcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWFpbi1iZy0taW5cIikpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQtLXdoZWVsTGV2ZWw7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAod2hlZWxMZXZlbCA8IHBocmFzZXNDb3VudClcclxuXHRcdFx0XHRtb3ZlUGhyYXNlcygpO1xyXG5cdFx0XHRlbHNlIG1vdmVTbGlkZXMoKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKHdoZWVsTGV2ZWwpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjI2NDA3Mi9kZXRlY3QtYS1maW5nZXItc3dpcGUtdGhyb3VnaC1qYXZhc2NyaXB0LW9uLXRoZS1pcGhvbmUtYW5kLWFuZHJvaWRcclxuXHRvLmFlKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0TGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XHJcblx0XHR5U3RhcnQgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHR9KTtcclxuXHRcclxuXHRvLmFlKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdHlFbmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XHJcblx0XHRpZiAoeUVuZCAtIHlTdGFydCA8IC02MClcclxuXHRcdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwid2hlZWxcIiwgeyBkZXRhaWw6IHsgZGVsdGFZOiAxIH19KSk7XHJcblx0XHRlbHNlIGlmICh5RW5kIC0geVN0YXJ0ID4gNjApXHJcblx0XHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIndoZWVsXCIsIHsgZGV0YWlsOiB7IGRlbHRhWTogLTEgfX0pKVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIE1vdmVzIHJhbmRvbWx5IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseSB0aGUgYnViYmxlIGxheWVyc1xyXG5cdChmdW5jdGlvbiBjb250cm9sbGVkUmFuZG9tTW92ZW1lbnQoKSB7XHJcblx0XHRmb3IgKHZhciBuPTA7IG48dmlzaWJsZUJ1YmJsZXMubGVuZ3RoOyArK24pIHtcclxuXHRcdFx0Ly92YXIgelRyYW5zID0gL1xcLip0cmFuc2xhdGVaXFwoKC4qKXB4XFwpL2kuZXhlYyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR2XCIpLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKVsxXTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXNbbl0uZmlyc3RDaGlsZC5zdHlsZVt0cmFuc2Zvcm1dID0gXCJ0cmFuc2xhdGUzZChcIiArIG8uZ2V0UmFuZG9tSW50KCkgKyBcInB4LCBcIiArIG8uZ2V0UmFuZG9tSW50KCkgKyBcInB4LCAwKVwiO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlc1tuXS5maXJzdENoaWxkLnN0eWxlW3RyYW5zZm9ybV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIDApXCI7XHJcblx0XHR9XHJcblx0XHR0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCA9IG8udG8oY29udHJvbGxlZFJhbmRvbU1vdmVtZW50LCAzMDAwKTtcclxuXHR9KSgpO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEhpZGVzIHRoZSBJbnRybyBzY3JlZW5cclxuXHRmdW5jdGlvbiBza2lwSW50cm8oZ2FMYWJlbCkge1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlTGlzdGVuZXIpO1xyXG5cdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBtb3VzZVdoZWVsTGlzdGVuZXIpO1xyXG5cdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnRMaXN0ZW5lcik7XHJcblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG5cdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25MaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50KTtcclxuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodG9IaW50cyk7XHJcblx0XHRcclxuXHRcdGhpZGVJbnRybygpO1xyXG5cdFx0XHJcblx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IDEgfX0pKTtcclxuXHR9XHJcblx0XHJcblx0by5nYyhcImVudGVyLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkgeyBza2lwSW50cm8oXCJFbnRlciBidXR0b25cIik7IH0pO1xyXG5cdFxyXG5cdG8uYWUoXCJrZXlkb3duXCIsIGtleURvd25MaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKGUua2V5Q29kZSk7XHJcblx0XHRzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG5cdFx0XHRjYXNlIDM5OlxyXG5cdFx0XHRjYXNlIDQwOiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IDEgfX0pKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6IHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIndoZWVsXCIsIHsgZGV0YWlsOiB7IGRlbHRhWTogLTEgfX0pKTsgYnJlYWs7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcbn1cclxuIiwiXG5XZWJGb250LmxvYWQoe1xyXG5cdGdvb2dsZToge1xyXG5cdFx0ZmFtaWxpZXM6IFtcIk9wZW4gU2FuczozMDAsODAwXCIsIFwiT3BlbiBTYW5zIENvbmRlbnNlZDozMDBcIiwgXCJCbGFjayBPcHMgT25lOjQwMFwiLCBcIkJ1bmdlZSBTaGFkZTo0MDBcIiwgXCJDYXZlYXQ6NDAwXCIsIFwiUGFjaWZpY29cIiwgXCJNb25vZmV0dFwiIF1cclxuXHR9LFxyXG5cdGFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpbml0SW50cm8oKTtcclxuXHR9LFxyXG5cdGluYWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHR9LFxyXG5cdGNsYXNzZXM6IGZhbHNlLFxyXG5cdHRpbWVvdXQ6IDgwMDBcclxufSk7XHJcbiJdfQ==
