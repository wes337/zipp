import { isIOS, isMobileBrowser, isSafari } from "./browser";

export const supportsHEVCAlpha = () => {
  return isSafari() || (isMobileBrowser() && isIOS());
};
