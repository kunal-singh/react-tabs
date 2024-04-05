import AppTaskBar from '../AppTaskBar/app-task-bar';
import AppWindowContent from '../AppWindowContent/app-window-content';
import styles from './app-frame.module.scss';

/* eslint-disable-next-line */
export interface AppFrameProps {}

export function AppFrame(props: AppFrameProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['task-bar-wrapper']}>
        <AppTaskBar></AppTaskBar>
      </div>
      <div className={styles['content-wrapper']}>
        <AppWindowContent></AppWindowContent>
      </div>
    </div>
  );
}

export default AppFrame;
