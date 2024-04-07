import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';
import { ChildNodeData, FrameData, FrameNode, InternalNodeData, Orientation } from '../domain/frame';
import { Action, ActionType } from '../domain/states';

const initialState: FrameNode = {
  data: { id: 1} as ChildNodeData,
  left: null,
  right: null
};
const HierarchyContext = createContext<FrameNode>(initialState);
const HierarchyDispatchContext = createContext<Dispatch<Action> | null>(null);

export function HierarchyProvider({ children }: { children: ReactNode }) {
  const [node, dispatch] = useReducer(nodeReducer, initialState);

  return (
    <HierarchyContext.Provider value={node}>
      <HierarchyDispatchContext.Provider value={dispatch}>
        {children}
      </HierarchyDispatchContext.Provider>
    </HierarchyContext.Provider>
  );
}

export function useHierarchy() {
  const node = useContext(HierarchyContext);
  if (!node) {
    throw new Error('cannot create hierarchy');
  }
  return node;
}

export function useHierarchyDispatch() {
  const dispatch = useContext(HierarchyDispatchContext);
  if (!dispatch) {
    throw new Error('cannot create dispatch');
  }
  return dispatch;
}

function Node(id:number): FrameNode{
  return {
    data:{id} as ChildNodeData,
    left:null,
    right:null
  }
}

function isChildNode(data: FrameData): data is ChildNodeData {
  return Object.prototype.hasOwnProperty.call(data, 'id');
}

function isInternalNode(data: FrameData): data is InternalNodeData {
  return Object.prototype.hasOwnProperty.call(data, 'orientation');
}


function search(head:FrameNode,id:number): FrameNode | null{
    //postorder traversal
    
    if(!head.left && !head.right){
      return isChildNode(head.data) && head.data.id === id ? head : null; 
    }
    const searchLeft =head.left && search(head.left, id);
    const searchright = head.right && search(head.right, id);
    return searchLeft || searchright;

}

function remove(node: FrameNode, id:number): FrameNode{
   return node;
}

function addNodes(
  headNode: FrameNode,
  splitFrom: number,
  orientation = Orientation.VERTICAL,
  vector = true
) {
  
  const splitFromNode = search(headNode, splitFrom);
  //console.log(headNode, splitFrom, splitFromNode);
  if(splitFromNode){
  const randomId = Date.now();
  splitFromNode.left = Node(randomId);
  splitFromNode.right = Node(randomId + 1);
  splitFromNode.data = {orientation} as InternalNodeData;
  }

}

function removeNode(headNode: FrameNode, unsplitFrom:number): FrameNode {
  return headNode;
}

function nodeReducer(headNode: FrameNode, action: Action): FrameNode {
  const newHeadNode = JSON.parse(JSON.stringify(headNode)) as FrameNode;
  console.log(headNode);
  switch (action.type) {
    case ActionType.SPLITDOWN:
      addNodes(newHeadNode, action.id,Orientation.VERTICAL, false);
      break;
    case ActionType.SPLITUP:
      addNodes(newHeadNode, action.id);
      break;
    case ActionType.SPLITLEFT:
      addNodes(newHeadNode, action.id, Orientation.HORIZONTAL);
      break;
    case ActionType.SPLITRIGHT:
      addNodes(newHeadNode, action.id, Orientation.HORIZONTAL, false);
      break;
    case ActionType.UNSPLIT:
      removeNode(newHeadNode, action.id);
      break;
    default:
      break;
  }
  return newHeadNode;
}
