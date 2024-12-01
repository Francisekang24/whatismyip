import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export function InfoCard({ title, value, icon: Icon }: InfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-full">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-lg font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}