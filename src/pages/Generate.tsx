import React from 'react';
import { Play, Pause, RotateCcw, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Generate() {
  const navigate=useNavigate();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Generating Trailer</h1>
        <div className="flex gap-4">
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
          <button
          onClick={()=>{navigate("/export")}}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-black aspect-video rounded-xl overflow-hidden mb-6">
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-16 h-16 text-white opacity-50" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Timeline</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Play className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Pause className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="h-24 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Generation Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Analyzing Content</span>
                  <span>100%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-full bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Selecting Scenes</span>
                  <span>75%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-3/4 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Adding Effects</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-1/2 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Style Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pace
                </label>
                <input type="range" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Music Intensity
                </label>
                <input type="range" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color Grade
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>Cinematic</option>
                  <option>Vibrant</option>
                  <option>Moody</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}