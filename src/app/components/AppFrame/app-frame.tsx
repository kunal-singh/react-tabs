import { FrameData } from 'src/app/domain/frame';
import AppTaskBar from '../AppTaskBar/app-task-bar';
import AppWindowContent from '../AppWindowContent/app-window-content';
import styles from './app-frame.module.scss';
import { Tabs } from 'src/app/domain/tabs';
import useFrameData from 'src/app/hooks/frame-data.ts';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppFrameProps extends FrameData {}

export function AppFrame(props: AppFrameProps) {
   
  const frameId = props.id;
  const {getData, getTabs} = useFrameData();
  let content = null;
  let tabsData: Tabs = [];
  
  getData(frameId).then((value)=>{
     content = value;
  })

  getTabs(frameId).then((value)=>{
    tabsData = value;
 })
 

  return (
    <div className={styles['container']}>
      <div className={styles['task-bar-wrapper']}>
        <AppTaskBar tabs={tabsData}></AppTaskBar>
      </div>
      <div className={styles['content-wrapper']}>
        <AppWindowContent content={content}></AppWindowContent>
      </div>
    </div>
  );
}

export default AppFrame;
