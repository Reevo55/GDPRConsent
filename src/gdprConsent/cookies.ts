export function isCookie(cookie_name: string): boolean {
  let name: string = cookie_name + "=";
  let found: number = document.cookie.search(name);

  console.log(found);
  if (found !== -1) {
    return true;
  } else {
    return false;
  }
}

export function setCookie(c_name: string, c_value: string, exdays: number): void {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  document.cookie =
    encodeURIComponent(c_name) +
    "=" +
    c_value +
    (!exdays ? "" : "; expires=" + exdate.toUTCString());
}
