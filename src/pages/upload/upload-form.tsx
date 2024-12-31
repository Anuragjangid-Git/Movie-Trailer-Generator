import { Button } from '@/components/ui/button';

export function UploadForm() {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
          Genre
        </label>
        <select
          id="genre"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option>Action</option>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Documentary</option>
          <option>Horror</option>
        </select>
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Desired Trailer Duration (seconds)
        </label>
        <input
          type="number"
          id="duration"
          min="30"
          max="180"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
          Trailer Tone
        </label>
        <select
          id="tone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option>Dramatic</option>
          <option>Energetic</option>
          <option>Suspenseful</option>
          <option>Lighthearted</option>
          <option>Emotional</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          id="notes"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit">
          Continue to Generation
        </Button>
      </div>
    </form>
  );
}