export function isCookie(cookieName: string): boolean {
  let name: string = cookieName + "=";
  let found: number = document.cookie.search(name);

  if (found !== -1) {
    return true;
  } else {
    return false;
  }
}

export function setCookie(cookieName: string, cookieValue: string, exdays: number): void {
  var exdate: Date = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  document.cookie =
    encodeURIComponent(cookieName) +
    "=" +
    cookieValue +
    (!exdays ? "" : "; expires=" + exdate.toUTCString());
}
