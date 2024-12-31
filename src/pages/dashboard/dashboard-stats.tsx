import { BarChart3, Film, Clock, Users } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<Film className="h-6 w-6 text-blue-600" />}
        title="Total Projects"
        value="12"
      />
      <StatCard
        icon={<Clock className="h-6 w-6 text-green-600" />}
        title="Time Saved"
        value="48h"
      />
      <StatCard
        icon={<BarChart3 className="h-6 w-6 text-purple-600" />}
        title="Engagement Rate"
        value="85%"
      />
      <StatCard
        icon={<Users className="h-6 w-6 text-orange-600" />}
        title="Team Members"
        value="5"
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center">
        {icon}
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}