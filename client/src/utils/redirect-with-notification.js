import { toast } from "react-toastify";

const redirectWithNotification = (
  history,
  to,
  notificationType,
  notificationMessage
) => {
  history.push(to);
  toast.dismiss();
  toast[notificationType](notificationMessage);
};

export default redirectWithNotification;
