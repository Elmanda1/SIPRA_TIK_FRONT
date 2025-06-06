import React from 'react';

const SettingsContent = () => (
  <div className="space-y-4 lg:space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 lg:p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">General Settings</h3>
      </div>
      <div className="p-4 lg:p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site Name
          </label>
          <input
            type="text"
            defaultValue="SIPRA TIK"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site Description
          </label>
          <textarea
            rows={3}
            defaultValue="Admin dashboard for SIPRA TIK system"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Email
          </label>
          <input
            type="email"
            defaultValue="admin@sipratik.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          />
        </div>
        <div className="flex items-center">
          <input
            id="maintenance"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="maintenance" className="ml-2 text-sm font-medium text-gray-700">
            Enable maintenance mode
          </label>
        </div>
        <div className="pt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 lg:p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
      </div>
      <div className="p-4 lg:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
            Enable
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Session Timeout</h4>
            <p className="text-sm text-gray-500">Automatically log out after inactivity</p>
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900">
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>Never</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Login Notifications</h4>
            <p className="text-sm text-gray-500">Get notified when someone logs into your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsContent;