import { Action, ActionType, FrameContentType } from 'src/app/domain/states.ts';
import styles from './app-window-content.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { useHierarchyDispatch } from 'src/app/services/hierarchy.service.tsx';
import { FrameMetaData } from 'src/app/domain/frame';


export interface AppWindowContentProps {
  content: FrameContentType
  setContent: Dispatch<SetStateAction<FrameContentType>>
  frameId:number,
  activeTabIndex:number,
  dispatch: (type:ActionType) => void
}

export function AppWindowContent(props: AppWindowContentProps) {
  const {content,activeTabIndex, dispatch} = props; // use setContent to set state
  

  
  

  return (
    <div className={styles['container']}>
      <div className={styles['actions-container']}>
      <button type="button"  onClick={(e) => dispatch(ActionType.SPLITDOWN)}>Split Down</button>
      <button type="button"  onClick={(e) => dispatch(ActionType.SPLITUP)}>Split Up</button>
      <button type="button"  onClick={(e) => dispatch(ActionType.SPLITLEFT)}>Split Left</button>
      <button type="button"  onClick={(e) => dispatch(ActionType.SPLITRIGHT)}>Split Right</button>
      <button type="button"  onClick={(e) => dispatch(ActionType.UNSPLIT)}>Close</button>    
      </div>
      {content+` Active Tab is `+activeTabIndex}
    </div>
  );
}

export default AppWindowContent;
