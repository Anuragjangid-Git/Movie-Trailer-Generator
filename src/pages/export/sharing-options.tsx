export function SharingOptions() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Sharing Options</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <span className="block text-sm font-medium text-gray-900">YouTube</span>
        </button>
        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <span className="block text-sm font-medium text-gray-900">Vimeo</span>
        </button>
        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <span className="block text-sm font-medium text-gray-900">Facebook</span>
        </button>
        <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
          <span className="block text-sm font-medium text-gray-900">Twitter</span>
        </button>
      </div>
    </div>
  );
}