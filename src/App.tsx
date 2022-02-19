import AppHeader from "./components/AppHeader";
import styles from "./App.module.css";
import ResizeBorders from "./components/ResizeBorders";

function App() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <ResizeBorders />
      <iframe className={styles.iframe} src={import.meta.env.VITE_APP_WEB} />
    </div>
  );
}

export default App;
