import { isCookie } from "./cookies.js";
import { gdpr } from "./gdpr.js";
import { insertPopup } from "./handlePopup.js";
export function getConsent() {
    if (!isCookie("consent")) {
        console.log("hello");
        insertPopup();
        gdpr();
    }
}
//# sourceMappingURL=getConsent.js.map