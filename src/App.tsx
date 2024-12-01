import { useEffect, useState } from "react";
import { IPLookUpForm } from "./components/IPLookUpForm";
import { IPDetails } from "./components/IPDetails";
import { fetchIpInfo } from "./services/ip";
import { IPInfo } from "./types";
import { LocationMap } from "./components/LocationMap";

function App() {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const loadInfo = async (ip?: string) => {
    try {
      setLoading(true);
      setErr(null);
      const data = await fetchIpInfo(ip);
      setIpInfo(data);
    } catch (err) {
      if (err instanceof Error) {
        setErr(err.message);
      } else {
        setErr(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md p-6 sm:p-8 md:p-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            What's my IP
          </h1>
          {ipInfo && <div className="text-lg text-gray-600 mt-2">{ipInfo.ip}</div>}
          {err && <div className="text-red-500 mt-2">{err}</div>}
        </div>
        <div className="flex justify-center">
          <IPLookUpForm lookup={loadInfo} isLoading={loading} />
        </div>
        {ipInfo && (
          <div className="mt-6">
            <IPDetails
              ipinfo={ipInfo}
              deviceInfo={{
                os: "Windows",
                browser: "Chrome",
                device: "Desktop",
                deviceIcon: "desktop-icon",
              }}
            />
          </div>
        )}
        {ipInfo && (
          <div className="mt-6">
            <LocationMap
              latitude={ipInfo?.latitude ?? 0}
              longitude={ipInfo?.longitude ?? 0}
              city={ipInfo?.city ?? ""}
              country={ipInfo?.country ?? ""}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
