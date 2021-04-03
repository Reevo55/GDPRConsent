export function isCookie(cookie_name) {
    var name = cookie_name + "=";
    var found = document.cookie.search(name);
    console.log(found);
    if (found !== -1) {
        return true;
    }
    else {
        return false;
    }
}
export function setCookie(c_name, c_value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    document.cookie =
        encodeURIComponent(c_name) +
            "=" +
            c_value +
            (!exdays ? "" : "; expires=" + exdate.toUTCString());
}
//# sourceMappingURL=cookies.js.map