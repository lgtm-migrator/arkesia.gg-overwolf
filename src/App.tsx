import AppHeader from "./components/AppHeader";
import styles from "./App.module.css";
import ResizeBorders from "./components/ResizeBorders";
import Ads from "./components/Ads";

function App() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <ResizeBorders />
      <iframe className={styles.iframe} src={import.meta.env.VITE_APP_WEB} />
      <div className={styles.loading}>Loading map...</div>
      <Ads />
    </div>
  );
}

export default App;
