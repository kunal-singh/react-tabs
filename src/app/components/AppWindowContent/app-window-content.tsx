import { Action, ActionType, FrameContentType } from 'src/app/domain/states.ts';
import styles from './app-window-content.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { useHierarchyDispatch } from 'src/app/services/hierarchy.service.tsx';


export interface AppWindowContentProps {
  content: FrameContentType
  setContent: Dispatch<SetStateAction<FrameContentType>>
  frameId:number,
  activeTabIndex:number
}

export function AppWindowContent(props: AppWindowContentProps) {
  const {content, setContent, frameId, activeTabIndex} = props; // use setContent to set state
  const dispatch = useHierarchyDispatch();

  function dispatchEvent(type:ActionType){
    dispatch({type,id:frameId} as Action);
  }
  

  return (
    <div className={styles['container']}>
      <div className={styles['actions-container']}>
      <button type="button"  onClick={(e) => dispatchEvent(ActionType.SPLITDOWN)}>Split Down</button>
      <button type="button"  onClick={(e) => dispatchEvent(ActionType.SPLITUP)}>Split Up</button>
      <button type="button"  onClick={(e) => dispatchEvent(ActionType.SPLITLEFT)}>Split Left</button>
      <button type="button"  onClick={(e) => dispatchEvent(ActionType.SPLITRIGHT)}>Split Right</button>
      <button type="button"  onClick={(e) => dispatchEvent(ActionType.UNSPLIT)}>Close</button>    
      </div>
      {content+`. Active Tab is `+activeTabIndex}
    </div>
  );
}

export default AppWindowContent;
