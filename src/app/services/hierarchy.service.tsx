import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';
import { FrameNode, Orientation } from '../domain/frame';
import { Action, ActionType } from '../domain/states';

const initialState: FrameNode = {
  data: { id: 1, orientation: Orientation.VERTICAL },
  left: {
    data: { id: 2, orientation: Orientation.HORIZONTAL },
    left: { data: { id: 4 }, left: null, right: null },
    right: { data: { id: 5 }, left: null, right: null },
  },
  right: {
    data: { id: 3, orientation: Orientation.VERTICAL },
    left: { data: { id: 6 }, left: null, right: null },
    right: { data: { id: 7 }, left: null, right: null },
  },
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

function addNodes(
  node: FrameNode,
  orientation = Orientation.VERTICAL,
  vector = true
): FrameNode {
  return node;
}

function removeNode(node: FrameNode): FrameNode {
  return node;
}

function nodeReducer(node: FrameNode, action: Action): FrameNode {
  switch (action.type) {
    case ActionType.SPLITDOWN:
      return addNodes(node, Orientation.VERTICAL, false);
    case ActionType.SPLITUP:
      return addNodes(node);
    case ActionType.SPLITLEFT:
      return addNodes(node, Orientation.HORIZONTAL);
    case ActionType.SPLITRIGHT:
      return addNodes(node, Orientation.HORIZONTAL, false);
    case ActionType.UNSPLIT:
      return removeNode(node);
    default:
      return node;
  }
}
