export const isChrome = (userAgent: string): boolean => {
  console.log(userAgent);
  return (
    userAgent.indexOf("Chrome") > -1 &&
    userAgent.indexOf("Edge") === -1 &&
    userAgent.indexOf("Edg") === -1 &&
    userAgent.indexOf("OPR") === -1 &&
    userAgent.indexOf("SamsungBrowser") === -1
  );
};

export type BrowserType =
  | "chrome"
  | "edge"
  | "firefox"
  | "safari"
  | "opera"
  | "samsung"
  | "ie"
  | "unknown";

export const getBrowserType = (userAgent: string): BrowserType => {
  const ua = userAgent.toLowerCase();

  if (ua.includes("edge") || ua.includes("edg/")) {
    return "edge";
  }

  if (ua.includes("opr") || ua.includes("opera")) {
    return "opera";
  }

  if (ua.includes("samsungbrowser")) {
    return "samsung";
  }

  if (ua.includes("firefox")) {
    return "firefox";
  }

  if (ua.includes("safari") && !ua.includes("chrome")) {
    return "safari";
  }

  if (ua.includes("chrome") && !ua.includes("edg/")) {
    return "chrome";
  }

  if (ua.includes("trident") || ua.includes("msie")) {
    return "ie";
  }

  return "unknown";
};
