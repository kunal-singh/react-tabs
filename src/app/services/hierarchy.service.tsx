import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { FrameNode } from '../domain/frame';
import { Action } from '../domain/states';


const HierarchyContext = createContext<FrameNode | null>(null);
const HierarchyDispatchContext = createContext<Dispatch<Action> | null>(null);
const initialState: FrameNode = {
  data:{id:1},
  left: null,
  right:null
};

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

function nodeReducer(node: FrameNode, action: Action): FrameNode{
  return initialState;
}