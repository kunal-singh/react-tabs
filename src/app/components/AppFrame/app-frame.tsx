import { ChildNodeData, FrameData } from 'src/app/domain/frame';
import AppTaskBar from '../AppTaskBar/app-task-bar';
import AppWindowContent from '../AppWindowContent/app-window-content';
import styles from './app-frame.module.scss';
import useFrameData from 'src/app/hooks/frame-data.ts';
import { Action, ActionType, FrameContentType } from 'src/app/domain/states.ts';
import { Tabs } from 'src/app/domain/tabs';
import { useEffect, useState } from 'react';
import { useHierarchyDispatch } from 'src/app/services/hierarchy.service.tsx';

export interface AppFrameProps extends ChildNodeData {
  initialTabs?: Tabs
  initialContent?: FrameContentType
}

export function AppFrame(props: AppFrameProps) {
   
  const {id, initialContent, initialTabs} = props;
  const {tabs, addTab, removeTab, content, setContent} = useFrameData(id, initialTabs, initialContent);
  const dispatch = useHierarchyDispatch(); 
  const [activeTab, setActiveTab] = useState(0);
  useEffect(()=>{
    if(tabs.length===0){
      dispatch({id,type:ActionType.UNSPLIT} as Action)
    }
   },[dispatch, id, tabs]);
  return (
    <div className={styles['container']}>
      <div className={styles['task-bar-wrapper']}>
        <AppTaskBar tabs={tabs} add={addTab} remove={removeTab} setTab={setActiveTab} activeTab={activeTab} ></AppTaskBar>
      </div>
      <div className={styles['content-wrapper']}>
        <AppWindowContent content={content} setContent={setContent} frameId={id} activeTabIndex={activeTab}></AppWindowContent>
      </div>
    </div>
  );
}

export default AppFrame;
