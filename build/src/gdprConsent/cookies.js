export function isCookie(cookieName) {
    var name = cookieName + "=";
    var found = document.cookie.search(name);
    if (found !== -1) {
        return true;
    }
    else {
        return false;
    }
}
export function setCookie(cookieName, cookieValue, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    document.cookie =
        encodeURIComponent(cookieName) +
            "=" +
            cookieValue +
            (!exdays ? "" : "; expires=" + exdate.toUTCString());
}
//# sourceMappingURL=cookies.js.map