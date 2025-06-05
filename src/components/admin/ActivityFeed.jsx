import React from 'react';
import { Users, ShoppingCart, UserPlus, Settings, TrendingUp } from 'lucide-react';

const ActivityFeed = ({ title = "Recent Activity" }) => {
  const activities = [
    {
      id: 1,
      type: 'user_registered',
      message: 'New user registered',
      user: 'John Doe',
      timestamp: '2 minutes ago',
      icon: UserPlus,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 2,
      type: 'order_placed',
      message: 'New order placed',
      user: 'Jane Smith',
      timestamp: '5 minutes ago',
      icon: ShoppingCart,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 3,
      type: 'user_login',
      message: 'User logged in',
      user: 'Mike Johnson',
      timestamp: '10 minutes ago',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 4,
      type: 'settings_updated',
      message: 'System settings updated',
      user: 'Admin',
      timestamp: '15 minutes ago',
      icon: Settings,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 5,
      type: 'analytics',
      message: 'Monthly report generated',
      user: 'System',
      timestamp: '30 minutes ago',
      icon: TrendingUp,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}>
                <activity.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.message}
                </p>
                <p className="text-sm text-gray-500">
                  by {activity.user}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {activity.timestamp}
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">View details</span>
                  •••
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;