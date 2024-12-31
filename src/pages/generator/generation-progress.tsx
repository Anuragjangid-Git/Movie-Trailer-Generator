export function GenerationProgress() {
  const steps = [
    { name: 'Analyzing Content', status: 'complete', percentage: 100 },
    { name: 'Scene Selection', status: 'current', percentage: 45 },
    { name: 'Audio Synchronization', status: 'upcoming', percentage: 0 },
    { name: 'Final Rendering', status: 'upcoming', percentage: 0 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Generation Progress</h2>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-900">{step.name}</span>
              <span className="text-sm text-gray-500">{step.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${step.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}