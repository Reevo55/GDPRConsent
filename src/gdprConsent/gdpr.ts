import { Partner } from './Partner.js';
import { fetchPartners } from './fetchPartners.js';

const gdprConsent = document.querySelector("#gdpr_consent");

const main = document.querySelector("#main");

const reject = gdprConsent?.querySelector(".c_reject");
const accept = gdprConsent?.querySelector(".c_accept");

let partnersArr: Partner[];
const EXPIRATION_NUM_OF_DAYS = 1;

export async function gdpr() {
    const partners = gdprConsent?.querySelector(".c_partners")

    partnersArr = await fetchPartners();

    partnersArr.map(partner =>
        partners?.append(partner.createDOMNode())
    );

    console.log('Hello');
}

reject?.addEventListener("click", () => {
    disableConsentPopup();
    console.log('cookiess')
    setCookie('consent', 'false', EXPIRATION_NUM_OF_DAYS);
})

accept?.addEventListener("click", () => {
    disableConsentPopup();

    const cookiePartner = "true; vendors=[" + partnersArr.map(partner => partner.accepted ? partner.id : null).filter(val => val != null).join("|") + "]";
    
    setCookie('consent', cookiePartner, EXPIRATION_NUM_OF_DAYS);
    console.log('COOKIESSSS')
})

function setCookie(c_name: string, c_value: string, exdays: number): void {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    document.cookie=encodeURIComponent(c_name) 
      + "=" + c_value
      + (!exdays ? "" : "; expires=" + exdate.toUTCString());;
}

function disableConsentPopup(): void {
    gdprConsent?.classList.add("disabled");
    main?.classList.remove("wrapper")
}