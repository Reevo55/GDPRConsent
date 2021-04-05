import { Partner } from "./Partner.js";
import { fetchPartners } from "./fetch-partners.js";
import { setCookie } from "./cookies.js";
import { insertPopup, disableConsentPopup } from "./handle-popup.js";

const EXPIRATION_NUM_OF_DAYS: number = 1;
const PARTNERS_URL: string = "https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json";
const COOKIE_NAME: string = "consent";

let partnersArr: Partner[];

export async function gdpr(): Promise<void> {
  insertPopup();
  setEventListeners();

  const gdprConsent = document.querySelector("#gdpr_consent");
  const partners = gdprConsent?.querySelector(".c_partners");

  const main = document.querySelector("#main");

  document.body.style.overflow = "hidden";
  main?.classList.add("wrapper");

  partnersArr = await fetchPartners(PARTNERS_URL);
  partnersArr.map((partner) => partners?.append(partner.createDOMNode()));
}

function setEventListeners(): void {
  const gdprConsent = document.querySelector("#gdpr_consent");

  const reject = gdprConsent?.querySelector(".c_reject");
  const accept = gdprConsent?.querySelector(".c_accept");

  reject?.addEventListener("click", () => {
    disableConsentPopup();
    setCookie(COOKIE_NAME, "false", EXPIRATION_NUM_OF_DAYS);
  });

  accept?.addEventListener("click", () => {
    disableConsentPopup();
    const cookiePartner =
      "true & partners=[" +
      partnersArr
        .map((partner) => (partner.accepted ? partner.id : null))
        .filter((val) => val != null)
        .join("|") +
      "]";
    setCookie(COOKIE_NAME, cookiePartner, EXPIRATION_NUM_OF_DAYS);
  });
}
