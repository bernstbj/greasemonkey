// ==UserScript==
// @name            Slashdot remove ads
// @namespace       https://github.com/bernstbj/greasemonkey
// @description     Attempts to automatically close ads in a Slashdot page. Lets the ad load first, so that the site gets some revenue, but closes after 5 seconds.
// @author          brian@dronefone.com
// @downloadURL     https://github.com/bernstbj/greasemonkey/raw/refs/heads/main/slashdot_remove_ads.user.js
// @updateURL       https://github.com/bernstbj/greasemonkey/raw/refs/heads/main/slashdot_remove_ads.user.js
// @version         0.5.0
// @grant           window.close
// @match           https://*.slashdot.org/*
// @icon            https://www.google.com/s2/favicons?domain=slashdot.org
// ==/UserScript==


(function() {
    'use strict';
 
    function closeAds()
    {
        var idSelectors = [
            'announcement',
            'div-gpt',
            'floating-content',
            'google_ads_iframe_',
            'grid_24',
            'mdb-sticky',
            'monb-sticky',
            'sitewide-top-banner-placeholder'
        ];
        var classSelectors = [
            'banner-wrapper',
            'sticky'
        ];

        idSelectors.forEach(function(s) {
            try {
                console.log("removing id *" + s + "*");
                $("*[id*='" + s + "']").remove();
            } catch(e) {}
        });

        classSelectors.forEach(function(s) {
            try {
                console.log("removing class *" + s + "*");
                $("*[class*='" + s + "']").remove();
            } catch(e) {}
        });

        console.log("removing unnamed, unclassed divs with shadowRoot");
        try {
            document.querySelectorAll('div').forEach(el => {
                if (el.shadowRoot && !el.id && !el.className) el.remove();
            });
        } catch(e) {}
    }
 
    setTimeout(closeAds, (5 * 1000));
    setTimeout(closeAds, (7 * 1000));
 
})();



