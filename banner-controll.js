var websitePrivacyPage = "#";

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

function pushDataLayer(consent, event) {
    window.dataLayer.push({
        event: event,
        consent: consent,
    });
}


var consent = {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'granted',
    unclassified_storage:  'granted',
}


function mobileBanner() {
    var createElementMobile = document.createElement("div");
    createElementMobile.classList.add("simpleBanner");

    createElementMobile.innerHTML = `
        <div class="simpleBannerMessage">
            <span class="cookieDescription">
                By using this website, you consent to our use of first- and third-party cookies and similar tracking technologies to enhance your experience, conduct analytics, and advertise to you or others. You also consent to our sharing of information about your use of this website with our social media, advertising and analytics partners.
            </span>
    
            <a href="${websitePrivacyPage}">Please see our Privacy Policy and <span class="cookieDescription">manage your</span> Privacy Choices.</a>
        </div>
        <div class="smallBannerBtnWraper"><button class="simpleBannerOkay">OK</button></div>
    `;

    document.body.appendChild(createElementMobile);

    document.querySelector(".simpleBannerOkay").addEventListener("click", function() {

        createElementMobile.style.display = "none";

        localStorage.setItem("smallBannerClick", true);

        gtag('consent', 'update', consent);
        pushDataLayer(consent, "consent_update");

    });
}

window.addEventListener("load", function() {

    mobileBanner();

    var mobileBannerElement = document.querySelector(".simpleBanner");

    var checkSbChoice = localStorage.getItem("smallBannerClick");

    gtag('consent', 'update', consent);
    pushDataLayer(consent, "consent_update");

    if(!checkSbChoice){
        mobileBannerElement.style.display = "grid";
    }

   




});


