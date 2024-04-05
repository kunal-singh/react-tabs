import { FrameContentType } from 'src/app/domain/states';
import styles from './app-window-content.module.scss';
import { Dispatch, SetStateAction } from 'react';

export interface AppWindowContentProps {
  content: FrameContentType,
  setContent: Dispatch<SetStateAction<FrameContentType>>
}

export function AppWindowContent(props: AppWindowContentProps) {
  const {content, setContent} = props;
  
  // use setContent to set state

  return (
    <div className={styles['container']}>
      {content}
    </div>
  );
}

export default AppWindowContent;
