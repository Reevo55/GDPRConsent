import { isCookie } from "./cookies.js";
import { gdpr } from "./gdpr.js";
import { insertPopup } from "./handle-popup.js";

console.log("Hello world!");
getConsent();

function getConsent() {
  if (!isCookie("consent")) {
    gdpr();
  }
}
