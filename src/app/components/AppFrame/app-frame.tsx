import { FrameData } from 'src/app/domain/frame';
import AppTaskBar from '../AppTaskBar/app-task-bar';
import AppWindowContent from '../AppWindowContent/app-window-content';
import styles from './app-frame.module.scss';
import useFrameData from 'src/app/hooks/frame-data.ts';
import { FrameContentType } from 'src/app/domain/states';
import { Tabs } from 'src/app/domain/tabs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppFrameProps extends FrameData {
  initialTabs: Tabs
  initialContent: FrameContentType
}

export function AppFrame(props: AppFrameProps) {
   
  const frameId = props.id;
  const {tabs, content, setTabs, setContent} = useFrameData(frameId);

  return (
    <div className={styles['container']}>
      <div className={styles['task-bar-wrapper']}>
        <AppTaskBar tabs={tabs}></AppTaskBar>
      </div>
      <div className={styles['content-wrapper']}>
        <AppWindowContent content={content}></AppWindowContent>
      </div>
    </div>
  );
}

export default AppFrame;
