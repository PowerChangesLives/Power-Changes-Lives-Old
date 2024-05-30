var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss =
	".tp-caption.TRX-subtitle,.TRX-subtitle{color:rgba(15,15,15,1.00);font-size:24px;line-height:30px;font-weight:800;font-style:normal;font-family:Open Sans;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:-0.1px}.tp-caption.TRX-title,.TRX-title{color:rgba(15,15,15,1.00);font-size:110px;line-height:115px;font-weight:800;font-style:normal;font-family:Open Sans;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:-3px}.tp-caption.TRX-button,.TRX-button{color:rgba(255,255,255,1.00);font-size:24px;line-height:30px;font-weight:700;font-style:normal;font-family:Open Sans;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.TRX-subtitle-light-white,.TRX-subtitle-light-white{color:rgba(255,255,255,1.00);font-size:24px;line-height:30px;font-weight:700;font-style:normal;font-family:Open Sans;padding:0px 0px 0px 0px;text-decoration:none;text-align:center;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:-0.1px}.tp-caption.TRX-title-extra-small-white,.TRX-title-extra-small-white{color:rgba(255,255,255,1.00);font-size:72px;line-height:80px;font-weight:800;font-style:normal;font-family:Open Sans;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;letter-spacing:-1px}";
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement("div");
	htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}
/******************************************
				-	PREPARE PLACEHOLDER FOR SLIDER	-
			******************************************/

var setREVStartSize = function() {
	try {
		var e = new Object,
			i = jQuery(window).width(),
			t = 9999,
			r = 0,
			n = 0,
			l = 0,
			f = 0,
			s = 0,
			h = 0;
		e.c = jQuery('#rev_slider_3_1');
		e.gridwidth = [1400];
		e.gridheight = [740];

		e.sliderLayout = "fullscreen";
		e.fullScreenAutoWidth = 'off';
		e.fullScreenAlignForce = 'off';
		e.fullScreenOffsetContainer = '';
		e.fullScreenOffset = '';
		if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
				f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
			}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
			var u = (e.c.width(), jQuery(window).height());
			if (void 0 != e.fullScreenOffsetContainer) {
				var c = e.fullScreenOffsetContainer.split(",");
				if (c) jQuery.each(c, function(e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length >
					0 && (u -= parseInt(e.fullScreenOffset, 0))
			}
			f = u
		} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
		e.c.closest(".rev_slider_wrapper").css({
			height: f
		})

	} catch (d) {
		console.log("Failure at Presize of Slider:" + d)
	}
};

setREVStartSize();

var tpj = jQuery;

var revapi3;
tpj(document).ready(function() {
	if (tpj("#rev_slider_3_1").revolution == undefined) {
		revslider_showDoubleJqueryError("#rev_slider_3_1");
	} else {
		revapi3 = tpj("#rev_slider_3_1").show().revolution({
			sliderType: "standard",
			jsFileLocation: "//charity-is-hope.themerex.net/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout: "fullscreen",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				mouseScrollReverse: "default",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
			},
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: 1400,
			gridheight: 740,
			lazyType: "none",
			shadow: 0,
			spinner: "off",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}
}); /*ready*/
