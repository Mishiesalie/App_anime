import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const NotificationsPanel = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching notifications
    const fetchNotifications = () => {
      setIsLoading(true);
      // Mock notifications data
      const mockNotifications = [
        {
          id: 1,
          type: 'episode',
          title: 'New Episode Available',
          message: 'One Piece Episode 1087 is now available!',
          timestamp: '2 minutes ago',
          isRead: false,
          image: 'https://via.placeholder.com/50'
        },
        {
          id: 2,
          type: 'comment',
          title: 'New Comment',
          message: 'Someone replied to your comment on Attack on Titan',
          timestamp: '1 hour ago',
          isRead: false,
          image: 'https://via.placeholder.com/50'
        },
        {
          id: 3,
          type: 'system',
          title: 'Welcome!',
          message: 'Welcome to h!anime! Start exploring anime now.',
          timestamp: '2 days ago',
          isRead: true,
          image: 'https://via.placeholder.com/50'
        }
      ];

      setTimeout(() => {
        setNotifications(mockNotifications);
        setIsLoading(false);
      }, 500);
    };

    if (user) {
      fetchNotifications();
    } else {
      setNotifications([]);
      setIsLoading(false);
    }
  }, [user]);

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'episode':
        return '🎬';
      case 'comment':
        return '💬';
      case 'system':
        return '🔔';
      default:
        return '📢';
    }
  };

  if (!user) {
    return (
      <div className="h-screen bg-gray-900 p-6">
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Notifications</h2>
          <p className="text-gray-400">Please log in to view your notifications</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Notifications</h2>
          {notifications.some(n => !n.isRead) && (
            <button
              onClick={markAllAsRead}
              className="text-sm text-pink-500 hover:text-pink-400"
            >
              Mark all as read
            </button>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
          </div>
        ) : notifications.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400">No notifications yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                  notification.isRead ? 'bg-gray-700/50' : 'bg-gray-700'
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-medium">{notification.title}</h3>
                    <span className="text-sm text-gray-400">{notification.timestamp}</span>
                  </div>
                  <p className="text-gray-300 mt-1">{notification.message}</p>
                </div>
                {!notification.isRead && (
                  <div className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPanel; 