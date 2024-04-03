import styles from './app-window-content.module.scss';

/* eslint-disable-next-line */
export interface AppWindowContentProps {}

export function AppWindowContent(props: AppWindowContentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppWindowContent!</h1>
    </div>
  );
}

export default AppWindowContent;
