import AppTaskBar from '../AppTaskBar/app-task-bar';
import AppWindowContent from '../AppWindowContent/app-window-content';
import styles from './app-frame.module.scss';

/* eslint-disable-next-line */
export interface AppFrameProps {}

export function AppFrame(props: AppFrameProps) {
  return (
    <div className={styles['container']}>
      <AppTaskBar></AppTaskBar>
      <AppWindowContent></AppWindowContent>
    </div>
  );
}

export default AppFrame;
