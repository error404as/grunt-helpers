!function(a){a(function(){"function"==typeof a.fn.magnificPopup&&(a(".video-thumb").magnificPopup({disableOn:0,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),a(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"})),a(".carousel").each(function(){"function"==typeof a.fn.slick&&a(this).find("> ul").slick({dots:!0,infinite:!1,slidesToShow:6,slidesToScroll:6,appendArrows:a(this).find(".carousel-nav"),appendDots:a(this).find(".carousel-nav"),prevArrow:'<div class="slick-prev">&lt;</div>',nextArrow:'<div class="slick-next">&gt;</div>',responsive:[{breakpoint:1100,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:900,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:780,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:601,settings:{slidesToShow:2,slidesToScroll:2,dots:!1}},{breakpoint:490,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]})})})}(jQuery),!function(a,b,c){"use strict";function d(){function d(a,b){this.scrollLeft=a,this.scrollTop=b}function e(a){return.5*(1-Math.cos(Math.PI*a))}function f(a){if("object"!=typeof a||a.behavior===c||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"==typeof a&&"smooth"===a.behavior)return!1;throw new TypeError("behavior not valid")}function g(a){do a=a.parentNode;while(a!==b.body&&!(a.clientHeight<a.scrollHeight||a.clientWidth<a.scrollWidth));return a}function h(b){b.frame=a.requestAnimationFrame(h.bind(a,b));var c,d,f,g=m(),i=(g-b.startTime)/k;return i=i>1?1:i,c=e(i),d=b.startX+(b.x-b.startX)*c,f=b.startY+(b.y-b.startY)*c,b.method.call(b.scrollable,d,f),d===b.x&&f===b.y?void a.cancelAnimationFrame(b.frame):void 0}function i(c,e,f){var g,i,j,k,n,o=m();c===b.body?(g=a,i=a.scrollX||a.pageXOffset,j=a.scrollY||a.pageYOffset,k=l.scroll):(g=c,i=c.scrollLeft,j=c.scrollTop,k=d),n&&a.cancelAnimationFrame(n),h({scrollable:g,method:k,startTime:o,startX:i,startY:j,x:e,y:f,frame:n})}if(!("scrollBehavior"in b.documentElement.style)){var j=a.HTMLElement||a.Element,k=468,l={scroll:a.scroll||a.scrollTo,scrollBy:a.scrollBy,scrollIntoView:j.prototype.scrollIntoView},m=a.performance&&a.performance.now?a.performance.now.bind(a.performance):Date.now;a.scroll=a.scrollTo=function(){return f(arguments[0])?void l.scroll.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void i.call(a,b.body,~~arguments[0].left,~~arguments[0].top)},a.scrollBy=function(){return f(arguments[0])?void l.scrollBy.call(a,arguments[0].left||arguments[0],arguments[0].top||arguments[1]):void i.call(a,b.body,~~arguments[0].left+(a.scrollX||a.pageXOffset),~~arguments[0].top+(a.scrollY||a.pageYOffset))},j.prototype.scrollIntoView=function(){if(f(arguments[0]))return void l.scrollIntoView.call(this,arguments[0]||!0);var c=g(this),d=c.getBoundingClientRect(),e=this.getBoundingClientRect();c!==b.body?(i.call(this,c,c.scrollLeft+e.left-d.left,c.scrollTop+e.top-d.top),a.scrollBy({left:d.left,top:d.top,behavior:"smooth"})):a.scrollBy({left:e.left,top:e.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:d}:d()}(window,document);