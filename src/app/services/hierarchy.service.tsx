import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { FrameNode } from '../domain/frame';
import { Action } from '../domain/states';

const initialState: FrameNode = {
  data:{id:1},
  left: null,
  right:null
};
const HierarchyContext = createContext<FrameNode>(initialState);
const HierarchyDispatchContext = createContext<Dispatch<Action> | null>(null);


export function HierarchyProvider({children}: { children: ReactNode }){

    const [node, dispatch] = useReducer(nodeReducer, initialState);

    return (
        <HierarchyContext.Provider value={node}>
        <HierarchyDispatchContext.Provider value={dispatch}>
           {children}
        </HierarchyDispatchContext.Provider>   
        </HierarchyContext.Provider>
    )
}

export function useHierarchy(){
  return useContext(HierarchyContext);
}

export function useHierarchyDispatch(){
  return useContext(HierarchyDispatchContext);
}

function nodeReducer(node: FrameNode, action: Action): FrameNode{
  return initialState;
}