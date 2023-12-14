import React, { useState } from "react";
import { FaBell } from 'react-icons/fa';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new message', read: false },
    { id: 2, message: 'New content available', read: false },
  ]);
  const [unreadNotifications, setUnreadNotifications] = useState(notifications.length);

  const handleNotificationClick = () => {
    // Handle notification click logic here
    // For this example, mark all notifications as read
    const updatedNotifications = notifications.map(notification => ({ ...notification, read: true }));
    setNotifications(updatedNotifications);
    setUnreadNotifications(0);
  };

  return (
    <div>
      <div className="notification-icon" onClick={handleNotificationClick}>
        <FaBell size={24} />
        {unreadNotifications > 0 && (
          <div className="unread-count">{unreadNotifications}</div>
        )}
      </div>
      
      <div className="notification-list">
        <h3>Notifications</h3>
        {notifications.map(notification => (
          <div key={notification.id} className={`notification ${notification.read ? 'read' : 'unread'}`}>
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSystem;
