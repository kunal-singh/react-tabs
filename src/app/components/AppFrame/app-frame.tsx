import { ChildNodeData, FrameData } from 'src/app/domain/frame';
import AppTaskBar from '../AppTaskBar/app-task-bar';
import AppWindowContent from '../AppWindowContent/app-window-content';
import styles from './app-frame.module.scss';
import useFrameData from 'src/app/hooks/frame-data.ts';
import { FrameContentType } from 'src/app/domain/states';
import { Tabs } from 'src/app/domain/tabs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppFrameProps extends ChildNodeData {
  initialTabs?: Tabs
  initialContent?: FrameContentType
}

export function AppFrame(props: AppFrameProps) {
   
  const {id, initialContent, initialTabs} = props;
  const {tabs, addTab, removeTab, content, setContent} = useFrameData(id, initialTabs, initialContent);
   
  return (
    <div className={styles['container']}>
      <div className={styles['task-bar-wrapper']}>
        <AppTaskBar tabs={tabs} add={addTab} remove={removeTab}></AppTaskBar>
      </div>
      <div className={styles['content-wrapper']}>
        <AppWindowContent content={content} setContent={setContent}></AppWindowContent>
      </div>
    </div>
  );
}

export default AppFrame;
