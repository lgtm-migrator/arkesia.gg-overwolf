import { useEffect, useState } from "react";
import { getCurrentWindow } from "./windows";

function useWindowState() {
  const [windowState, setWindowState] =
    useState<overwolf.windows.WindowStateEx>(
      () => "normal" as overwolf.windows.WindowStateEx
    );

  useEffect(() => {
    async function handleWindowStateChanged(
      state: overwolf.windows.WindowStateChangedEvent
    ) {
      const currentWindow = await getCurrentWindow();
      if (currentWindow.id !== state.window_id) {
        return;
      }
      setWindowState(state.window_state_ex);
    }

    overwolf.windows.onStateChanged.addListener(handleWindowStateChanged);

    getCurrentWindow().then((currentWindow) => {
      setWindowState(currentWindow.stateEx);
    });
    return () => {
      overwolf.windows.onStateChanged.removeListener(handleWindowStateChanged);
    };
  }, []);

  return windowState;
}

export default useWindowState;
