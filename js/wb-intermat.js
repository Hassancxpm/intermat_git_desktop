!function(r,e,i){var c=r(e);r(i).ready(function(){var i=r("body"),t={Hover:"hover",Active:"active",ShowNavMain:"show-nav-main",FixedHeader:"show-fixed-header",PageLoad:"page-load"},e={Mobile:!1,Desktop:!1,Tablet:!1},n={Scroll:0,WinWidth:0};function o(){setTimeout(function(){r(".list-articles .caroufredsel_wrapper").height(r(".list-articles .slider-content").outerHeight())},50)}function a(e){var i=e.clone();e.after(i),e.remove(),i.attr("style","").find(".slider-content").attr("style","")}function l(e,i){(e.find(".slider-content").length?e.find(".slider-content"):e.find(".slider__slides")).carouFredSel(i)}function s(){n.WinWidth=c.width(),e.Desktop=1024<n.WinWidth,e.Mobile=n.WinWidth<=767,e.Tablet=n.WinWidth<=1024&&768<=n.WinWidth}s(),i.on("click touchstart",function(e){r(e.target).parents(".main-navigation").length||(i.removeClass(t.ShowNavMain),r(".expanded.mn-item-lvl-1").removeClass("expanded"))}),r(".btn-menu").click(function(e){e.preventDefault(),i.toggleClass(t.ShowNavMain)}),r('[href="#newsletter"]').click(function(e){var i=r(".section-newsletter");if(e.preventDefault(),i.length)return r("html, body").animate({scrollTop:i.offset().top-90},600),!1}),c.on("load",function(){r("body").addClass("loaded"),o(),r(".nf-main-content .nf-form-txt").each(function(){var e=r(this),i=e.closest(".nf-main-content");e.on("blur",function(){0==e.val()?i.removeClass("hide-label"):e.addClass("hide-label")}).on("input",function(){i.addClass("hide-label")})}),r(".nf-form-item .optin-container .nf-form-input").click(function(){var e=r(this),i=e.parent(),t=e.find("input");t.trigger("click"),t.is(":checked")?i.addClass("checked"):i.removeClass("checked")}),i.on("DOMSubtreeModified",".nf-result",function(){r(".nf-result").find("p").length||r('.newsletter-form form input[type="checkbox"]').prop("checked",!1).closest(".optin-container.checked").removeClass("checked")}),r(".video-link .video__caption").each(function(){var e=r(this),i=e.html();e.siblings(".jsBtnVideoPopup").attr("data-caption",i)}),r(".jsBtnVideoPopup").length&&r(".jsBtnVideoPopup").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Video caption</div></div>'},callbacks:{markupParse:function(e,i,t){i.title=t.el.attr("data-caption")}}})}),c.on("scroll",function(){n.Scroll=c.scrollTop(),i.toggleClass(t.FixedHeader,200<n.Scroll),o()}),c.on("resize orientationchange",function(){s(),o()}),r(".list-articles .slider").length&&(a(r(".list-articles .slider")),c.on("load",function(){l(r(".list-articles .slider"),{width:"100%",items:1,duration:1e5,responsive:!0,scroll:{fx:"fade",duration:800,onBefore:function(){r(this).find(".la-item").removeClass("active")},onAfter:function(){r(this).find(".la-item:first-child").addClass("active")}},swipe:{onTouch:!0,onMouse:!0},auto:{play:!1,timeoutDuration:7e3},pagination:{container:".list-articles .slider-pagin"},onCreate:function(){r(this).find(".la-item:first-child").addClass("active"),r(".list-articles .la-item-img").each(function(){r(this).wrap('<div class="slider-image">')})},infinite:!0})})),r(".front .block.block-page.partner .box-dark .inside .tn-panel .slider").length&&r(".front .block.block-page.partner .box-dark .inside .tn-panel .slider").each(function(){a(r(this)),c.on("load",function(){l(r(".front .block.block-page.partner .box-dark .inside .tn-panel .slider"),{width:"100%",items:{visible:7,start:-1},responsive:!0,scroll:{items:5,duration:800},swipe:{onTouch:!0,onMouse:!0},auto:{play:!0,timeoutDuration:3e3},infinite:!0})})})})}(jQuery,window,document);
