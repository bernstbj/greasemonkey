// ==UserScript==
// @name            Slashdot remove ads
// @namespace       https://github.com/bernstbj/greasemonkey
// @description     Attempts to automatically close ads in a Slashdot page. Lets the ad load first, so that the site gets some revenue, but closes after 5 seconds.
// @author          brian@dronefone.com
// @downloadURL     https://github.com/bernstbj/greasemonkey/raw/refs/heads/main/slashdot_remove_ads.user.js
// @updateURL       https://github.com/bernstbj/greasemonkey/raw/refs/heads/main/slashdot_remove_ads.user.js
// @version         0.4.7
// @grant           window.close
// @match           https://*.slashdot.org/*
// @icon            https://www.google.com/s2/favicons?domain=slashdot.org
// ==/UserScript==


(function() {
    'use strict';
 
    function closeAds()
    {
        console.log("closing the google ads window");
        try
        {
            var ela = $("*[id*='google_ads_iframe_']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("closing the gpt ads window");
        try
        {
            var ela = $("*[id*='div-gpt']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("closing any grid_24");
        try
        {
            var ela = $("*[id*='grid_24']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("closing any banner-wrapper");
        try
        {
            var ela = $("*[class*='banner-wrapper']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("closing any floating-content");
        try
        {
            var ela = $("*[id*='floating-content']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("closing any mdb-sticky");
        try
        {
            var ela = $("*[id*='mdb-sticky']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("closing any sitewide-top-banner-placeholder");
        try
        {
            var ela = $("*[id*='sitewide-top-banner-placeholder']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("closing any announcement");
        try
        {
            var ela = $("*[id*='announcement']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}

        console.log("removing unnamed, unclassed, unstyled divs");
        try
        {
            document.querySelectorAll('div').forEach(el => {
                if (el.shadowRoot && !el.id && !el.className) el.remove();
            });

            var ela = $("*[class*='sticky']");
            for (var a = 0; a < ela.length; a++)
            {
                ela[a].remove();
            }
        }
        catch(e) {}
    }
 
    setTimeout(closeAds, (5 * 1000));
    setTimeout(closeAds, (7 * 1000));
 
})();



