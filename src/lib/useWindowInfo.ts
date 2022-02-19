import { useEffect, useState } from "react";
import { getCurrentWindow } from "./windows";

function useWindowInfo() {
  const [windowInfo, setWindowInfo] =
    useState<overwolf.windows.WindowInfo | null>(null);

  useEffect(() => {
    async function handleWindowStateChanged(
      state: overwolf.windows.WindowStateChangedEvent
    ) {
      const currentWindow = await getCurrentWindow();
      if (currentWindow.id !== state.window_id) {
        return;
      }
      if (state.window_previous_state_ex !== state.window_state_ex) {
        setWindowInfo(currentWindow);
      }
    }

    overwolf.windows.onStateChanged.addListener(handleWindowStateChanged);

    getCurrentWindow().then(setWindowInfo);
    return () => {
      overwolf.windows.onStateChanged.removeListener(handleWindowStateChanged);
    };
  }, []);

  return windowInfo;
}

export default useWindowInfo;
