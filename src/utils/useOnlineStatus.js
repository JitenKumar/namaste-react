import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("offline mode enabled");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("online mode enabled");
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
