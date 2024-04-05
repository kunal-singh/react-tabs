import styles from './app.module.scss';
import AppWindow from './components/AppWindow/app-window';
import { HierarchyProvider } from './services/hierarchy.service';

export function App() {
  return (
    <HierarchyProvider>
    <div className={styles['container']}>
      <AppWindow></AppWindow>
    </div>
    </HierarchyProvider>
  );
}

export default App;
