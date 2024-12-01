

export async function fetchIpInfo(ip: string) {
    const url = ip ? `https://ipapi.co/${ip}/json` : 'https://ipapi.co/json';
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
        throw new Error(data.reason || 'Unknown error trying to fetch IP information');
    }

    return data;
}