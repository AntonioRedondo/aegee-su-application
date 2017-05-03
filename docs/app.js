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
		onTransition = false,
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
		
		if (onTransition && !e.detail.buttonEnter)
			return;
		
		onTransition = true;
		
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
		
		o.to(function() {
			onTransition = false;
		}, 600);
	});
	
	// http://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
	o.ae("touchstart", touchStartListener = function(e) {
		yStart = e.touches[0].clientY;
	});
	
	o.ae("touchend", touchEndListener = function(e) {
		yEnd = e.changedTouches[0].clientY;
		if (yEnd - yStart < -60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1 }}));
		else if (yEnd - yStart > 60)
			window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: -1 }}));
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
		
		window.dispatchEvent(new CustomEvent("wheel", { detail: { deltaY: 1, buttonEnter: true }}));
	}
	
	o.gc("enter-button").addEventListener("click", function(e) { skipIntro("Enter button"); });
	
	o.ae("keydown", keyDownListener = function(e) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJwbHlncm5kLmpzIiwiby5qcyIsImluaXRJbnRyby5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdlYiBGb250IExvYWRlciB2MS42LjI3IC0gKGMpIEFkb2JlIFN5c3RlbXMsIEdvb2dsZS4gTGljZW5zZTogQXBhY2hlIDIuMCAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGFhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHAoYSxiLGMpe3A9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9hYTpiYTtyZXR1cm4gcC5hcHBseShudWxsLGFyZ3VtZW50cyl9dmFyIHE9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfTtmdW5jdGlvbiBjYShhLGIpe3RoaXMuYT1hO3RoaXMubT1ifHxhO3RoaXMuYz10aGlzLm0uZG9jdW1lbnR9dmFyIGRhPSEhd2luZG93LkZvbnRGYWNlO2Z1bmN0aW9uIHQoYSxiLGMsZCl7Yj1hLmMuY3JlYXRlRWxlbWVudChiKTtpZihjKWZvcih2YXIgZSBpbiBjKWMuaGFzT3duUHJvcGVydHkoZSkmJihcInN0eWxlXCI9PWU/Yi5zdHlsZS5jc3NUZXh0PWNbZV06Yi5zZXRBdHRyaWJ1dGUoZSxjW2VdKSk7ZCYmYi5hcHBlbmRDaGlsZChhLmMuY3JlYXRlVGV4dE5vZGUoZCkpO3JldHVybiBifWZ1bmN0aW9uIHUoYSxiLGMpe2E9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGIpWzBdO2F8fChhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7YS5pbnNlcnRCZWZvcmUoYyxhLmxhc3RDaGlsZCl9ZnVuY3Rpb24gdihhKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX1cbmZ1bmN0aW9uIHcoYSxiLGMpe2I9Ynx8W107Yz1jfHxbXTtmb3IodmFyIGQ9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxlPTA7ZTxiLmxlbmd0aDtlKz0xKXtmb3IodmFyIGY9ITEsZz0wO2c8ZC5sZW5ndGg7Zys9MSlpZihiW2VdPT09ZFtnXSl7Zj0hMDticmVha31mfHxkLnB1c2goYltlXSl9Yj1bXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSs9MSl7Zj0hMTtmb3IoZz0wO2c8Yy5sZW5ndGg7Zys9MSlpZihkW2VdPT09Y1tnXSl7Zj0hMDticmVha31mfHxiLnB1c2goZFtlXSl9YS5jbGFzc05hbWU9Yi5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKX1mdW5jdGlvbiB5KGEsYil7Zm9yKHZhciBjPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylpZihjW2RdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24geihhKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEuZilyZXR1cm4gYS5mO3ZhciBiPWEubS5sb2NhdGlvbi5wcm90b2NvbDtcImFib3V0OlwiPT1iJiYoYj1hLmEubG9jYXRpb24ucHJvdG9jb2wpO3JldHVyblwiaHR0cHM6XCI9PWI/XCJodHRwczpcIjpcImh0dHA6XCJ9ZnVuY3Rpb24gZWEoYSl7cmV0dXJuIGEubS5sb2NhdGlvbi5ob3N0bmFtZXx8YS5hLmxvY2F0aW9uLmhvc3RuYW1lfVxuZnVuY3Rpb24gQShhLGIsYyl7ZnVuY3Rpb24gZCgpe2smJmUmJmYmJihrKGcpLGs9bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLGs9Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEIoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQygpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEQoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RShhKX19ZnVuY3Rpb24gRihhLGIpe2EuYz1iO0UoYSl9ZnVuY3Rpb24gRShhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRyhhKXt0aGlzLmE9YXx8XCItXCJ9Ry5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBIKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBJKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitKKGEuYyl9ZnVuY3Rpb24gSihhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBLKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEkoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5tLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEcoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7TChhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBNKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1MKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBMKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSyhjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE4oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBPKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gUChhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSihhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSShhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBRKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMubS5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGsoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoaywyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9aygpfSksZT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGQpe3NldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtlLGRdKS50aGVuKGZ1bmN0aW9uKCl7Yi5nKGIuYSl9LGZ1bmN0aW9uKCl7Yi5qKGIuYSl9KX07ZnVuY3Rpb24gUihhLGIsYyxkLGUsZixnKXt0aGlzLnY9YTt0aGlzLkI9Yjt0aGlzLmM9Yzt0aGlzLmE9ZDt0aGlzLnM9Z3x8XCJCRVNic3d5XCI7dGhpcy5mPXt9O3RoaXMudz1lfHwzRTM7dGhpcy51PWZ8fG51bGw7dGhpcy5vPXRoaXMuaj10aGlzLmg9dGhpcy5nPW51bGw7dGhpcy5nPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMuaD1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLmo9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5vPW5ldyBOKHRoaXMuYyx0aGlzLnMpO2E9bmV3IEgodGhpcy5hLmMrXCIsc2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmcuYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSCh0aGlzLmEuYytcIixzYW5zLXNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5oLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgoXCJzZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuai5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKFwic2Fucy1zZXJpZlwiLEsodGhpcy5hKSk7YT1cblAoYSk7dGhpcy5vLmEuc3R5bGUuY3NzVGV4dD1hO08odGhpcy5nKTtPKHRoaXMuaCk7Tyh0aGlzLmopO08odGhpcy5vKX12YXIgUz17RDpcInNlcmlmXCIsQzpcInNhbnMtc2VyaWZcIn0sVD1udWxsO2Z1bmN0aW9uIFUoKXtpZihudWxsPT09VCl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1Q9ISFhJiYoNTM2PnBhcnNlSW50KGFbMV0sMTApfHw1MzY9PT1wYXJzZUludChhWzFdLDEwKSYmMTE+PXBhcnNlSW50KGFbMl0sMTApKX1yZXR1cm4gVH1SLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3RoaXMuZi5zZXJpZj10aGlzLmouYS5vZmZzZXRXaWR0aDt0aGlzLmZbXCJzYW5zLXNlcmlmXCJdPXRoaXMuby5hLm9mZnNldFdpZHRoO3RoaXMuQT1xKCk7bGEodGhpcyl9O1xuZnVuY3Rpb24gbWEoYSxiLGMpe2Zvcih2YXIgZCBpbiBTKWlmKFMuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbU1tkXV0mJmM9PT1hLmZbU1tkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbGEoYSl7dmFyIGI9YS5nLmEub2Zmc2V0V2lkdGgsYz1hLmguYS5vZmZzZXRXaWR0aCxkOyhkPWI9PT1hLmYuc2VyaWYmJmM9PT1hLmZbXCJzYW5zLXNlcmlmXCJdKXx8KGQ9VSgpJiZtYShhLGIsYykpO2Q/cSgpLWEuQT49YS53P1UoKSYmbWEoYSxiLGMpJiYobnVsbD09PWEudXx8YS51Lmhhc093blByb3BlcnR5KGEuYS5jKSk/VihhLGEudik6VihhLGEuQik6bmEoYSk6VihhLGEudil9ZnVuY3Rpb24gbmEoYSl7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7bGEodGhpcyl9LGEpLDUwKX1mdW5jdGlvbiBWKGEsYil7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7dih0aGlzLmcuYSk7dih0aGlzLmguYSk7dih0aGlzLmouYSk7dih0aGlzLm8uYSk7Yih0aGlzLmEpfSxhKSwwKX07ZnVuY3Rpb24gVyhhLGIsYyl7dGhpcy5jPWE7dGhpcy5hPWI7dGhpcy5mPTA7dGhpcy5vPXRoaXMuaj0hMTt0aGlzLnM9Y312YXIgWD1udWxsO1cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2IuZyYmdyhiLmYsW2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpXSxbYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpLGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIildKTtMKGIsXCJmb250YWN0aXZlXCIsYSk7dGhpcy5vPSEwO29hKHRoaXMpfTtcblcucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2lmKGIuZyl7dmFyIGM9eShiLmYsYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIikpLGQ9W10sZT1bYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXTtjfHxkLnB1c2goYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKSk7dyhiLmYsZCxlKX1MKGIsXCJmb250aW5hY3RpdmVcIixhKTtvYSh0aGlzKX07ZnVuY3Rpb24gb2EoYSl7MD09LS1hLmYmJmEuaiYmKGEubz8oYT1hLmEsYS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpXSxbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKSxhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKV0pLEwoYSxcImFjdGl2ZVwiKSk6TShhLmEpKX07ZnVuY3Rpb24gcGEoYSl7dGhpcy5qPWE7dGhpcy5hPW5ldyBqYTt0aGlzLmg9MDt0aGlzLmY9dGhpcy5nPSEwfXBhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3RoaXMuYz1uZXcgY2EodGhpcy5qLGEuY29udGV4dHx8dGhpcy5qKTt0aGlzLmc9ITEhPT1hLmV2ZW50czt0aGlzLmY9ITEhPT1hLmNsYXNzZXM7cWEodGhpcyxuZXcgaGEodGhpcy5jLGEpLGEpfTtcbmZ1bmN0aW9uIHJhKGEsYixjLGQsZSl7dmFyIGY9MD09LS1hLmg7KGEuZnx8YS5nKSYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPWV8fG51bGwsaz1kfHxudWxsfHx7fTtpZigwPT09Yy5sZW5ndGgmJmYpTShiLmEpO2Vsc2V7Yi5mKz1jLmxlbmd0aDtmJiYoYi5qPWYpO3ZhciBoLG09W107Zm9yKGg9MDtoPGMubGVuZ3RoO2grKyl7dmFyIGw9Y1toXSxuPWtbbC5jXSxyPWIuYSx4PWw7ci5nJiZ3KHIuZixbci5hLmMoXCJ3ZlwiLHguYyxLKHgpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXSk7TChyLFwiZm9udGxvYWRpbmdcIix4KTtyPW51bGw7aWYobnVsbD09PVgpaWYod2luZG93LkZvbnRGYWNlKXt2YXIgeD0vR2Vja28uKkZpcmVmb3hcXC8oXFxkKykvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLHlhPS9PUyBYLipWZXJzaW9uXFwvMTBcXC4uKlNhZmFyaS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkmJi9BcHBsZS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnZlbmRvcik7XG5YPXg/NDI8cGFyc2VJbnQoeFsxXSwxMCk6eWE/ITE6ITB9ZWxzZSBYPSExO1g/cj1uZXcgUShwKGIuZyxiKSxwKGIuaCxiKSxiLmMsbCxiLnMsbik6cj1uZXcgUihwKGIuZyxiKSxwKGIuaCxiKSxiLmMsbCxiLnMsYSxuKTttLnB1c2gocil9Zm9yKGg9MDtoPG0ubGVuZ3RoO2grKyltW2hdLnN0YXJ0KCl9fSwwKX1mdW5jdGlvbiBxYShhLGIsYyl7dmFyIGQ9W10sZT1jLnRpbWVvdXQ7aWEoYik7dmFyIGQ9a2EoYS5hLGMsYS5jKSxmPW5ldyBXKGEuYyxiLGUpO2EuaD1kLmxlbmd0aDtiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKylkW2JdLmxvYWQoZnVuY3Rpb24oYixkLGMpe3JhKGEsZixiLGQsYyl9KX07ZnVuY3Rpb24gc2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9eihhLmMpO2E9KGEuYS5hcGl8fFwiZmFzdC5mb250cy5uZXQvanNhcGlcIikucmVwbGFjZSgvXi4qaHR0cChzPyk6KFxcL1xcLyk/LyxcIlwiKTtyZXR1cm4gZCtcIi8vXCIrYStcIi9cIitiK1wiLmpzXCIrKGM/XCI/dj1cIitjOlwiXCIpfVxuc2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe2lmKGZbXCJfX210aV9mbnRMc3RcIitkXSl7dmFyIGM9ZltcIl9fbXRpX2ZudExzdFwiK2RdKCksZT1bXSxoO2lmKGMpZm9yKHZhciBtPTA7bTxjLmxlbmd0aDttKyspe3ZhciBsPWNbbV0uZm9udGZhbWlseTt2b2lkIDAhPWNbbV0uZm9udFN0eWxlJiZ2b2lkIDAhPWNbbV0uZm9udFdlaWdodD8oaD1jW21dLmZvbnRTdHlsZStjW21dLmZvbnRXZWlnaHQsZS5wdXNoKG5ldyBIKGwsaCkpKTplLnB1c2gobmV3IEgobCkpfWEoZSl9ZWxzZSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YigpfSw1MCl9dmFyIGM9dGhpcyxkPWMuYS5wcm9qZWN0SWQsZT1jLmEudmVyc2lvbjtpZihkKXt2YXIgZj1jLmMubTtCKHRoaXMuYyx0YShjLGQsZSksZnVuY3Rpb24oZSl7ZT9hKFtdKTooZltcIl9fTW9ub3R5cGVDb25maWd1cmF0aW9uX19cIitkXT1mdW5jdGlvbigpe3JldHVybiBjLmF9LGIoKSl9KS5pZD1cIl9fTW9ub3R5cGVBUElTY3JpcHRfX1wiK1xuZH1lbHNlIGEoW10pfTtmdW5jdGlvbiB1YShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXVhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmEudXJsc3x8W10sZT10aGlzLmEuZmFtaWxpZXN8fFtdLGY9dGhpcy5hLnRlc3RTdHJpbmdzfHx7fSxnPW5ldyBDO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKUEodGhpcy5jLGRbYl0sRChnKSk7dmFyIGs9W107Yj0wO2ZvcihjPWUubGVuZ3RoO2I8YztiKyspaWYoZD1lW2JdLnNwbGl0KFwiOlwiKSxkWzFdKWZvcih2YXIgaD1kWzFdLnNwbGl0KFwiLFwiKSxtPTA7bTxoLmxlbmd0aDttKz0xKWsucHVzaChuZXcgSChkWzBdLGhbbV0pKTtlbHNlIGsucHVzaChuZXcgSChkWzBdKSk7RihnLGZ1bmN0aW9uKCl7YShrLGYpfSl9O2Z1bmN0aW9uIHZhKGEsYixjKXthP3RoaXMuYz1hOnRoaXMuYz1iK3dhO3RoaXMuYT1bXTt0aGlzLmY9W107dGhpcy5nPWN8fFwiXCJ9dmFyIHdhPVwiLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3NcIjtmdW5jdGlvbiB4YShhLGIpe2Zvcih2YXIgYz1iLmxlbmd0aCxkPTA7ZDxjO2QrKyl7dmFyIGU9YltkXS5zcGxpdChcIjpcIik7Mz09ZS5sZW5ndGgmJmEuZi5wdXNoKGUucG9wKCkpO3ZhciBmPVwiXCI7Mj09ZS5sZW5ndGgmJlwiXCIhPWVbMV0mJihmPVwiOlwiKTthLmEucHVzaChlLmpvaW4oZikpfX1cbmZ1bmN0aW9uIHphKGEpe2lmKDA9PWEuYS5sZW5ndGgpdGhyb3cgRXJyb3IoXCJObyBmb250cyB0byBsb2FkIVwiKTtpZigtMSE9YS5jLmluZGV4T2YoXCJraXQ9XCIpKXJldHVybiBhLmM7Zm9yKHZhciBiPWEuYS5sZW5ndGgsYz1bXSxkPTA7ZDxiO2QrKyljLnB1c2goYS5hW2RdLnJlcGxhY2UoLyAvZyxcIitcIikpO2I9YS5jK1wiP2ZhbWlseT1cIitjLmpvaW4oXCIlN0NcIik7MDxhLmYubGVuZ3RoJiYoYis9XCImc3Vic2V0PVwiK2EuZi5qb2luKFwiLFwiKSk7MDxhLmcubGVuZ3RoJiYoYis9XCImdGV4dD1cIitlbmNvZGVVUklDb21wb25lbnQoYS5nKSk7cmV0dXJuIGJ9O2Z1bmN0aW9uIEFhKGEpe3RoaXMuZj1hO3RoaXMuYT1bXTt0aGlzLmM9e319XG52YXIgQmE9e2xhdGluOlwiQkVTYnN3eVwiLFwibGF0aW4tZXh0XCI6XCJcXHUwMGU3XFx1MDBmNlxcdTAwZmNcXHUwMTFmXFx1MDE1ZlwiLGN5cmlsbGljOlwiXFx1MDQzOVxcdTA0NGZcXHUwNDE2XCIsZ3JlZWs6XCJcXHUwM2IxXFx1MDNiMlxcdTAzYTNcIixraG1lcjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwiLEhhbnVtYW46XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIn0sQ2E9e3RoaW46XCIxXCIsZXh0cmFsaWdodDpcIjJcIixcImV4dHJhLWxpZ2h0XCI6XCIyXCIsdWx0cmFsaWdodDpcIjJcIixcInVsdHJhLWxpZ2h0XCI6XCIyXCIsbGlnaHQ6XCIzXCIscmVndWxhcjpcIjRcIixib29rOlwiNFwiLG1lZGl1bTpcIjVcIixcInNlbWktYm9sZFwiOlwiNlwiLHNlbWlib2xkOlwiNlwiLFwiZGVtaS1ib2xkXCI6XCI2XCIsZGVtaWJvbGQ6XCI2XCIsYm9sZDpcIjdcIixcImV4dHJhLWJvbGRcIjpcIjhcIixleHRyYWJvbGQ6XCI4XCIsXCJ1bHRyYS1ib2xkXCI6XCI4XCIsdWx0cmFib2xkOlwiOFwiLGJsYWNrOlwiOVwiLGhlYXZ5OlwiOVwiLGw6XCIzXCIscjpcIjRcIixiOlwiN1wifSxEYT17aTpcImlcIixpdGFsaWM6XCJpXCIsbjpcIm5cIixub3JtYWw6XCJuXCJ9LFxuRWE9L14odGhpbnwoPzooPzpleHRyYXx1bHRyYSktPyk/bGlnaHR8cmVndWxhcnxib29rfG1lZGl1bXwoPzooPzpzZW1pfGRlbWl8ZXh0cmF8dWx0cmEpLT8pP2JvbGR8YmxhY2t8aGVhdnl8bHxyfGJ8WzEtOV0wMCk/KG58aXxub3JtYWx8aXRhbGljKT8kLztcbmZ1bmN0aW9uIEZhKGEpe2Zvcih2YXIgYj1hLmYubGVuZ3RoLGM9MDtjPGI7YysrKXt2YXIgZD1hLmZbY10uc3BsaXQoXCI6XCIpLGU9ZFswXS5yZXBsYWNlKC9cXCsvZyxcIiBcIiksZj1bXCJuNFwiXTtpZigyPD1kLmxlbmd0aCl7dmFyIGc7dmFyIGs9ZFsxXTtnPVtdO2lmKGspZm9yKHZhciBrPWsuc3BsaXQoXCIsXCIpLGg9ay5sZW5ndGgsbT0wO208aDttKyspe3ZhciBsO2w9a1ttXTtpZihsLm1hdGNoKC9eW1xcdy1dKyQvKSl7dmFyIG49RWEuZXhlYyhsLnRvTG93ZXJDYXNlKCkpO2lmKG51bGw9PW4pbD1cIlwiO2Vsc2V7bD1uWzJdO2w9bnVsbD09bHx8XCJcIj09bD9cIm5cIjpEYVtsXTtuPW5bMV07aWYobnVsbD09bnx8XCJcIj09biluPVwiNFwiO2Vsc2UgdmFyIHI9Q2Fbbl0sbj1yP3I6aXNOYU4obik/XCI0XCI6bi5zdWJzdHIoMCwxKTtsPVtsLG5dLmpvaW4oXCJcIil9fWVsc2UgbD1cIlwiO2wmJmcucHVzaChsKX0wPGcubGVuZ3RoJiYoZj1nKTszPT1kLmxlbmd0aCYmKGQ9ZFsyXSxnPVtdLGQ9ZD9kLnNwbGl0KFwiLFwiKTpcbmcsMDxkLmxlbmd0aCYmKGQ9QmFbZFswXV0pJiYoYS5jW2VdPWQpKX1hLmNbZV18fChkPUJhW2VdKSYmKGEuY1tlXT1kKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCs9MSlhLmEucHVzaChuZXcgSChlLGZbZF0pKX19O2Z1bmN0aW9uIEdhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9dmFyIEhhPXtBcmltbzohMCxDb3VzaW5lOiEwLFRpbm9zOiEwfTtHYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj1uZXcgQyxjPXRoaXMuYyxkPW5ldyB2YSh0aGlzLmEuYXBpLHooYyksdGhpcy5hLnRleHQpLGU9dGhpcy5hLmZhbWlsaWVzO3hhKGQsZSk7dmFyIGY9bmV3IEFhKGUpO0ZhKGYpO0EoYyx6YShkKSxEKGIpKTtGKGIsZnVuY3Rpb24oKXthKGYuYSxmLmMsSGEpfSl9O2Z1bmN0aW9uIElhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9SWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLmlkLGM9dGhpcy5jLm07Yj9CKHRoaXMuYywodGhpcy5hLmFwaXx8XCJodHRwczovL3VzZS50eXBla2l0Lm5ldFwiKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7aWYoYilhKFtdKTtlbHNlIGlmKGMuVHlwZWtpdCYmYy5UeXBla2l0LmNvbmZpZyYmYy5UeXBla2l0LmNvbmZpZy5mbil7Yj1jLlR5cGVraXQuY29uZmlnLmZuO2Zvcih2YXIgZT1bXSxmPTA7ZjxiLmxlbmd0aDtmKz0yKWZvcih2YXIgZz1iW2ZdLGs9YltmKzFdLGg9MDtoPGsubGVuZ3RoO2grKyllLnB1c2gobmV3IEgoZyxrW2hdKSk7dHJ5e2MuVHlwZWtpdC5sb2FkKHtldmVudHM6ITEsY2xhc3NlczohMSxhc3luYzohMH0pfWNhdGNoKG0pe31hKGUpfX0sMkUzKTphKFtdKX07ZnVuY3Rpb24gSmEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9W119SmEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5mLmlkLGM9dGhpcy5jLm0sZD10aGlzO2I/KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX3x8KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfXz17fSksYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fW2JdPWZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBnPTAsaz1jLmZvbnRzLmxlbmd0aDtnPGs7KytnKXt2YXIgaD1jLmZvbnRzW2ddO2QuYS5wdXNoKG5ldyBIKGgubmFtZSxnYShcImZvbnQtd2VpZ2h0OlwiK2gud2VpZ2h0K1wiO2ZvbnQtc3R5bGU6XCIraC5zdHlsZSkpKX1hKGQuYSl9LEIodGhpcy5jLHoodGhpcy5jKSsodGhpcy5mLmFwaXx8XCIvL2YuZm9udGRlY2suY29tL3MvY3NzL2pzL1wiKStlYSh0aGlzLmMpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtiJiZhKFtdKX0pKTphKFtdKX07dmFyIFk9bmV3IHBhKHdpbmRvdyk7WS5hLmMuY3VzdG9tPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyB1YShiLGEpfTtZLmEuYy5mb250ZGVjaz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgSmEoYixhKX07WS5hLmMubW9ub3R5cGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHNhKGIsYSl9O1kuYS5jLnR5cGVraXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IElhKGIsYSl9O1kuYS5jLmdvb2dsZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgR2EoYixhKX07dmFyIFo9e2xvYWQ6cChZLmxvYWQsWSl9O1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIFp9KTpcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9Wjood2luZG93LldlYkZvbnQ9Wix3aW5kb3cuV2ViRm9udENvbmZpZyYmWS5sb2FkKHdpbmRvdy5XZWJGb250Q29uZmlnKSk7fSgpKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rYW5kdXZpc2xhL3BseWdybmRcclxudmFyIFBseWdybmQgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpczsgICAgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHRvIHJvb3Qgb2JqZWN0O1xyXG5cdHRoaXMudmlld3MgPSBbXTsgICAgICAgICAgICAgICAgICAgIC8vIEFycmF5IHdpdGggdmlld3NcclxuXHR0aGlzLnRvdGFsVmlld3MgPSBbXTsgICAgICAgICAgICAgICAvLyBDb3VudGVyIHRvIGtlZXAgdHJhY2sgaWYgYWxsIHZpZXdzIGFyZSBsb2FkZWQuXHJcblx0dGhpcy5jdXJyZW50VmlldyA9IDA7ICAgICAgICAgICAgICAgLy8gQ3VycmVudFZpZXdcclxuXHR0aGlzLm1vdXNlUG9zaXRpb24gPSB7eDogKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvMTAwKjIwKSwgeTogKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LzEwMCoyMCl9OyAgLy8gTW91c2UgcG9zaXRpb24gKGNhbiBiZSB1c2VkIGJ5IHZpZXdzKVxyXG5cdHRoaXMuZnJhbWVSYXRlID0gNjA7XHJcblx0dGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHR0aGlzLmNsaWNrID0gZmFsc2U7XHJcblxyXG5cdC8vIENyZWF0ZSBjYW52YXMgb2JqZWN0OlxyXG5cdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmdcIilbMF07XHJcbi8vXHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcblx0Ly8gQ29udGV4dCBPYmplY3Q6XHJcblx0dGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cdC8vIFJlc2l6ZSBmdW5jdGlvbjpcclxuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRfdGhpcy5jdHgud2lkdGggID0gX3RoaXMuY2FudmFzLndpZHRoICA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblx0XHRfdGhpcy5jdHguaGVpZ2h0ID0gX3RoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG5cdH07XHJcblxyXG5cdC8vIEFuZCBiaW5kIGl0IHRvIHRoZSB3aW5kb3c6XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemUpO1xyXG5cdHRoaXMucmVzaXplKCk7XHJcblxyXG5cdC8vIE1vdXNlIHBvc2l0aW9uIChjYW4gYmUgdXNlZCBieSB2aWV3cyk6XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZSl7XHJcblx0XHRfdGhpcy5tb3VzZVBvc2l0aW9uLnggPSBlLmNsaWVudFg7XHJcblx0XHRfdGhpcy5tb3VzZVBvc2l0aW9uLnkgPSBlLmNsaWVudFk7XHJcblx0fSk7XHJcblxyXG5cdC8qXHRcdFx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlUG9zaXRpb24ueCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG5cdCBfdGhpcy5tb3VzZVBvc2l0aW9uLnkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IHRydWU7XHJcblx0IF90aGlzLmNsaWNrID0gdHJ1ZTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuXHQgX3RoaXMuY2xpY2sgPSBmYWxzZTtcclxuXHQgfSk7XHJcblxyXG5cdCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKXtcclxuXHQgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCBfdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG5cdCBfdGhpcy5jbGljayA9IHRydWU7XHJcblx0IH0pO1xyXG5cclxuXHQgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cdCBfdGhpcy5jbGljayA9IGZhbHNlO1xyXG5cdCB9KTsqL1xyXG5cclxuXHQvLyBBZGQgZXh0cmEgZnVuY3Rpb25zIHRvIHRoZSBjb250ZXh0IG9iamVjdDpcclxuXHR0aGlzLmN0eC5saW5lVGhyb3VnaCA9IGZ1bmN0aW9uKHBvaW50cylcclxuXHR7XHJcblx0XHRmb3IodmFyIGkgaW4gcG9pbnRzKSB7XHJcblx0XHRcdHRoaXMubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguY3VydmVUaHJvdWdoID0gZnVuY3Rpb24ocG9pbnRzKVxyXG5cdHtcclxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDI7IGkgKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciB4YyA9IChwb2ludHNbaV0ueCArIHBvaW50c1tpICsgMV0ueCkgLyAyO1xyXG5cdFx0XHR2YXIgeWMgPSAocG9pbnRzW2ldLnkgKyBwb2ludHNbaSArIDFdLnkpIC8gMjtcclxuXHRcdFx0dGhpcy5xdWFkcmF0aWNDdXJ2ZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSwgeGMsIHljKTtcclxuXHRcdH1cclxuXHRcdC8vIGN1cnZlIHRocm91Z2ggdGhlIGxhc3QgdHdvIHBvaW50c1xyXG5cdFx0dGhpcy5xdWFkcmF0aWNDdXJ2ZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSwgcG9pbnRzW2krMV0ueCxwb2ludHNbaSsxXS55KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5kaXJlY3Rpb24gPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MilcclxuXHR7XHJcblx0XHRyZXR1cm4gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmN0eC5kaXN0YW5jZSA9IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKVxyXG5cdHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQoXHJcblx0XHRcdE1hdGgucG93KHgyIC0geDEsIDIpICsgTWF0aC5wb3coeTIgLSB5MSwgMilcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jdHguZHJhd0NpcmNsZSA9IGZ1bmN0aW9uKHgsIHksIHJhZGl1cylcclxuXHR7XHJcblx0XHR0aGlzLmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0LypcdFx0XHRcdC8vIFBhZ2VyIGZ1bmN0aW9uOlxyXG5cdCB0aGlzLnBhZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuXHQgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBhZ2VyKTtcclxuXHJcblx0IHRoaXMuYnVpbGRQYWdlciA9IGZ1bmN0aW9uKClcclxuXHQge1xyXG5cdCBmb3IodmFyIGkgaW4gX3RoaXMudmlld3MpXHJcblx0IHtcclxuXHQgLy8gQ3JlYXRlIGFuIGFuY2hvciwgd2hpY2ggbG9hZHMgdGhlIHNwZWNpZmljIHZpZXc6XHJcblx0IHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHQgYW5jaG9yLmlubmVyVGV4dCA9IHBhcnNlSW50KGkpICsgMTtcclxuXHQgYW5jaG9yLnNldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiLCBpKTtcclxuXHQgYW5jaG9yLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIF90aGlzLnZpZXdzW2ldLm5hbWUpO1xyXG5cdCBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG5cdCBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0IF90aGlzLnBsYXlWaWV3KHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIpKTtcclxuXHQgfSk7XHJcblx0IF90aGlzLnBhZ2VyLmFwcGVuZENoaWxkKGFuY2hvcik7XHJcblx0IH1cclxuXHQgfTsqL1xyXG5cclxuXHQvLyBWaWV3cyBmdW5jdGlvbnM6XHJcblx0dGhpcy5hZGRWaWV3ID0gZnVuY3Rpb24oKVxyXG5cdHtcclxuXHRcdF90aGlzLnRvdGFsVmlld3MucHVzaCh7XHJcblx0XHRcdG9yZGVyOiBfdGhpcy50b3RhbFZpZXdzLmxlbmd0aCxcclxuXHRcdFx0c2x1ZzogXCJkb3RzLTJcIixcclxuXHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBDaGVjayBpZiBhbGwgaXMgbG9hZGVkIGFuZCBzdGFydCBpZiBzbzpcclxuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0dmFyIGludGVydmFsVGltZW91dCA9IDA7XHJcblx0XHR2YXIgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGludGVydmFsVGltZW91dCsrO1xyXG5cdFx0XHRpZihpbnRlcnZhbFRpbWVvdXQgPT0gMzAwKSB7XHJcblx0XHRcdFx0Ly8gd2FpdGVkIGZvciAzMCBzZWNvbmRzLiBTb21ldGhpbmcgaXMgY2xlYXJseSB3cm9uZy5cclxuXHRcdFx0XHRhbGVydChcIlRpbWUgb3V0ISBJcyB5b3VyIEludGVybmV0IGNvbm5lY3Rpb24gdGjDoXQgc2xvdz8hP1wiKTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIENoZWNrIGlmIGFsbCB2aWV3cyBhcmUgbG9hZGVkOlxyXG5cdFx0XHR2YXIgYWxsTG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0Zm9yKHZhciBpIGluIF90aGlzLnRvdGFsVmlld3MpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZighX3RoaXMudG90YWxWaWV3c1tpXS5sb2FkZWQpIHsgYWxsTG9hZGVkID0gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZihhbGxMb2FkZWQpIHtcclxuXHRcdFx0XHQvLyBBbGwgdmlld3MgYXJlIGxvYWRlZC5cclxuXHRcdFx0XHR2YXIgbmV3Vmlld3MgPSBbXTtcclxuXHRcdFx0XHRmb3IodmFyIGkyIGluIF90aGlzLnRvdGFsVmlld3MpIHtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50U2x1ZyA9IF90aGlzLnRvdGFsVmlld3NbaTJdLnNsdWc7XHJcblx0XHRcdFx0XHRmb3IodmFyIGogaW4gX3RoaXMudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0aWYoX3RoaXMudmlld3Nbal0uc2x1ZyA9PSBjdXJyZW50U2x1Zykge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1ZpZXdzLnB1c2goX3RoaXMudmlld3Nbal0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF90aGlzLnZpZXdzID0gbmV3Vmlld3M7XHJcblxyXG5cdFx0XHRcdC8vIENsZWFyIGludGVydmFsOlxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcblxyXG5cdFx0XHRcdC8vIEJ1aWxkIHRoZSBwYWdlcjpcclxuLy9cdFx0XHRcdFx0XHRcdF90aGlzLmJ1aWxkUGFnZXIoKTtcclxuXHJcblx0XHRcdFx0Ly8gU3RhcnQgdGhlIGFwcDpcclxuXHRcdFx0XHRfdGhpcy5zdGFydCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAyNTApO1xyXG5cdH07XHJcblxyXG5cdC8vIFN0YXJ0IGZ1bmN0aW9uOlxyXG5cdHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpXHJcblx0e1xyXG5cdFx0Ly8gR2V0IHRoZSByaWdodCB2aWV3OlxyXG5cdFx0LypcdFx0XHRcdFx0aWYod2luZG93LmxvY2F0aW9uLmhhc2ggIT0gXCJcIikge1xyXG5cdFx0IHZhciBjdXJyZW50SGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG5cdFx0IGZvcih2YXIgaSBpbiBfdGhpcy52aWV3cykge1xyXG5cdFx0IGlmKF90aGlzLnZpZXdzW2ldLnNsdWcgPT0gY3VycmVudEhhc2gpIHtcclxuXHRcdCBfdGhpcy5jdXJyZW50VmlldyA9IGk7XHJcblx0XHQgfVxyXG5cdFx0IH1cclxuXHRcdCB9IGVsc2UgeyovXHJcblx0XHRfdGhpcy5jdXJyZW50VmlldyA9IF90aGlzLnZpZXdzLmxlbmd0aCAtIDE7XHJcbi8vXHRcdFx0XHRcdH1cclxuXHRcdF90aGlzLnBsYXlWaWV3KF90aGlzLmN1cnJlbnRWaWV3KTtcclxuXHRcdC8vIFNldHVwIHRoZSBsb29wOlxyXG5cdFx0Ly8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gYU5hbWUoKXtcclxuXHRcdChmdW5jdGlvbiBhTmFtZSgpe1xyXG5cdFx0XHQvLyBQYXNzIG9uIHNvbWUgdmFyaWFibGVzOlxyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycy5tb3VzZVBvc2l0aW9uID0gX3RoaXMubW91c2VQb3NpdGlvbjtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMubW91c2VEb3duID0gX3RoaXMubW91c2VEb3duO1xyXG5cdFx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10udmFycy5jbGljayA9IF90aGlzLmNsaWNrO1xyXG5cdFx0XHRfdGhpcy5jbGljayA9IGZhbHNlO1xyXG5cdFx0XHQvLyBNYWtlIHRoYXQgc3RlcDpcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnN0ZXBGdW5jdGlvbihfdGhpcy5jdHgsIF90aGlzLnZpZXdzW190aGlzLmN1cnJlbnRWaWV3XS52YXJzKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFOYW1lKTtcclxuXHRcdC8vIH0sIDEwMDAgLyBfdGhpcy5mcmFtZVJhdGUpOyAvLyBkZWZhdWx0ID0gNjAgZnBzLlxyXG5cdFx0XHR9KSgpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucGxheVZpZXcgPSBmdW5jdGlvbih2aWV3TnIpXHJcblx0e1xyXG5cdFx0Ly8gVW4taW5pdGlhbGl6ZSB0aGUgY3VycmVudCB2aWV3OlxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0X3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnVuSW5pdEZ1bmN0aW9uKF90aGlzLmN0eCwgX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMpO1xyXG5cdFx0fSBjYXRjaChlKSB7fVxyXG5cdFx0Ly8gR28gZnVydGhlciB3aXRoIHRoZSByZXF1ZXN0ZWQgdmlldyBmcm9tIGhlcmU6XHJcblx0XHRfdGhpcy5jdXJyZW50VmlldyA9IHZpZXdOcjtcclxuXHRcdC8vIFJlbW92ZSB0aGUgY2xhc3Mgb2YgdGhlIGFjdGl2ZSB2aWV3OlxyXG4vL1x0XHRcdFx0XHRpZih0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhLmFjdGl2ZVwiKSkge1xyXG4vL1x0XHRcdFx0XHRcdHRoaXMucGFnZXIucXVlcnlTZWxlY3RvcihcImEuYWN0aXZlXCIpLmNsYXNzTmFtZSA9IFwiXCI7XHJcbi8vXHRcdFx0XHRcdH1cclxuXHRcdC8vIEFuZCBhZGQgaXQgdG8gdGhlIG5ldyB2aWV3IVxyXG4vL1x0XHRcdFx0XHR0aGlzLnBhZ2VyLnF1ZXJ5U2VsZWN0b3IoXCJhW2RhdGEtdmlldz1cIlwiICsgX3RoaXMuY3VycmVudFZpZXcgKyBcIlwiXVwiKS5jbGFzc05hbWUgPSBcImFjdGl2ZVwiXHJcblx0XHQvLyBTZXQgdGhlIGhhc2g6XHJcbi8vXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnNsdWc7XHJcblx0XHQvLyBJbml0aWFsaXplIHRoZSBjdXJyZW50IHZpZXc6XHJcblx0XHRfdGhpcy52aWV3c1tfdGhpcy5jdXJyZW50Vmlld10uaW5pdEZ1bmN0aW9uKF90aGlzLmN0eCwgX3RoaXMudmlld3NbX3RoaXMuY3VycmVudFZpZXddLnZhcnMpO1xyXG5cdH07XHJcblxyXG59O1xyXG5cclxudmFyIFN0ZXBHZW5lcmF0b3IgPSBmdW5jdGlvbihjb21wbGV4aXR5LCBtaW5JbmMsIG1heEluYywgbWluTXVsLCBtYXhNdWwpXHJcbntcclxuXHR0aGlzLnN0ZXBzICAgICAgID0gW107XHJcblx0dGhpcy5pbmNzICAgICAgICA9IFtdO1xyXG5cdHRoaXMubXVsdGlwbGllcnMgPSBbXTtcclxuXHR0aGlzLmNvbXBsZXhpdHkgID0gY29tcGxleGl0eTtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHJcblx0Ly8gRGVmYXVsdHM6XHJcblx0aWYobWluSW5jID09PSBudWxsKSB7IG1pbkluYyA9IDA7IH1cclxuXHRpZihtYXhJbmMgPT09IG51bGwpIHsgbWF4SW5jID0gMC4xOyB9XHJcblx0aWYobWluTXVsID09PSBudWxsKSB7IG1pbk11bCA9IDAuNzsgfVxyXG5cdGlmKG1heE11bCA9PT0gbnVsbCkgeyBtYXhNdWwgPSAxLjM7IH1cclxuXHJcblx0Ly8gSW5pdGlhbGlzZTpcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb21wbGV4aXR5OyBpKyspXHJcblx0e1xyXG5cdFx0dGhpcy5zdGVwcy5wdXNoKE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJKTtcclxuXHRcdHRoaXMuaW5jcy5wdXNoKG1pbkluYyArIE1hdGgucmFuZG9tKCkgKiAobWF4SW5jIC0gbWluSW5jKSk7XHJcblx0XHR0aGlzLm11bHRpcGxpZXJzLnB1c2gobWluTXVsICsgTWF0aC5yYW5kb20oKSAqIChtYXhNdWwgLSBtaW5NdWwpKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc3RlcCA9IGZ1bmN0aW9uKClcclxuXHR7XHJcblx0XHQvLyBJbmNyZWFzZSB0aGUgY291bnRlcnM6XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3RoaXMuY29tcGxleGl0eTsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRfdGhpcy5zdGVwc1tpXSArPSBfdGhpcy5pbmNzW2ldO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIFN0ZXAgWFktZnVuY3Rpb246XHJcblx0dGhpcy5nZXRYWSA9IGZ1bmN0aW9uKG9mZnNldCwgdywgaClcclxuXHR7XHJcblx0XHRpZihvZmZzZXQgPT09IG51bGwpIHsgb2Zmc2V0ID0gMDsgfVxyXG5cclxuXHRcdHZhciB4VmFsdWUgPSAwO1xyXG5cdFx0dmFyIHlWYWx1ZSA9IDA7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlIFhZOlxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IF90aGlzLmNvbXBsZXhpdHk7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0eFZhbHVlICs9IE1hdGguc2luKF90aGlzLnN0ZXBzW2ldICsgKF90aGlzLmluY3NbaV0gKiBvZmZzZXQpKSAqIHc7XHJcblx0XHRcdHlWYWx1ZSArPSBNYXRoLmNvcygoX3RoaXMuc3RlcHNbaV0gKyAoX3RoaXMuaW5jc1tpXSAqIG9mZnNldCkpICogX3RoaXMubXVsdGlwbGllcnNbaV0pICogaDtcclxuXHRcdH1cclxuXHRcdC8vIFJldHVybiBpdDpcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHg6IHhWYWx1ZSxcclxuXHRcdFx0eTogeVZhbHVlXHJcblx0XHR9O1xyXG5cdH07XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHBnID0gbmV3IFBseWdybmQoKTtcclxucGcudmlld3MucHVzaCh7XHJcblx0bmFtZSAgICAgICAgICAgIDogXCJEb3RzIDJcIixcclxuXHRzbHVnICAgICAgICAgICAgOiBcImRvdHMtMlwiLFxyXG5cdC8vIFZhcmlhYmxlcyB1c2VkIGJ5IHRoaXMgdmlldzpcclxuXHR2YXJzICAgICAgICAgICAgOiB7XHJcblx0XHRzdGVwczogbnVsbCxcclxuXHRcdGN1cnJlbnRYOiAwLFxyXG5cdFx0Y3VycmVudFk6IDBcclxuXHR9LFxyXG5cdC8vIEluaXRpYWxpc2F0aW9uOlxyXG5cdGluaXRGdW5jdGlvbiAgICA6IGZ1bmN0aW9uKGN0eCwgdmFycyl7XHJcblx0XHR2YXJzLnN0ZXBzID0gbmV3IFN0ZXBHZW5lcmF0b3IoNCwgMCwgMC4wMiwgMC43LCAxLjMpO1xyXG5cdFx0dmFycy5wcmV2RGlzdGFuY2VzID0ge307XHJcblx0fSxcclxuXHQvLyBVbi1pbml0aWFsaXNhdGlvbjpcclxuXHR1bkluaXRGdW5jdGlvbiAgOiBmdW5jdGlvbihjdHgsIHZhcnMpe30sXHJcblx0Ly8gU3RlcHBpbmcgZnVuY3Rpb246XHJcblx0c3RlcEZ1bmN0aW9uICAgIDogZnVuY3Rpb24oY3R4LCB2YXJzKXtcclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LndpZHRoLCBjdHguaGVpZ2h0KTtcclxuXHRcdHZhciBzdGVwU2l6ZSA9IGN0eC53aWR0aCAvIDMwO1xyXG5cdFx0dmFyIHN0ZXBzWCA9IGN0eC53aWR0aCAvIHN0ZXBTaXplO1xyXG5cdFx0dmFyIHN0ZXBzWSA9IGN0eC5oZWlnaHQgLyBzdGVwU2l6ZTtcclxuXHJcbi8vXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcIiMwMGRkZmZcIjtcclxuXHRcdGN0eC5maWxsU3R5bGUgPSBcIiM4YzI0M2VcIjtcclxuXHJcblx0XHQvLyBBZGRzIGEgc2ltcGxlIGVhc2UgdG8gdGhlIG1vdXNlOlxyXG5cdFx0dmFycy5jdXJyZW50WCArPSAodmFycy5tb3VzZVBvc2l0aW9uLnggLSB2YXJzLmN1cnJlbnRYKSAvIDIwO1xyXG5cdFx0dmFycy5jdXJyZW50WSArPSAodmFycy5tb3VzZVBvc2l0aW9uLnkgLSB2YXJzLmN1cnJlbnRZKSAvIDIwO1xyXG5cclxuXHRcdHZhcnMuc3RlcHMuc3RlcCgpO1xyXG5cclxuXHRcdHZhciBzaXplID0gY3R4LndpZHRoLzEuNTtcclxuXHJcblx0XHRmb3IodmFyIHkgPSAwOyB5IDwgc3RlcHNZOyB5ICsrKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IodmFyIHggPSAwOyB4IDwgc3RlcHNYOyB4ICsrKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGNYID0gKHklMiAqIHN0ZXBTaXplIC8gMikgKyAoeCAqIHN0ZXBTaXplKTtcclxuXHRcdFx0XHR2YXIgY1kgPSB5ICogc3RlcFNpemU7XHJcblxyXG5cdFx0XHRcdC8vIG91dHNpZGU6XHJcblx0XHRcdFx0dmFyIHJhZCA9IE1hdGguYXRhbjIoY1ggLSB2YXJzLmN1cnJlbnRYLCBjWSAtIHZhcnMuY3VycmVudFkpO1xyXG5cclxuXHRcdFx0XHQvLyBkaXN0YW5jZTpcclxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXHJcblx0XHRcdFx0XHRNYXRoLnBvdyh2YXJzLmN1cnJlbnRYIC0gY1gsIDIpICsgTWF0aC5wb3codmFycy5jdXJyZW50WSAtIGNZLCAyKVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHZhciBvZmZzZXQgPSBNYXRoLm1heCgwLCAoc2l6ZS8yKSAtIGRpc3RhbmNlKTtcclxuXHRcdFx0XHR2YXIgcCA9IG9mZnNldC9zaXplO1xyXG5cdFx0XHRcdHAqPTEtcDtcclxuXHRcdFx0XHRvZmZzZXQgPSAoc2l6ZS8yKSAqIHA7XHJcblxyXG5cdFx0XHRcdHZhciBzdGVwWFkgPSB2YXJzLnN0ZXBzLmdldFhZKCh5KnN0ZXBzWCkrKHgqMyksIG9mZnNldCwgb2Zmc2V0KTtcclxuXHJcblx0XHRcdFx0dmFyIGRYID0gc3RlcFhZLnggKyBjWCArIE1hdGguc2luKHJhZCkgKiAob2Zmc2V0KTtcclxuXHRcdFx0XHR2YXIgZFkgPSBzdGVwWFkueSArIGNZICsgTWF0aC5jb3MocmFkKSAqIChvZmZzZXQpO1xyXG5cdFx0XHRcdC8vIHZhciBkWCA9IGNYO1xyXG5cdFx0XHRcdC8vIHZhciBkWSA9IGNZICsgTWF0aC5jb3MocmFkKSAqIChvZmZzZXQpO1xyXG5cclxuXHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdFx0Y3R4LmRyYXdDaXJjbGUoZFgsIGRZLCBkaXN0YW5jZS84MCk7XHJcblx0XHRcdFx0Y3R4LmZpbGwoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5wZy5hZGRWaWV3KCk7XHJcbi8vIHBnLmxvYWQoKTtcclxuIiwiLyoqXHJcbiAgKiAyMDE2LTIwMTcgKEMpIEFudG9uaW8gUmVkb25kbyAvIGFudG9uaW9yZWRvbmRvLmNvbVxyXG4gICpcclxuICAqIFwib1wiIGlzIGEgbmFuby1saWJyYXJ5IHdoaWNoIGNvbnRhaW5zIGEgYnVuY2ggb2YgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aCBiYXNpYyBET00gdGFza3MgYnV0IHdpdGggYSBzaG9ydGVyIG5hbWUuXHJcbiAgKiBJdCBhbHNvIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGggY29va2llcywgYW5kIENTUyB0cmFuc2Zvcm1zIHN1cHBvcnQgY2hlY2tpbmcuXHJcbiAgKiBNYWlubHkgdXNlZCBvbiBteSBwZXJzb25hbCBwcm9qZWN0cyBidXQgb3BlbiB0byBhbnlvbmUuXHJcbiAgKi9cclxuXHJcbihmdW5jdGlvbihvKSB7XHJcblx0XHJcblx0by5naSA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdH07XHJcblx0XHJcblx0by5nYyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcclxuXHR9O1xyXG5cdFxyXG5cdG8uZ2NhID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSkpO1xyXG5cdH07XHJcblx0XHJcblx0by5xcyA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcblx0fTtcclxuXHRcclxuXHRvLnFzYSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcblx0XHRyZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcblx0fTtcclxuXHRcclxuXHRvLmFlID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHR9O1xyXG5cdFxyXG5cdG8udG8gPSBmdW5jdGlvbihjYWxsYmFjaywgdGltZSkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lKTtcclxuXHR9O1xyXG5cdFxyXG5cdG8uc2kgPSBmdW5jdGlvbihjYWxsYmFjaywgdGltZSkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChjYWxsYmFjaywgdGltZSk7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRvLmdldFJhbmRvbUludCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG1pbiA9IC01MCwgbWF4ID0gNTA7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdG8uY2FsY1RvdGFsQ2xpZW50SGVpZ2h0ID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdHZhciB0b3RhbCA9IDAsXHJcblx0XHRcdGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChvLnFzYShzZWxlY3RvcikpO1xyXG5cdFx0XHRcclxuXHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR0b3RhbCArPSBlLmNsaWVudEhlaWdodDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0b3RhbCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0b3RhbDtcclxuXHR9O1xyXG5cdFxyXG5cdG8uY2FsY1JlbGF0aXZlUG9zaXRpb25zID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdHZhciBwb3NpdGlvbnMgPSBbXSxcclxuXHRcdFx0ZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKG8ucXNhKHNlbGVjdG9yKSk7XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdHBvc2l0aW9ucy5wdXNoKGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcG9zaXRpb25zO1xyXG5cdH07XHJcblx0XHJcblx0by5jYWxjQWJzb2x1dGVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhcmVudFNlbGVjdG9yLCBjaGlsZFNlbGVjdG9yKSB7XHJcblx0XHR2YXIgcGFyZW50ID0gby5xcyhwYXJlbnRTZWxlY3Rvcik7XHJcblx0XHR2YXIgY2hpbGQgPSBvLnFzKGNoaWxkU2VsZWN0b3IpO1xyXG5cdFx0XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0dmFyIG9mZnNldCA9IHtcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0dG9wOiAwXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR3aGlsZSAoY2hpbGQgIT09IHBhcmVudCAmJiBjaGlsZCkge1xyXG5cdFx0XHRvZmZzZXQubGVmdCArPSBjaGlsZC5vZmZzZXRMZWZ0O1xyXG5cdFx0XHRvZmZzZXQudG9wICs9IGNoaWxkLm9mZnNldFRvcDtcclxuXHRcdFx0Y2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBvZmZzZXQ7XHJcblx0fTtcclxuXHRcclxuXHRvLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIFwidHJhbnNmb3JtXCI7XHJcblx0XHRlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcIndlYmtpdFRyYW5zZm9ybVwiO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0dmFyIGVsZW1lbnRzVG9Mb2FkID0gW10sXHJcblx0XHRjYWxsYmFja3MgPSBbXTtcclxuXHRcdFxyXG5cdHZhciBydW5DYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBhbGxMb2FkZWQgPSBlbGVtZW50c1RvTG9hZC5ldmVyeShmdW5jdGlvbihpKSB7XHJcblx0XHRcdHJldHVybiBpLmxvYWRlZDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRpZiAoYWxsTG9hZGVkKSB7XHJcblx0XHRcdGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0XHRpKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0by5ub3RpZnlXaGVuTG9hZGVkID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdHZhciBlbGVtZW50VG9Mb2FkID0ge1xyXG5cdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXHJcblx0XHRcdGxvYWRlZDogZmFsc2UsXHJcblx0XHRcdGdldCBzZXRBc0xvYWRlZCgpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XHJcblx0XHRcdFx0cnVuQ2FsbGJhY2tzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gQ2hyb21lIDUzIHdvcmtzLiBGaXJlZm94IDQ5IGFuZCBFZGdlIDE0IGRvblwidFxyXG5cdFx0XHQvL3NldEFzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly9cdGVsZW1lbnRUb0xvYWQubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0Ly9cdHJ1bkNhbGxiYWNrcygpO1xyXG5cdFx0XHQvL1x0Y29uc29sZS5sb2coXCJiYmJcIik7XHJcblx0XHRcdC8vfVxyXG5cdFx0XHQvLyBEb2VzblwidCB3b3JrIG9uIGJyb3dzZXJzXHJcblx0XHRcdC8vc2V0QXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvL1x0dGhpcy5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHQvL1x0cnVuQ2FsbGJhY2tzKCk7XHJcblx0XHRcdC8vXHRjb25zb2xlLmxvZyhcImNjY1wiKTtcclxuXHRcdFx0Ly99XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR2YXIgZWxlbWVudCA9IG8ucXMoc2VsZWN0b3IpO1xyXG5cdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0ZWxlbWVudHNUb0xvYWQucHVzaChlbGVtZW50VG9Mb2FkKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3Nzg3MS9jaGVjay1pZi1hbi1pbWFnZS1pcy1sb2FkZWQtbm8tZXJyb3JzLWluLWphdmFzY3JpcHRcclxuXHRcdFx0aWYgKGVsZW1lbnQuY29tcGxldGUgJiYgZWxlbWVudC5uYXR1cmFsSGVpZ2h0ICE9PSAwKSB7XHJcblx0XHRcdFx0Lypqc2hpbnQgLVcwMzAgKi9cclxuXHRcdFx0XHRlbGVtZW50VG9Mb2FkLnNldEFzTG9hZGVkO1xyXG5cdFx0XHRcdC8qanNoaW50ICtXMDMwICovXHJcblx0XHRcdH0gZWxzZSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGVsZW1lbnRUb0xvYWQuc2V0QXNMb2FkZWQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gZWxlbWVudDtcclxuXHR9O1xyXG5cdFxyXG5cdG8ucnVuV2hlbkFsbExvYWRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcblx0XHRydW5DYWxsYmFja3MoKTtcclxuXHR9O1xyXG5cdFxyXG5cdG8ucmVzZXRFbGVtZW50c1RvTG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0ZWxlbWVudHNUb0xvYWQgPSBbXTtcclxuXHRcdGNhbGxiYWNrcyA9IFtdO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTIxOTU4Mi9ob3ctdG8tZGV0ZWN0LW15LWJyb3dzZXItdmVyc2lvbi1hbmQtb3BlcmF0aW5nLXN5c3RlbS11c2luZy1qYXZhc2NyaXB0XHJcblx0by5nZXRPUyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG9zO1xyXG5cdFx0dmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0XHRcclxuXHRcdGlmICh1YS5pbmRleE9mKFwiV2luXCIpICE9IC0xKVx0XHRvcyA9IFwiV2luZG93c1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJNYWNcIikgIT0gLTEpXHRcdG9zID0gXCJtYWNPU1wiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJMaW51eFwiKSAhPSAtMSlcdFx0b3MgPSBcIkxpbnV4XCI7XHJcblx0XHRpZiAodWEuaW5kZXhPZihcIkFuZHJvaWRcIikgIT0gLTEpXHRvcyA9IFwiQW5kcm9pZFwiO1xyXG5cdFx0aWYgKHVhLmluZGV4T2YoXCJsaWtlIE1hY1wiKSAhPSAtMSlcdG9zID0gXCJpT1NcIjtcclxuXHJcblx0XHRyZXR1cm4gb3M7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRvLmdldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCIsXHJcblx0XHRcdFx0Y2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG5cdFx0Zm9yICh2YXIgaT0wOyBpIDwgY2EubGVuZ3RoO2krKykge1xyXG5cdFx0XHR2YXIgYyA9IGNhW2ldO1xyXG5cdFx0XHR3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpXHJcblx0XHRcdFx0YyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xyXG5cdFx0XHRpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApXHJcblx0XHRcdFx0cmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fTtcclxuXHRcclxuXHRvLnNldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcblx0XHR2YXIgZXhwaXJlcztcclxuXHRcdGlmIChkYXlzKSB7XHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG5cdFx0XHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0XHR9IGVsc2UgZXhwaXJlcyA9IFwiXCI7XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0fTtcclxuXHRcclxuXHRvLnJlbW92ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdHRoaXMuc2V0Q29va2llKG5hbWUsXCJcIiwtMSk7XHJcblx0fTtcclxuXHRcclxufSh3aW5kb3cubyA9IHdpbmRvdy5vIHx8IHt9KSk7XHJcbiIsIlxyXG5mdW5jdGlvbiBoaWRlSW50cm8odHlwZSkge1xyXG5cdHZhciBtb2RpZmllciA9IFwib3V0XCIsXHJcblx0XHR0aW1lID0gNDAwMDtcclxuXHRcdFxyXG5cdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0Y2FzZSAyOiBtb2RpZmllciA9IFwib3V0MlwiOyB0aW1lID0gMTAwMDtcclxuXHR9XHJcblx0XHJcblx0dmFyIGludHJvID0gby5nYyhcImludHJvXCIpLFxyXG5cdFx0aW50cm9EYXJrZW5lciA9IG8uZ2MoXCJpbnRyby1kYXJrZW5lclwiKTtcclxuXHRcdFxyXG5cdGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyby0tXCIgKyBtb2RpZmllcik7XHJcblx0aW50cm8uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW50cm9cIikpXHJcblx0XHRcdGludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9KTtcclxuXHRcclxuXHRpbnRyb0RhcmtlbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnRyby1kYXJrZW5lci0tXCIgKyBtb2RpZmllcik7XHJcblx0aW50cm9EYXJrZW5lci5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnRyby1kYXJrZW5lclwiKSAmJiB0eXBlID09PSAyKVxyXG5cdFx0XHRpbnRyb0RhcmtlbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGVsc2Ugby50byhmdW5jdGlvbigpIHsgaW50cm9EYXJrZW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IH0sIDI1MDApO1xyXG5cdH0pO1xyXG5cdFxyXG5cdG8uZ2MoXCJtYWluLWJnXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWJnLS1pblwiKTtcclxuXHRcclxuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoID49IDgxMCkge1xyXG5cdFx0cGcubG9hZCgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0SW50cm8oKSB7XHJcblx0by5nYyhcInNjcm9sbC1kb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi0tYm90dG9tXCIpO1xyXG5cdG8uZ2MoXCJzY3JvbGwtZG93bl9faW5uZXJcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duX19pbm5lci0tb3V0XCIpO1xyXG5cdFxyXG5cdHZhciB2aWV3UG9ydFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLFxyXG5cdFx0d2hlZWxMZXZlbCA9IDAsXHJcblx0XHR3aGVlbExldmVsRm9ybWVyID0gMCxcclxuXHRcdHBocmFzZXMgPSBvLmdjYShcInBocmFzZXNfX3BocmFzZVwiKSxcclxuXHRcdHBocmFzZXNDb3VudCA9IHBocmFzZXMubGVuZ3RoLFxyXG5cdFx0YnViYmxlcyA9IG8uZ2NhKFwiYnViYmxlc19fbGF5ZXJcIiksXHJcblx0XHRzbGlkZXMgPSBvLnFzYShcIi5zbGlkZXM+LnNsaWRlXCIpLFxyXG5cdFx0c2xpZGVzQ291bnQgPSBzbGlkZXMubGVuZ3RoLFxyXG5cdFx0dmlzaWJsZVBocmFzZXMgPSBbXSxcclxuXHRcdHZpc2libGVCdWJibGVzID0gW10sXHJcblx0XHRvblRyYW5zaXRpb24gPSBmYWxzZSxcclxuXHRcdHlTdGFydCxcclxuXHRcdHlFbmQsXHJcblx0XHR0cmFuc2Zvcm0gPSBvLmNoZWNrVHJhbnNmb3Jtc1N1cHBvcnRlZCgpLFxyXG5cdFx0bW91c2VNb3ZlTGlzdGVuZXIsXHJcblx0XHRtb3VzZVdoZWVsTGlzdGVuZXIsXHJcblx0XHR0b3VjaFN0YXJ0TGlzdGVuZXIsXHJcblx0XHR0b3VjaEVuZExpc3RlbmVyLFxyXG5cdFx0a2V5RG93bkxpc3RlbmVyLFxyXG5cdFx0dG9Db250cm9sbGVkUmFuZG9tTW92ZW1lbnQsXHJcblx0XHR0b0hpbnRzO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdC8vIE9uIGRlc2t0b3AgdmVyc2lvbiBpdCBtb3ZlcyB0aGUgcGhyYXNlcyBhbmQgYnViYmxlcyBvbiB0aGUgM2Qgc3BhY2UgZGVwZW5kaW5nIG9uIHRoZSBjdXJzb3IgcG9zaXRpb25cclxuXHRpZiAodmlld1BvcnRXaWR0aCA8PSA4MTApIHtcclxuXHRcdHZhciBwaHJhc2VzQ29udGFpbmVyID0gby5nYyhcInBocmFzZXNcIiksIFxyXG5cdFx0XHRidWJibGVzQ29udGFpbmVyID0gby5nYyhcImJ1YmJsZXNcIik7XHJcblx0XHRvLmFlKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiZGVsdGFaOiBcIiArIGUuZGVsdGFaKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcImRlbHRhTW9kZTogXCIgKyBlLmRlbHRhTW9kZSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRYOiBcIiArIGUuY2xpZW50WCk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJjbGllbnRZOiBcIiArIGUuY2xpZW50WSk7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgK1wiZGVnKVwiKTtcclxuXHRcdFx0Ly8gcGhyYXNlc0NvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1dID0gXCJyb3RhdGVYKFwiICsgLSgwLjAyKmUuY2xpZW50WS0xMCkgKyBcImRlZykgcm90YXRlWShcIiArICgwLjAyKmUuY2xpZW50WC0yNSkgKyBcImRlZykgdHJhbnNsYXRlM2QoXCIgKyAoLTAuMDUqZS5jbGllbnRYKzEwMCkgKyBcInB4LCAwLCAwKVwiO1xyXG5cdFx0XHRwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBcInJvdGF0ZVgoXCIgKyAtKDAuMDIqZS5jbGllbnRZKSArIFwiZGVnKSByb3RhdGVZKFwiICsgKDAuMDIqZS5jbGllbnRYKSArIFwiZGVnKSB0cmFuc2xhdGUzZChcIiArICgtMC4wNSplLmNsaWVudFgrMTAwKSArIFwicHgsIDAsIDApXCI7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEdWUgdG8gYSB3ZWlyZCBiZWhhdmlvdXIgdGhlIGJlbG93IGxpbmUgc3BvaWxzIHRoZSBidWJibGVzIHpvb20gZWZmZWN0IG9mIENocm9tZS5cclxuXHRcdFx0Ly8gV2l0aCB0aGlzIGNvbmRpdGlvbmFsIGlmIHdlIGF2b2lkIGV4ZWN1dGlvbiBvbiBDaHJvbWVcclxuXHRcdFx0aWYgKCEod2luZG93LmNocm9tZSAmJiB3aW5kb3cuY2hyb21lLndlYnN0b3JlKSlcclxuXHRcdFx0XHRidWJibGVzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV0gPSBwaHJhc2VzQ29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybV07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gU2hvd3MgYSB0ZXh0IGhpbnQgaWYgdGhlIGludHJvIGRvZXNuJ3Qgc3RhcnQgc2Nyb2xsaW5nIGRvd24gaW4gMyBzZWNvbmRzXHJcblx0dG9IaW50cyA9IG8udG8oZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAod2hlZWxMZXZlbCA9PT0gMClcclxuXHRcdFx0aWYgKHZpZXdQb3J0V2lkdGggPj0gODEwICYmIG8uZ2V0T1MoKSAhPT0gXCJBbmRyb2lkXCIgJiYgby5nZXRPUygpICE9PSBcImlPU1wiKVxyXG5cdFx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93bi1oaW50XCIpLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtZG93bi1oaW50LS1pblwiKTtcclxuXHRcdFx0ZWxzZSBvLmdjKFwic3dpcGUtdXAtaGludFwiKS5jbGFzc0xpc3QuYWRkKFwic3dpcGUtdXAtaGludC0taW5cIik7XHJcblx0fSwgMzAwMCk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgcGhyYXNlcyBhbmQgYnViYmxlcyBhY2NvcmRpbmdseVxyXG5cdGZ1bmN0aW9uIG1vdmVQaHJhc2VzKCkge1xyXG5cdFx0aWYgKHdoZWVsTGV2ZWwgPT09IDEpIHtcclxuXHRcdFx0by5nYyhcInNjcm9sbC1kb3duLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1kb3duLWhpbnQtLW91dFwiKTtcclxuXHRcdFx0by5nYyhcInN3aXBlLXVwLWhpbnRcIikuY2xhc3NMaXN0LmFkZChcInN3aXBlLXVwLWhpbnQtLW91dFwiKTtcclxuXHRcdH0gXHJcblx0XHRcclxuXHRcdGlmICh3aGVlbExldmVsID09PSBwaHJhc2VzQ291bnQpIHtcclxuXHRcdFx0by50byhmdW5jdGlvbigpIHsgby5nYyhcImVudGVyLWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwiZW50ZXItYnV0dG9uLS1pblwiKTsgfSwgMTAwMCk7XHJcblx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWRvd24tLW91dFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG8uZ2MoXCJlbnRlci1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImVudGVyLWJ1dHRvbi0taW5cIik7XHJcblx0XHRcdG8uZ2MoXCJzY3JvbGwtZG93blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsLWRvd24tLW91dFwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAod2hlZWxMZXZlbCA+IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuc3BsaWNlKDAsIDAsIChwaHJhc2VzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXMuc3BsaWNlKDAsIDAsIChidWJibGVzW3doZWVsTGV2ZWwtMV0pKTtcclxuXHRcdFx0dmlzaWJsZVBocmFzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKFwicGhyYXNlc19fcGhyYXNlLS1wb3NcIiArIChpICsgMSkpO1xyXG5cdFx0XHRcdHZpc2libGVCdWJibGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJidWJibGVzX19sYXllci0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHdoZWVsTGV2ZWwgPCB3aGVlbExldmVsRm9ybWVyKSB7XHJcblx0XHRcdHZpc2libGVQaHJhc2VzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInBocmFzZXNfX3BocmFzZS0tcG9zXCIgKyAoaSArIDEpKTtcclxuXHRcdFx0XHR2aXNpYmxlQnViYmxlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYnViYmxlc19fbGF5ZXItLXBvc1wiICsgKGkgKyAxKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR2aXNpYmxlUGhyYXNlcy5zcGxpY2UoMCwgMSk7XHJcblx0XHRcdHZpc2libGVCdWJibGVzLnNwbGljZSgwLCAxKTtcclxuXHRcdH1cclxuXHJcblx0XHR3aGVlbExldmVsRm9ybWVyID0gd2hlZWxMZXZlbDtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8gTW92ZXMgc2xpZGVzIGFjY29yZGluZ2x5XHJcblx0ZnVuY3Rpb24gbW92ZVNsaWRlcygpIHtcclxuXHRcdGlmICh3aGVlbExldmVsID4gd2hlZWxMZXZlbEZvcm1lcikge1xyXG5cdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnQtMV0uY2xhc3NMaXN0LmFkZChcInNsaWRlLS1pblwiKTtcclxuXHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS10ZXh0LS1pblwiKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwtcGhyYXNlc0NvdW50ID4gMSAmJiAhc2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50LTFdLmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlLS1yZW1haW5cIikpIHtcclxuXHRcdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnQtMl0uY2xhc3NMaXN0LmFkZChcInNsaWRlLS1vdXRcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAod2hlZWxMZXZlbCA8IHdoZWVsTGV2ZWxGb3JtZXIpIHtcclxuXHRcdFx0c2xpZGVzW3doZWVsTGV2ZWwtcGhyYXNlc0NvdW50XS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtLWluXCIpO1xyXG5cdFx0XHRzbGlkZXNbd2hlZWxMZXZlbC1waHJhc2VzQ291bnRdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS10ZXh0LS1pblwiKTtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwtcGhyYXNlc0NvdW50ID4gMCkge1xyXG5cdFx0XHRcdHNsaWRlc1t3aGVlbExldmVsLXBocmFzZXNDb3VudC0xXS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtLW91dFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHdoZWVsTGV2ZWxGb3JtZXIgPSB3aGVlbExldmVsO1xyXG5cdH1cclxuXHRcclxuXHQvLyBDb3VudHMgd2hlZWwgc2Nyb2xsIG1vdmVtZW50c1xyXG5cdG8uYWUoXCJ3aGVlbFwiLCBtb3VzZVdoZWVsTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHJcblx0XHRpZiAob25UcmFuc2l0aW9uICYmICFlLmRldGFpbC5idXR0b25FbnRlcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHRvblRyYW5zaXRpb24gPSB0cnVlO1xyXG5cdFx0XHJcblx0XHRpZiAoKGUuZGVsdGFZID4gMCB8fCBlLmRldGFpbC5kZWx0YVkgPiAwKSAmJiB3aGVlbExldmVsIDwgKHBocmFzZXNDb3VudCArIHNsaWRlc0NvdW50KSkge1xyXG5cdFx0XHRpZiAod2hlZWxMZXZlbCA9PT0gcGhyYXNlc0NvdW50ICYmICFvLmdjKFwibWFpbi1iZ1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJtYWluLWJnLS1pblwiKSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHJcblx0XHRcdCsrd2hlZWxMZXZlbDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh3aGVlbExldmVsIDw9IHBocmFzZXNDb3VudClcclxuXHRcdFx0XHRtb3ZlUGhyYXNlcygpO1xyXG5cdFx0XHRlbHNlIG1vdmVTbGlkZXMoKTtcclxuXHRcdH0gZWxzZSBpZiAoKGUuZGVsdGFZIDwgMCB8fCBlLmRldGFpbC5kZWx0YVkgPCAwICkgJiYgd2hlZWxMZXZlbCA+IDApIHtcclxuXHRcdFx0aWYgKHdoZWVsTGV2ZWwgPT09IHBocmFzZXNDb3VudCAmJiBvLmdjKFwibWFpbi1iZ1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJtYWluLWJnLS1pblwiKSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHJcblx0XHRcdC0td2hlZWxMZXZlbDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh3aGVlbExldmVsIDwgcGhyYXNlc0NvdW50KVxyXG5cdFx0XHRcdG1vdmVQaHJhc2VzKCk7XHJcblx0XHRcdGVsc2UgbW92ZVNsaWRlcygpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRvLnRvKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRvblRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHRcdH0sIDYwMCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMjY0MDcyL2RldGVjdC1hLWZpbmdlci1zd2lwZS10aHJvdWdoLWphdmFzY3JpcHQtb24tdGhlLWlwaG9uZS1hbmQtYW5kcm9pZFxyXG5cdG8uYWUoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdHlTdGFydCA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cdH0pO1xyXG5cdFxyXG5cdG8uYWUoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZExpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0eUVuZCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHRcdGlmICh5RW5kIC0geVN0YXJ0IDwgLTYwKVxyXG5cdFx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IDEgfX0pKTtcclxuXHRcdGVsc2UgaWYgKHlFbmQgLSB5U3RhcnQgPiA2MClcclxuXHRcdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwid2hlZWxcIiwgeyBkZXRhaWw6IHsgZGVsdGFZOiAtMSB9fSkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIE1vdmVzIHJhbmRvbWx5IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseSB0aGUgYnViYmxlIGxheWVyc1xyXG5cdChmdW5jdGlvbiBjb250cm9sbGVkUmFuZG9tTW92ZW1lbnQoKSB7XHJcblx0XHRmb3IgKHZhciBuPTA7IG48dmlzaWJsZUJ1YmJsZXMubGVuZ3RoOyArK24pIHtcclxuXHRcdFx0Ly92YXIgelRyYW5zID0gL1xcLip0cmFuc2xhdGVaXFwoKC4qKXB4XFwpL2kuZXhlYyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR2XCIpLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKVsxXTtcclxuXHRcdFx0dmlzaWJsZUJ1YmJsZXNbbl0uZmlyc3RDaGlsZC5zdHlsZVt0cmFuc2Zvcm1dID0gXCJ0cmFuc2xhdGUzZChcIiArIG8uZ2V0UmFuZG9tSW50KCkgKyBcInB4LCBcIiArIG8uZ2V0UmFuZG9tSW50KCkgKyBcInB4LCAwKVwiO1xyXG5cdFx0XHR2aXNpYmxlQnViYmxlc1tuXS5maXJzdENoaWxkLnN0eWxlW3RyYW5zZm9ybV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIFwiICsgby5nZXRSYW5kb21JbnQoKSArIFwicHgsIDApXCI7XHJcblx0XHR9XHJcblx0XHR0b0NvbnRyb2xsZWRSYW5kb21Nb3ZlbWVudCA9IG8udG8oY29udHJvbGxlZFJhbmRvbU1vdmVtZW50LCAzMDAwKTtcclxuXHR9KSgpO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdC8vIEhpZGVzIHRoZSBJbnRybyBzY3JlZW5cclxuXHRmdW5jdGlvbiBza2lwSW50cm8oZ2FMYWJlbCkge1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlTGlzdGVuZXIpO1xyXG5cdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBtb3VzZVdoZWVsTGlzdGVuZXIpO1xyXG5cdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnRMaXN0ZW5lcik7XHJcblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRvdWNoRW5kTGlzdGVuZXIpO1xyXG5cdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25MaXN0ZW5lcik7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRvQ29udHJvbGxlZFJhbmRvbU1vdmVtZW50KTtcclxuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodG9IaW50cyk7XHJcblx0XHRcclxuXHRcdGhpZGVJbnRybygpO1xyXG5cdFx0XHJcblx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IDEsIGJ1dHRvbkVudGVyOiB0cnVlIH19KSk7XHJcblx0fVxyXG5cdFxyXG5cdG8uZ2MoXCJlbnRlci1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHsgc2tpcEludHJvKFwiRW50ZXIgYnV0dG9uXCIpOyB9KTtcclxuXHRcclxuXHRvLmFlKFwia2V5ZG93blwiLCBrZXlEb3duTGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG5cdFx0XHRjYXNlIDM5OlxyXG5cdFx0XHRjYXNlIDQwOiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3aGVlbFwiLCB7IGRldGFpbDogeyBkZWx0YVk6IDEgfX0pKTsgYnJlYWs7XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6IHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIndoZWVsXCIsIHsgZGV0YWlsOiB7IGRlbHRhWTogLTEgfX0pKTsgYnJlYWs7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcbn1cclxuIiwiXHJcbldlYkZvbnQubG9hZCh7XHJcblx0Z29vZ2xlOiB7XHJcblx0XHRmYW1pbGllczogW1wiT3BlbiBTYW5zIENvbmRlbnNlZDozMDBcIiwgXCJTb3VyY2UgU2FucyBQcm86NDAwLDkwMFwiLCBcIkJsYWNrIE9wcyBPbmU6NDAwXCIsIFwiQnVuZ2VlIFNoYWRlOjQwMFwiLCBcIkNhdmVhdDo0MDBcIiwgXCJQYWNpZmljb1wiLCBcIk1vbm9mZXR0XCIgXVxyXG5cdH0sXHJcblx0YWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdGluaXRJbnRybygpO1xyXG5cdH0sXHJcblx0aW5hY3RpdmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdH0sXHJcblx0Y2xhc3NlczogZmFsc2UsXHJcblx0dGltZW91dDogODAwMFxyXG59KTtcclxuIl19
