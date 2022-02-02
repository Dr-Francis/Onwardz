if ( window.sessionStorage ) {
    window.addEventListener( 'load', function () {
        var message = sessionStorage.getItem( 'tcb_toast_message' );

        if ( message ) {
            tcbToast( sessionStorage.getItem( 'tcb_toast_message' ), false );
            sessionStorage.removeItem( 'tcb_toast_message' );
        }
    } );
}

/**
 * Displays toast message
 */
function tcbToast( message, error, callback ) {
    /* Also allow "message" objects */
    if ( typeof message !== 'string' ) {
        message = message.message || message.error || message.success;
    }
    if ( ! error ) {
        error = false;
    }

    let _icon = 'checkmark',
        _extra_class = '';
    if ( error ) {
        _icon = 'cross';
        _extra_class = ' tve-toast-error';
    }

    jQuery( 'body' ).slideDown( 'fast', function () {
        jQuery( 'body' ).prepend( '<div class="tvd-toast tve-fe-message"><div class="tve-toast-message"><div class="tve-toast-icon-container' + _extra_class + '"><span class="tve_tick thrv-svg-icon"><svg xmlns="http://www.w3.org/2000/svg" class="tcb-checkmark" style="width: 100%; height: 1em; stroke-width: 0; fill: #ffffff; stroke: #ffffff;" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path></svg></span></div><div class="tve-toast-message-container">' + message + '</div></div></div>' );
    } );

    setTimeout( function () {
        jQuery( '.tvd-toast' ).hide();

        if ( typeof callback === 'function' ) {
            callback();
        }

    }, 3000 );
}
});</script><script type="text/javascript" src="https://www.libertybank.com/wp-includes/js/comment-reply.min.js" id="comment-reply-js" defer=""></script>
<script type="text/javascript" id="longdesc.button-js-extra">
/* <![CDATA[ */
var wparest = {"url":"https:\/\/www.libertybank.com\/wp-json\/wp\/v2\/media","text":"<span>Long Description<\/span>"};
/* ]]> */
</script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/plugins/wp-accessibility/js/longdesc.button.js?ver=1642519276" id="longdesc.button-js" defer=""></script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/plugins/wp-accessibility/js/current-menu-item.js?ver=1642519276" id="current.menu-js" defer=""></script>
<script type="text/javascript" async="async" src="https://www.youtube.com/iframe_api" id="youtube-api-js"></script>
<script data-minify="1" type="text/javascript" async="async" src="https://www.libertybank.com/wp-content/cache/min/1/api/player.js?ver=1642519276" id="vimeo-api-js"></script>
<script type="text/javascript" id="oms_pageblocks-js-extra">
/* <![CDATA[ */
var oms_pageblocks = {"scroll_offset":"100"};
/* ]]> */
</script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/plugins/oms-pageblocks/js/oms-pageblocks.js?ver=1642519276" id="oms_pageblocks-js" defer=""></script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/plugins/oms-pageblocks/js/oms-pageblocks-video.js?ver=1642519276" id="oms_pageblocks_video-js" defer=""></script>
<script type="text/javascript" id="rocket-browser-checker-js-after">
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
</script>
<script type="text/javascript" id="rocket-preload-links-js-extra">
/* <![CDATA[ */
var RocketPreloadLinksConfig = {"excludeUris":"\/wp-content\/uploads\/2021\/01\/estatement-ad.jpg|\/wp-content\/uploads\/2021\/01\/Retail-Rate-Sheet.pdf|\/(.+\/)?feed\/?.+\/?|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/wp-admin\/|\/logout\/","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm","siteUrl":"https:\/\/www.libertybank.com","onHoverDelay":"100","rateThrottle":"3"};
/* ]]> */
</script>
<script type="text/javascript" id="rocket-preload-links-js-after">
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
</script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/ajax/libs/popper.js/1.14.0/umd/popper.min.js?ver=1642519276" id="popper-js" defer=""></script>
<script type="text/javascript" src="//stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" id="bootstrap-js" defer=""></script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/themes/orbit-media-bootstrap4/resources/js/pageblocks-transition.js?ver=1642519276" id="pageblockTransitions-js" defer=""></script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/themes/orbit-media-bootstrap4/resources/js/min/leaving-site-alert.js?ver=1642519276" id="speedBump-js" defer=""></script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/themes/orbit-media-bootstrap4/resources/js/min/custom.js?ver=1642519276" id="orbitJS-js" defer=""></script>
<script type="text/javascript" id="tve-dash-frontend-js-extra">
/* <![CDATA[ */
var tve_dash_front = {"ajaxurl":"https:\/\/www.libertybank.com\/wp-admin\/admin-ajax.php","force_ajax_send":"1","is_crawler":"","recaptcha":[]};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.libertybank.com/wp-content/plugins/thrive-quiz-builder/thrive-dashboard/js/dist/frontend.min.js" id="tve-dash-frontend-js" defer=""></script>
<script type="text/javascript" src="https://www.libertybank.com/wp-includes/js/hoverIntent.min.js" id="hoverIntent-js" defer=""></script>
<script type="text/javascript" id="megamenu-js-extra">
/* <![CDATA[ */
var megamenu = {"timeout":"300","interval":"100"};
/* ]]> */
</script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/plugins/megamenu/js/maxmegamenu.js?ver=1642519276" id="megamenu-js" defer=""></script>
<script data-minify="1" type="text/javascript" src="https://www.libertybank.com/wp-content/cache/min/1/wp-content/plugins/megamenu-pro/assets/public.js?ver=1642519276" id="megamenu-pro-js" defer=""></script>
<script data-minify="1" src="https://www.libertybank.com/wp-content/cache/min/1/24b1174af6955bb7a19c164ea794381a159676e4.js?ver=1642519276" type="text/javascript" charset="utf-8" async="async"></script><script type="text/javascript">var tcb_post_lists=JSON.parse('[]');</script>
<script type="text/javascript">window.addEventListener('DOMContentLoaded', function() {
//<![CDATA[
(function( $ ) { 'use strict';
    
    
    $('html').attr( 'lang','en-US' ); $('html').attr( 'dir','ltr' )
    $('input,a,select,textarea,button').removeAttr('tabindex');
    
}(jQuery));
//]]>
});</script> <script type="text/javascript" id="wpsp-script-frontend"></script>
<script>window.lazyLoadOptions={elements_selector:"img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}};window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script><script data-no-minify="1" async="" src="https://www.libertybank.com/wp-content/plugins/wp-rocket/assets/js/lazyload/16.1/lazyload.min.js"></script>



<script type="text/javascript" id="">(function(){var g=/^persist(Save|Replace)/,f=(new Date).getTime();var a=27E5;if("undefined"!==typeof Storage){var b=localStorage.getItem("persistDL");var c=localStorage.getItem("persistTime");switch(google_tag_manager["GTM-PB2NN3"].macro(4)){case "gtm.js":b&&c&&(a&&f>Number(c)+a?localStorage.removeItem("persistDL"):b&&(dataLayer.push(JSON.parse(b)),dataLayer.push({event:"DLLoaded"})));break;case "persistDelete":localStorage.removeItem("persistDL");break;case "persistReplace":b=null;case "persistSave":for(var d=0;d<dataLayer.length;d++)if(g.test(dataLayer[d].event)){a=
dataLayer[d];delete a.event;c=JSON.parse(b)||{};for(var e in a)a.hasOwnProperty(e)&&(c[e]=a[e]);localStorage.setItem("persistDL",JSON.stringify(c))}}localStorage.setItem("persistTime",JSON.stringify(f))}})();</script><script type="text/javascript" id="setup-ua-tracker">(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");ga("create","UA-8409935-1","auto",{allowLinker:"true"});ga(function(a){window.dataLayer.push({event:"trackerReady",cid:a.get("clientId")})});</script><script type="text/javascript" id="">var c=document.createElement("link");c.rel="canonical";c.href=google_tag_manager["GTM-PB2NN3"].macro(5);document.head.appendChild(c);</script><script type="text/javascript" id="eventbrite-cross-domain-tracking">(function(document,window){var targetTrackingId=google_tag_manager["GTM-PB2NN3"].macro(9);if(!document.querySelector)return;var gaName=window.GoogleAnalyticsObject||"ga";var ga=window[gaName]=window[gaName]||function(){(window[gaName].q=window[gaName].q||[]).push(arguments)};window[gaName].l=+new Date;if(document.readyState!=="loading")init();else document.addEventListener?simpleAddEvent(document,"DOMContentLoaded",init):simpleAddEvent(window,"load",init);function init(){ga(function(){ga=window[gaName];if(!ga.getAll().length)setTimeout(function(){ga(updateIframes);
ga(updateUrls)},500);else{updateUrls();updateIframes()}})}function updateIframes(){var iframes=document.getElementsByTagName("iframe");var iframe,a,i;for(i=0;i<iframes.length;i++){iframe=iframes[i];if(iframe.src&&iframe.src.indexOf("eventbrite")>-1){a=document.createElement("a");a.href=iframe.src;checkAndAddEboga(a);if(iframe.src!==a.href)iframe.src=a.href}}}function updateUrls(){var urls=document.querySelectorAll("a");var a,i;for(i=0;i<urls.length;i++){a=urls[i];checkAndAddEboga(a)}}function checkAndAddEboga(a){var clientId=
google_tag_manager["GTM-PB2NN3"].macro(10);var parameter="_eboga\x3d"+clientId;if(!clientId){if(debugMode)window.console&&window.console.error("GTM Eventbrite Cross Domain: Unable to detect Client ID. Verify you are using Universal Analytics and the correct targetTrackingId is set, if any.");return}if(a.hostname.indexOf("eventbrite.")>-1&&a.search.indexOf("_eboga")===-1)a.search=a.search?a.search+"\x26"+parameter:"?"+parameter}function simpleAddEvent(el,evt,handler){if("attachEvent"in document)el.attachEvent("on"+evt,
