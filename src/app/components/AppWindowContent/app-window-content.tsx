import { FrameContentType } from 'src/app/domain/states';
import styles from './app-window-content.module.scss';

export interface AppWindowContentProps {
  content: FrameContentType
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
