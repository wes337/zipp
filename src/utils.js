export const CDN_URL = "https://w-img.b-cdn.net/zipp";

export const detectBrowser = () => {
  try {
    let userAgent = navigator.userAgent;
    let browserName = "unknown";

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "opera";
    }

    if (userAgent.match(/edg/i)) {
      browserName = "edge";
    }

    return browserName;
  } catch {
    return "unknown";
  }
};

export const isChrome = () => {
  try {
    const browserName = detectBrowser();
    return browserName === "chrome";
  } catch {
    return false;
  }
};

export const isSafari = () => {
  try {
    const browserName = detectBrowser();
    return browserName === "safari";
  } catch {
    return false;
  }
};

export const isEdge = () => {
  try {
    const browserName = detectBrowser();
    return browserName === "edge";
  } catch {
    return false;
  }
};

export const isIOS = () => {
  try {
    const toMatch = [/iPhone/i, /iPad/i, /iPod/i];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  } catch {
    return false;
  }
};

export const isMobileBrowser = () => {
  try {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  } catch {
    return false;
  }
};

export const isVerySmallScreen = () => {
  try {
    return window.innerWidth < 600;
  } catch {
    return false;
  }
};

export const isMobileSizedScreen = () => {
  try {
    return window.innerWidth <= 1000;
  } catch {
    return false;
  }
};

var debounceTimer;
export const debounce = (fn, delay) => {
  return () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn.apply(this, arguments), delay);
  };
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPriceInUSD(amount) {
  return currencyFormatter.format(amount);
}

export function toCamelCase(text) {
  return text.replace(/-([a-z])/g, (t) => {
    return t[1].toUpperCase();
  });
}
