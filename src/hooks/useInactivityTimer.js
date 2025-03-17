import { useEffect, useRef } from "react";
import { logout } from "@/service/authentication";

const useInactivityTimer = (setUser) => {
  const timerRef = useRef(null);

  useEffect(() => {
    const events = ["mousemove", "keydown", "click", "scroll"];

    const resetTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        handleLogout();
      }, 10 * 60 * 1000);
    };

    const handleLogout = async () => {
      console.log("User inactive for 5 minutes. Logging out...");
      await logout();
      setUser(null);
    };

    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
};

export default useInactivityTimer;
