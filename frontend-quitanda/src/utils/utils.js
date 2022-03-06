export function cpfMask(value) {
  return value
    .replace()
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export function cnpjMask(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export function phoneMask(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d)(\d{4})(\d{4})/, "$1 $2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
}

export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function paginate(page, pages) {
  let current = page;
  let last = pages;
  let delta = 1;
  let left = current - delta;
  let right = current + delta + 1;

  let range = [];

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  let addPage;
  let arrayOfPages = [];

  for (let i of range) {
    if (addPage) {
      if (i - addPage === 2) {
        arrayOfPages.push(addPage + 1);
      } else if (i - addPage !== 1) {
        arrayOfPages.push("divider");
      }
    }
    arrayOfPages.push(i);
    addPage = i;
  }

  return arrayOfPages;
}
