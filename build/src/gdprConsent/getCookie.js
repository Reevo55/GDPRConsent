export function isCookie(cookie_name) {
    var name = cookie_name + "=";
    var ca = document.cookie.split(";");
    if (ca.filter(function (el) {
        return el.match("/(" + name + ")/");
    }) !== []) {
        console.log("Found");
        return true;
    }
    else {
        console.log("Not found");
        return false;
    }
}
//# sourceMappingURL=isCookie.js.map