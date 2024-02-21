export const supportsHEVCAlpha = () => {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );

  const isSafari =
    ua.indexOf("safari") != -1 &&
    !(ua.indexOf("chrome") != -1) &&
    ua.indexOf("version/") != -1;

  return isSafari && hasMediaCapabilities;
};
