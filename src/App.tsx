import AppHeader from "./components/AppHeader";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <iframe className={styles.iframe} src="http://172.22.209.248:3000/" />
    </div>
  );
}

export default App;
