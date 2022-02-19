import AppHeader from "./components/AppHeader";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <iframe className={styles.iframe} src={import.meta.env.VITE_APP_WEB} />
    </div>
  );
}

export default App;
