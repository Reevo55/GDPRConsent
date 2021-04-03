import { isCookie } from "./cookies.js";
import { gdpr } from "./gdpr.js";
console.log("Hello world!");
getConsent();
function getConsent() {
    if (!isCookie("consent")) {
        gdpr();
    }
}
//# sourceMappingURL=get-consent.js.map