export default class Cache {
  static localStorageKey = "zipp";
  static supported;

  static {
    Cache.supported = typeof Storage !== "undefined";
  }

  static set(key, value, ttl) {
    if (!Cache.supported) {
      return;
    }

    const ttlSeconds = ttl * 1000;

    const item = {
      value,
      expiry: Date.now() + ttlSeconds,
    };

    localStorage.setItem(
      `${Cache.localStorageKey}:${key}`,
      JSON.stringify(item)
    );
  }

  static get(key) {
    if (!Cache.supported) {
      return null;
    }

    this.clear();

    const itemJSON = localStorage.getItem(`${Cache.localStorageKey}:${key}`);

    if (!itemJSON) {
      return null;
    }

    const item = JSON.parse(itemJSON);

    if (Date.now() > item.expiry) {
      localStorage.removeItem(`${Cache.localStorageKey}:${key}`);
      return null;
    }

    return item.value;
  }

  static del(key) {
    localStorage.removeItem(`${Cache.localStorageKey}:${key}`);
  }

  static clear() {
    if (!Cache.supported) {
      return;
    }

    for (var i = 0; i < localStorage.length; i++) {
      const itemKey = localStorage.key(i);

      const validKey = itemKey && itemKey.startsWith(Cache.localStorageKey);

      if (validKey) {
        const itemJSON = localStorage.getItem(itemKey);
        const item = itemJSON ? JSON.parse(itemJSON) : null;

        if (item) {
          if (item.expiry !== null && Date.now() > item.expiry) {
            localStorage.removeItem(itemKey);
          }
        }
      }
    }
  }
}
