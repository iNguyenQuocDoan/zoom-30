export const send = (method = "GET", url) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(`HTTP Code: ${xhr.status}`);
      }
    };

    xhr.onerror = () => reject("Network error");
    xhr.open(method, url, true);
    xhr.send();
  });

/* query string */
export const getQueryParam = (key) =>
  new URLSearchParams(window.location.search).get(key);
