import { Icon } from "@iconify/react";
import styles from "./AppHeader.module.css";
import iconSrc from "./icon.png";

function AppHeader() {
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
        <button className={styles.action}>
          <Icon
            icon="codicon:chrome-minimize"
            // onClick={() => overwolf.windows.getMainWindow().close()}
          />
        </button>
        <button className={styles.action}>
          <Icon
            icon="codicon:chrome-maximize"
            // icon="codicon:chrome-restore"
          />
        </button>
        <button
          className={styles.exit}
          onClick={() => overwolf.windows.getMainWindow().close()}
        >
          <Icon icon="codicon:chrome-close" />
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
