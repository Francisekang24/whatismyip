import { Map, Clock, MonitorSmartphone, Network } from "lucide-react";
import { InfoCard } from "./InfoCard";
import { DeviceInfo, IPInfo } from "../types";

interface IPDetailsProps {
  ipinfo: IPInfo;
  deviceInfo: DeviceInfo;
}

export function IPDetails({ ipinfo, deviceInfo }: IPDetailsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard title="Location" value={`${ipinfo.city}, ${ipinfo.region}, ${ipinfo.country}`} icon={Map} />
        <InfoCard title="Timezone" value={ipinfo.timezone} icon={Clock} />
        <InfoCard title="ISP" value={ipinfo.org} icon={Network} />
        <InfoCard title="Device" value={`${deviceInfo.os}, ${deviceInfo.browser}, ${deviceInfo.device}`} icon={MonitorSmartphone} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Detailed Information</h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 p-2">
            <h3 className="text-lg font-medium mt-4">Location</h3>
            <p className="text-gray-600">Region: {ipinfo.region}</p>
            <p className="text-gray-600">Country: {ipinfo.country}</p>
            <p className="text-gray-600">Postal Code: {ipinfo.postal}</p>
            <p className="text-gray-600">Coordinate: {ipinfo.latitude}, {ipinfo.longitude}</p>
          </div>

          <div className="w-full md:w-1/3 p-2">
            <h3 className="text-lg font-medium mt-4">Network</h3>
            <p className="text-gray-600">ASN: {ipinfo.asn}</p>
            <p className="text-gray-600">ISP: {ipinfo.org}</p>
            <p className="text-gray-600">IP Version: {ipinfo.version}</p>
          </div>

          <div className="w-full md:w-1/3 p-2">
            <h3 className="text-lg font-medium mt-4">System</h3>
            <p className="text-gray-600">OS: {deviceInfo.os}</p>
            <p className="text-gray-600">Browser: {deviceInfo.browser}</p>
            <p className="text-gray-600">Device Type: {deviceInfo.device}</p>
          </div>
        </div>
      </div>
    </>
  );
}