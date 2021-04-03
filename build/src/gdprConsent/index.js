import { isCookie } from "./cookies.js";
import { gdpr } from "./gdpr.js";
getConsent();
function getConsent() {
    if (!isCookie("consent")) {
        gdpr();
    }
}
//# sourceMappingURL=index.js.map