import { Icon } from "@iconify/react";
import { useRunningGameInfo } from "../lib/games";
import useWindowInfo from "../lib/useWindowInfo";
import {
  closeMainWindow,
  dragMoveWindow,
  maximizeCurrentWindow,
  minimizeCurrentWindow,
  restoreCurrentWindow,
  togglePreferedWindow,
  WINDOWS,
} from "../lib/windows";
import styles from "./AppHeader.module.css";
import iconSrc from "./icon.png";

function AppHeader() {
  const windowInfo = useWindowInfo();
  const runningGameInfo = useRunningGameInfo();

  return (
    <header className={styles.header} onMouseDown={dragMoveWindow}>
      <img src={iconSrc} alt="" className={styles.icon} />
      <h1 className={styles.title}>Arkesia.gg</h1>
      <div className={styles.actions}>
        <button
          className={styles.action}
          onClick={togglePreferedWindow}
          disabled={
            runningGameInfo?.classId !==
            +import.meta.env.VITE_APP_LOST_ARK_CLASS_ID
          }
        >
          <Icon
            icon={
              windowInfo?.name === WINDOWS.DESKTOP
                ? "gis:screen-dub1"
                : "gis:screen-dub2"
            }
          />
        </button>
        <button className={styles.action} onClick={minimizeCurrentWindow}>
          <Icon icon="codicon:chrome-minimize" />
        </button>
        <button
          className={styles.action}
          onClick={
            windowInfo?.stateEx === "maximized"
              ? restoreCurrentWindow
              : maximizeCurrentWindow
          }
        >
          <Icon
            icon={
              windowInfo?.stateEx === "maximized"
                ? "codicon:chrome-restore"
                : "codicon:chrome-maximize"
            }
          />
        </button>
        <button className={styles.exit} onClick={closeMainWindow}>
          <Icon icon="codicon:chrome-close" />
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
