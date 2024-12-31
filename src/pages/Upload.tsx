import React from 'react';
import { Upload as UploadIcon, Film, FileText, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Upload() {
    const navigate=useNavigate();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">New Project</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Upload Content</h2>
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
          <UploadIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Drag and drop your video files here</p>
          <p className="text-sm text-gray-500 mb-4">or</p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg">
            Browse Files
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-4">Project Details</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Genre
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
              <option>Action</option>
              <option>Drama</option>
              <option>Comedy</option>
              <option>Horror</option>
              <option>Documentary</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Desired Length (seconds)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="120"
            />
          </div>

          <button 
          onClick={()=>{navigate("/generate")}}
          type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
            Start Generation
          </button>
        </form>
      </div>
    </div>
  );
}