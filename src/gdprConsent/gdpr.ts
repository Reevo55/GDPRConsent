import { Partner } from "./Partner.js";
import { fetchPartners } from "./fetch-partners.js";
import { setCookie } from "./cookies.js";
import { insertPopup, disableConsentPopup } from "./handle-popup.js";

const EXPIRATION_NUM_OF_DAYS: number = 1;
let partnersArr: Partner[];

export async function gdpr(): Promise<void> {
  insertPopup();
  setEventListeners();

  const gdprConsent = document.querySelector("#gdpr_consent");
  const partners = gdprConsent?.querySelector(".c_partners");

  const main = document.querySelector("#main");

  document.body.style.overflow = "hidden";
  main?.classList.add("wrapper");

  partnersArr = await fetchPartners();
  partnersArr.map((partner) => partners?.append(partner.createDOMNode()));
}

function setEventListeners(): void {
  const reject = document.querySelector(".c_reject");
  const accept = document.querySelector(".c_accept");

  reject?.addEventListener("click", () => {
    disableConsentPopup();
    setCookie("consent", "false", EXPIRATION_NUM_OF_DAYS);
  });

  accept?.addEventListener("click", () => {
    disableConsentPopup();
    const cookiePartner =
      "true & vendors=[" +
      partnersArr
        .map((partner) => (partner.accepted ? partner.id : null))
        .filter((val) => val != null)
        .join("|") +
      "]";
    setCookie("consent", cookiePartner, EXPIRATION_NUM_OF_DAYS);
  });
}
