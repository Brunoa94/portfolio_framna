type Device = "mobile" | "tablet" | "desktop";

export const breakpoints: Record<Device, number> = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

const sizePixels: Record<Device, string> = {
  mobile: `${breakpoints.mobile}px`,
  tablet: `${breakpoints.tablet}px`,
  desktop: `${breakpoints.desktop}px`,
};

export const device: Record<Device, string> = {
  mobile: `(min-width: ${sizePixels.mobile})`,
  tablet: `(min-width: ${sizePixels.tablet})`,
  desktop: `(min-width: ${sizePixels.desktop})`,
};
