document.addEventListener("DOMContentLoaded",(function(){new SweetScroll({});particlesJS("particles-js",{particles:{number:{value:160,density:{enable:!0,value_area:500}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}),!1),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.SweetScroll=e()}(this,(function(){"use strict";function t(t){return null==t?"":"object"===(void 0===t?"undefined":j(t))||"function"==typeof t?H[Object.prototype.toString.call(t)]||"object":void 0===t?"undefined":j(t)}function e(e){return"number"===t(e)}function n(e){return"string"===t(e)}function i(e){return"function"===t(e)}function o(t){return Array.isArray(t)}function r(t){var n=null==t?null:t.length;return e(n)&&n>=0&&n<=B}function l(e){return!o(e)&&"object"===t(e)}function u(t,e){return t&&t.hasOwnProperty(e)}function a(t,e,n){if(null==t)return t;var i=n||t;if(l(t)){for(var o in t)if(u(t,o)&&!1===e.call(i,t[o],o))break}else if(r(t))for(var a=0;a<t.length&&!1!==e.call(i,t[a],a);a++);return t}function s(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return a(n,(function(e){a(e,(function(e,n){t[n]=e}))})),t}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t)return(null==e?$:e).querySelector(t)}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t)return(null==e?$:e).querySelectorAll(t)}function f(t,e){for(var n=(t.document||t.ownerDocument).querySelectorAll(e),i=n.length;--i>=0&&n.item(i)!==t;);return i>-1}function p(t){return t===$.documentElement||t===$.body}function d(){var t=U.outerWidth,e=U.innerWidth;return t?t/e:1}function v(t,e){var n=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=X[e],o=t instanceof Element?[t]:h(t),r=[],l=$.createElement("div"),u=0;u<o.length;u++){var a=o[u];if(a[i]>0?r.push(a):(l.style.width=a.clientWidth+1+"px",l.style.height=a.clientHeight+1+"px",a.appendChild(l),a[i]=1.5/d(),a[i]>0&&r.push(a),a[i]=0,a.removeChild(l)),!n&&r.length>0)break}return r}(t,e,!1);return n.length>=1?n[0]:null}function g(t){return null!=t&&t===t.window?t:9===t.nodeType&&t.defaultView}function y(t){return D(t.scrollHeight,t.clientHeight,t.offsetHeight)}function S(t){return D(t.scrollWidth,t.clientWidth,t.offsetWidth)}function m(t){return{width:S(t),height:y(t)}}function b(t){return p(t)?{viewport:{width:q(U.innerWidth,$.documentElement.clientWidth),height:U.innerHeight},size:{width:D(S($.body),S($.documentElement)),height:D(y($.body),y($.documentElement))}}:{viewport:{width:t.clientWidth,height:t.clientHeight},size:m(t)}}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=g(t);return n?n[Y[e]]:t[X[e]]}function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"y",i=g(t),o="y"===n;i?i.scrollTo(o?i[Y.x]:e,o?e:i[Y.y]):t[X[n]]=e}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t||t&&!t.getClientRects().length)return{top:0,left:0};var n=t.getBoundingClientRect();if(n.width||n.height){var i={},o=null;if(null==e||p(e))o=t.ownerDocument.documentElement,i.top=U.pageYOffset,i.left=U.pageXOffset;else{var r=(o=e).getBoundingClientRect();i.top=-1*r.top+o.scrollTop,i.left=-1*r.left+o.scrollLeft}return{top:n.top+i.top-o.clientTop,left:n.left+i.left-o.clientLeft}}return n}function O(t,e,n){e.split(",").forEach((function(e){t.addEventListener(e.trim(),n,!1)}))}function _(t,e,n){e.split(",").forEach((function(e){t.removeEventListener(e.trim(),n,!1)}))}function I(t,e,n,i,o){return(e/=o)<1/2.75?i*(7.5625*e*e)+n:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n}function L(t,e,n,i,o){return i-I(0,o-e,0,i,o)+n}var x=Math.cos,E=Math.sin,z=Math.pow,M=Math.abs,A=Math.sqrt,R=Math.asin,T=Math.PI,D=Math.max,q=Math.min,P=Math.round,j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},W=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),B=z(2,53)-1,H={};["Boolean","Number","String","Function","Array","Object"].forEach((function(t){H["[object "+t+"]"]=t.toLowerCase()}));var N=!("undefined"==typeof window||!window.document||!window.document.createElement),F=function(){if(!N)return!1;var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history&&"file:"!==window.location.protocol}(),U=N?window:null,$=N?document:null,X={y:"scrollTop",x:"scrollLeft"},Y={y:"pageYOffset",x:"pageXOffset"},J=Object.freeze({linear:function(t){return t},InQuad:function(t,e,n,i,o){return i*(e/=o)*e+n},OutQuad:function(t,e,n,i,o){return-i*(e/=o)*(e-2)+n},InOutQuad:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},InCubic:function(t,e,n,i,o){return i*(e/=o)*e*e+n},OutCubic:function(t,e,n,i,o){return i*((e=e/o-1)*e*e+1)+n},InOutCubic:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},InQuart:function(t,e,n,i,o){return i*(e/=o)*e*e*e+n},OutQuart:function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n},InOutQuart:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},InQuint:function(t,e,n,i,o){return i*(e/=o)*e*e*e*e+n},OutQuint:function(t,e,n,i,o){return i*((e=e/o-1)*e*e*e*e+1)+n},InOutQuint:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},InSine:function(t,e,n,i,o){return-i*x(e/o*(T/2))+i+n},OutSine:function(t,e,n,i,o){return i*E(e/o*(T/2))+n},InOutSine:function(t,e,n,i,o){return-i/2*(x(T*e/o)-1)+n},InExpo:function(t,e,n,i,o){return 0===e?n:i*z(2,10*(e/o-1))+n},OutExpo:function(t,e,n,i,o){return e===o?n+i:i*(1-z(2,-10*e/o))+n},InOutExpo:function(t,e,n,i,o){return 0===e?n:e===o?n+i:(e/=o/2)<1?i/2*z(2,10*(e-1))+n:i/2*(2-z(2,-10*--e))+n},InCirc:function(t,e,n,i,o){return-i*(A(1-(e/=o)*e)-1)+n},OutCirc:function(t,e,n,i,o){return i*A(1-(e=e/o-1)*e)+n},InOutCirc:function(t,e,n,i,o){return(e/=o/2)<1?-i/2*(A(1-e*e)-1)+n:i/2*(A(1-(e-=2)*e)+1)+n},InElastic:function(t,e,n,i,o){var r=1.70158,l=0,u=i;return 0===e?n:1==(e/=o)?n+i:(l||(l=.3*o),u<M(i)?(u=i,r=l/4):r=l/(2*T)*R(i/u),-u*z(2,10*(e-=1))*E(2*T*(e*o-r)/l)+n)},OutElastic:function(t,e,n,i,o){var r=1.70158,l=0,u=i;return 0===e?n:1==(e/=o)?n+i:(l||(l=.3*o),u<M(i)?(u=i,r=l/4):r=l/(2*T)*R(i/u),u*z(2,-10*e)*E(2*T*(e*o-r)/l)+i+n)},InOutElastic:function(t,e,n,i,o){var r=1.70158,l=0,u=i;return 0===e?n:2==(e/=o/2)?n+i:(l||(l=o*(.3*1.5)),u<M(i)?(u=i,r=l/4):r=l/(2*T)*R(i/u),e<1?u*z(2,10*(e-=1))*E(2*T*(e*o-r)/l)*-.5+n:u*z(2,-10*(e-=1))*E(2*T*(e*o-r)/l)*.5+i+n)},InBack:function(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return i*(e/=o)*e*((r+1)*e-r)+n},OutBack:function(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return i*((e=e/o-1)*e*((r+1)*e+r)+1)+n},InOutBack:function(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1.70158;return(e/=o/2)<1?i/2*(e*e*((1+(r*=1.525))*e-r))+n:i/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+n},OutBounce:I,InBounce:L,InOutBounce:function(t,e,n,i,o){return e<o/2?.5*L(0,2*e,0,i,o)+n:.5*I(0,2*e-o,0,i,o)+.5*i+n}}),V=["ms","moz","webkit"],G=0,K=N?U.requestAnimationFrame:null,Z=N?U.cancelAnimationFrame:null;if(N){for(var tt=0;tt<V.length&&!K;++tt)K=U[V[tt]+"RequestAnimationFrame"],Z=U[V[tt]+"CancelAnimationFrame"]||U[V[tt]+"CancelRequestAnimationFrame"];K||(K=function(t){var e=Date.now(),n=D(0,16-(e-G)),i=setTimeout((function(){t(e+n)}),n);return G=e+n,i}),Z||(Z=function(t){clearTimeout(t)})}var et=function(){function t(e){Q(this,t),this.el=e,this.props={},this.options={},this.progress=!1,this.easing=null,this.startTime=null,this.rafId=null}return W(t,[{key:"run",value:function(t,e,n){var o=this;this.progress||(this.props={x:t,y:e},this.options=n,this.easing=i(n.easing)?n.easing:J[n.easing.replace("ease","")],this.progress=!0,setTimeout((function(){o.startProps=o.calcStartProps(t,e),o.rafId=K((function(t){return o._loop(t)}))}),this.options.delay))}},{key:"stop",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.options.complete;this.startTime=null,this.progress=!1,Z(this.rafId),t&&(w(this.el,this.props.x,"x"),w(this.el,this.props.y,"y")),i(e)&&(e.call(this),this.options.complete=null)}},{key:"_loop",value:function(t){var e=this;if(this.startTime||(this.startTime=t),this.progress){var n=this.el,i=this.props,o=this.options,r=this.startTime,l=this.startProps,u=this.easing,s=o.duration,c=o.step,h={},f=t-r,p=q(1,D(f/s,0));a(i,(function(t,e){var n=l[e],i=t-n;if(0===i)return!0;var o=u(p,s*p,0,1,s);h[e]=P(n+i*o)})),a(h,(function(t,e){w(n,t,e)})),f<=s?(c.call(this,p,h),this.rafId=K((function(t){return e._loop(t)}))):this.stop(!0)}else this.stop(!1)}},{key:"calcStartProps",value:function(t,e){var n={x:k(this.el,"x"),y:k(this.el,"y")};if(this.options.quickMode){var i=b(this.el).viewport,o=i.width,r=i.height;M(n.y-e)>r&&(n.y=n.y>e?e+r:e-r),M(n.x-t)>o&&(n.x=n.x>t?t+o:t-o)}return n}}]),t}(),nt=(N?"onwheel"in $?"wheel":"onmousewheel"in $?"mousewheel":"DOMMouseScroll":"wheel")+", touchstart, touchmove",it=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body, html";Q(this,t),this.isSSR=!N,this.options=s({},t.defaults,e),this.container=this.getContainer(n),null==this.container?(this.header=null,this.tween=null,this.isSSR||(/comp|inter|loaded/.test($.readyState)?this.log('Not found scrollable container. => "'+n+'"'):this.log("Should be initialize later than DOMContentLoaded."))):(this.header=c(this.options.header),this.tween=new et(this.container),this._trigger=null,this._shouldCallCancelScroll=!1,this.bindContainerClick())}return W(t,[{key:"log",value:function(t){this.options.outputLog&&function(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}("[SweetScroll] "+t)}},{key:"getScrollOffset",value:function(t,e){var i=this.container,o=this.header,r=this.parseCoodinate(e.offset),l=this.parseCoodinate(t);if(!l&&n(t))if("#"===t)l={top:0,left:0};else{var u=C(c(t),i);if(!u)return;l=u}return l?(r&&(l.top+=r.top,l.left+=r.left),o&&(l.top=D(0,l.top-m(o).height)),l):null}},{key:"normalizeScrollOffset",value:function(t,e){var n=this.container,i=s({},t),o=b(n),r=o.viewport,l=o.size;return i.top=e.verticalScroll?D(0,q(l.height-r.height,i.top)):k(n,"y"),i.left=e.horizontalScroll?D(0,q(l.width-r.width,i.left)):k(n,"x"),i}},{key:"to",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isSSR){var o=this.container,r=s({},this.options,i),l=this._trigger,u=n(t)&&/^#/.test(t)?t:null;if(this._options=r,this._trigger=null,this._shouldCallCancelScroll=!1,this.stop(),!o)return this.log("Not found container element.");var a=this.getScrollOffset(t,r);if(!a)return this.log("Invalid parameter of distance. => "+t);if(!1===this.hook(r,"beforeScroll",a,l))return void(this._options=null);a=this.normalizeScrollOffset(a,r),this.tween.run(a.left,a.top,{duration:r.duration,delay:r.delay,easing:r.easing,quickMode:r.quickMode,complete:function(){null!=u&&u!==U.location.hash&&e.updateURLHash(u,r.updateURL),e.unbindContainerStop(),e._options=null,e._shouldCallCancelScroll?e.hook(r,"cancelScroll"):e.hook(r,"afterScroll",a,l),e.hook(r,"completeScroll",e._shouldCallCancelScroll)},step:function(t,n){e.hook(r,"stepScroll",t,n)}}),this.bindContainerStop()}}},{key:"toTop",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.to(t,s({},e,{verticalScroll:!0,horizontalScroll:!1}))}},{key:"toLeft",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.to(t,s({},e,{verticalScroll:!1,horizontalScroll:!0}))}},{key:"toElement",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isSSR)if(t instanceof Element){var n=C(t,this.container);this.to(n,s({},e))}else this.log("Invalid parameter.")}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isSSR||(this.container?(this._stopScrollListener&&(this._shouldCallCancelScroll=!0),this.tween.stop(t)):this.log("Not found scrollable container."))}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.container?(this.stop(),this.unbindContainerClick(),this.unbindContainerStop(),this.options=s({},this.options,t),this.header=c(this.options.header),this.bindContainerClick()):this.isSSR||this.log("Not found scrollable container.")}},{key:"destroy",value:function(){this.container?(this.stop(),this.unbindContainerClick(),this.unbindContainerStop(),this.container=null,this.header=null,this.tween=null):this.isSSR||this.log("Not found scrollable container.")}},{key:"beforeScroll",value:function(t,e){return!0}},{key:"cancelScroll",value:function(){}},{key:"afterScroll",value:function(t,e){}},{key:"completeScroll",value:function(t){}},{key:"stepScroll",value:function(t,e){}},{key:"parseCoodinate",value:function(t){var e=this._options?this._options.verticalScroll:this.options.verticalScroll,i={top:0,left:0};if(u(t,"top")||u(t,"left"))i=s(i,t);else if(o(t))2===t.length?(i.top=t[0],i.left=t[1]):(i.top=e?t[0]:0,i.left=e?0:t[0]);else if(function(t){return!o(t)&&t-parseFloat(t)+1>=0}(t))i.top=e?t:0,i.left=e?0:t;else{if(!n(t))return null;var r=function(t){return t.replace(/\s*/g,"")||""}(t);if(/^\d+,\d+$/.test(r))r=r.split(","),i.top=r[0],i.left=r[1];else if(/^(top|left):\d+,?(?:(top|left):\d+)?$/.test(r)){var l=r.match(/top:(\d+)/),a=r.match(/left:(\d+)/);i.top=l?l[1]:0,i.left=a?a[1]:0}else{if(!this.container||!/^(\+|-)=(\d+)$/.test(r))return null;var c=k(this.container,e?"y":"x"),h=r.match(/^(\+|-)=(\d+)$/),f=h[1],p=parseInt(h[2],10);"+"===f?(i.top=e?c+p:0,i.left=e?0:c+p):(i.top=e?c-p:0,i.left=e?0:c-p)}}return i.top=parseInt(i.top,10),i.left=parseInt(i.left,10),i}},{key:"updateURLHash",value:function(t,e){!this.isSSR&&F&&e&&U.history["replace"===e?"replaceState":"pushState"](null,null,t)}},{key:"getContainer",value:function(t){var e=this.options,n=e.verticalScroll,i=e.horizontalScroll,o=null;return this.isSSR||(n&&(o=v(t,"y")),!o&&i&&(o=v(t,"x"))),o}},{key:"bindContainerClick",value:function(){var t=this.container;t&&(this._containerClickListener=this.handleContainerClick.bind(this),O(t,"click",this._containerClickListener))}},{key:"unbindContainerClick",value:function(){var t=this.container;t&&this._containerClickListener&&(_(t,"click",this._containerClickListener),this._containerClickListener=null)}},{key:"bindContainerStop",value:function(){var t=this.container;t&&(this._stopScrollListener=this.handleStopScroll.bind(this),O(t,nt,this._stopScrollListener))}},{key:"unbindContainerStop",value:function(){var t=this.container;t&&this._stopScrollListener&&(_(t,nt,this._stopScrollListener),this._stopScrollListener=null)}},{key:"hook",value:function(t,e){for(var n=t[e],o=arguments.length,r=Array(o>2?o-2:0),l=2;l<o;l++)r[l-2]=arguments[l];if(i(n)){var u=n.apply(this,r);if(void 0===u)return u}return this[e].apply(this,r)}},{key:"handleStopScroll",value:function(t){(this._options?this._options.stopScroll:this.options.stopScroll)?this.stop():t.preventDefault()}},{key:"handleContainerClick",value:function(t){for(var e=this.options,n=t.target;n&&n!==$;n=n.parentNode)if(f(n,e.trigger)){var i=n.getAttribute("data-scroll"),o=this.parseDataOptions(n),r=i||n.getAttribute("href");(e=s({},e,o)).preventDefault&&t.preventDefault(),e.stopPropagation&&t.stopPropagation(),this._trigger=n,e.horizontalScroll&&e.verticalScroll?this.to(r,e):e.verticalScroll?this.toTop(r,e):e.horizontalScroll&&this.toLeft(r,e)}}},{key:"parseDataOptions",value:function(t){var e=t.getAttribute("data-scroll-options");return e?JSON.parse(e):{}}}]),t}();return it.defaults={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,delay:0,easing:"easeOutQuint",offset:0,verticalScroll:!0,horizontalScroll:!1,stopScroll:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,outputLog:!1,quickMode:!1,beforeScroll:null,afterScroll:null,cancelScroll:null,completeScroll:null,stepScroll:null},it}));