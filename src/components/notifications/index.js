import React from "react";
import { useSelector } from "react-redux";
import Notification from "./notification";
import "./styles.scss";

export default () => {
  const selectNotifications = useSelector(state => state.notifications);

  const notifications = selectNotifications.map(notification => (
    <Notification meta={notification} />
  ));

  return <div className="notifications">{notifications}</div>;
};
