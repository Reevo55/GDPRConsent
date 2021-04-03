export function insertPopup() {
    var popup = "\n    <div id=\"gdpr_consent\">\n    <div class=\"c_container\">\n      <img src=\"./img/gdpr-flag.jpg\" alt=\"gdpr-flag\" class=\"gdpr_flag\">\n      <img src=\"./img/logo-n.svg\" alt=\"logo optad360\" class=\"c_image\">\n      <h1 class=\"c_title\">GDPR Consent</h1>\n      <p class=\"c_description\">When you visit this site, this site and our partners use cookies and other methods to process your personal information in order to customize your experience. Please click \"I agree\" to accept usage of your data, you can select our partners who will be permitted aswell.</p>\n      <div class=\"c_policies\">\n        <p class=\"c_partner_policy\">Policy link</p>\n        <h3 class=\"c_title__partners\">Partners</h3>\n        <p class=\"c_partner_policy c_policy_accept\">Accept</p>\n      </div>\n      <ul class=\"c_partners\"></ul>\n      <div class=\"c_buttons\"> \n        <button class=\"c_button c_reject\"> Reject </button>\n        <button class=\"c_button c_accept\"> Accept </button>\n      </div>\n    </div>\n  </div>\n";
    document.body.insertAdjacentHTML("afterbegin", popup);
}
export function disableConsentPopup() {
    var gdprConsent = document.querySelector("#gdpr_consent");
    var main = document.querySelector("#main");
    gdprConsent === null || gdprConsent === void 0 ? void 0 : gdprConsent.classList.add("disabled");
    main === null || main === void 0 ? void 0 : main.classList.remove("wrapper");
    document.body.style.overflow = "auto";
}
//# sourceMappingURL=handle-popup.js.map