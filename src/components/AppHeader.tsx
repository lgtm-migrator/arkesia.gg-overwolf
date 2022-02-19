import { Icon } from "@iconify/react";
import useWindowState from "../lib/useWindowState";
import {
  closeMainWindow,
  maximizeCurrentWindow,
  minimizeCurrentWindow,
  restoreCurrentWindow,
} from "../lib/windows";
import styles from "./AppHeader.module.css";
import iconSrc from "./icon.png";

function AppHeader() {
  const windowState = useWindowState();
  return (
    <header
      className={styles.header}
      onMouseDown={() =>
        overwolf.windows.getCurrentWindow((result) =>
          overwolf.windows.dragMove(result.window.id)
        )
      }
    >
      <img src={iconSrc} alt="" className={styles.icon} />
      <h1 className={styles.title}>Arkesia.gg</h1>
      <div className={styles.actions}>
        <button className={styles.action} onClick={minimizeCurrentWindow}>
          <Icon icon="codicon:chrome-minimize" />
        </button>
        <button
          className={styles.action}
          onClick={
            windowState === "maximized"
              ? restoreCurrentWindow
              : maximizeCurrentWindow
          }
        >
          <Icon
            icon={
              windowState === "maximized"
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
