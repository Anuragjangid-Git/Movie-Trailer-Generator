import React from 'react';
import { Plus, Film, Clock, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const recentProjects = [
  { id: 1, title: "Summer Action Movie", status: "Complete", date: "2024-03-15" },
  { id: 2, title: "Drama Series Teaser", status: "Processing", date: "2024-03-14" },
  { id: 3, title: "Comedy Special", status: "Draft", date: "2024-03-13" }
];

export default function Dashboard() {
  const navigate=useNavigate();
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button 
         onClick={()=>{navigate("/upload")}}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-2">
            <Film className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="text-lg font-semibold">Active Projects</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-2">
            <Clock className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="text-lg font-semibold">Processing</h3>
              <p className="text-3xl font-bold">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-2">
            <BarChart3 className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="text-lg font-semibold">Total Exports</h3>
              <p className="text-3xl font-bold">45</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold">Recent Projects</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {recentProjects.map(project => (
            <div key={project.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div>
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                project.status === 'Complete' ? 'bg-green-100 text-green-800' :
                project.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}