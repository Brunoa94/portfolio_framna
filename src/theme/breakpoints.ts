type Device = "mobile" | "tablet" | "desktop";

const size: Record<Device, string> = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const device: Record<Device, string> = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
