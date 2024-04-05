import { useHierarchy } from 'src/app/services/hierarchy.service.tsx';
import styles from './app-window.module.scss';
import { ChildNodeData, FrameData, FrameNode, InternalNodeData, Orientation } from 'src/app/domain/frame.ts';
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

   function isChildNode(data:FrameData): data is ChildNodeData{
    return Object.prototype.hasOwnProperty.call(data, "id");
   }

   function isInternalNode(data:FrameData): data is InternalNodeData{
    return Object.prototype.hasOwnProperty.call(data, "orientation");
   }

   function renderChildNode(data:ChildNodeData): ReactNode{
       return <AppFrame key={data.id} id={data.id} />
   }

   function renderInternalNode(node:FrameNode): ReactNode{
       return <>
       {node.left && <RecursiveRenderer  node={node.left} />}
       {node.right && <RecursiveRenderer node={node.right} />}
     </>
   }

   function renderClasses(node:FrameNode): string {
    let classes = `${styles['flex-container']}`;
       if(isInternalNode(node.data)){
        classes = `${classes} ${styles[node.data.orientation === Orientation.VERTICAL ? 'flex-vertical' : 'flex-horizontal']}`
       }
     return classes;
    }     
   

  return (
    <div
      className={renderClasses(node)}
    >
      {isChildNode(node.data) && (!node.left && !node.right) && renderChildNode(node.data)}
      {isInternalNode(node.data) && renderInternalNode(node)}  
    </div>
  );
 }

export default AppWindow;
