import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { GenerationProgress } from './generation-progress';
import { PreviewPlayer } from './preview-player';

export function GeneratorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Generate Trailer</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <PreviewPlayer />
          <div className="flex space-x-4">
            <Button>
              <Play className="h-5 w-5 mr-2" />
              Start Generation
            </Button>
            <Button variant="outline">
              <RotateCcw className="h-5 w-5 mr-2" />
              Reset
            </Button>
          </div>
        </div>
        
        <GenerationProgress />
      </div>
    </div>
  );
}