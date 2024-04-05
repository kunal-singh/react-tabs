import styles from './app-window-content.module.scss';

export interface AppWindowContentProps {
  content: string | number | null | undefined
}

export function AppWindowContent(props: AppWindowContentProps) {
  const {content} = props;
  return (
    <div className={styles['container']}>
      {content}
    </div>
  );
}

export default AppWindowContent;
