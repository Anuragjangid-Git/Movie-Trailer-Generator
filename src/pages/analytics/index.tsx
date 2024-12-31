import { AnalyticsChart } from './analytics-chart';
import { AnalyticsSummary } from './analytics-summary';
import { EngagementMetrics } from './engagement-metrics';

export function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Analytics</h1>
      
      <AnalyticsSummary />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>
        <EngagementMetrics />
      </div>
    </div>
  );
}