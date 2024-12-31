import { Button } from '@/components/ui/button';
import { Upload, Film } from 'lucide-react';
import { UploadForm } from './upload-form';

export function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Upload Movie Content</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-8">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <Film className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <Button>
                <Upload className="h-5 w-5 mr-2" />
                Choose video file
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              or drag and drop your video file here
            </p>
          </div>
        </div>

        <UploadForm />
      </div>
    </div>
  );
}