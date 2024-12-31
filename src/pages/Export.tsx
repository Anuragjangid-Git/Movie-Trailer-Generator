import React from 'react';
import { Download, Share2, Youtube, Facebook, Twitter } from 'lucide-react';

export default function Export() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Export Trailer</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-4">Download Options</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="font-medium">4K Ultra HD</h3>
                <p className="text-sm text-gray-500">3840 x 2160, H.264</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="font-medium">1080p Full HD</h3>
                <p className="text-sm text-gray-500">1920 x 1080, H.264</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="font-medium">720p HD</h3>
                <p className="text-sm text-gray-500">1280 x 720, H.264</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Share</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center gap-2">
                <Youtube className="w-6 h-6 text-red-500" />
                <span className="text-sm">YouTube</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center gap-2">
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="text-sm">Facebook</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center gap-2">
                <Twitter className="w-6 h-6 text-blue-400" />
                <span className="text-sm">Twitter</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Share Link</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value="https://trailerai.com/share/xyz123"
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}