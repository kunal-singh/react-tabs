import { useHierarchy } from 'src/app/services/hierarchy.service.tsx';
import styles from './app-window.module.scss';
import { FrameNode, Orientation } from 'src/app/domain/frame.ts';
import { ReactNode } from 'react';
import AppFrame from '../AppFrame/app-frame';

/* eslint-disable-next-line */
export interface AppWindowProps {}

export function AppWindow(props: AppWindowProps): ReactNode {
    const headNode=useHierarchy();
   return <div className={styles['container']}>
    <RecursiveRenderer node={headNode}></RecursiveRenderer>
         </div>;
}

function RecursiveRenderer(props: {node:FrameNode}): ReactNode{
  const {node} = props;
  return (
    <div
      className={`${styles['flex-container']} ${
        node.data.orientation === Orientation.HORIZONTAL
          ? styles['flex-horizontal']
          : styles['flex-vertical']
      }`}
    >
      {!node.left && !node.right ? (
        <AppFrame key={node.data.id} id={node.data.id} />
      ) : (
        <>
          {node.left && <RecursiveRenderer key={node.left.data.id} node={node.left} />}
          {node.right && <RecursiveRenderer key={node.right.data.id} node={node.right} />}
        </>
      )}
    </div>
  );
 }

export default AppWindow;
