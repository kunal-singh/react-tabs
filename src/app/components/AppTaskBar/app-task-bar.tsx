import styles from './app-task-bar.module.scss';

/* eslint-disable-next-line */
export interface AppTaskBarProps {}

export function AppTaskBar(props: AppTaskBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppTaskBar!</h1>
    </div>
  );
}

export default AppTaskBar;
