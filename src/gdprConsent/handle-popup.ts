export function insertPopup(): void {
  let popup: string = `
    <div id="gdpr_consent">
    <div class="c_container">
      <img src="./img/gdpr-flag.jpg" alt="gdpr-flag" class="gdpr_flag">
      <img src="./img/logo-n.svg" alt="logo optad360" class="c_image">
      <h1 class="c_title">GDPR Consent</h1>
      <p class="c_description">When you visit this site, this site and our partners use cookies and other methods to process your personal information in order to customize your experience. Please click "I agree" to accept usage of your data, you can select our partners who will be permitted aswell.</p>
      <div class="c_policies">
        <p class="c_partner_policy">Policy link</p>
        <h3 class="c_title__partners">Partners</h3>
        <p class="c_partner_policy c_policy_accept">Accept</p>
      </div>
      <ul class="c_partners"></ul>
      <div class="c_buttons"> 
        <button class="c_button c_reject"> Reject </button>
        <button class="c_button c_accept"> Accept </button>
      </div>
    </div>
  </div>
`;
  document.body.insertAdjacentHTML("afterbegin", popup);
}

export function disableConsentPopup(): void {
  const gdprConsent = document.querySelector("#gdpr_consent");
  const main = document.querySelector("#main");

  gdprConsent?.classList.add("disabled");
  main?.classList.remove("wrapper");
  document.body.style.overflow = "auto";
}
