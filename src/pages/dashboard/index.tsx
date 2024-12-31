import { ProjectCard } from './project-card';
import { DashboardStats } from './dashboard-stats';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </Button>
      </div>

      <DashboardStats />

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Action Movie Trailer"
            status="In Progress"
            progress={65}
            thumbnail="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=300"
          />
          <ProjectCard
            title="Comedy Short"
            status="Complete"
            progress={100}
            thumbnail="https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=300"
          />
          <ProjectCard
            title="Documentary Teaser"
            status="Draft"
            progress={20}
            thumbnail="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=300"
          />
        </div>
      </div>
    </div>
  );
}