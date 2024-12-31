interface ProjectCardProps {
  title: string;
  status: 'Draft' | 'In Progress' | 'Complete';
  progress: number;
  thumbnail: string;
}

export function ProjectCard({ title, status, progress, thumbnail }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm text-gray-500">{status}</span>
          <span className="text-sm font-medium text-blue-600">{progress}%</span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}