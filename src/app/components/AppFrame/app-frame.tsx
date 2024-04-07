import { ChildNodeData, FrameMetaData } from 'src/app/domain/frame';
import AppTaskBar from '../AppTaskBar/app-task-bar';
import AppWindowContent from '../AppWindowContent/app-window-content';
import styles from './app-frame.module.scss';
import useFrameData from 'src/app/hooks/frame-data.ts';
import { Action, ActionType, FrameContentType } from 'src/app/domain/states.ts';
import { Tabs } from 'src/app/domain/tabs';
import { useState } from 'react';
import { useHierarchyDispatch } from 'src/app/services/hierarchy.service.tsx';

export interface AppFrameProps extends ChildNodeData {
  initialTabs?: Tabs
}

export function AppFrame(props: AppFrameProps) {
   
  const {id, initialTabs} = props;
  const {tabs, addTab, removeTab, content, setContent} = useFrameData(id, initialTabs);
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useHierarchyDispatch();
  // edge case handling for 0 tabs in a frame
  // useEffect(()=>{
  //   if(tabs.length===0){
  //     dispatch({id,type:ActionType.UNSPLIT} as Action)
  //   }
  //  },[dispatch, id, tabs]);

  function dispatchEvent(type:ActionType){
    const metaData = {} as FrameMetaData; // objects like tab data etc. can be passed here.
    if(type !== ActionType.UNSPLIT){
      metaData.tabs = [...tabs];
    }
    dispatch({type,id,metaData} as Action);
  }
  return (
    <div className={styles['container']}>
      <div className={styles['task-bar-wrapper']}>
        <AppTaskBar tabs={tabs} add={addTab} remove={removeTab} setTab={setActiveTab} activeTab={activeTab} ></AppTaskBar>
      </div>
      <div className={styles['content-wrapper']}>
        <AppWindowContent content={content} setContent={setContent} frameId={id} activeTabIndex={activeTab} dispatch={dispatchEvent}></AppWindowContent>
      </div>
    </div>
  );
}

export default AppFrame;
