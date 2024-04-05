import { useHierarchy } from 'src/app/services/hierarchy.service.tsx';
import AppFrame from '../AppFrame/app-frame';
import styles from './app-window.module.scss';
import { FrameNode } from 'src/app/domain/frame';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface AppWindowProps {}

export function AppWindow(props: AppWindowProps) {
   const headNode = useHierarchy();

   function render(node:FrameNode): ReactNode{
    return (
      <div className={styles['container']}>
        <AppFrame id={node.data.id}></AppFrame>
      </div>
    );
   }

   return render(headNode);
  
}

export default AppWindow;
