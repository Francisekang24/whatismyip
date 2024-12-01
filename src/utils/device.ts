import UAParser from 'ua-parser-js';
import { Smartphone, Laptop, Monitor, Tablet } from 'lucide-react';

export const getDeviceInfo = () => {
  const parser = new UAParser.UAParser();
  const result = parser.getResult();

  const deviceType = result.device.type || 'desktop';
  const deviceIcon = {
    mobile: Smartphone,
    tablet: Tablet,
    desktop: result.os.name?.toLowerCase().includes('mac') ? Laptop : Monitor,
    console: Monitor,
    embedded: Monitor,
    smarttv: Monitor,
    wearable: Monitor,
    xr: Monitor,
  }[deviceType] || Monitor;

  return {
    browser: `${result.browser.name} ${result.browser.version}`,
    os: `${result.os.name} ${result.os.version}`,
    device: deviceType.charAt(0).toUpperCase() + deviceType.slice(1),
    deviceIcon,
  };
}