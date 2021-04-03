import { Partner } from "./Partner.js";
import { fetchPartners } from "./fetch-partners.js";
import { setCookie } from "./cookies.js";
import { insertPopup, disableConsentPopup } from "./handle-popup.js";

const EXPIRATION_NUM_OF_DAYS = 1;

const reject = document.querySelector(".c_reject");
const accept = document.querySelector(".c_accept");

let partnersArr: Partner[];

export async function gdpr(): Promise<void> {
  insertPopup();

  const gdprConsent = document.querySelector("#gdpr_consent");
  const partners = gdprConsent?.querySelector(".c_partners");

  const main = document.querySelector("#main");

  document.body.style.overflow = "hidden";
  main?.classList.add("wrapper");

  partnersArr = await fetchPartners();
  console.log(partnersArr);
  partnersArr.map((partner) => partners?.append(partner.createDOMNode()));
}

reject?.addEventListener("click", () => {
  disableConsentPopup();
  console.log("cookiess");
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
