import { useEffect, useState } from 'react';

type DeviceType = 'iphone' | 'ipad' | 'samsung' | 'android' | 'desktop';

export function useDeviceDetect(): { device: DeviceType; isMobile: boolean; isIOS: boolean } {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
    const ua = userAgent.toLowerCase();

    let detected: DeviceType = 'desktop';
    let mobile = false;
    let ios = false;

    if (/ipad/i.test(userAgent)) {
      detected = 'ipad';
      mobile = true;
      ios = true;
    } else if (/iphone/i.test(userAgent)) {
      detected = 'iphone';
      mobile = true;
      ios = true;
    } else if (/samsung/i.test(userAgent)) {
      detected = 'samsung';
      mobile = true;
    } else if (/android/i.test(userAgent)) {
      detected = 'android';
      mobile = true;
    }

    if (/mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua)) {
      mobile = true;
    }

    setDevice(detected);
    setIsMobile(mobile);
    setIsIOS(ios);
  }, []);

  return { device, isMobile, isIOS };
}
