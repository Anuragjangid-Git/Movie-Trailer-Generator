import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { ExportOptions } from './export-options';
import { SharingOptions } from './sharing-options';

export function ExportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Export Trailer</h1>

      <div className="space-y-8">
        <ExportOptions />
        <SharingOptions />
        
        <div className="flex space-x-4">
          <Button className="flex-1">
            <Download className="h-5 w-5 mr-2" />
            Download
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}