import { getGameIsRunning } from "./lib/games";
import { writeLog } from "./lib/logs";
import { waitForOverwolf } from "./lib/overwolf";
import {
  closeMainWindow,
  closeWindow,
  getPreferedWindowName,
  restoreWindow,
  toggleWindow,
  WINDOWS,
} from "./lib/windows";

waitForOverwolf().then(() => {
  initController({
    gameId: +import.meta.env.VITE_APP_LOST_ARK_CLASS_ID,
    hotkey: "show_hide_app",
  });
});

async function initController({
  gameId,
  hotkey,
}: {
  gameId: number;
  hotkey: string;
}) {
  writeLog("Init controller");
  const openApp = async () => {
    const isGameRunning = await getGameIsRunning(gameId);
    if (isGameRunning) {
      const preferedWindowName = await getPreferedWindowName();
      restoreWindow(preferedWindowName);
    } else {
      restoreWindow(WINDOWS.DESKTOP);
    }
  };
  openApp();

  overwolf.extensions.onAppLaunchTriggered.addListener(openApp);

  overwolf.settings.hotkeys.onPressed.addListener(async (event) => {
    if (event.name === hotkey) {
      const preferedWindowName = await getPreferedWindowName();
      toggleWindow(preferedWindowName);
    }
  });

  overwolf.games.onGameInfoUpdated.addListener(async (event) => {
    if (event.runningChanged && event.gameInfo?.classId === gameId) {
      const preferedWindowName = await getPreferedWindowName();
      if (event.gameInfo.isRunning) {
        if (preferedWindowName === WINDOWS.OVERLAY) {
          restoreWindow(WINDOWS.OVERLAY);
          closeWindow(WINDOWS.DESKTOP);
        } else {
          restoreWindow(WINDOWS.DESKTOP);
          closeWindow(WINDOWS.OVERLAY);
        }
      } else {
        closeMainWindow();
      }
    }
  });
}
