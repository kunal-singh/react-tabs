import AppFrame from '../AppFrame/app-frame';
import styles from './app-window.module.scss';

/* eslint-disable-next-line */
export interface AppWindowProps {}

export function AppWindow(props: AppWindowProps) {
  return (
    <div className={styles['container']}>
      <AppFrame></AppFrame>
    </div>
  );
}

export default AppWindow;
