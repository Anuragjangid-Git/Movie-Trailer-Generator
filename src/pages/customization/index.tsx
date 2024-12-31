import { Button } from '@/components/ui/button';
import { Timeline } from './timeline';
import { ToolPanel } from './tool-panel';
import { PreviewWindow } from './preview-window';

export function CustomizationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Customize Trailer</h1>
        <Button>Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PreviewWindow />
          <Timeline />
        </div>
        <ToolPanel />
      </div>
    </div>
  );
}