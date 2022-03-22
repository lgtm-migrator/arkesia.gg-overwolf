import { Icon } from "@iconify/react";
import { useRunningGameInfo } from "../lib/games";
import { useHotkeyBinding } from "../lib/hotkeys";
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
  const showHideAppHotkeyBinding = useHotkeyBinding("show_hide_app");

  return (
    <header
      className={styles.header}
      onMouseDown={dragMoveWindow}
      onDoubleClick={
        windowInfo?.stateEx === "maximized"
          ? restoreCurrentWindow
          : maximizeCurrentWindow
      }
    >
      <div className={styles.flex}>
        <img src={iconSrc} alt="" className={styles.icon} />
        <h1 className={styles.title}>Arkesia.gg</h1>
      </div>
      <div className={styles.hotkey}>
        Show/Hide{" "}
        <a
          className={styles.chip}
          href="overwolf://settings/games-overlay?hotkey=show_hide_app&gameId=21864"
          title="Change hotkey"
        >
          {showHideAppHotkeyBinding.toUpperCase()}
        </a>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.action}
          onClick={togglePreferedWindow}
          disabled={runningGameInfo?.classId !== 21864}
          title="Switch between overlay and second screen mode"
        >
          <Icon
            icon={
              windowInfo?.name === WINDOWS.DESKTOP
                ? "gis:screen-dub1"
                : "gis:screen-dub2"
            }
          />
        </button>
        <button
          className={styles.action}
          onClick={minimizeCurrentWindow}
          title="Minimize window"
        >
          <Icon icon="codicon:chrome-minimize" />
        </button>
        <button
          className={styles.action}
          onClick={
            windowInfo?.stateEx === "maximized"
              ? restoreCurrentWindow
              : maximizeCurrentWindow
          }
          title={
            windowInfo?.stateEx === "maximized"
              ? "Restore window"
              : "Maximize window"
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
        <button
          className={styles.exit}
          onClick={closeMainWindow}
          title="Close app"
        >
          <Icon icon="codicon:chrome-close" />
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
