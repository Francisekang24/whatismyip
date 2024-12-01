import { UAParser } from 'ua-parser-js';

export const getDeviceInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();

  const deviceType = result.device.type || 'desktop';

  return {
    browser: `${result.browser.name} ${result.browser.version}`,
    os: `${result.os.name} ${result.os.version}`,
    device: deviceType.charAt(0).toUpperCase() + deviceType.slice(1),
  };
}