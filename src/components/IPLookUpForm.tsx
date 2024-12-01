import { useState } from "react";
import { Search } from "lucide-react";


interface IPLookUpFormProps {
    lookup: (ip: string) => void;
    isLoading: boolean;
}

export function IPLookUpForm({ lookup, isLoading }: IPLookUpFormProps) {
    const [ip, setIp] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ip.trim()) {
            lookup(ip.trim());
        }
    };

    return (
        <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="mt-5 sm:flex sm:items-center">
                <input
                    type = "text"
                    value = {ip}
                    onChange={(e) => setIp(e.target.value)}
                    placeholder = "Enter an IP Address (e.g. 8.8.8.0)"
                    pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
                    title="Please enter a valid IP address"
                    className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                </input>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    <Search className="w-5 h-5 mr-2" />
                </button>
            </form>
        </div>
    );
}