import styles from './app.module.scss';
import AppWindow from './components/AppWindow/app-window';

export function App() {
  return (
    <div className={styles['container']}>
      <AppWindow></AppWindow>
    </div>
  );
}

export default App;
